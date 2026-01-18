import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  Heart,
  Globe,
  Award,
  Rocket,
  Shield,
  Zap,
  Check,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible with AI to deliver solutions that truly transform how software is built.",
  },
  {
    icon: Users,
    title: "Customer Obsessed",
    description: "Every decision we make starts with our customers. Their success is our success, and we're committed to exceeding expectations.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We take the responsibility of handling our customers' code seriously. Security and privacy are foundational to everything we build.",
  },
  {
    icon: Heart,
    title: "Empathy & Inclusion",
    description: "We believe diverse perspectives lead to better products. We foster an inclusive environment where everyone can thrive.",
  },
];

const stats = [
  { value: "50K+", label: "Developers" },
  { value: "10M+", label: "Lines of Code Generated" },
  { value: "500+", label: "Enterprise Customers" },
  { value: "99.9%", label: "Uptime" },
];

const leadership = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    bio: "Former VP of Engineering at Google Cloud. 15+ years building developer tools.",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-founder",
    bio: "Ex-Principal Engineer at Microsoft. PhD in Machine Learning from Stanford.",
  },
  {
    name: "Emily Watson",
    role: "VP of Product",
    bio: "Former Head of Product at Stripe. 10+ years in developer experience.",
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    bio: "Ex-Staff Engineer at Meta. Expert in distributed systems and AI infrastructure.",
  },
];

const milestones = [
  { year: "2023", event: "Bitrize Plus founded in San Francisco" },
  { year: "2023", event: "Launched first AI agent (CodePilot)" },
  { year: "2024", event: "Series A funding ($25M)" },
  { year: "2024", event: "Expanded to 10 AI agents" },
  { year: "2025", event: "Series B funding ($80M)" },
  { year: "2025", event: "Reached 50,000+ developers" },
  { year: "2026", event: "Launched Bitrize Plus 2.0" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              About Us
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Building the Future of{" "}
              <span className="text-primary">Software Development</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              We're on a mission to democratize software development by providing intelligent AI agents
              that handle every stage of the product lifecycle.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#7B4DD010_1px,transparent_1px),linear-gradient(to_bottom,#7B4DD010_1px,transparent_1px)] bg-[size:24px_24px]" />
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                  Our Mission
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Empowering Every <span className="text-primary">Developer</span>
                </h2>
                <p className="mt-4 text-muted-foreground">
                  At Bitrize Plus, we believe that building great software shouldn't be limited by resources,
                  expertise, or time. Our mission is to democratize software development by providing
                  intelligent AI agents that handle every stage of the product lifecycle.
                </p>
                <p className="mt-4 text-muted-foreground">
                  We envision a future where anyone with an idea can bring it to life without the
                  traditional barriers of software development. By combining cutting-edge AI technology
                  with deep industry expertise, we're creating a platform that transforms how products
                  are built, launched, and scaled.
                </p>
              </div>
              <div className="relative aspect-square border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#7B4DD010_1px,transparent_1px),linear-gradient(to_bottom,#7B4DD010_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="relative flex h-32 w-32 items-center justify-center border-2 border-primary bg-white text-primary">
                  <Rocket className="h-16 w-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Drives <span className="text-primary">Us</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our values guide every decision we make and every product we build.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="border border-primary/10 bg-card p-6 hover:border-primary/30 hover:bg-primary/5 transition-all">
                  <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Leadership
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Industry veterans building the future of software development.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person) => (
              <div key={person.name} className="text-center">
                <div className="mx-auto h-32 w-32 border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary/50" />
                </div>
                <h3 className="mt-4 font-semibold">{person.name}</h3>
                <p className="text-sm text-primary">{person.role}</p>
                <p className="mt-2 text-xs text-muted-foreground">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Journey
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Milestones & <span className="text-primary">Growth</span>
            </h2>
          </div>

          <div className="mt-16 mx-auto max-w-3xl">
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-4 border border-primary/10 bg-card p-4">
                  <div className="flex h-12 w-20 shrink-0 items-center justify-center bg-primary/10 border border-primary/20 text-sm font-bold text-primary">
                    {milestone.year}
                  </div>
                  <p className="text-sm">{milestone.event}</p>
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
              Join Us on Our Mission
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're building the future of software development. Come be a part of it.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/careers">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/20 hover:bg-primary/5">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
