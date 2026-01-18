import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    Lightbulb,
    FileText,
    Palette,
    Brain,
    TestTube2,
    GitBranch,
    Shield,
    Rocket,
    BarChart3,
    Code2,
} from "lucide-react";

const products = [
    {
        icon: Lightbulb,
        name: "IdeaForge AI",
        stage: "Ideation",
        tagline: "Transform ideas into validated product concepts",
        description: "AI-powered ideation and market validation. Analyze competitors, identify opportunities, and generate product concepts that resonate with your target market.",
        href: "/products/ideaforge-ai",
        color: "bg-amber-500",
    },
    {
        icon: FileText,
        name: "SpecGen Agent",
        stage: "Requirements",
        tagline: "Generate comprehensive product specifications",
        description: "Transform product ideas into detailed PRDs, technical specs, and user stories. Create clear, actionable requirements for your development team.",
        href: "/products/specgen-agent",
        color: "bg-blue-500",
    },
    {
        icon: Palette,
        name: "UXMind Agent",
        stage: "Design",
        tagline: "Design user experiences that delight",
        description: "AI-driven UX research and design recommendations. Create wireframes, user flows, and design systems based on best practices and user insights.",
        href: "/products/uxmind-agent",
        color: "bg-pink-500",
    },
    {
        icon: Brain,
        name: "ProductBrain AI",
        stage: "Planning",
        tagline: "Strategic product planning and roadmapping",
        description: "Build data-driven product roadmaps, prioritize features, and align your team around a clear product vision and strategy.",
        href: "/products/productbrain-ai",
        color: "bg-purple-500",
    },
    {
        icon: Code2,
        name: "CodePilot AI",
        stage: "Development",
        tagline: "Write production-ready code faster",
        description: "Your AI pair programmer that understands context. Generate, refactor, and optimize code across languages with intelligent suggestions.",
        href: "/products/codepilot-ai",
        color: "bg-green-500",
    },
    {
        icon: TestTube2,
        name: "TestGuard AI",
        stage: "Testing",
        tagline: "Comprehensive automated testing",
        description: "Generate unit tests, integration tests, and end-to-end tests automatically. Achieve high coverage and catch bugs before production.",
        href: "/products/testguard-ai",
        color: "bg-cyan-500",
    },
    {
        icon: GitBranch,
        name: "AutoDevOps Agent",
        stage: "CI/CD",
        tagline: "Automate your entire DevOps pipeline",
        description: "Set up CI/CD pipelines, automate deployments, and manage infrastructure as code with intelligent automation.",
        href: "/products/autodevops-agent",
        color: "bg-orange-500",
    },
    {
        icon: Shield,
        name: "SecureSense Agent",
        stage: "Security",
        tagline: "Proactive security for your codebase",
        description: "Continuous vulnerability scanning, dependency auditing, and security best practices. Keep your applications secure from the ground up.",
        href: "/products/securesense-agent",
        color: "bg-red-500",
    },
    {
        icon: Rocket,
        name: "LaunchMate AI",
        stage: "Launch",
        tagline: "Launch products with confidence",
        description: "Plan and execute product launches with AI-powered checklists, rollout strategies, and feature flag management.",
        href: "/products/launchmate-ai",
        color: "bg-indigo-500",
    },
    {
        icon: BarChart3,
        name: "ScaleOps Agent",
        stage: "Scale",
        tagline: "Scale your infrastructure intelligently",
        description: "Optimize cloud costs, auto-scale resources, and monitor performance with AI-driven infrastructure management.",
        href: "/products/scaleops-agent",
        color: "bg-teal-500",
    },
];

const sdlcStages = [
    "Ideation",
    "Requirements",
    "Design",
    "Planning",
    "Development",
    "Testing",
    "CI/CD",
    "Security",
    "Launch",
    "Scale",
];

export default function ProductsPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/30 py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                            Products
                        </Badge>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            AI Agents for Every <span className="text-primary">Stage</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                            From ideation to scale, our 10 AI agents cover the entire software development lifecycle.
                            Build better products, faster.
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#7B4DD010_1px,transparent_1px),linear-gradient(to_bottom,#7B4DD010_1px,transparent_1px)] bg-[size:24px_24px]" />
            </section>

            {/* SDLC Pipeline */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
                        {sdlcStages.map((stage, index) => (
                            <div key={stage} className="flex items-center shrink-0">
                                <div className="flex items-center justify-center px-4 py-2 border border-primary/20 bg-primary/5 text-sm font-medium text-primary">
                                    {stage}
                                </div>
                                {index < sdlcStages.length - 1 && (
                                    <ArrowRight className="mx-1 h-4 w-4 text-primary/50" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-8 md:grid-cols-2">
                            {products.map((product) => {
                                const Icon = product.icon;
                                return (
                                    <Link
                                        key={product.name}
                                        href={product.href}
                                        className="group border border-primary/10 p-6 hover:border-primary/30 hover:bg-primary/5 transition-all"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`flex h-12 w-12 shrink-0 items-center justify-center ${product.color} text-white`}>
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                                        {product.name}
                                                    </h3>
                                                    <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                                                        {product.stage}
                                                    </Badge>
                                                </div>
                                                <p className="mt-1 text-sm text-primary font-medium">{product.tagline}</p>
                                                <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
                                                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                                                    Learn More
                                                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                            All-in-One
                        </Badge>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            One Platform, <span className="text-primary">Complete Coverage</span>
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Why use 10 different tools when you can have 10 AI agents working together seamlessly?
                        </p>
                    </div>

                    <div className="mt-12 mx-auto max-w-3xl">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="border border-red-200 bg-red-50 p-6">
                                <h3 className="font-semibold text-red-700">Without Bitrize Plus</h3>
                                <ul className="mt-4 space-y-2 text-sm text-red-600">
                                    <li>• Multiple subscriptions and integrations</li>
                                    <li>• Context switching between tools</li>
                                    <li>• Data silos and manual handoffs</li>
                                    <li>• Inconsistent AI quality</li>
                                    <li>• Higher total cost of ownership</li>
                                </ul>
                            </div>
                            <div className="border-2 border-primary bg-primary/5 p-6">
                                <h3 className="font-semibold text-primary">With Bitrize Plus</h3>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="flex h-4 w-4 items-center justify-center bg-primary/10 border border-primary/20 text-primary text-xs">✓</span>
                                        One unified platform
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="flex h-4 w-4 items-center justify-center bg-primary/10 border border-primary/20 text-primary text-xs">✓</span>
                                        Seamless agent collaboration
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="flex h-4 w-4 items-center justify-center bg-primary/10 border border-primary/20 text-primary text-xs">✓</span>
                                        Shared context and history
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="flex h-4 w-4 items-center justify-center bg-primary/10 border border-primary/20 text-primary text-xs">✓</span>
                                        Consistent, high-quality AI
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="flex h-4 w-4 items-center justify-center bg-primary/10 border border-primary/20 text-primary text-xs">✓</span>
                                        Simple, transparent pricing
                                    </li>
                                </ul>
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
                            Ready to Transform Your Development?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Start your 14-day free trial and experience all 10 AI agents working together.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button size="lg" asChild>
                                <Link href="/signup">
                                    Start Free Trial
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="border-primary/20 hover:bg-primary/5">
                                <Link href="/pricing">View Pricing</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
