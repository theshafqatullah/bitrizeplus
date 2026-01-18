import Link from "next/link";

const featuredPost = {
  title: "Introducing Bitrize Plus 2.0: The Future of AI-Powered Development",
  excerpt: "We're excited to announce the biggest update to Bitrize Plus yet, featuring enhanced AI agents, improved collaboration tools, and seamless integrations.",
  date: "January 15, 2026",
  author: "Sarah Chen",
  category: "Product",
  readTime: "5 min read",
};

const posts = [
  {
    title: "How AI Agents Are Transforming the Software Development Lifecycle",
    excerpt: "Explore how intelligent agents are automating tasks across ideation, development, testing, and deployment.",
    date: "January 12, 2026",
    author: "Michael Torres",
    category: "Industry",
    readTime: "8 min read",
  },
  {
    title: "Best Practices for Working with CodePilot AI",
    excerpt: "Learn how to get the most out of our multi-agent coding system with these expert tips and workflows.",
    date: "January 10, 2026",
    author: "Emily Watson",
    category: "Tutorial",
    readTime: "6 min read",
  },
  {
    title: "Security-First Development with SecureSense Agent",
    excerpt: "Discover how our security-focused AI agents can help you build more secure applications from day one.",
    date: "January 8, 2026",
    author: "David Kim",
    category: "Security",
    readTime: "7 min read",
  },
  {
    title: "Case Study: How TechStart Reduced Development Time by 60%",
    excerpt: "See how a growing startup leveraged Bitrize Plus to accelerate their product development cycle.",
    date: "January 5, 2026",
    author: "Jessica Lee",
    category: "Case Study",
    readTime: "10 min read",
  },
  {
    title: "The Complete Guide to AI-Assisted Testing",
    excerpt: "Everything you need to know about using TestGuard AI for automated testing and quality assurance.",
    date: "January 2, 2026",
    author: "Alex Johnson",
    category: "Tutorial",
    readTime: "12 min read",
  },
  {
    title: "2025 in Review: The Year of AI in Software Development",
    excerpt: "A look back at the major trends and breakthroughs that shaped AI-assisted development in 2025.",
    date: "December 28, 2025",
    author: "Sarah Chen",
    category: "Industry",
    readTime: "9 min read",
  },
];

const categories = ["All", "Product", "Tutorial", "Industry", "Case Study", "Security"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-black dark:text-white">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and news from the Bitrize Plus team
          </p>
        </div>

        {/* Featured Post */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  {featuredPost.category}
                </span>
                <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
                <span className="text-sm font-medium text-black dark:text-white">
                  {featuredPost.author}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "bg-white dark:bg-zinc-900 text-black dark:text-white border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="h-40 bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black dark:text-white line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-xs font-medium text-black dark:text-white">
                      {post.author}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-black dark:border-white text-black dark:text-white rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
            Load More Posts
          </button>
        </div>
      </main>
    </div>
  );
}
