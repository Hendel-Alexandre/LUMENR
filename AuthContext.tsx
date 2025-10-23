import { createContext, useContext, useEffect, useState } from 'react'
import type { User } from '@supabase/supabase-js'
import { supabase } from '@/integrations/supabase/client'

interface AuthContextType {
  user: User | null
  userProfile: any | null
  loading: boolean
  signIn: (email: string, password: string, captchaToken?: string) => Promise<{ error?: any }>
  signUp: (email: string, password: string, firstName: string, lastName: string, department: string, captchaToken?: string) => Promise<{ error?: any }>
  signOut: () => Promise<void>
  updateUserStatus: (status: 'Available' | 'Away' | 'Busy') => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [userProfile, setUserProfile] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Set up auth state listener FIRST to avoid missing events and deadlocks
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        // Defer status update and profile fetch to avoid blocking the auth callback
        setTimeout(() => {
          const uid = session.user!.id
          if (event === 'SIGNED_IN') {
            supabase
              .from('users')
              .update({ status: 'Available' })
              .eq('id', uid)
              .then(() => {})
          }
          fetchUserProfile(uid)
        }, 0)
      } else {
        // Defer status update on sign out; never block the callback
        if (event === 'SIGNED_OUT' && user?.id) {
          const prevId = user.id
          setTimeout(() => {
            supabase
              .from('users')
              .update({ status: 'Away' })
              .eq('id', prevId)
          }, 0)
        }
        setUserProfile(null)
        setLoading(false)
      }
    })

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        // Defer status update and profile fetch for existing session
        setTimeout(() => {
          const uid = session.user!.id
          supabase
            .from('users')
            .update({ status: 'Available' })
            .eq('id', uid)
            .then(() => {})
          fetchUserProfile(uid)
        }, 0)
      } else {
        setLoading(false)
      }
    })

    // Set status to Away when page is closed/refreshed
    const handleBeforeUnload = () => {
      if (user?.id) {
        // Fire-and-forget; cannot await during unload
        setTimeout(() => {
          supabase
            .from('users')
            .update({ status: 'Away' })
            .eq('id', user.id as string)
        }, 0)
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      subscription.unsubscribe()
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .maybeSingle()

      if (error) {
        console.error('Error fetching user profile:', error)
        setUserProfile(null)
      } else {
        setUserProfile(data)
      }
    } catch (error) {
      console.error('Error fetching user profile:', error)
      setUserProfile(null)
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email: string, password: string, captchaToken?: string) => {
    const { error } = await supabase.auth.signInWithPassword({ 
      email, 
      password,
      options: {
        captchaToken
      }
    })
    return { error }
  }

  const signUp = async (email: string, password: string, firstName: string, lastName: string, department: string, captchaToken?: string) => {
    const redirectUrl = `${window.location.origin}/`
    
    const { data, error } = await supabase.auth.signUp({ 
      email, 
      password,
      options: {
        emailRedirectTo: redirectUrl,
        captchaToken,
        data: {
          first_name: firstName,
          last_name: lastName,
          department
        }
      }
    })

    if (!error && data.user) {
      const { error: profileError } = await supabase
        .from('users')
        .insert({
          id: data.user.id,
          first_name: firstName,
          last_name: lastName,
          email,
          department: department as any,
          status: 'Available'
        })

      if (profileError) {
        console.error('Error creating user profile:', profileError)
      }
    }

    return { error }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  const updateUserStatus = async (status: 'Available' | 'Away' | 'Busy') => {
    if (!user) return

    const { error } = await supabase
      .from('users')
      .update({ status })
      .eq('id', user.id)

    if (!error) {
      setUserProfile((prev: any) => ({ ...prev, status }))
    }
  }

  const value = {
    user,
    userProfile,
    loading,
    signIn,
    signUp,
    signOut,
    updateUserStatus,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
