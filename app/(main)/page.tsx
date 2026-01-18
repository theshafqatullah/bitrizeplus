import Link from "next/link";
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
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/30 hover:bg-primary/5">
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#7B4DD010_1px,transparent_1px),linear-gradient(to_bottom,#7B4DD010_1px,transparent_1px)] bg-[size:24px_24px]" />
      </section>

      {/* Stats Section */}
      <section className="bg-white">
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
      <section className="py-24 bg-white">
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
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center border-2 border-primary/30 bg-background text-sm font-semibold transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
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
      <section className="py-24 bg-white">
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
      <section className="bg-white py-24">
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
      <section className="py-24 bg-white">
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
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center bg-primary text-sm font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold">Connect Your Repo</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Link your GitHub, GitLab, or Bitbucket repository. Our agents
                will analyze your codebase and understand your project structure.
              </p>
            </div>
            <div className="relative border bg-card p-8">
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center bg-primary text-sm font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold">Configure Agents</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Select which AI agents to activate based on your current
                development stage. Customize their behavior to match your workflow.
              </p>
            </div>
            <div className="relative border bg-card p-8">
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center bg-primary text-sm font-bold text-primary-foreground">
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
      <section className="bg-white py-24">
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
      <section className="py-24 bg-white">
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
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/30 hover:bg-primary/5">
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
      <section className="py-24 bg-white">
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
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center border bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
