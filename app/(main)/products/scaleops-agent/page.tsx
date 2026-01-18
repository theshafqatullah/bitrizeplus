import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    TrendingUp,
    Check,
    Gauge,
    DollarSign,
    Zap,
    BarChart3,
    Cloud,
} from "lucide-react";

const features = [
    {
        icon: Gauge,
        title: "Auto-Scaling Agent",
        description: "Intelligent auto-scaling based on demand patterns.",
        capabilities: [
            "Predictive scaling",
            "Traffic analysis",
            "Resource optimization",
            "Peak handling",
        ],
    },
    {
        icon: DollarSign,
        title: "Cost Optimization Agent",
        description: "Reduce cloud costs without sacrificing performance.",
        capabilities: [
            "Resource rightsizing",
            "Spot instance management",
            "Reserved capacity",
            "Waste elimination",
        ],
    },
    {
        icon: Zap,
        title: "Performance Agent",
        description: "Continuous performance monitoring and optimization.",
        capabilities: [
            "Bottleneck detection",
            "Query optimization",
            "Cache strategies",
            "CDN optimization",
        ],
    },
    {
        icon: BarChart3,
        title: "Capacity Planning Agent",
        description: "Data-driven capacity planning for growth.",
        capabilities: [
            "Growth forecasting",
            "Resource planning",
            "Budget projections",
            "Scaling roadmaps",
        ],
    },
];

const metrics = [
    { value: "40%", label: "Cost Reduction" },
    { value: "99.99%", label: "Uptime" },
    { value: "10x", label: "Scale Capacity" },
    { value: "Real-time", label: "Optimization" },
];

const cloudProviders = [
    "AWS",
    "Azure",
    "Google Cloud",
    "DigitalOcean",
    "Cloudflare",
    "Vercel",
];

export default function ScaleOpsAgentPage() {
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
                                <TrendingUp className="h-10 w-10" />
                            </div>
                        </div>

                        <Badge
                            variant="secondary"
                            className="mb-6 bg-primary/10 text-primary border-primary/20"
                        >
                            Stage 9: Scaling & Growth
                        </Badge>

                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            ScaleOps <span className="text-primary">Agent</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                            Scale your infrastructure intelligently with AI-powered
                            auto-scaling, cost optimization, and performance tuning for
                            seamless growth.
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
                                <Link href="/docs/scaleops-agent">View Documentation</Link>
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
                            Intelligent <span className="text-primary">Scaling</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Optimize performance and costs while scaling effortlessly.
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

            {/* Cloud Providers Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Multi-Cloud <span className="text-primary">Support</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Works with all major cloud providers and platforms.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        {cloudProviders.map((provider) => (
                            <div
                                key={provider}
                                className="flex items-center gap-2  border border-border bg-card px-6 py-3"
                            >
                                <Cloud className="h-4 w-4 text-primary" />
                                <span className="font-medium text-foreground">{provider}</span>
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
                            Automated <span className="text-primary">Optimization</span>
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-4">
                        {[
                            {
                                step: 1,
                                title: "Monitor",
                                desc: "Continuous monitoring of all resources",
                            },
                            {
                                step: 2,
                                title: "Analyze",
                                desc: "AI analyzes patterns and forecasts",
                            },
                            {
                                step: 3,
                                title: "Optimize",
                                desc: "Auto-apply optimizations in real-time",
                            },
                            {
                                step: 4,
                                title: "Report",
                                desc: "Detailed savings and performance reports",
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
                            Ready to Scale Smarter?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Reduce costs by 40% while handling 10x more traffic.
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
