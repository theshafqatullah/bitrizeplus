import Link from "next/link";

const docSections = [
  {
    title: "Getting Started",
    description: "Learn the basics and set up your first project",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Quick Start Guide", href: "/docs/quick-start" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Authentication", href: "/docs/authentication" },
    ],
  },
  {
    title: "AI Agents",
    description: "Detailed documentation for each AI agent",
    items: [
      { title: "IdeaForge AI", href: "/docs/agents/ideaforge" },
      { title: "SpecGen Agent", href: "/docs/agents/specgen" },
      { title: "UXMind Agent", href: "/docs/agents/uxmind" },
      { title: "CodePilot AI", href: "/docs/agents/codepilot" },
      { title: "AutoDevOps Agent", href: "/docs/agents/autodevops" },
      { title: "TestGuard AI", href: "/docs/agents/testguard" },
      { title: "SecureSense Agent", href: "/docs/agents/securesense" },
      { title: "LaunchMate AI", href: "/docs/agents/launchmate" },
      { title: "ScaleOps Agent", href: "/docs/agents/scaleops" },
      { title: "ProductBrain AI", href: "/docs/agents/productbrain" },
    ],
  },
  {
    title: "API Reference",
    description: "Complete API documentation",
    items: [
      { title: "REST API Overview", href: "/docs/api/overview" },
      { title: "Authentication", href: "/docs/api/authentication" },
      { title: "Agents API", href: "/docs/api/agents" },
      { title: "Projects API", href: "/docs/api/projects" },
      { title: "Webhooks", href: "/docs/api/webhooks" },
      { title: "Rate Limits", href: "/docs/api/rate-limits" },
    ],
  },
  {
    title: "Integrations",
    description: "Connect Bitrize Plus with your tools",
    items: [
      { title: "GitHub Integration", href: "/docs/integrations/github" },
      { title: "GitLab Integration", href: "/docs/integrations/gitlab" },
      { title: "Jira Integration", href: "/docs/integrations/jira" },
      { title: "Slack Integration", href: "/docs/integrations/slack" },
      { title: "VS Code Extension", href: "/docs/integrations/vscode" },
    ],
  },
];

const popularTopics = [
  "How to create your first project",
  "Setting up CI/CD with AutoDevOps",
  "Using CodePilot for React development",
  "Configuring security scans",
  "API authentication best practices",
  "Webhook configuration guide",
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-black dark:text-white">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Everything you need to build with Bitrize Plus
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-6 py-4 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/docs/quick-start"
              className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">Quick Start</h3>
              <p className="text-sm text-blue-100">Get up and running in 5 minutes</p>
            </Link>
            <Link
              href="/docs/api/overview"
              className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">API Reference</h3>
              <p className="text-sm text-purple-100">Explore the complete API</p>
            </Link>
            <Link
              href="/docs/agents/codepilot"
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">Agent Guides</h3>
              <p className="text-sm text-green-100">Learn how to use each agent</p>
            </Link>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {docSections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{section.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 hover:shadow-md transition-shadow"
                      >
                        <span className="text-black dark:text-white font-medium">
                          {item.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Popular Topics */}
              <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
                <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
                  Popular Topics
                </h3>
                <ul className="space-y-3">
                  {popularTopics.map((topic) => (
                    <li key={topic}>
                      <Link
                        href="#"
                        className="text-sm text-muted-foreground hover:text-black dark:hover:text-white transition-colors"
                      >
                        {topic}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Need Help */}
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                  Need Help?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Can't find what you're looking for?
                </p>
                <div className="space-y-2">
                  <Link
                    href="/contact"
                    className="block text-sm text-blue-600 hover:underline"
                  >
                    Contact Support
                  </Link>
                  <Link
                    href="#"
                    className="block text-sm text-blue-600 hover:underline"
                  >
                    Join Discord
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
