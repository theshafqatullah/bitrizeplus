import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Lightbulb,
  FileText,
  Palette,
  Code2,
  GitBranch,
  Shield,
  Lock,
  Rocket,
  TrendingUp,
  Brain,
  Check,
  Zap,
  Users,
  Clock,
  Building2,
  Globe,
  Sparkles,
  Target,
  HeartHandshake,
  Award,
  Play,
  MessageSquare,
  Star,
} from "lucide-react";

const agents = [
  {
    name: "IdeaForge AI",
    stage: "Ideation",
    stageNumber: 1,
    description:
      "Transform raw ideas into validated software concepts with AI-powered market research, competitor analysis, and problem-solution fit scoring.",
    href: "/products/ideaforge-ai",
    icon: Lightbulb,
    features: ["Market Research", "Competitor Analysis", "Feature Suggestions"],
  },
  {
    name: "SpecGen Agent",
    stage: "Requirements & Planning",
    stageNumber: 2,
    description:
      "Convert validated ideas into comprehensive technical and business specifications with automated documentation generation.",
    href: "/products/specgen-agent",
    icon: FileText,
    features: ["PRD Generation", "Technical Specs", "User Stories"],
  },
  {
    name: "UXMind Agent",
    stage: "Design",
    stageNumber: 3,
    description:
      "Design exceptional product experiences with AI-driven wireframes, design systems, and accessibility-first prototypes.",
    href: "/products/uxmind-agent",
    icon: Palette,
    features: ["Wireframing", "Design Systems", "Accessibility Audits"],
  },
  {
    name: "CodePilot AI",
    stage: "Development",
    stageNumber: 4,
    description:
      "Accelerate development with multi-agent coding that generates, reviews, and refactors code across your entire stack.",
    href: "/products/codepilot-ai",
    icon: Code2,
    features: ["Code Generation", "Code Review", "Refactoring"],
  },
  {
    name: "AutoDevOps Agent",
    stage: "CI/CD & Infrastructure",
    stageNumber: 5,
    description:
      "Automate your entire infrastructure setup with intelligent CI/CD pipelines, IaC generation, and environment management.",
    href: "/products/autodevops-agent",
    icon: GitBranch,
    features: ["Pipeline Setup", "IaC Generation", "Environment Config"],
  },
  {
    name: "TestGuard AI",
    stage: "Quality Assurance",
    stageNumber: 6,
    description:
      "Achieve comprehensive test coverage with autonomous agents that write, execute, and maintain tests across all layers.",
    href: "/products/testguard-ai",
    icon: Shield,
    features: ["Test Generation", "E2E Testing", "Performance Tests"],
  },
  {
    name: "SecureSense Agent",
    stage: "Security & Compliance",
    stageNumber: 7,
    description:
      "Protect your application with continuous security scanning, vulnerability detection, and compliance monitoring.",
    href: "/products/securesense-agent",
    icon: Lock,
    features: ["Vulnerability Scanning", "OWASP Compliance", "Threat Modeling"],
  },
  {
    name: "LaunchMate AI",
    stage: "Product Launch",
    stageNumber: 8,
    description:
      "Execute flawless product launches with automated deployment strategies, rollback systems, and go-to-market coordination.",
    href: "/products/launchmate-ai",
    icon: Rocket,
    features: ["Launch Planning", "Rollback Systems", "GTM Automation"],
  },
  {
    name: "ScaleOps Agent",
    stage: "Growth & Scaling",
    stageNumber: 9,
    description:
      "Scale with confidence using intelligent auto-scaling, performance optimization, and cost management strategies.",
    href: "/products/scaleops-agent",
    icon: TrendingUp,
    features: ["Auto-Scaling", "Cost Optimization", "Performance Tuning"],
  },
  {
    name: "ProductBrain AI",
    stage: "Continuous Improvement",
    stageNumber: 10,
    description:
      "Drive continuous improvement with AI-powered analytics, user feedback synthesis, and data-driven iteration planning.",
    href: "/products/productbrain-ai",
    icon: Brain,
    features: ["Analytics", "Feedback Synthesis", "Iteration Planning"],
  },
];

const stats = [
  { value: "10x", label: "Faster Development" },
  { value: "90%", label: "Code Coverage" },
  { value: "50%", label: "Cost Reduction" },
  { value: "24/7", label: "Autonomous Operation" },
];

const benefits = [
  {
    icon: Zap,
    title: "End-to-End Automation",
    description:
      "From ideation to production, our AI agents handle every stage of the software development lifecycle automatically.",
  },
  {
    icon: Users,
    title: "Team Augmentation",
    description:
      "Empower your existing team with AI co-pilots that amplify productivity and reduce repetitive tasks.",
  },
  {
    icon: Clock,
    title: "Continuous Operation",
    description:
      "AI agents work around the clock, monitoring, testing, and improving your software without downtime.",
  },
];

const testimonials = [
  {
    quote: "Bitrize Plus has transformed how we build software. What used to take weeks now takes days.",
    author: "Sarah Chen",
    title: "CTO at TechScale Inc.",
    rating: 5,
  },
  {
    quote: "The AI agents feel like having a team of senior engineers working alongside us 24/7.",
    author: "Michael Rodriguez",
    title: "VP Engineering at DataFlow",
    rating: 5,
  },
  {
    quote: "We reduced our time-to-market by 60% after implementing Bitrize Plus across our teams.",
    author: "Emily Watson",
    title: "Director of Engineering at CloudNative",
    rating: 5,
  },
];

const trustedCompanies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" },
  { name: "Netflix", logo: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Netflix_Logo_RGB44.png" },
  { name: "Shopify", logo: "https://cdn.prod.website-files.com/67b588631d821aefa445e9fc/689b3ae056eb7b002dcea24c_Shopify_logo.png" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png" },
];

const integrations = [
  { name: "GitHub", category: "Source Control" },
  { name: "GitLab", category: "Source Control" },
  { name: "Bitbucket", category: "Source Control" },
  { name: "Jira", category: "Project Management" },
  { name: "Linear", category: "Project Management" },
  { name: "Slack", category: "Communication" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Docker", category: "Containers" },
  { name: "Kubernetes", category: "Containers" },
  { name: "Vercel", category: "Deployment" },
];

const useCases = [
  {
    icon: Building2,
    title: "Enterprise Teams",
    description: "Scale your development capacity without scaling headcount. Perfect for large organizations.",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Move fast and ship faster. Get enterprise-grade development practices from day one.",
  },
  {
    icon: Globe,
    title: "Agencies",
    description: "Deliver more projects with fewer resources. Automate the mundane, focus on creativity.",
  },
  {
    icon: Code2,
    title: "Open Source",
    description: "Maintain quality across contributions. Automated reviews, tests, and documentation.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/30">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              AI-Powered Software Development
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Build Better Software,{" "}
              <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">10x Faster</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              The complete AI-powered software development lifecycle platform.
              From ideation to continuous improvement, our intelligent agents
              automate every stage of your product journey.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/20 hover:bg-primary/5">
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#7B4DD010_1px,transparent_1px),linear-gradient(to_bottom,#7B4DD010_1px,transparent_1px)] bg-[size:24px_24px]" />
      </section>

      {/* Stats Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDLC Pipeline Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Complete <span className="text-primary">SDLC Pipeline</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              10 specialized AI agents working together to automate your entire
              software development lifecycle from start to finish.
            </p>
          </div>

          {/* Pipeline Visualization */}
          <div className="mt-16">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 md:block" />

              {/* Stage Numbers */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5 lg:grid-cols-10">
                {agents.map((agent) => (
                  <Link
                    key={agent.name}
                    href={agent.href}
                    className="group relative flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center border-2 border-primary/30 bg-background text-sm font-semibold transition-all group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/50">
                      {agent.stageNumber}
                    </div>
                    <div className="mt-3 text-xs font-medium">{agent.stage}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet Our AI Agents
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Each agent is specialized for its stage in the development
              lifecycle, working autonomously or collaboratively with your team.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => {
              const Icon = agent.icon;
              return (
                <Link
                  key={agent.name}
                  href={agent.href}
                  className="group relative flex flex-col border border-primary/10 bg-card p-6 transition-all hover:bg-primary/5 hover:border-primary/30"
                >
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{agent.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {agent.stage}
                    </p>
                  </div>
                  <p className="mt-4 flex-1 text-sm text-muted-foreground">
                    {agent.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {agent.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center border border-primary/10 bg-primary/5 px-2 py-1 text-xs text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose <span className="text-primary">Bitrize Plus</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Transform your development workflow with intelligent automation
              that adapts to your needs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center border-2 border-primary/20 bg-primary/5 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get started in minutes and let our AI agents transform your
              development process.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="relative border bg-card p-8">
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center bg-primary/10 border border-primary/20 text-sm font-bold text-primary">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold">Connect Your Repo</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Link your GitHub, GitLab, or Bitbucket repository. Our agents
                will analyze your codebase and understand your project structure.
              </p>
            </div>
            <div className="relative border bg-card p-8">
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center bg-primary/10 border border-primary/20 text-sm font-bold text-primary">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold">Configure Agents</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Select which AI agents to activate based on your current
                development stage. Customize their behavior to match your workflow.
              </p>
            </div>
            <div className="relative border bg-card p-8">
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center bg-primary/10 border border-primary/20 text-sm font-bold text-primary">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold">Ship Faster</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Watch as AI agents handle repetitive tasks, catch issues early,
                and help your team focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Social Proof Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="text-2xl font-medium italic md:text-3xl">
              "Bitrize Plus has transformed how we build software. What used to
              take weeks now takes days. The AI agents feel like having a team
              of senior engineers working alongside us 24/7."
            </blockquote>
            <div className="mt-8">
              <div className="font-semibold text-primary">Sarah Chen</div>
              <div className="text-sm text-muted-foreground">
                CTO at TechScale Inc.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your <span className="text-primary">Development Process</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of teams already using Bitrize Plus to build better
              software, faster.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/20 hover:bg-primary/5">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Feature Checklist Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything You Need
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A comprehensive platform with all the tools your team needs.
              </p>
            </div>
            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "AI-powered code generation",
                "Automated testing & QA",
                "Security vulnerability scanning",
                "CI/CD pipeline automation",
                "Infrastructure as Code",
                "Performance monitoring",
                "Real-time collaboration",
                "Custom agent training",
                "Enterprise SSO & SAML",
                "SOC 2 Type II certified",
                "99.9% uptime SLA",
                "24/7 priority support",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center border border-primary/20 bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Trusted by innovative companies worldwide
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 md:gap-14">
            {trustedCompanies.map((company) => (
              <div
                key={company.name}
                className="flex items-center opacity-50 hover:opacity-80 transition-opacity"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain text-muted-foreground"
                  style={{ filter: 'grayscale(100%)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Use Cases
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for <span className="text-primary">Every Team</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you're a startup or enterprise, our AI agents adapt to your workflow.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <div key={useCase.title} className="group border border-primary/10 p-6 hover:border-primary/30 hover:bg-primary/5 transition-all">
                  <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5 text-primary group-hover:bg-primary/20 group-hover:border-primary/30 transition-all">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{useCase.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Integrations
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Works With Your <span className="text-primary">Existing Stack</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Seamlessly integrate with the tools you already love and use.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center justify-center border border-primary/10 bg-card p-6 hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <div className="h-10 w-10 flex items-center justify-center border border-primary/20 bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <p className="mt-3 text-sm font-medium">{integration.name}</p>
                <p className="text-xs text-muted-foreground">{integration.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multiple Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Loved by <span className="text-primary">Developers</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See what engineering leaders are saying about Bitrize Plus.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="relative border border-primary/10 bg-card p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-6">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                  See It In Action
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Watch How <span className="text-primary">AI Agents</span> Build Software
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  See our AI agents in action as they take a project from idea to production in minutes, not months.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Automated code generation and review",
                    "Real-time collaboration between agents",
                    "Continuous testing and deployment",
                    "Intelligent error detection and fixes",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center border border-primary/20 bg-primary/10 text-primary">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="mt-8">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
              <div className="relative aspect-video border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#7B4DD010_1px,transparent_1px),linear-gradient(to_bottom,#7B4DD010_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="relative flex h-20 w-20 items-center justify-center border-2 border-primary/30 bg-primary/10 text-primary cursor-pointer hover:bg-primary/20 hover:border-primary/50 transition-all">
                  <Play className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about Bitrize Plus.
            </p>
          </div>

          <div className="mt-16 mx-auto max-w-3xl space-y-4">
            {[
              {
                question: "How does Bitrize Plus integrate with my existing workflow?",
                answer: "Bitrize Plus seamlessly integrates with your existing tools including GitHub, GitLab, Jira, Slack, and major cloud providers. Our AI agents work alongside your team without disrupting your current processes.",
              },
              {
                question: "Is my code and data secure?",
                answer: "Absolutely. We're SOC 2 Type II certified and use enterprise-grade encryption. Your code never leaves your infrastructure unless you explicitly configure it to. We offer on-premise deployment options for maximum security.",
              },
              {
                question: "Can I customize the AI agents for my specific needs?",
                answer: "Yes! Our agents are fully customizable. You can train them on your codebase, define custom rules, and configure their behavior to match your team's coding standards and practices.",
              },
              {
                question: "What happens if an AI agent makes a mistake?",
                answer: "All AI agent actions go through our review pipeline. You maintain full control with approval workflows, and our agents learn from corrections to improve over time. Critical changes always require human approval.",
              },
              {
                question: "How do I get started?",
                answer: "Getting started is easy! Sign up for a free trial, connect your repository, and our onboarding wizard will guide you through configuring your first AI agents. Most teams are up and running within an hour.",
              },
            ].map((faq) => (
              <div key={faq.question} className="border border-primary/10 p-6">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Still have questions?{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                Contact our team
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Build the <span className="text-primary">Future</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join the thousands of teams already shipping faster with AI-powered development.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/20 hover:bg-primary/5">
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
