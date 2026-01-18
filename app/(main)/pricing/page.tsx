import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    price: "$49",
    period: "/month",
    features: [
      "3 AI Agents included",
      "1,000 agent actions/month",
      "Basic support",
      "Community access",
      "5 projects",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing teams and businesses",
    price: "$199",
    period: "/month",
    features: [
      "All 10 AI Agents",
      "10,000 agent actions/month",
      "Priority support",
      "API access",
      "Unlimited projects",
      "Team collaboration",
      "Advanced analytics",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: "Custom",
    period: "",
    features: [
      "All Professional features",
      "Unlimited agent actions",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment",
      "Security audit",
      "Custom training",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "What is an agent action?",
    answer: "An agent action is a single task performed by any of our AI agents, such as generating a document, analyzing code, or running a test.",
  },
  {
    question: "Can I change plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! All plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and for Enterprise plans, we also offer invoicing with net-30 terms.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-black dark:text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border p-8 ${
                plan.highlighted
                  ? "bg-black dark:bg-white border-black dark:border-white"
                  : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-2 ${
                  plan.highlighted ? "text-white dark:text-black" : "text-black dark:text-white"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? "text-zinc-400 dark:text-zinc-600" : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>
              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${
                    plan.highlighted ? "text-white dark:text-black" : "text-black dark:text-white"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`${
                    plan.highlighted ? "text-zinc-400 dark:text-zinc-600" : "text-muted-foreground"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 text-sm ${
                      plan.highlighted ? "text-zinc-300 dark:text-zinc-700" : "text-muted-foreground"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 ${
                        plan.highlighted ? "text-green-400 dark:text-green-600" : "text-green-500"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-medium transition-opacity hover:opacity-90 ${
                  plan.highlighted
                    ? "bg-white dark:bg-black text-black dark:text-white"
                    : "bg-black dark:bg-white text-white dark:text-black"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center text-black dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6"
              >
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Have questions about which plan is right for you?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Talk to Sales
          </Link>
        </div>
      </main>
    </div>
  );
}
