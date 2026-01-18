import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Globe,
  Send,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Send us an email anytime",
    value: "hello@bitrizeplus.com",
    href: "mailto:hello@bitrizeplus.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Mon-Fri from 8am to 6pm PST",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Visit our headquarters",
    value: "San Francisco, CA",
    href: "#",
  },
];

const supportOptions = [
  {
    icon: MessageSquare,
    title: "Sales Inquiries",
    description: "Talk to our sales team about enterprise solutions and custom pricing.",
    action: "Contact Sales",
    href: "mailto:sales@bitrizeplus.com",
  },
  {
    icon: Clock,
    title: "Technical Support",
    description: "Get help with technical issues, bugs, or implementation questions.",
    action: "Get Support",
    href: "/docs",
  },
  {
    icon: Globe,
    title: "Partnerships",
    description: "Explore partnership opportunities and integrations.",
    action: "Partner With Us",
    href: "mailto:partners@bitrizeplus.com",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              Contact Us
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#7B4DD010_1px,transparent_1px),linear-gradient(to_bottom,#7B4DD010_1px,transparent_1px)] bg-[size:24px_24px]" />
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.title}
                  href={method.href}
                  className="flex items-center gap-4 border border-primary/10 p-6 hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{method.title}</h3>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                    <p className="mt-1 text-sm text-primary">{method.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Form */}
              <div className="border border-primary/10 p-8">
                <h2 className="text-2xl font-bold">Send us a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form className="mt-8 space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input
                        type="text"
                        placeholder="John"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input
                        type="text"
                        placeholder="Doe"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      type="text"
                      placeholder="Your company name"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      type="text"
                      placeholder="How can we help?"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us more about your project or question..."
                      className="border-primary/20 focus:border-primary min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Support Options */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Other Ways to Connect</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Choose the best option for your needs.
                  </p>
                </div>

                {supportOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <div
                      key={option.title}
                      className="border border-primary/10 p-6 hover:border-primary/30 hover:bg-primary/5 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/20 bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{option.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{option.description}</p>
                          <a
                            href={option.href}
                            className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
                          >
                            {option.action}
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* FAQ Link */}
                <div className="border border-primary/10 bg-primary/5 p-6">
                  <h3 className="font-semibold">Looking for answers?</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Check out our documentation and FAQ for quick answers to common questions.
                  </p>
                  <Link
                    href="/docs"
                    className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Browse Documentation
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
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
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start your free trial today and experience the power of AI-driven development.
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
