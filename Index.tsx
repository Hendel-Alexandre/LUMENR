import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Users, 
  Calendar, 
  Zap, 
  Shield, 
  BarChart,
  Brain,
  Globe,
  FileText,
  MessageSquare,
  Target,
  Activity,
  ChevronDown,
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import datatrackLogo from '@/assets/datatrack-logo.png';
import heroVideo from '@/assets/hero-video.mp4';
import Orb from '@/components/3D/Orb';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AnimatedCounter } from '@/components/ui/animated-counter';

const Index = () => {
  const hero = useScrollAnimation();
  const stats = useScrollAnimation();
  const problem = useScrollAnimation();
  const solution = useScrollAnimation();
  const featuresHighlight = useScrollAnimation();
  const pricing = useScrollAnimation();
  const finalCta = useScrollAnimation();

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="border-b border-white/10 glass-effect sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={datatrackLogo} 
              alt="LumenR" 
              className="h-12 w-auto invert"
            />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#solutions" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">Login</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 md:pb-24">
        <div className="absolute inset-0 z-0 top-24">
          <Orb 
            hue={0}
            hoverIntensity={0.2}
            rotateOnHover={true}
            forceHoverState={false}
          />
        </div>
        
        <div 
          ref={hero.ref}
          className={`container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24 relative z-10 transition-all duration-1000 ${
            hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <Badge variant="secondary" className="mb-4 animate-fade-in bg-white/10 text-white border-white/20">
              <Zap className="h-3 w-3 mr-1" />
              Now with AI-Powered Insights
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Run Your Service Business
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent block mt-2">Smarter with LumenR</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              All-in-one platform to manage projects, teams, inventory, and finances — powered by AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/signup">
                <Button size="lg" className="gap-2 text-base px-8 rounded-xl shadow-lg hover:shadow-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all">
                  Start Free Trial <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-400">
              7-day free trial • No credit card required • Cancel anytime
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20 relative max-w-4xl mx-auto">
            <Card className="glass-effect border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl hover:shadow-glow transition-all duration-500 rounded-3xl p-3">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto rounded-2xl max-h-[500px] object-cover"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
            </Card>
          </div>

          {/* Scroll Down Indicator */}
          <div className="flex justify-center mt-12 animate-bounce">
            <ChevronDown className="h-8 w-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={stats.ref}
        className={`border-y border-white/10 bg-white/5 py-16 transition-all duration-1000 delay-200 ${
          stats.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-sm text-gray-400 font-medium">Active Users</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                <AnimatedCounter end={2} suffix="K+" />
              </div>
              <div className="text-sm text-gray-400 font-medium">Hours Tracked</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                <AnimatedCounter end={99} suffix=".9%" />
              </div>
              <div className="text-sm text-gray-400 font-medium">Uptime</div>
            </div>
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center text-4xl md:text-5xl font-bold text-blue-400">
                <Globe className="h-10 w-10 mr-2" />
              </div>
              <div className="text-sm text-gray-400 font-medium">Worldwide Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section 
        ref={problem.ref}
        className="container mx-auto px-4 py-20 md:py-32"
      >
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
          problem.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Badge variant="outline" className="mb-4 border-white/20 text-gray-300">The Problem</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Time Management Still Fails
          </h2>
          <p className="text-xl text-gray-400">
            Traditional tools create more problems than they solve
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: X, title: 'Scattered Tools', description: 'Switching between apps creates confusion and lost time.', color: 'orange' },
            { icon: BarChart, title: 'No Visibility', description: 'Without insights, it\'s hard to optimize or manage workflows.', color: 'purple' },
            { icon: Users, title: 'Poor Collaboration', description: 'Silos slow down progress and duplicate effort.', color: 'blue' }
          ].map((item, index) => (
            <Card 
              key={index}
              className={`p-8 space-y-4 border-2 border-${item.color}-500/20 bg-${item.color}-500/5 glass-effect hover:shadow-lg transition-all duration-500 ${
                problem.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`h-14 w-14 rounded-xl bg-${item.color}-500/10 flex items-center justify-center`}>
                <item.icon className={`h-7 w-7 text-${item.color}-500`} />
              </div>
              <h3 className="font-bold text-xl text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Solution Section */}
      <section 
        ref={solution.ref}
        id="solutions" 
        className="bg-white/5 py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-1000 ${
            solution.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Badge variant="outline" className="mb-4 border-white/20 text-gray-300">The Solution</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              A Smarter Way to Work
            </h2>
            <p className="text-lg text-gray-400">
              Everything you need in one intelligent platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Clock, title: 'Time Tracking', description: 'Automatic time capture with intelligent categorization and insights.', color: 'blue' },
              { icon: Calendar, title: 'Smart Scheduling', description: 'AI-powered calendar that adapts to your workflow patterns.', color: 'purple' },
              { icon: MessageSquare, title: 'Team Collaboration', description: 'Real-time messaging, file sharing, and project coordination.', color: 'green' },
              { icon: FileText, title: 'Detailed Reports', description: 'Comprehensive analytics with customizable dashboards and exports.', color: 'orange' },
              { icon: Brain, title: 'Lumen AI Assistant', description: 'Intelligent business insights and automation for your operations.', color: 'cyan' },
              { icon: Shield, title: 'Secure & Private', description: 'Enterprise-grade security with full data encryption and compliance.', color: 'emerald' }
            ].map((feature, index) => (
              <Card 
                key={index}
                className={`glass-effect border-0 p-6 space-y-4 hover:shadow-glow transition-all duration-500 ${
                  solution.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={`h-12 w-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}-500`} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section 
        ref={featuresHighlight.ref}
        id="features" 
        className="container mx-auto px-4 py-16 md:py-24"
      >
        <div className={`text-center mb-12 transition-all duration-1000 ${
          featuresHighlight.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Badge variant="outline" className="mb-4 border-white/20 text-gray-300">Powerful Features</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Everything You Need to Stay Productive
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            { 
              icon: Target, 
              title: 'Project Management', 
              description: 'Track projects from quote to completion. LumenR keeps your team aligned and clients informed every step of the way.',
              gradient: 'from-blue-500/20 to-purple-500/20'
            },
            { 
              icon: Users, 
              title: 'Real-time Team Collaboration', 
              description: 'Chat, share files, assign tasks, and coordinate projects seamlessly. Keep everyone aligned with instant updates and notifications.',
              gradient: 'from-purple-500/20 to-pink-500/20'
            },
            { 
              icon: Brain, 
              title: 'AI-Powered Insights', 
              description: 'Lumen AI analyzes your business patterns, identifies opportunities, and suggests optimizations to help you grow smarter.',
              gradient: 'from-green-500/20 to-teal-500/20'
            },
            { 
              icon: BarChart, 
              title: 'Custom Reports & Dashboards', 
              description: 'Build beautiful reports with drag-and-drop simplicity. Track KPIs, generate client invoices, and export data in any format.',
              gradient: 'from-orange-500/20 to-yellow-500/20'
            }
          ].map((feature, index) => (
            <Card 
              key={index}
              className={`glass-effect border-0 p-8 space-y-4 hover:shadow-glow transition-all duration-500 ${
                featuresHighlight.isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center backdrop-blur-sm`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-2xl text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        ref={pricing.ref}
        id="pricing" 
        className="container mx-auto px-4 py-16 md:py-24"
      >
        <div className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-1000 ${
          pricing.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Badge variant="outline" className="mb-4 border-white/20 text-gray-300">Pricing</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-400">
            Choose the plan that's right for your team
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Free Plan */}
          <Card 
            className={`glass-effect p-8 space-y-6 border-white/10 transition-all duration-700 ${
              pricing.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">Free</h3>
              <p className="text-gray-400">Perfect for individuals</p>
            </div>
            <div>
              <span className="text-5xl font-bold text-white">$0</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-3">
              {['Up to 3 projects', 'Basic time tracking', 'Task management', '1 team member', 'Basic reports'].map((feature, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500 shrink-0" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/signup" className="block">
              <Button variant="outline" className="w-full rounded-xl border-white/20 hover:bg-white/10 text-white">Start Free Trial</Button>
            </Link>
          </Card>

          {/* Pro Plan */}
          <Card 
            className={`glass-effect p-8 space-y-6 border-2 border-purple-500/50 relative shadow-xl scale-105 transition-all duration-700 delay-100 ${
              pricing.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600">Most Popular</Badge>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
              <p className="text-gray-400">For growing teams</p>
            </div>
            <div>
              <span className="text-5xl font-bold text-white">$20</span>
              <span className="text-gray-400">/month per user</span>
            </div>
            <ul className="space-y-3">
              {['Unlimited projects', 'Advanced time tracking', 'AI-powered insights', 'Up to 10 team members', 'Priority support'].map((feature, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-500 shrink-0" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/signup" className="block">
              <Button className="w-full rounded-xl shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">Start Free Trial</Button>
            </Link>
          </Card>

          {/* Enterprise Plan */}
          <Card 
            className={`glass-effect p-8 space-y-6 border-white/10 transition-all duration-700 delay-200 ${
              pricing.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">Enterprise</h3>
              <p className="text-gray-400">For large organizations</p>
            </div>
            <div>
              <span className="text-5xl font-bold text-white">Custom</span>
            </div>
            <ul className="space-y-3">
              {['Unlimited everything', 'Dedicated support', 'Custom integrations', 'Advanced security', 'SLA guarantee'].map((feature, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/enterprise" className="block">
              <Button variant="outline" className="w-full rounded-xl border-white/20 hover:bg-white/10 text-white">Contact Sales</Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        ref={finalCta.ref}
        className="container mx-auto px-4 py-20 md:py-32"
      >
        <Card className={`glass-effect border-white/10 p-12 md:p-16 text-center transition-all duration-1000 ${
          finalCta.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join service businesses already using LumenR to streamline operations
          </p>
          <Link to="/signup">
            <Button size="lg" className="gap-2 text-lg px-8 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Start Your Free Trial <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • 7-day free trial
          </p>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-white">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
            © 2024 LumenR. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
