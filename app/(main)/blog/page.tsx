import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    Calendar,
    Clock,
    User,
    Tag,
    TrendingUp,
} from "lucide-react";

const featuredPost = {
    title: "Introducing Bitrize Plus 2.0: The Future of AI-Powered Development",
    excerpt: "We're excited to announce the biggest update to Bitrize Plus yet. With 10 new AI agents and revolutionary capabilities, 2.0 transforms how teams build software.",
    author: "Sarah Chen",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Product",
    image: null,
    slug: "/blog/introducing-bitrize-plus-2",
};

const posts = [
    {
        title: "How AI Agents Are Transforming the SDLC",
        excerpt: "Explore how AI agents are revolutionizing every stage of the software development lifecycle, from ideation to deployment.",
        author: "Michael Rodriguez",
        date: "January 12, 2025",
        readTime: "5 min read",
        category: "Engineering",
        slug: "/blog/ai-agents-sdlc",
    },
    {
        title: "Best Practices for AI-Assisted Code Reviews",
        excerpt: "Learn how to leverage AI for more effective code reviews while maintaining code quality and team collaboration.",
        author: "Emily Watson",
        date: "January 10, 2025",
        readTime: "6 min read",
        category: "Best Practices",
        slug: "/blog/ai-code-reviews",
    },
    {
        title: "Security First: How SecureSense Agent Protects Your Code",
        excerpt: "A deep dive into how our SecureSense Agent identifies vulnerabilities and ensures your codebase stays secure.",
        author: "David Kim",
        date: "January 8, 2025",
        readTime: "7 min read",
        category: "Security",
        slug: "/blog/securesense-deep-dive",
    },
    {
        title: "From Idea to MVP in 48 Hours with IdeaForge AI",
        excerpt: "A case study on how a startup used IdeaForge AI to validate their product idea and build an MVP in record time.",
        author: "Sarah Chen",
        date: "January 5, 2025",
        readTime: "10 min read",
        category: "Case Study",
        slug: "/blog/idea-to-mvp",
    },
    {
        title: "The Complete Guide to Test Automation with TestGuard AI",
        excerpt: "Everything you need to know about automating your testing workflow with AI-powered test generation.",
        author: "Michael Rodriguez",
        date: "January 3, 2025",
        readTime: "12 min read",
        category: "Tutorial",
        slug: "/blog/testguard-complete-guide",
    },
    {
        title: "Scaling Your Infrastructure with ScaleOps Agent",
        excerpt: "How to use ScaleOps Agent to optimize your cloud infrastructure and reduce costs by up to 60%.",
        author: "David Kim",
        date: "December 28, 2024",
        readTime: "8 min read",
        category: "DevOps",
        slug: "/blog/scaling-with-scaleops",
    },
];

const categories = [
    { name: "All Posts", count: 24 },
    { name: "Product", count: 6 },
    { name: "Engineering", count: 8 },
    { name: "Case Study", count: 4 },
    { name: "Tutorial", count: 5 },
    { name: "Security", count: 3 },
];

export default function BlogPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/30 py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                            Blog
                        </Badge>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Insights & <span className="text-primary">Updates</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                            Stay up to date with the latest news, tutorials, and best practices from the Bitrize Plus team.
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#7B4DD010_1px,transparent_1px),linear-gradient(to_bottom,#7B4DD010_1px,transparent_1px)] bg-[size:24px_24px]" />
            </section>

            {/* Featured Post */}
            <section className="py-12 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <Link href={featuredPost.slug} className="group block">
                            <div className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12 hover:border-primary/40 transition-all">
                                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                    <Badge variant="secondary" className="bg-primary/10 border border-primary/20 text-primary">
                                        <TrendingUp className="mr-1 h-3 w-3" />
                                        Featured
                                    </Badge>
                                    <span className="flex items-center gap-1">
                                        <Tag className="h-4 w-4" />
                                        {featuredPost.category}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {featuredPost.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {featuredPost.readTime}
                                    </span>
                                </div>
                                <h2 className="mt-4 text-2xl font-bold md:text-3xl group-hover:text-primary transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="mt-3 text-muted-foreground">{featuredPost.excerpt}</p>
                                <div className="mt-6 flex items-center gap-3">
                                    <div className="h-10 w-10 border border-primary/20 bg-primary/10 flex items-center justify-center">
                                        <User className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="font-medium">{featuredPost.author}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-12 lg:grid-cols-4">
                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-24">
                                    <h3 className="font-semibold mb-4">Categories</h3>
                                    <ul className="space-y-2">
                                        {categories.map((category) => (
                                            <li key={category.name}>
                                                <Link
                                                    href={`/blog?category=${category.name.toLowerCase().replace(" ", "-")}`}
                                                    className="flex items-center justify-between py-2 text-sm hover:text-primary transition-colors"
                                                >
                                                    <span>{category.name}</span>
                                                    <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                                                        {category.count}
                                                    </Badge>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 border border-primary/10 bg-primary/5 p-4">
                                        <h4 className="font-semibold">Subscribe to Newsletter</h4>
                                        <p className="mt-2 text-xs text-muted-foreground">
                                            Get the latest posts delivered to your inbox.
                                        </p>
                                        <div className="mt-4">
                                            <input
                                                type="email"
                                                placeholder="your@email.com"
                                                className="w-full border border-primary/20 px-3 py-2 text-sm"
                                            />
                                            <Button size="sm" className="mt-2 w-full">
                                                Subscribe
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Posts Grid */}
                            <div className="lg:col-span-3">
                                <div className="grid gap-8 md:grid-cols-2">
                                    {posts.map((post) => (
                                        <Link key={post.slug} href={post.slug} className="group block">
                                            <article className="h-full border border-primary/10 p-6 hover:border-primary/30 hover:bg-primary/5 transition-all">
                                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                                                        {post.category}
                                                    </Badge>
                                                    <span>{post.readTime}</span>
                                                </div>
                                                <h3 className="mt-3 font-semibold group-hover:text-primary transition-colors">
                                                    {post.title}
                                                </h3>
                                                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                                                    {post.excerpt}
                                                </p>
                                                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <User className="h-3 w-3" />
                                                        {post.author}
                                                    </span>
                                                    <span>{post.date}</span>
                                                </div>
                                            </article>
                                        </Link>
                                    ))}
                                </div>

                                {/* Load More */}
                                <div className="mt-12 text-center">
                                    <Button variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary/5">
                                        Load More Posts
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
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
                            Want to Contribute?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We're always looking for guest writers to share their expertise with our community.
                        </p>
                        <div className="mt-10">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Become a Writer
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
