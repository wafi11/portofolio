import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Button } from "@/components/ui/button";
import { URL_GITHUB, URL_LINKEDIN } from "@/contants";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function BannerComponent() {
  return (
    <SectionContainer
      id="intro"
      minFullscreen={true}
      className="relative min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute right-10 top-20 h-72 w-72 animate-pulse rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-96 w-96 animate-pulse rounded-full bg-primary/5 blur-3xl delay-700" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">
              Available for Opportunities
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Hello, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary via-green-400 to-emerald-500 bg-clip-text text-transparent">
                Wafiuddin Wafiq
              </span>
            </h1>
            <p className="text-lg font-semibold text-muted-foreground md:text-3xl">
              Developer & DB Administrator
            </p>
          </div>

          {/* Description */}
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Passionate about creating innovative solutions and bringing ideas to
            life through code. Let&apos;s build something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" asChild className="group rounded-none">
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-none "
            >
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <span className="text-sm text-muted-foreground">Connect:</span>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" asChild>
                <Link href={URL_GITHUB}>
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href={URL_LINKEDIN}>
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Content - Visual Element */}
        <div className="relative hidden lg:block">
          <div className="relative aspect-square">
            {/* Placeholder for image/illustration */}
            <div className="absolute inset-0 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm">
              <div className="flex h-full items-center justify-center">
                <div className="space-y-4 text-center">
                  <div className="mx-auto h-48 w-48 rounded-full border-4 border-primary/30 bg-gradient-to-br from-primary/20 to-primary/5" />
                  <p className="text-sm text-muted-foreground">
                    Your photo or illustration here
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -right-4 top-12 animate-float rounded-lg border border-primary/20 bg-card/80 p-4 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-lg">💻</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">Clean Code</p>
                  <p className="text-xs text-muted-foreground">Always</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 bottom-12 animate-float rounded-lg border border-primary/20 bg-card/80 p-4 shadow-xl backdrop-blur-sm delay-300">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-lg">🚀</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">Fast Delivery</p>
                  <p className="text-xs text-muted-foreground">Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
