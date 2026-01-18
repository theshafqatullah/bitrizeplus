import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Lightbulb,
  Check,
  Search,
  Users,
  Target,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Market Research Agent",
    description: "Comprehensive market analysis powered by AI to validate your ideas.",
    capabilities: [
      "Market size estimation",
      "Industry trend analysis",
      "Target audience identification",
      "Demand forecasting",
    ],
  },
  {
    icon: Users,
    title: "Competitor Analysis Agent",
    description: "Deep competitive intelligence to understand your market position.",
    capabilities: [
      "Competitor feature mapping",
      "Pricing analysis",
      "SWOT generation",
      "Gap identification",
    ],
  },
  {
    icon: Target,
    title: "Problem-Solution Fit Agent",
    description: "Validate that your solution addresses real market needs.",
    capabilities: [
      "Pain point scoring",
      "Solution validation",
      "Value proposition refinement",
      "Risk assessment",
    ],
  },
  {
    icon: Sparkles,
    title: "Feature Suggestion Agent",
    description: "AI-generated feature recommendations based on market data.",
    capabilities: [
      "Feature prioritization",
      "MVP definition",
      "Roadmap suggestions",
      "Innovation opportunities",
    ],
  },
];

const metrics = [
  { value: "85%", label: "Idea Validation Accuracy" },
  { value: "10x", label: "Faster Research" },
  { value: "500+", label: "Data Sources" },
  { value: "48hrs", label: "Complete Analysis" },
];

const useCases = [
  {
    title: "Startup Founders",
    description: "Validate your startup idea before investing time and resources.",
  },
  {
    title: "Product Managers",
    description: "Research new product opportunities with data-driven insights.",
  },
  {
    title: "Innovation Teams",
    description: "Explore and validate new business opportunities systematically.",
  },
];

export default function IdeaForgeAIPage() {
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
                <Lightbulb className="h-10 w-10" />
              </div>
            </div>

            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              Stage 1: Ideation
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              IdeaForge <span className="text-primary">AI</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Transform raw ideas into validated software concepts with AI-powered market research, competitor analysis, and problem-solution fit scoring.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-border hover:bg-primary/5">
                <Link href="/docs/ideaforge-ai">View Documentation</Link>
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
                <div className="text-4xl font-bold text-primary lg:text-5xl">{metric.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Capabilities
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              AI-Powered <span className="text-primary">Idea Validation</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Four specialized agents work together to validate your ideas with real market data.
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
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  <ul className="mt-6 space-y-3">
                    {feature.capabilities.map((capability) => (
                      <li key={capability} className="flex items-center gap-3">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-muted-foreground">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Perfect For <span className="text-primary">Innovators</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className=" border border-border bg-card p-8 text-center">
                <h3 className="text-lg font-semibold text-foreground">{useCase.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Output Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What You <span className="text-primary">Get</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive deliverables to make informed decisions.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Market Research Report",
              "Competitor Analysis Matrix",
              "Problem-Solution Fit Score",
              "Feature Prioritization List",
              "MVP Recommendation",
              "Risk Assessment Report",
              "Target Audience Profiles",
              "Value Proposition Canvas",
              "Go/No-Go Recommendation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3  border border-border bg-card p-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground">{item}</span>
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
              Ready to Validate Your Next Big Idea?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let AI do the market research so you can focus on building.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-border hover:bg-primary/5">
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
