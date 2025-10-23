import { 
  BarChart3, 
  CheckSquare, 
  Clock, 
  FileText, 
  FolderOpen, 
  Home, 
  Settings, 
  Users,
  Activity,
  MessageCircle,
  Calendar,
  BookOpen,
  Timer,
  Upload,
  ScanText,
  Sparkles,
  Shield
} from 'lucide-react'
import datatrackLogo from '@/assets/datatrack-logo.png'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMode } from '@/contexts/ModeContext'
import { useUserRole } from '@/hooks/useUserRole'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'

// Student Mode Navigation
const studentNavigation = [
  {
    label: 'overview',
    items: [
      { title: 'dashboard', url: '/dashboard', icon: Home },
    ]
  },
  {
    label: 'AI Assistant',
    items: [
      { title: 'Lumen AI', url: '/lumen', icon: Sparkles },
    ]
  },
  {
    label: 'study',
    items: [
      { title: 'Class Schedule', url: '/student-classes', icon: BookOpen },
      { title: 'Assignments & Exams', url: '/student-assignments', icon: CheckSquare },
      { title: 'calendar', url: '/calendar', icon: Calendar },
      { title: 'Files', url: '/student-files', icon: Upload },
      { title: 'notes', url: '/notes', icon: FileText },
    ]
  },
  {
    label: 'collaboration',
    items: [
      { title: 'messages', url: '/messages', icon: MessageCircle },
    ]
  },
  {
    label: 'system',
    items: [
      { title: 'settings', url: '/settings', icon: Settings },
    ]
  }
];

// Work Mode Navigation
const workNavigation = [
  {
    label: 'overview',
    items: [
      { title: 'dashboard', url: '/dashboard', icon: Home },
    ]
  },
  {
    label: 'AI Assistant',
    items: [
      { title: 'Lumen AI', url: '/lumen', icon: Sparkles },
    ]
  },
  {
    label: 'work',
    items: [
      { title: 'timesheets', url: '/timesheets', icon: Clock },
      { title: 'tasks', url: '/tasks', icon: CheckSquare },
      { title: 'projects', url: '/projects', icon: FolderOpen },
      { title: 'calendar', url: '/calendar', icon: Calendar },
      { title: 'Files', url: '/work-files', icon: Upload },
      { title: 'notes', url: '/notes', icon: FileText },
      { title: 'OCR Call Report', url: '/ocr-call-report', icon: ScanText },
    ]
  },
  {
    label: 'insights',
    items: [
      { title: 'reports', url: '/reports', icon: BarChart3 },
      { title: 'history', url: '/history', icon: Activity },
    ]
  },
  {
    label: 'team',
    items: [
      { title: 'team', url: '/team', icon: Users },
      { title: 'messages', url: '/messages', icon: MessageCircle },
      { title: 'Role Management', url: '/role-management', icon: Shield, adminOnly: true },
    ]
  },
  {
    label: 'system',
    items: [
      { title: 'settings', url: '/settings', icon: Settings },
    ]
  }
];

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const { t } = useTranslation()
  const { mode } = useMode()
  const { isAdmin } = useUserRole()
  
  const navigationGroups = mode === 'student' ? studentNavigation : workNavigation;
  
  const currentPath = location.pathname
  const isActive = (path: string) => currentPath === path
  const isCollapsed = state === "collapsed"
  
  const getNavClasses = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground font-semibold shadow-sm" 
      : "sidebar-item text-muted-foreground hover:text-foreground"

  return (
    <Sidebar
      className="border-r border-border/50 glass-effect"
      collapsible="icon"
    >
      <SidebarContent>
        {/* Logo Section */}
        <div className="p-6 border-b border-border/50">
          <img 
            src={datatrackLogo} 
            alt="LumenR" 
            className={`transition-all duration-300 mx-auto dark:invert ${
              isCollapsed ? 'h-20 w-auto' : 'h-32 w-auto'
            }`}
          />
        </div>
        
        {/* Navigation Groups */}
        <div className="flex-1 py-4">
          {navigationGroups.map((group) => (
            <SidebarGroup key={group.label} className="mb-4">
              {!isCollapsed && (
                <SidebarGroupLabel className="px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {t(group.label)}
                </SidebarGroupLabel>
              )}
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1 px-3">
                  {group.items.map((item: any) => {
                    if (item.adminOnly && !isAdmin()) return null;
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild className="h-11 rounded-lg">
                          <NavLink 
                            to={item.url} 
                            end 
                            className={({ isActive }) => 
                              `flex items-center gap-4 px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${getNavClasses({ isActive })}`
                            }
                          >
                            <item.icon className="h-5 w-5 flex-shrink-0" />
                            {!isCollapsed && (
                              <span className="truncate">
                                {t(item.title)}
                              </span>
                            )}
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </div>
      </SidebarContent>
    </Sidebar>
  )
}