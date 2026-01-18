import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    ArrowRight,
    Book,
    Code,
    Zap,
    Settings,
    Users,
    Shield,
    Search,
    ExternalLink,
    FileText,
    Terminal,
    Puzzle,
    Rocket,
} from "lucide-react";

const docSections = [
    {
        icon: Rocket,
        title: "Getting Started",
        description: "Everything you need to get up and running with Bitrize Plus.",
        links: [
            { title: "Quick Start Guide", href: "/docs/quick-start" },
            { title: "Installation", href: "/docs/installation" },
            { title: "First AI Agent", href: "/docs/first-agent" },
            { title: "Configuration", href: "/docs/configuration" },
        ],
    },
    {
        icon: Zap,
        title: "AI Agents",
        description: "Deep dives into each of our 10 AI agents and their capabilities.",
        links: [
            { title: "CodePilot AI", href: "/docs/agents/codepilot" },
            { title: "IdeaForge AI", href: "/docs/agents/ideaforge" },
            { title: "TestGuard AI", href: "/docs/agents/testguard" },
            { title: "View All Agents →", href: "/docs/agents" },
        ],
    },
    {
        icon: Code,
        title: "API Reference",
        description: "Complete API documentation for developers.",
        links: [
            { title: "REST API", href: "/docs/api/rest" },
            { title: "Authentication", href: "/docs/api/auth" },
            { title: "Webhooks", href: "/docs/api/webhooks" },
            { title: "Rate Limits", href: "/docs/api/limits" },
        ],
    },
    {
        icon: Puzzle,
        title: "Integrations",
        description: "Connect Bitrize Plus with your favorite tools.",
        links: [
            { title: "GitHub", href: "/docs/integrations/github" },
            { title: "GitLab", href: "/docs/integrations/gitlab" },
            { title: "Slack", href: "/docs/integrations/slack" },
            { title: "View All →", href: "/docs/integrations" },
        ],
    },
    {
        icon: Settings,
        title: "Configuration",
        description: "Customize Bitrize Plus to fit your workflow.",
        links: [
            { title: "Project Settings", href: "/docs/config/project" },
            { title: "Team Management", href: "/docs/config/team" },
            { title: "Environment Variables", href: "/docs/config/env" },
            { title: "CI/CD Setup", href: "/docs/config/cicd" },
        ],
    },
    {
        icon: Shield,
        title: "Security",
        description: "Learn about our security practices and compliance.",
        links: [
            { title: "Security Overview", href: "/docs/security/overview" },
            { title: "Data Privacy", href: "/docs/security/privacy" },
            { title: "Compliance", href: "/docs/security/compliance" },
            { title: "SOC 2 Report", href: "/docs/security/soc2" },
        ],
    },
];

const quickLinks = [
    { icon: Terminal, title: "CLI Reference", href: "/docs/cli", description: "Command-line interface docs" },
    { icon: FileText, title: "Changelog", href: "/docs/changelog", description: "Latest updates and releases" },
    { icon: Users, title: "Community", href: "/community", description: "Join our community" },
    { icon: Book, title: "Tutorials", href: "/docs/tutorials", description: "Step-by-step guides" },
];

export default function DocsPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/30 py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                            Documentation
                        </Badge>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Learn <span className="text-primary">Bitrize Plus</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                            Comprehensive guides, API references, and tutorials to help you get the most out of Bitrize Plus.
                        </p>

                        {/* Search Box */}
                        <div className="mt-8 mx-auto max-w-xl">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search documentation..."
                                    className="h-12 pl-12 border-primary/20 focus:border-primary"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#7B4DD010_1px,transparent_1px),linear-gradient(to_bottom,#7B4DD010_1px,transparent_1px)] bg-[size:24px_24px]" />
            </section>

            {/* Quick Links */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid gap-4 md:grid-cols-4">
                        {quickLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="flex items-center gap-3 border border-primary/10 p-4 hover:border-primary/30 hover:bg-primary/5 transition-all"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/20 bg-primary/10 text-primary">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-sm">{link.title}</h3>
                                        <p className="text-xs text-muted-foreground">{link.description}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Documentation Sections */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {docSections.map((section) => {
                                const Icon = section.icon;
                                return (
                                    <div
                                        key={section.title}
                                        className="border border-primary/10 p-6 hover:border-primary/30 transition-all"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/10 text-primary">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <h3 className="font-semibold">{section.title}</h3>
                                        </div>
                                        <p className="mt-3 text-sm text-muted-foreground">{section.description}</p>
                                        <ul className="mt-4 space-y-2">
                                            {section.links.map((link) => (
                                                <li key={link.href}>
                                                    <Link
                                                        href={link.href}
                                                        className="flex items-center text-sm text-primary hover:underline"
                                                    >
                                                        <ArrowRight className="mr-2 h-3 w-3" />
                                                        {link.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Articles */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <div className="text-center">
                            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                                Popular
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Most Read <span className="text-primary">Articles</span>
                            </h2>
                        </div>

                        <div className="mt-12 space-y-4">
                            {[
                                { title: "Quick Start Guide", description: "Get up and running with Bitrize Plus in 5 minutes", href: "/docs/quick-start" },
                                { title: "Understanding AI Agents", description: "Learn how AI agents work and when to use each one", href: "/docs/agents" },
                                { title: "API Authentication", description: "Secure your API requests with proper authentication", href: "/docs/api/auth" },
                                { title: "Best Practices", description: "Tips and tricks for getting the most out of Bitrize Plus", href: "/docs/best-practices" },
                                { title: "Troubleshooting Guide", description: "Common issues and how to resolve them", href: "/docs/troubleshooting" },
                            ].map((article) => (
                                <Link
                                    key={article.href}
                                    href={article.href}
                                    className="flex items-center justify-between border border-primary/10 bg-card p-4 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                                >
                                    <div>
                                        <h3 className="font-medium group-hover:text-primary transition-colors">{article.title}</h3>
                                        <p className="text-sm text-muted-foreground">{article.description}</p>
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Can't Find What You're Looking For?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our support team is here to help. Reach out and we'll get back to you within 24 hours.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Contact Support
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="border-primary/20 hover:bg-primary/5">
                                <Link href="https://github.com/bitrizeplus" target="_blank">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    GitHub Discussions
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
