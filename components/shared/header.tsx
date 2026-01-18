"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HorizontalLogo from "@/components/shared/HorizontalLogo";
import {
  Menu,
  X,
  ChevronDown,
  Lightbulb,
  FileText,
  Palette,
  Brain,
  Code2,
  TestTube2,
  GitBranch,
  Shield,
  Rocket,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    name: "IdeaForge AI",
    description: "Turn raw ideas into validated software concepts",
    href: "/products/ideaforge-ai",
    icon: Lightbulb,
    stage: "Ideation",
  },
  {
    name: "SpecGen Agent",
    description: "Convert ideas into technical & business specs",
    href: "/products/specgen-agent",
    icon: FileText,
    stage: "Requirements",
  },
  {
    name: "UXMind Agent",
    description: "Design product experiences with AI",
    href: "/products/uxmind-agent",
    icon: Palette,
    stage: "Design",
  },
  {
    name: "ProductBrain AI",
    description: "Strategic product planning and roadmapping",
    href: "/products/productbrain-ai",
    icon: Brain,
    stage: "Planning",
  },
  {
    name: "CodePilot AI",
    description: "Multi-agent coding system",
    href: "/products/codepilot-ai",
    icon: Code2,
    stage: "Development",
  },
  {
    name: "TestGuard AI",
    description: "Intelligent testing automation",
    href: "/products/testguard-ai",
    icon: TestTube2,
    stage: "Testing",
  },
  {
    name: "AutoDevOps Agent",
    description: "Automated CI/CD pipeline setup",
    href: "/products/autodevops-agent",
    icon: GitBranch,
    stage: "CI/CD",
  },
  {
    name: "SecureSense Agent",
    description: "Security analysis and compliance",
    href: "/products/securesense-agent",
    icon: Shield,
    stage: "Security",
  },
  {
    name: "LaunchMate AI",
    description: "Deployment and release management",
    href: "/products/launchmate-ai",
    icon: Rocket,
    stage: "Launch",
  },
  {
    name: "ScaleOps Agent",
    description: "Infrastructure scaling and optimization",
    href: "/products/scaleops-agent",
    icon: BarChart3,
    stage: "Scale",
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
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProductsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="border-b border-primary/10">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <HorizontalLogo className="h-8 w-auto text-foreground" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {/* Products Dropdown Trigger */}
            <button
              ref={buttonRef}
              onClick={() => setProductsOpen(!productsOpen)}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors",
                productsOpen ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              Products
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  productsOpen && "rotate-180"
                )}
              />
            </button>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setProductsOpen(false)}
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
            <Button asChild>
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
      </div>

      {/* Products Dropdown */}
      <div
        ref={dropdownRef}
        className={cn(
          "hidden lg:block absolute left-1/2 -translate-x-1/2 w-auto bg-background border border-primary/10 shadow-lg transition-all duration-200 origin-top",
          productsOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        )}
      >
        <div className="p-4">
          <div className="grid grid-cols-2 gap-1">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.name}
                  href={product.href}
                  onClick={() => setProductsOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{product.name}</span>
                </Link>
              );
            })}
          </div>
          <div className="mt-3 pt-3 border-t border-primary/10">
            <Link
              href="/products"
              onClick={() => setProductsOpen(false)}
              className="flex items-center justify-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay when dropdown is open */}
      {productsOpen && (
        <div
          className="hidden lg:block fixed inset-0 bg-black/20 z-[-1]"
          style={{ top: "64px" }}
          onClick={() => setProductsOpen(false)}
        />
      )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-primary/10 bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-primary">Products</p>
              <div className="grid grid-cols-2 gap-2">
                {products.map((product) => {
                  const Icon = product.icon;
                  return (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="flex items-center gap-2 p-2 text-sm hover:bg-primary/5 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      {product.name}
                    </Link>
                  );
                })}
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
              <Button variant="outline" asChild className="w-full border-primary/20 hover:bg-primary/5">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
