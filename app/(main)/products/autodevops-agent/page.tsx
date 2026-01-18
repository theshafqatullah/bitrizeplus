import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    GitBranch,
    Check,
    Server,
    Cloud,
    Container,
    Settings,
    Workflow,
} from "lucide-react";

const features = [
    {
        icon: Workflow,
        title: "CI/CD Pipeline Agent",
        description: "Automatically generate and optimize CI/CD pipelines.",
        capabilities: [
            "Pipeline generation",
            "Build optimization",
            "Parallel execution",
            "Cache strategies",
        ],
    },
    {
        icon: Server,
        title: "Infrastructure Agent",
        description: "Generate Infrastructure as Code for any cloud provider.",
        capabilities: [
            "Terraform generation",
            "CloudFormation templates",
            "Pulumi scripts",
            "Multi-cloud support",
        ],
    },
    {
        icon: Container,
        title: "Container Agent",
        description: "Docker and Kubernetes configuration automation.",
        capabilities: [
            "Dockerfile generation",
            "K8s manifests",
            "Helm charts",
            "Container optimization",
        ],
    },
    {
        icon: Settings,
        title: "Environment Agent",
        description: "Manage environment configurations and secrets.",
        capabilities: [
            "Env management",
            "Secret rotation",
            "Config validation",
            "Environment parity",
        ],
    },
];

const metrics = [
    { value: "90%", label: "Faster Setup" },
    { value: "Zero", label: "Config Drift" },
    { value: "100%", label: "IaC Coverage" },
    { value: "Multi", label: "Cloud Support" },
];

const platforms = [
    "GitHub Actions",
    "GitLab CI",
    "Jenkins",
    "CircleCI",
    "AWS",
    "Azure",
    "GCP",
    "Kubernetes",
];

export default function AutoDevOpsAgentPage() {
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
                                <GitBranch className="h-10 w-10" />
                            </div>
                        </div>

                        <Badge
                            variant="secondary"
                            className="mb-6 bg-primary/10 text-primary border-primary/20"
                        >
                            Stage 5: CI/CD & Infrastructure
                        </Badge>

                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            AutoDevOps <span className="text-primary">Agent</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                            Automate your entire infrastructure setup with intelligent CI/CD
                            pipelines, IaC generation, and environment management.
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
                                <Link href="/docs/autodevops-agent">View Documentation</Link>
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
                            Infrastructure <span className="text-primary">Automation</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            From CI/CD pipelines to cloud infrastructure, all automated.
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

            {/* Platforms Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Works With Your <span className="text-primary">Platform</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Supports all major CI/CD and cloud platforms.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        {platforms.map((platform) => (
                            <div
                                key={platform}
                                className="flex items-center gap-2  border border-border bg-card px-6 py-3"
                            >
                                <Cloud className="h-4 w-4 text-primary" />
                                <span className="font-medium text-foreground">{platform}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outputs Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <Badge
                            variant="secondary"
                            className="mb-4 bg-primary/10 text-primary border-primary/20"
                        >
                            Deliverables
                        </Badge>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            What You <span className="text-primary">Get</span>
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            "CI/CD Pipelines",
                            "Terraform Modules",
                            "Docker Configurations",
                            "Kubernetes Manifests",
                            "Helm Charts",
                            "Environment Configs",
                            "Secret Management",
                            "Monitoring Setup",
                            "Alerting Rules",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3  border border-border bg-card p-4"
                            >
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Check className="h-4 w-4" />
                                </div>
                                <span className="text-sm font-medium text-foreground">
                                    {item}
                                </span>
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
                            Automate Your Infrastructure
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Stop writing infrastructure code manually. Let AI do it.
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
