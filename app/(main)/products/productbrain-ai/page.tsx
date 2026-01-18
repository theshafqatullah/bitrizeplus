import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    Brain,
    Check,
    BarChart3,
    MessageSquare,
    TrendingUp,
    LineChart,
    Activity,
} from "lucide-react";

const features = [
    {
        icon: BarChart3,
        title: "Analytics Agent",
        description: "Deep analytics and insights from your product data.",
        capabilities: [
            "User behavior analysis",
            "Funnel visualization",
            "Cohort analysis",
            "Predictive analytics",
        ],
    },
    {
        icon: MessageSquare,
        title: "Feedback Synthesis Agent",
        description: "Aggregate and analyze user feedback from all channels.",
        capabilities: [
            "Sentiment analysis",
            "Feature request clustering",
            "Priority scoring",
            "Trend detection",
        ],
    },
    {
        icon: TrendingUp,
        title: "Growth Agent",
        description: "Identify growth opportunities and optimization strategies.",
        capabilities: [
            "A/B test recommendations",
            "Conversion optimization",
            "Retention strategies",
            "Growth experiments",
        ],
    },
    {
        icon: LineChart,
        title: "Iteration Planning Agent",
        description: "Data-driven roadmap planning for continuous improvement.",
        capabilities: [
            "Impact estimation",
            "Resource planning",
            "Sprint suggestions",
            "ROI forecasting",
        ],
    },
];

const metrics = [
    { value: "360°", label: "Product View" },
    { value: "50+", label: "Data Sources" },
    { value: "Real-time", label: "Insights" },
    { value: "AI", label: "Powered Decisions" },
];

const dataSources = [
    "Google Analytics",
    "Mixpanel",
    "Amplitude",
    "Intercom",
    "Zendesk",
    "Slack",
    "App Reviews",
    "Social Media",
];

export default function ProductBrainAIPage() {
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
                                <Brain className="h-10 w-10" />
                            </div>
                        </div>

                        <Badge
                            variant="secondary"
                            className="mb-6 bg-primary/10 text-primary border-primary/20"
                        >
                            Stage 10: Analytics & Iteration
                        </Badge>

                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            ProductBrain <span className="text-primary">AI</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                            Make data-driven product decisions with AI-powered analytics,
                            feedback synthesis, and growth optimization for continuous
                            improvement.
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
                                <Link href="/docs/productbrain-ai">View Documentation</Link>
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
                            Product <span className="text-primary">Intelligence</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Turn data into actionable insights for product growth.
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

            {/* Data Sources Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Unified <span className="text-primary">Data Sources</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Connect all your product data in one place.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        {dataSources.map((source) => (
                            <div
                                key={source}
                                className="flex items-center gap-2  border border-border bg-card px-6 py-3"
                            >
                                <Activity className="h-4 w-4 text-primary" />
                                <span className="font-medium text-foreground">{source}</span>
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
                            Data to <span className="text-primary">Decisions</span>
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-4">
                        {[
                            {
                                step: 1,
                                title: "Connect Data",
                                desc: "Integrate all your data sources",
                            },
                            {
                                step: 2,
                                title: "AI Analysis",
                                desc: "AI synthesizes and analyzes data",
                            },
                            {
                                step: 3,
                                title: "Get Insights",
                                desc: "Receive actionable recommendations",
                            },
                            {
                                step: 4,
                                title: "Iterate",
                                desc: "Implement and measure improvements",
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
                            Build Products Users Love
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Let AI guide your product decisions with data-driven insights.
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
