export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-black dark:text-white">
            About Bitrize Plus
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolutionizing software development with intelligent AI agents
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Bitrize Plus, we believe that building great software shouldn't be limited by resources, 
              expertise, or time. Our mission is to democratize software development by providing 
              intelligent AI agents that handle every stage of the product lifecycle — from initial 
              ideation to continuous improvement.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              We envision a future where anyone with an idea can bring it to life without the 
              traditional barriers of software development. By combining cutting-edge AI technology 
              with deep industry expertise, we're creating a platform that transforms how products 
              are built, launched, and scaled.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-black dark:text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Innovation First</h3>
              <p className="text-muted-foreground">
                We constantly push the boundaries of what's possible with AI to deliver solutions 
                that truly transform how software is built.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Quality Without Compromise</h3>
              <p className="text-muted-foreground">
                Every AI agent we build is designed to deliver production-ready results that meet 
                the highest standards of quality and security.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Customer Success</h3>
              <p className="text-muted-foreground">
                Your success is our success. We're committed to providing the support and resources 
                you need to achieve your goals.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Transparency</h3>
              <p className="text-muted-foreground">
                We believe in being open about how our AI works, our pricing, and our roadmap. 
                Trust is built through transparency.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center text-black dark:text-white">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 text-center">
              <div className="w-20 h-20 bg-zinc-200 dark:bg-zinc-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Sarah Chen</h3>
              <p className="text-sm text-muted-foreground">CEO & Co-Founder</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 text-center">
              <div className="w-20 h-20 bg-zinc-200 dark:bg-zinc-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Michael Torres</h3>
              <p className="text-sm text-muted-foreground">CTO & Co-Founder</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 text-center">
              <div className="w-20 h-20 bg-zinc-200 dark:bg-zinc-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Emily Watson</h3>
              <p className="text-sm text-muted-foreground">VP of Engineering</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
