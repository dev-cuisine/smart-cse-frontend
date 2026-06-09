"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2, GraduationCap, BookOpen, Users, BarChart3 } from "lucide-react";
import { FadeIn, ScaleIn, CountUp } from "@/components/ui/motion";

const highlights = [
  "Real-time Class Scheduling",
  "Automated Attendance Tracking",
  "Resource Sharing Platform",
  "Secure Grade Management",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="marketing-mesh absolute inset-0 -z-10" />
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/8 blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <FadeIn delay={0}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="font-medium text-foreground/80">
                  University of Barishal — CSE Department
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Streamline Your{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Academic Journey
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mb-8 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
                A comprehensive platform designed to simplify class scheduling,
                attendance tracking, resource sharing, and communication for
                students, teachers, and administrators.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button size="lg" asChild className="gap-2 shadow-lg shadow-primary/20 hover-lift">
                  <Link href="/register">
                    Get Started Free
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-background/80 backdrop-blur-sm hover-lift"
                  onClick={() =>
                    window.open(
                      "https://youtu.be/cySVml6e_Fc?si=VAdKlyQrSkCGfO2v",
                      "_blank",
                    )
                  }
                >
                  <Play className="h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mx-auto grid max-w-md grid-cols-2 gap-3 lg:mx-0">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-border/50 bg-card/60 px-3 py-2.5 text-sm backdrop-blur-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="relative hidden lg:block">
            <ScaleIn delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />

                <div className="glass-card relative overflow-hidden p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Dashboard Preview</p>
                      <p className="text-lg font-bold text-foreground">SmartCSE Portal</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  <div className="mb-4 grid grid-cols-2 gap-3">
                    {[
                      { icon: Users, label: "Students", value: "500+", color: "text-primary" },
                      { icon: BookOpen, label: "Courses", value: "50+", color: "text-accent" },
                      { icon: BarChart3, label: "Attendance", value: "92%", color: "text-primary" },
                      { icon: CheckCircle2, label: "Uptime", value: "99.9%", color: "text-accent" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-border/50 bg-secondary/40 p-4"
                      >
                        <stat.icon className={`mb-2 h-5 w-5 ${stat.color}`} />
                        <p className="text-xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-border">
                        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary to-accent" />
                      </div>
                      <span className="text-sm font-medium text-foreground">75% Complete</span>
                    </div>
                  </div>
                </div>

                <FadeIn delay={0.5} direction="left">
                  <div className="absolute -bottom-5 -left-5 animate-float rounded-xl border border-border/50 bg-card p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          <CountUp end={10000} suffix="+" />
                        </p>
                        <p className="text-xs text-muted-foreground">Active Users</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </section>
  );
}
