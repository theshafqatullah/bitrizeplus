import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    Download,
    FileText,
    Video,
    BookOpen,
    Users,
    MessageSquare,
    Newspaper,
    Presentation,
    Github,
    Play,
} from "lucide-react";

const resourceCategories = [
    {
        icon: BookOpen,
        title: "Guides & Ebooks",
        description: "In-depth guides to master AI-powered development.",
        resources: [
            { title: "The Complete Guide to AI Agents", type: "PDF", size: "2.4 MB" },
            { title: "SDLC Automation Playbook", type: "PDF", size: "1.8 MB" },
            { title: "Enterprise Implementation Guide", type: "PDF", size: "3.2 MB" },
            { title: "Security Best Practices", type: "PDF", size: "1.2 MB" },
        ],
    },
    {
        icon: Video,
        title: "Video Tutorials",
        description: "Watch and learn with step-by-step video guides.",
        resources: [
            { title: "Getting Started with Bitrize Plus", type: "Video", duration: "12 min" },
            { title: "CodePilot AI Deep Dive", type: "Video", duration: "25 min" },
            { title: "Setting Up CI/CD Pipelines", type: "Video", duration: "18 min" },
            { title: "Advanced Agent Configuration", type: "Video", duration: "30 min" },
        ],
    },
    {
        icon: Presentation,
        title: "Webinars",
        description: "Join live sessions with our experts.",
        resources: [
            { title: "AI in Software Development (Upcoming)", type: "Live", date: "Jan 25, 2025" },
            { title: "Building Secure Applications", type: "Recording", duration: "45 min" },
            { title: "Scaling with DevOps Agents", type: "Recording", duration: "60 min" },
            { title: "Q4 Product Roadmap Review", type: "Recording", duration: "40 min" },
        ],
    },
];

const templates = [
    { title: "React + TypeScript Starter", description: "Modern React app with TypeScript and Tailwind CSS", stars: "2.4k" },
    { title: "Next.js Enterprise", description: "Production-ready Next.js template with authentication", stars: "1.8k" },
    { title: "Python FastAPI Backend", description: "RESTful API with FastAPI and PostgreSQL", stars: "1.2k" },
    { title: "Full-Stack Monorepo", description: "Turborepo setup with React frontend and Node backend", stars: "980" },
];

const communityLinks = [
    { icon: Github, title: "GitHub", description: "Star us on GitHub and contribute", href: "https://github.com/bitrizeplus" },
    { icon: MessageSquare, title: "Discord", description: "Join 5,000+ developers", href: "https://discord.gg/bitrizeplus" },
    { icon: Users, title: "Community Forum", description: "Ask questions and share ideas", href: "/community" },
    { icon: Newspaper, title: "Newsletter", description: "Weekly tips and updates", href: "/newsletter" },
];

export default function ResourcesPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/30 py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                            Resources
                        </Badge>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Learn, Build, <span className="text-primary">Grow</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                            Explore our collection of guides, tutorials, templates, and community resources to accelerate your development.
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#7B4DD010_1px,transparent_1px),linear-gradient(to_bottom,#7B4DD010_1px,transparent_1px)] bg-[size:24px_24px]" />
            </section>

            {/* Resource Categories */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl space-y-12">
                        {resourceCategories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <div key={category.title}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/10 text-primary">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h2 className="font-semibold text-lg">{category.title}</h2>
                                            <p className="text-sm text-muted-foreground">{category.description}</p>
                                        </div>
                                    </div>

                                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                        {category.resources.map((resource, index) => (
                                            <div
                                                key={index}
                                                className="border border-primary/10 p-4 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer"
                                            >
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <h3 className="font-medium text-sm">{resource.title}</h3>
                                                        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                                                            <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                                                                {resource.type}
                                                            </Badge>
                                                            {"size" in resource && <span>{resource.size}</span>}
                                                            {"duration" in resource && <span>{resource.duration}</span>}
                                                            {"date" in resource && <span>{resource.date}</span>}
                                                        </div>
                                                    </div>
                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-primary/20 bg-primary/10 text-primary">
                                                        {resource.type === "PDF" && <Download className="h-4 w-4" />}
                                                        {(resource.type === "Video" || resource.type === "Recording") && <Play className="h-4 w-4" />}
                                                        {resource.type === "Live" && <Video className="h-4 w-4" />}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Templates Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <div className="text-center">
                            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                                Templates
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Starter <span className="text-primary">Templates</span>
                            </h2>
                            <p className="mt-4 text-muted-foreground">
                                Kickstart your project with production-ready templates.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-4 md:grid-cols-2">
                            {templates.map((template) => (
                                <div
                                    key={template.title}
                                    className="border border-primary/10 p-6 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer"
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="font-semibold">{template.title}</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">{template.description}</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <Github className="h-4 w-4" />
                                            <span>{template.stars}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2">
                                        <Button size="sm" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                                            Use Template
                                            <ArrowRight className="ml-1 h-3 w-3" />
                                        </Button>
                                        <Button size="sm" variant="ghost" className="text-muted-foreground">
                                            Preview
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <Button variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary/5">
                                View All Templates
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <div className="text-center">
                            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                                Community
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Join Our <span className="text-primary">Community</span>
                            </h2>
                            <p className="mt-4 text-muted-foreground">
                                Connect with thousands of developers building with Bitrize Plus.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-4 md:grid-cols-2">
                            {communityLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.title}
                                        href={link.href}
                                        target={link.href.startsWith("http") ? "_blank" : undefined}
                                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="flex items-center gap-4 border border-primary/10 p-6 hover:border-primary/30 hover:bg-primary/5 transition-all"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-primary/20 bg-primary/10 text-primary">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{link.title}</h3>
                                            <p className="text-sm text-muted-foreground">{link.description}</p>
                                        </div>
                                        <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Ready to Get Started?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Start building with AI-powered development tools today.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button size="lg" asChild>
                                <Link href="/signup">
                                    Start Free Trial
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="border-primary/20 hover:bg-primary/5">
                                <Link href="/docs">View Documentation</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
