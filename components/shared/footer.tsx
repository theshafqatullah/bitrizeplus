import Link from "next/link";
import HorizontalLogo from "@/components/shared/HorizontalLogo";

const footerLinks = {
  products: [
    { name: "IdeaForge AI", href: "/products/ideaforge-ai" },
    { name: "SpecGen Agent", href: "/products/specgen-agent" },
    { name: "UXMind Agent", href: "/products/uxmind-agent" },
    { name: "CodePilot AI", href: "/products/codepilot-ai" },
    { name: "AutoDevOps Agent", href: "/products/autodevops-agent" },
    { name: "TestGuard AI", href: "/products/testguard-ai" },
    { name: "SecureSense Agent", href: "/products/securesense-agent" },
    { name: "LaunchMate AI", href: "/products/launchmate-ai" },
    { name: "ScaleOps Agent", href: "/products/scaleops-agent" },
    { name: "ProductBrain AI", href: "/products/productbrain-ai" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Resources", href: "/resources" },
    { name: "Pricing", href: "/pricing" },
    { name: "Support", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/bitrizeplus",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/bitrizeplus",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/bitrizeplus",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <HorizontalLogo className="h-8 w-auto text-foreground" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI-powered software development lifecycle platform. Build better software, faster.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-border text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Products
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.products.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Products Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              More Products
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.products.slice(5).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bitrize Plus, Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
