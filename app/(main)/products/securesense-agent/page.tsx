import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    Lock,
    Check,
    Shield,
    Eye,
    AlertTriangle,
    Scan,
} from "lucide-react";

const features = [
    {
        icon: Scan,
        title: "Vulnerability Scanner Agent",
        description: "Continuous security scanning for known vulnerabilities.",
        capabilities: [
            "Dependency scanning",
            "CVE detection",
            "License compliance",
            "Severity scoring",
        ],
    },
    {
        icon: Eye,
        title: "Code Analysis Agent",
        description: "Static analysis for security anti-patterns and flaws.",
        capabilities: [
            "SAST analysis",
            "Secret detection",
            "SQL injection",
            "XSS prevention",
        ],
    },
    {
        icon: Shield,
        title: "Compliance Agent",
        description: "Ensure compliance with security standards and regulations.",
        capabilities: [
            "OWASP Top 10",
            "SOC 2 compliance",
            "GDPR checks",
            "HIPAA validation",
        ],
    },
    {
        icon: AlertTriangle,
        title: "Threat Modeling Agent",
        description: "Proactive threat identification and mitigation.",
        capabilities: [
            "Attack surface analysis",
            "Risk assessment",
            "Mitigation strategies",
            "Security architecture",
        ],
    },
];

const metrics = [
    { value: "99.9%", label: "Detection Rate" },
    { value: "Zero", label: "False Positives" },
    { value: "Real-time", label: "Monitoring" },
    { value: "24/7", label: "Protection" },
];

const standards = [
    "OWASP Top 10",
    "CWE/SANS Top 25",
    "PCI DSS",
    "SOC 2",
    "GDPR",
    "HIPAA",
    "ISO 27001",
    "NIST",
];

export default function SecureSenseAgentPage() {
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
                                <Lock className="h-10 w-10" />
                            </div>
                        </div>

                        <Badge
                            variant="secondary"
                            className="mb-6 bg-primary/10 text-primary border-primary/20"
                        >
                            Stage 7: Security
                        </Badge>

                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            SecureSense <span className="text-primary">Agent</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                            Protect your software with AI-powered security scanning,
                            vulnerability detection, and compliance monitoring throughout your
                            development lifecycle.
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
                                <Link href="/docs/securesense-agent">View Documentation</Link>
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
                            Complete <span className="text-primary">Security Coverage</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Multi-layered security analysis to catch vulnerabilities before
                            they reach production.
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

            {/* Compliance Standards Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Industry <span className="text-primary">Compliance</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Meet security standards and regulatory requirements with
                            confidence.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        {standards.map((standard) => (
                            <div
                                key={standard}
                                className="flex items-center gap-2  border border-border bg-card px-6 py-3"
                            >
                                <Shield className="h-4 w-4 text-primary" />
                                <span className="font-medium text-foreground">{standard}</span>
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
                            Shift-Left <span className="text-primary">Security</span>
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-4">
                        {[
                            {
                                step: 1,
                                title: "Scan Code",
                                desc: "Continuous scanning of your codebase",
                            },
                            {
                                step: 2,
                                title: "Detect Issues",
                                desc: "AI identifies vulnerabilities instantly",
                            },
                            {
                                step: 3,
                                title: "Prioritize",
                                desc: "Risk-based prioritization of fixes",
                            },
                            {
                                step: 4,
                                title: "Remediate",
                                desc: "Auto-fix suggestions and patches",
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
                            Secure Your Software
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Don&apos;t let vulnerabilities slip through. Start securing today.
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
