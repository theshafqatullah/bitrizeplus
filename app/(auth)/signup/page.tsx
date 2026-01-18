"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Eye, EyeOff, Check } from "lucide-react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log("Sign up:", { email, password });
  };

  // Password strength indicators
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="mt-2 text-muted-foreground">
          Start your 14-day free trial. No credit card required.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-11"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-11 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Password requirements */}
          {password.length > 0 && (
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className={`flex h-4 w-4 items-center justify-center ${hasMinLength ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                  {hasMinLength && <Check className="h-3 w-3" />}
                </div>
                <span className={hasMinLength ? "text-foreground" : "text-muted-foreground"}>
                  At least 8 characters
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className={`flex h-4 w-4 items-center justify-center ${hasUppercase ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                  {hasUppercase && <Check className="h-3 w-3" />}
                </div>
                <span className={hasUppercase ? "text-foreground" : "text-muted-foreground"}>
                  One uppercase letter
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className={`flex h-4 w-4 items-center justify-center ${hasNumber ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                  {hasNumber && <Check className="h-3 w-3" />}
                </div>
                <span className={hasNumber ? "text-foreground" : "text-muted-foreground"}>
                  One number
                </span>
              </div>
            </div>
          )}
        </div>

        <Button type="submit" className="w-full h-11">
          Create Account
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        By creating an account, you agree to our{" "}
        <Link href="/terms" className="text-primary hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/signin" className="text-primary font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
