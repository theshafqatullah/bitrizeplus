import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Check,
  Zap,
  Building2,
  Users,
  HelpCircle,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    price: "$49",
    period: "/month",
    badge: null,
    features: [
      "3 AI Agents included",
      "1,000 agent actions/month",
      "Basic support",
      "Community access",
      "5 projects",
      "Email support",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=starter",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing teams and businesses",
    price: "$199",
    period: "/month",
    badge: "Most Popular",
    features: [
      "All 10 AI Agents",
      "10,000 agent actions/month",
      "Priority support",
      "API access",
      "Unlimited projects",
      "Team collaboration (5 seats)",
      "Advanced analytics",
      "Custom integrations",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=professional",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: "Custom",
    period: "",
    badge: null,
    features: [
      "All Professional features",
      "Unlimited agent actions",
      "Dedicated support manager",
      "Custom integrations",
      "SLA guarantee (99.99%)",
      "On-premise deployment",
      "Security audit & compliance",
      "Custom AI model training",
      "Unlimited team seats",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "What's included in the free trial?",
    answer: "All plans come with a 14-day free trial with full access to all features. No credit card required to start.",
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing.",
  },
  {
    question: "What counts as an agent action?",
    answer: "An agent action is any task performed by an AI agent, such as generating code, running tests, or analyzing security vulnerabilities.",
  },
  {
    question: "Do you offer discounts for startups?",
    answer: "Yes! We offer 50% off for the first year for qualified startups. Contact our sales team to learn more.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and wire transfers for enterprise customers.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there are no setup fees for any plan. You only pay the monthly or annual subscription.",
  },
];

const features = [
  { name: "AI Agents", starter: "3", pro: "10", enterprise: "10+" },
  { name: "Agent Actions/mo", starter: "1,000", pro: "10,000", enterprise: "Unlimited" },
  { name: "Projects", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
  { name: "Team Seats", starter: "1", pro: "5", enterprise: "Unlimited" },
  { name: "API Access", starter: false, pro: true, enterprise: true },
  { name: "Custom Integrations", starter: false, pro: true, enterprise: true },
  { name: "Priority Support", starter: false, pro: true, enterprise: true },
  { name: "SLA Guarantee", starter: false, pro: false, enterprise: true },
  { name: "On-premise", starter: false, pro: false, enterprise: true },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              Pricing
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-primary" />
              14-day free trial
              <span className="mx-2">·</span>
              <Check className="h-4 w-4 text-primary" />
              No credit card required
              <span className="mx-2">·</span>
              <Check className="h-4 w-4 text-primary" />
              Cancel anytime
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#7B4DD010_1px,transparent_1px),linear-gradient(to_bottom,#7B4DD010_1px,transparent_1px)] bg-[size:24px_24px]" />
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col border p-8 ${plan.highlighted
                    ? "border-primary bg-primary/10 ring-2 ring-primary shadow-lg shadow-primary/20"
                    : "border-primary/20 bg-card"
                    }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground border-0">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                    <div className="mt-6">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-4 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center bg-primary/20 border border-primary/30 text-primary">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      asChild
                      size="lg"
                      className={`w-full ${plan.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : ""
                        }`}
                      variant={plan.highlighted ? "default" : "default"}
                    >
                      <Link href={plan.href}>
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                Compare Plans
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Feature <span className="text-primary">Comparison</span>
              </h2>
            </div>

            <div className="mt-12 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-primary/10">
                    <th className="py-4 text-left font-semibold">Feature</th>
                    <th className="py-4 text-center font-semibold">Starter</th>
                    <th className="py-4 text-center font-semibold text-primary">Professional</th>
                    <th className="py-4 text-center font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature) => (
                    <tr key={feature.name} className="border-b border-primary/10">
                      <td className="py-4 text-sm">{feature.name}</td>
                      <td className="py-4 text-center text-sm">
                        {typeof feature.starter === "boolean" ? (
                          feature.starter ? (
                            <Check className="mx-auto h-5 w-5 text-primary" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )
                        ) : (
                          feature.starter
                        )}
                      </td>
                      <td className="py-4 text-center text-sm bg-primary/5">
                        {typeof feature.pro === "boolean" ? (
                          feature.pro ? (
                            <Check className="mx-auto h-5 w-5 text-primary" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )
                        ) : (
                          <span className="font-medium">{feature.pro}</span>
                        )}
                      </td>
                      <td className="py-4 text-center text-sm">
                        {typeof feature.enterprise === "boolean" ? (
                          feature.enterprise ? (
                            <Check className="mx-auto h-5 w-5 text-primary" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )
                        ) : (
                          feature.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="mt-12 mx-auto max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="border border-primary/10 p-6">
                <h3 className="font-semibold flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Development?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/20 hover:bg-primary/5">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
