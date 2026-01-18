import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code2,
  Check,
  Database,
  RefreshCw,
  Layers,
  Terminal,
  FileCode,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Frontend Agent",
    description:
      "Builds modern, responsive frontend applications with React, Next.js, Vue, and React Native.",
    capabilities: [
      "Component generation with TypeScript",
      "State management integration",
      "Responsive design patterns",
      "Accessibility compliance",
    ],
  },
  {
    icon: Terminal,
    title: "Backend Agent",
    description:
      "Develops scalable backend services in Node.js, Python, Java, Go, and more.",
    capabilities: [
      "RESTful & GraphQL APIs",
      "Microservices architecture",
      "Authentication & authorization",
      "Caching strategies",
    ],
  },
  {
    icon: Database,
    title: "API & Database Agent",
    description:
      "Designs optimized database schemas and API structures for maximum performance.",
    capabilities: [
      "Schema design & migrations",
      "Query optimization",
      "API versioning",
      "Data validation layers",
    ],
  },
  {
    icon: RefreshCw,
    title: "Refactoring Agent",
    description:
      "Continuously improves code quality, performance, and maintainability.",
    capabilities: [
      "Dead code elimination",
      "Performance optimization",
      "Design pattern implementation",
      "Technical debt reduction",
    ],
  },
];

const integrations = [
  "VS Code",
  "JetBrains IDEs",
  "GitHub Copilot",
  "ESLint",
  "Prettier",
  "TypeScript",
];

const metrics = [
  { value: "10x", label: "Faster Code Generation" },
  { value: "95%", label: "Code Accuracy" },
  { value: "80%", label: "Reduced Boilerplate" },
  { value: "24/7", label: "Continuous Assistance" },
];

export default function CodePilotAIPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7B4DD010_1px,transparent_1px),linear-gradient(to_bottom,#7B4DD010_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="flex h-20 w-20 items-center justify-center  bg-primary/10 border border-primary/20 text-primary">
                <Code2 className="h-10 w-10" />
              </div>
            </div>

            <Badge
              variant="secondary"
              className="mb-6 bg-primary/10 text-primary border-primary/20"
            >
              Stage 4: Development
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              CodePilot <span className="text-primary">AI</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Accelerate development with multi-agent coding that generates,
              reviews, and refactors code across your entire stack. Your
              AI-powered development team that never sleeps.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-border hover:bg-primary/5"
              >
                <Link href="/docs/codepilot-ai">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl font-bold text-primary lg:text-5xl">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Capabilities
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Multi-Agent <span className="text-primary">Development System</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Four specialized AI agents working in harmony to build, review,
              and optimize your codebase.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group  border border-border bg-card p-8 hover:border-primary/30 hover:bg-card/80 transition-all"
                >
                  <div className="flex h-14 w-14 items-center justify-center  bg-primary/10 border border-primary/20 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {feature.capabilities.map((capability) => (
                      <li key={capability} className="flex items-center gap-3">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {capability}
                        </span>
                      </li>
                    ))}
                  </ul>
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
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Workflow
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How <span className="text-primary">CodePilot AI</span> Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Seamlessly integrated into your development workflow.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                step: 1,
                title: "Describe Your Intent",
                desc: "Use natural language to describe what you want to build. CodePilot understands context, requirements, and best practices.",
              },
              {
                step: 2,
                title: "AI Generates Code",
                desc: "Multiple specialized agents collaborate to generate production-ready code with proper structure, tests, and documentation.",
              },
              {
                step: 3,
                title: "Review & Iterate",
                desc: "Review the generated code, provide feedback, and let the AI refine the solution until it meets your standards.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative  border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-sm font-bold text-primary">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Works With Your <span className="text-primary">Tools</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Seamlessly integrates with your favorite development tools and
              IDEs.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="flex items-center gap-2  border border-border bg-card px-6 py-3"
              >
                <FileCode className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl  border border-border bg-card p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Supercharge Your Development?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start building faster with CodePilot AI today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-border hover:bg-primary/5"
              >
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
