import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignIn } from "@clerk/nextjs";
import NumaindaLogo from "@/src/assets/numainda_new_logo.svg";

export default function SignInPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left Column: Brand & Showcase */}
      <div className="relative hidden h-full flex-col justify-between bg-ink p-10 text-paper lg:flex border-r border-paper/10 overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,107,107,0.18),rgba(18,20,26,0))]" />
        
        {/* Top Logo */}
        <div className="relative z-10 flex items-center">
          <Link href="/" className="inline-block transition-opacity hover:opacity-90">
            <Image src={NumaindaLogo} alt="Numainda" height={32} />
          </Link>
        </div>

        {/* Center Content */}
        <div className="relative z-10 my-auto max-w-lg space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-coral">
            Welcome Back
          </div>
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Manage your autonomous AI representatives.
          </h1>
          <p className="text-base leading-relaxed text-paper/70">
            Monitor live telephony sessions, configure knowledge bases, set up guardrails, and build real-time voice workflows all in one unified control center.
          </p>
        </div>

        {/* Bottom Testimonial */}
        <div className="relative z-10 border-t border-paper/10 pt-6">
          <blockquote className="space-y-2 border-l-2 border-coral pl-4">
            <p className="text-sm italic text-paper/85">
              &ldquo;Numainda has completely redefined how our contact center handles inbound call surges. Zero downtime, human-grade conversations.&rdquo;
            </p>
            <footer className="text-xs font-semibold uppercase tracking-wider text-coral">
              Enterprise Telephony Operations
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12 bg-background">
        {/* Mobile Header / Desktop Link */}
        <div className="flex items-center justify-between lg:justify-end">
          <div className="lg:hidden">
            <Link href="/" className="inline-block">
              <Image src={NumaindaLogo} alt="Numainda" height={26} />
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="font-semibold text-coral hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Auth Component */}
        <div className="my-auto flex w-full items-center justify-center py-8">
          <Suspense fallback={<div className="h-[420px] w-full max-w-[400px] animate-pulse rounded-xl bg-muted/60" />}>
            <SignIn fallbackRedirectUrl="/dashboard" signUpFallbackRedirectUrl="/dashboard" />
          </Suspense>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground">
          By signing in, you agree to our{" "}
          <Link href="/#terms" className="underline underline-offset-4 hover:text-foreground">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/#privacy" className="underline underline-offset-4 hover:text-foreground">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
