"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const products = [
  {
    name: "IdeaForge AI",
    description: "Turn raw ideas into validated software concepts",
    href: "/products/ideaforge-ai",
  },
  {
    name: "SpecGen Agent",
    description: "Convert ideas into technical & business specs",
    href: "/products/specgen-agent",
  },
  {
    name: "UXMind Agent",
    description: "Design product experiences with AI",
    href: "/products/uxmind-agent",
  },
  {
    name: "CodePilot AI",
    description: "Multi-agent coding system",
    href: "/products/codepilot-ai",
  },
  {
    name: "AutoDevOps Agent",
    description: "Automated CI/CD pipeline setup",
    href: "/products/autodevops-agent",
  },
  {
    name: "TestGuard AI",
    description: "Intelligent testing automation",
    href: "/products/testguard-ai",
  },
  {
    name: "SecureSense Agent",
    description: "Security analysis and compliance",
    href: "/products/securesense-agent",
  },
  {
    name: "LaunchMate AI",
    description: "Deployment and release management",
    href: "/products/launchmate-ai",
  },
  {
    name: "ScaleOps Agent",
    description: "Infrastructure scaling and optimization",
    href: "/products/scaleops-agent",
  },
  {
    name: "ProductBrain AI",
    description: "Continuous improvement and analytics",
    href: "/products/productbrain-ai",
  },
];

const navigation = [
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
  { name: "Docs", href: "/docs" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center bg-primary text-primary-foreground font-bold text-sm">
            B+
          </div>
          <span className="text-xl font-bold">Bitrize <span className="text-primary">Plus</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-primary">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-2 p-4 md:grid-cols-2">
                    {products.map((product) => (
                      <li key={product.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={product.href}
                            className="block select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/5 hover:text-primary focus:bg-primary/5 focus:text-primary"
                          >
                            <div className="text-sm font-medium leading-none">
                              {product.name}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {product.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button variant="ghost" asChild className="hover:text-primary hover:bg-primary/5">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-primary/10">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-primary">Products</p>
              <div className="grid grid-cols-2 gap-2">
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    className="block p-2 text-sm hover:bg-primary/5 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t border-primary/10 pt-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm font-medium hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-primary/10 pt-4 flex flex-col gap-2">
              <Button variant="outline" asChild className="w-full border-primary/30 hover:bg-primary/5">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
