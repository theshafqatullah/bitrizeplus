import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Palette,
  Check,
  Layout,
  MousePointer,
  Wand2,
  Accessibility,
} from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Wireframe Agent",
    description: "Generate low and high-fidelity wireframes from requirements.",
    capabilities: [
      "Auto-layout generation",
      "Component suggestions",
      "Responsive breakpoints",
      "Interactive prototypes",
    ],
  },
  {
    icon: Palette,
    title: "Design System Agent",
    description: "Create cohesive design systems and component libraries.",
    capabilities: [
      "Color palette generation",
      "Typography scales",
      "Spacing systems",
      "Component variants",
    ],
  },
  {
    icon: Accessibility,
    title: "Accessibility Agent",
    description: "Ensure designs meet WCAG accessibility standards.",
    capabilities: [
      "Contrast checking",
      "Screen reader optimization",
      "Keyboard navigation",
      "ARIA recommendations",
    ],
  },
  {
    icon: MousePointer,
    title: "User Flow Agent",
    description: "Map out optimal user journeys and interaction patterns.",
    capabilities: [
      "Flow diagram generation",
      "Conversion optimization",
      "A/B test suggestions",
      "Heatmap analysis",
    ],
  },
];

const metrics = [
  { value: "70%", label: "Faster Design" },
  { value: "WCAG 2.1", label: "Compliance" },
  { value: "50+", label: "UI Templates" },
  { value: "100%", label: "Responsive" },
];

const designTools = [
  "Figma",
  "Sketch",
  "Adobe XD",
  "Framer",
  "React Components",
  "Tailwind CSS",
];

export default function UXMindAgentPage() {
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
                <Palette className="h-10 w-10" />
              </div>
            </div>

            <Badge
              variant="secondary"
              className="mb-6 bg-primary/10 text-primary border-primary/20"
            >
              Stage 3: Design
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              UXMind <span className="text-primary">Agent</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Transform specifications into beautiful, accessible UI designs
              with AI-powered wireframing, design systems, and user flow
              optimization.
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
                <Link href="/docs/uxmind-agent">View Documentation</Link>
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
              AI-Powered <span className="text-primary">Design System</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Four specialized agents to create cohesive, accessible, and
              beautiful user interfaces.
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

      {/* Design Tools Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Export to Your <span className="text-primary">Design Tools</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Seamlessly integrate with your favorite design tools and
              frameworks.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {designTools.map((tool) => (
              <div
                key={tool}
                className="flex items-center gap-2  border border-border bg-card px-6 py-3"
              >
                <Wand2 className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
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
              From Specs to <span className="text-primary">Designs</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {[
              {
                step: 1,
                title: "Import Specs",
                desc: "Feed your requirements from SpecGen",
              },
              {
                step: 2,
                title: "AI Design",
                desc: "UXMind generates design options",
              },
              {
                step: 3,
                title: "Refine",
                desc: "Iterate with AI-assisted refinements",
              },
              {
                step: 4,
                title: "Export",
                desc: "Export to Figma or code components",
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

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl  border border-border bg-card p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Design Faster with AI
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Create beautiful, accessible designs in minutes, not hours.
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
