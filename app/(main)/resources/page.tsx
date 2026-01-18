import Link from "next/link";

const resources = [
  {
    category: "Documentation",
    items: [
      {
        title: "Getting Started Guide",
        description: "Learn how to set up your first AI agent and start building",
        href: "/docs/getting-started",
      },
      {
        title: "API Reference",
        description: "Complete API documentation for all Bitrize Plus agents",
        href: "/docs/api",
      },
      {
        title: "Integration Guides",
        description: "Connect Bitrize Plus with your existing tools and workflows",
        href: "/docs/integrations",
      },
    ],
  },
  {
    category: "Learning",
    items: [
      {
        title: "Video Tutorials",
        description: "Step-by-step video guides for common use cases",
        href: "/resources/tutorials",
      },
      {
        title: "Best Practices",
        description: "Industry best practices for AI-assisted development",
        href: "/resources/best-practices",
      },
      {
        title: "Case Studies",
        description: "See how companies are succeeding with Bitrize Plus",
        href: "/resources/case-studies",
      },
    ],
  },
  {
    category: "Community",
    items: [
      {
        title: "Developer Forum",
        description: "Connect with other developers and share knowledge",
        href: "/community/forum",
      },
      {
        title: "Discord Server",
        description: "Join our Discord for real-time discussions",
        href: "#",
      },
      {
        title: "GitHub Discussions",
        description: "Contribute to open-source projects and discussions",
        href: "#",
      },
    ],
  },
];

const featuredResources = [
  {
    title: "The Complete Guide to AI-Powered Development",
    description: "A comprehensive eBook covering everything you need to know about integrating AI agents into your development workflow.",
    type: "eBook",
    image: null,
  },
  {
    title: "Building Scalable Products with Bitrize Plus",
    description: "Watch our on-demand webinar featuring real-world examples and expert insights.",
    type: "Webinar",
    image: null,
  },
  {
    title: "2026 State of AI in Software Development",
    description: "Our annual report on AI adoption trends, challenges, and opportunities in software development.",
    type: "Report",
    image: null,
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-black dark:text-white">
            Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to get the most out of Bitrize Plus
          </p>
        </div>

        {/* Featured Resources */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-black dark:text-white">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <div
                key={resource.title}
                className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-2 text-black dark:text-white">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resource Categories */}
        <div className="max-w-6xl mx-auto">
          {resources.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-black dark:bg-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-black">
              Stay Updated
            </h2>
            <p className="text-zinc-400 dark:text-zinc-600 mb-6">
              Subscribe to our newsletter for the latest updates, tutorials, and AI development tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-zinc-700 dark:border-zinc-300 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-white dark:bg-black text-black dark:text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
