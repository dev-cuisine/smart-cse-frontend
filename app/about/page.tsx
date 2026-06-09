"use client";

import { MarketingLayout } from "@/components/marketing/marketing-layout";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeader } from "@/components/marketing/section-header";
import { CTABanner } from "@/components/marketing/cta-banner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  Lightbulb,
  Rocket,
  Shield,
  GraduationCap,
  BookOpen,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail,
  Building2,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Institutions" },
  { value: "10,000+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "SmartCSE was founded with a vision to digitize academic management for CSE departments.",
  },
  {
    year: "2021",
    title: "First Launch",
    description:
      "Released our first version with core features like scheduling and attendance tracking.",
  },
  {
    year: "2022",
    title: "Rapid Growth",
    description:
      "Expanded to 20+ institutions and added resource management and grading modules.",
  },
  {
    year: "2023",
    title: "Major Upgrade",
    description:
      "Introduced AI-powered features and mobile application for better accessibility.",
  },
  {
    year: "2024",
    title: "Going Global",
    description:
      "Expanded internationally with multi-language support and cloud infrastructure.",
  },
  {
    year: "2025",
    title: "Today",
    description:
      "Serving 50+ institutions with continuous innovation and feature development.",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly push boundaries to deliver cutting-edge solutions for academic management.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description:
      "Every feature we build is designed with the end-user experience in mind.",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "We prioritize data security and privacy with enterprise-grade protection.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We are passionate about transforming education through technology.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "We believe quality education tools should be accessible to everyone.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from code to customer service.",
  },
];

const team = [
  {
    name: "Dr. Aminul Islam",
    role: "Founder & CEO",
    bio: "Former professor with 15+ years in academic administration.",
    image: "/images/team-1.jpg",
  },
  {
    name: "Fatima Rahman",
    role: "CTO",
    bio: "Tech veteran with expertise in scalable educational platforms.",
    image: "/images/team-2.jpg",
  },
  {
    name: "Karim Hassan",
    role: "Head of Product",
    bio: "Product strategist focused on user experience and innovation.",
    image: "/images/team-3.jpg",
  },
  {
    name: "Nusrat Jahan",
    role: "Head of Design",
    bio: "Award-winning designer creating intuitive educational interfaces.",
    image: "/images/team-4.jpg",
  },
];

const achievements = [
  "Best EdTech Startup 2023 - Bangladesh ICT Awards",
  "Innovation in Education Award 2024",
  "Top 50 EdTech Companies in Asia",
  "ISO 27001 Security Certification",
];

const partners = [
  "Bangladesh University of Engineering and Technology",
  "Dhaka University",
  "North South University",
  "BRAC University",
  "Chittagong University",
  "Rajshahi University",
];

export default function AboutPage() {
  return (
    <MarketingLayout>
      <PageHero
        icon={Building2}
        badge="About SmartCSE"
        title={
          <>
            Transforming Academic Management{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Since 2020
            </span>
          </>
        }
        description="We are on a mission to revolutionize how CSE departments manage their academic operations through innovative technology solutions."
      />

      {/* Stats Section */}
      <section className="section-alt py-14">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center hover-lift">
                <p className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="glass-card hover-lift border-border/50">
              <CardContent className="p-8">
                <div className="icon-box-lg mb-6">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower educational institutions with cutting-edge
                  technology that simplifies academic management, enhances
                  communication, and improves the overall learning experience
                  for students and educators alike.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-card hover-lift border-border/50">
              <CardContent className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <Eye className="h-7 w-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading academic management platform globally,
                  setting new standards for how educational institutions operate
                  and interact with students in the digital age.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                badge="Our Story"
                title="From Classroom Frustration to Digital Solution"
                align="left"
                className="mb-8"
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  SmartCSE was born out of a real need experienced by educators
                  and students in CSE departments across Bangladesh. Our
                  founders, having spent years in academia, witnessed firsthand
                  the challenges of managing classes, tracking attendance, and
                  sharing resources using outdated methods.
                </p>
                <p>
                  In 2020, we set out to create a comprehensive solution that
                  would address these pain points while being accessible and
                  easy to use. What started as a simple scheduling tool has
                  evolved into a full-fledged academic management platform.
                </p>
                <p>
                  Today, SmartCSE serves over 50 institutions, helping thousands
                  of students and educators streamline their academic journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-accent/10 p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-6 hover-lift">
                    <GraduationCap className="h-10 w-10 text-primary mb-4" />
                    <p className="font-semibold">For Students</p>
                    <p className="text-sm text-muted-foreground">
                      Easy access to everything
                    </p>
                  </div>
                  <div className="glass-card p-6 hover-lift">
                    <BookOpen className="h-10 w-10 text-accent mb-4" />
                    <p className="font-semibold">For Teachers</p>
                    <p className="text-sm text-muted-foreground">
                      Simplified management
                    </p>
                  </div>
                  <div className="glass-card col-span-2 p-6 hover-lift">
                    <Rocket className="h-10 w-10 text-primary mb-4" />
                    <p className="font-semibold">Continuous Innovation</p>
                    <p className="text-sm text-muted-foreground">
                      Always improving and adding new features
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionHeader
            badge="Our Journey"
            badgeVariant="accent"
            title="Milestones Along the Way"
            description="From a small startup to serving institutions nationwide, here is our journey."
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`hidden md:block w-1/2 ${
                      index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                    }`}
                  >
                    <Card className="inline-block border-border/50">
                      <CardContent className="p-6">
                        <p className="text-sm text-primary font-semibold mb-2">
                          {item.year}
                        </p>
                        <h3 className="font-bold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full border-2 border-background bg-primary -translate-x-1/2 mt-6 ring-4 ring-primary/20" />
                  <div className="md:hidden ml-12">
                    <Card className="border-border/50">
                      <CardContent className="p-6">
                        <p className="text-sm text-primary font-semibold mb-2">
                          {item.year}
                        </p>
                        <h3 className="font-bold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionHeader
            badge="Our Values"
            title="What Drives Us"
            description="Our core values guide every decision we make and every feature we build."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card
                key={index}
                className="glass-card hover-lift border-border/50"
              >
                <CardContent className="p-6">
                  <div className="icon-box mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionHeader
            badge="Our Team"
            badgeVariant="accent"
            title="Meet the People Behind SmartCSE"
            description="A dedicated team of educators, technologists, and innovators working to transform academic management."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card
                key={index}
                className="glass-card hover-lift border-border/50 text-center"
              >
                <CardContent className="p-6">
                  <div className="relative mx-auto mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-primary/20 bg-gradient-to-br from-primary/20 to-accent/20">
                    <Users className="h-10 w-10 text-primary/60" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-3">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                badge="Recognition"
                title="Awards & Achievements"
                description="Our commitment to excellence has been recognized by industry leaders and organizations."
                align="left"
                className="mb-8"
              />
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Award className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="glass-card flex items-center justify-center p-8 hover-lift"
                >
                  <Award className="h-16 w-16 text-primary/30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionHeader
            badge="Our Partners"
            badgeVariant="accent"
            title="Trusted by Leading Institutions"
            description="We are proud to partner with some of the most prestigious educational institutions in Bangladesh."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="glass-card hover-lift border-border/50"
              >
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="icon-box shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <p className="font-medium text-foreground">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              badge="Join Our Team"
              title="Want to Make a Difference in Education?"
              description="We are always looking for talented individuals who share our passion for transforming education through technology. Check out our open positions."
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact HR</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Transform Your Institution?"
        description="Join the growing community of institutions using SmartCSE to modernize their academic management."
        actions={[
          { label: "Get Started Free", href: "/register" },
          { label: "Schedule a Demo", href: "/contact", variant: "outline" },
        ]}
      />
    </MarketingLayout>
  );
}
