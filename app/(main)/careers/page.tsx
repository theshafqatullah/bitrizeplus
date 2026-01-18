import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    MapPin,
    Clock,
    Briefcase,
    Heart,
    Coffee,
    Plane,
    GraduationCap,
    DollarSign,
    Users,
    Zap,
    Globe,
} from "lucide-react";

const benefits = [
    { icon: DollarSign, title: "Competitive Salary", description: "Top-tier compensation packages" },
    { icon: Heart, title: "Health & Wellness", description: "Medical, dental, and vision coverage" },
    { icon: Plane, title: "Unlimited PTO", description: "Take the time you need to recharge" },
    { icon: GraduationCap, title: "Learning Budget", description: "$5,000/year for courses and conferences" },
    { icon: Coffee, title: "Remote-First", description: "Work from anywhere in the world" },
    { icon: Zap, title: "Equity", description: "Ownership stake in the company" },
];

const values = [
    { title: "Move Fast", description: "We ship quickly and iterate based on feedback." },
    { title: "Own It", description: "Take ownership of your work and its outcomes." },
    { title: "Stay Curious", description: "Always be learning and pushing boundaries." },
    { title: "Be Kind", description: "Treat everyone with respect and empathy." },
];

const departments = [
    {
        name: "Engineering",
        openings: [
            { title: "Senior Full-Stack Engineer", location: "Remote", type: "Full-time" },
            { title: "ML/AI Engineer", location: "Remote", type: "Full-time" },
            { title: "Staff Backend Engineer", location: "Potters Bar, UK", type: "Full-time" },
            { title: "Frontend Engineer", location: "Remote", type: "Full-time" },
        ],
    },
    {
        name: "Product",
        openings: [
            { title: "Senior Product Manager", location: "Potters Bar, UK", type: "Full-time" },
            { title: "Product Designer", location: "Remote", type: "Full-time" },
            { title: "UX Researcher", location: "Remote", type: "Full-time" },
        ],
    },
    {
        name: "Sales & Marketing",
        openings: [
            { title: "Enterprise Account Executive", location: "Remote", type: "Full-time" },
            { title: "Content Marketing Manager", location: "Remote", type: "Full-time" },
            { title: "Developer Advocate", location: "Remote", type: "Full-time" },
        ],
    },
    {
        name: "Operations",
        openings: [
            { title: "People Operations Manager", location: "Potters Bar, UK", type: "Full-time" },
            { title: "Customer Success Manager", location: "Remote", type: "Full-time" },
        ],
    },
];

export default function CareersPage() {
    const totalOpenings = departments.reduce((sum, dept) => sum + dept.openings.length, 0);

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/30 py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                            Careers
                        </Badge>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Build the <span className="text-primary">Future</span> With Us
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                            Join a team of passionate innovators transforming how software is built.
                            We're hiring across engineering, product, and more.
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-primary" />
                                <span>50+ team members</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4 text-primary" />
                                <span>Remote-first</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Briefcase className="h-4 w-4 text-primary" />
                                <span>{totalOpenings} open roles</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#7B4DD010_1px,transparent_1px),linear-gradient(to_bottom,#7B4DD010_1px,transparent_1px)] bg-[size:24px_24px]" />
            </section>

            {/* Values Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold">Our Values</h2>
                        </div>
                        <div className="grid gap-6 md:grid-cols-4">
                            {values.map((value) => (
                                <div key={value.title} className="text-center">
                                    <h3 className="font-semibold text-primary">{value.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <div className="text-center">
                            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                                Benefits
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Why You'll Love <span className="text-primary">Working Here</span>
                            </h2>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {benefits.map((benefit) => {
                                const Icon = benefit.icon;
                                return (
                                    <div
                                        key={benefit.title}
                                        className="flex items-start gap-4 border border-primary/10 p-6 hover:border-primary/30 transition-all"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/20 bg-primary/10 text-primary">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{benefit.title}</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <div className="text-center">
                            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                                Open Positions
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Find Your <span className="text-primary">Perfect Role</span>
                            </h2>
                            <p className="mt-4 text-muted-foreground">
                                {totalOpenings} positions available across all departments.
                            </p>
                        </div>

                        <div className="mt-12 space-y-8">
                            {departments.map((department) => (
                                <div key={department.name}>
                                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                        <Briefcase className="h-5 w-5 text-primary" />
                                        {department.name}
                                        <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary text-xs">
                                            {department.openings.length} open
                                        </Badge>
                                    </h3>
                                    <div className="space-y-3">
                                        {department.openings.map((job, index) => (
                                            <Link
                                                key={index}
                                                href={`/careers/${job.title.toLowerCase().replace(/\s+/g, "-")}`}
                                                className="flex items-center justify-between border border-primary/10 bg-card p-4 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                                            >
                                                <div>
                                                    <h4 className="font-medium group-hover:text-primary transition-colors">
                                                        {job.title}
                                                    </h4>
                                                    <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                                                        <span className="flex items-center gap-1">
                                                            <MapPin className="h-3 w-3" />
                                                            {job.location}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="h-3 w-3" />
                                                            {job.type}
                                                        </span>
                                                    </div>
                                                </div>
                                                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
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
                            Don't See the Right Role?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button size="lg" asChild>
                                <Link href="mailto:careers@bitrizeplus.dev">
                                    Send Your Resume
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="border-primary/20 hover:bg-primary/5">
                                <Link href="/about">Learn About Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
