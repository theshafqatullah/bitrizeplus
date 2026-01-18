import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    Rocket,
    Check,
    Calendar,
    RotateCcw,
    Megaphone,
    Gauge,
    Flag,
} from "lucide-react";

const features = [
    {
        icon: Calendar,
        title: "Launch Planning Agent",
        description: "Comprehensive launch planning and coordination.",
        capabilities: [
            "Launch checklists",
            "Timeline management",
            "Stakeholder coordination",
            "Risk mitigation",
        ],
    },
    {
        icon: RotateCcw,
        title: "Rollback Agent",
        description: "Automated rollback systems for safe deployments.",
        capabilities: [
            "Auto rollback triggers",
            "Blue-green deployments",
            "Canary releases",
            "Feature flags",
        ],
    },
    {
        icon: Megaphone,
        title: "GTM Automation Agent",
        description: "Go-to-market coordination and automation.",
        capabilities: [
            "Marketing sync",
            "Documentation updates",
            "Changelog generation",
            "Announcement drafts",
        ],
    },
    {
        icon: Gauge,
        title: "Monitoring Agent",
        description: "Real-time launch monitoring and alerting.",
        capabilities: [
            "Health checks",
            "Error tracking",
            "Performance metrics",
            "User feedback",
        ],
    },
];

const metrics = [
    { value: "99.9%", label: "Success Rate" },
    { value: "Zero", label: "Downtime" },
    { value: "<5min", label: "Rollback Time" },
    { value: "100%", label: "Automated" },
];

const deploymentStrategies = [
    "Blue-Green",
    "Canary",
    "Rolling",
    "Feature Flags",
    "A/B Testing",
    "Shadow Mode",
];

export default function LaunchMateAIPage() {
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
                                <Rocket className="h-10 w-10" />
                            </div>
                        </div>

                        <Badge
                            variant="secondary"
                            className="mb-6 bg-primary/10 text-primary border-primary/20"
                        >
                            Stage 8: Deployment
                        </Badge>

                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            LaunchMate <span className="text-primary">AI</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                            Deploy with confidence using AI-powered launch planning, automated
                            rollbacks, and real-time monitoring for zero-downtime releases.
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
                                <Link href="/docs/launchmate-ai">View Documentation</Link>
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
                            Zero-Downtime <span className="text-primary">Deployments</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Everything you need for successful, stress-free launches.
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

            {/* Deployment Strategies Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Deployment <span className="text-primary">Strategies</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Choose the right deployment strategy for your needs.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        {deploymentStrategies.map((strategy) => (
                            <div
                                key={strategy}
                                className="flex items-center gap-2  border border-border bg-card px-6 py-3"
                            >
                                <Flag className="h-4 w-4 text-primary" />
                                <span className="font-medium text-foreground">{strategy}</span>
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
                            Launch with <span className="text-primary">Confidence</span>
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-4">
                        {[
                            {
                                step: 1,
                                title: "Plan Launch",
                                desc: "AI generates comprehensive launch plan",
                            },
                            {
                                step: 2,
                                title: "Pre-flight Checks",
                                desc: "Automated verification before deploy",
                            },
                            {
                                step: 3,
                                title: "Deploy",
                                desc: "Gradual rollout with monitoring",
                            },
                            {
                                step: 4,
                                title: "Monitor",
                                desc: "Real-time tracking and auto-rollback",
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
                            Ready for Stress-Free Launches?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Deploy with confidence knowing AI has your back.
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
