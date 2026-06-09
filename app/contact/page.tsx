"use client";

import React from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useState } from "react";
import { MarketingLayout } from "@/components/marketing/marketing-layout";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeader } from "@/components/marketing/section-header";
import { CTABanner } from "@/components/marketing/cta-banner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Headphones,
  FileQuestion,
  Building,
  Send,
  CheckCircle2,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Calendar,
  Users,
  Zap,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Level 4, Tower A", "Dhaka Tech Park", "Dhaka 1212, Bangladesh"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+880 1700-000000", "+880 2-0000000", "Toll Free: 16000"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "info@smartcse.com",
      "support@smartcse.com",
      "sales@smartcse.com",
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      "Sunday - Thursday: 9AM - 6PM",
      "Friday: 10AM - 4PM",
      "Saturday: Closed",
    ],
  },
];

const supportOptions = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Get instant help from our support team through live chat.",
    action: "Start Chat",
  },
  {
    icon: Headphones,
    title: "Phone Support",
    description: "Speak directly with our technical support specialists.",
    action: "Call Now",
  },
  {
    icon: FileQuestion,
    title: "Help Center",
    description: "Browse our knowledge base for quick answers.",
    action: "Visit Help Center",
  },
  {
    icon: Building,
    title: "Enterprise",
    description: "Custom solutions for large institutions.",
    action: "Contact Sales",
  },
];

const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Typical implementation takes 2-4 weeks depending on the size of your institution and customization needs.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 30-day free trial with full access to all features. No credit card required.",
  },
  {
    question: "Can SmartCSE integrate with existing systems?",
    answer:
      "Absolutely. We provide APIs and support for integration with most common institutional systems.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer 24/7 email support, live chat during business hours, and phone support for enterprise customers.",
  },
];

const offices = [
  {
    city: "Dhaka",
    type: "Headquarters",
    address: "Level 4, Tower A, Dhaka Tech Park",
    mapLink:
      "https://www.google.com/maps/dir/?api=1&destination=Dhaka%20Tech%20Park%2C%20Dhaka%2C%20Bangladesh",
  },
  {
    city: "Chittagong",
    type: "Regional Office",
    address: "Suite 201, Business Center, GEC Circle",
    mapLink:
      "https://www.google.com/maps/dir/?api=1&destination=GEC%20Circle%2C%20Chattogram%2C%20Bangladesh",
  },
  {
    city: "Sylhet",
    type: "Sales Office",
    address: "Floor 3, IT Tower, Zindabazar",
    mapLink:
      "https://www.google.com/maps/dir/?api=1&destination=Zindabazar%2C%20Sylhet%2C%20Bangladesh",
  },
];

const demoFeatures = [
  "Personalized walkthrough of all features",
  "Q&A session with product experts",
  "Custom pricing discussion",
  "Implementation planning",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const promise = emailjs.send(
    process.env.NEXT_PUBLIC_SERVICE_ID as string,
    process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
    {
      from_name: formData.name || "No Name",
      from_email: formData.email || "No Email",
      phone: formData.phone || "N/A",
      institution: formData.institution || "N/A",
      subject: formData.subject || "General Inquiry",
      message: formData.message || "No message",
    },
    process.env.NEXT_PUBLIC_PUBLIC_KEY as string
  );

  toast.promise(promise, {
    loading: "Sending message...",
    success: "Message sent successfully!",
    error: "Failed to send message",
  });

  try {
    await promise;

    setIsSubmitted(true);

    // FORM RESET
    setFormData({
      name: "",
      email: "",
      phone: "",
      institution: "",
      subject: "",
      message: "",
    });

  } catch {}
};


  return (
    <MarketingLayout>
      <PageHero
        icon={MessageCircle}
        badge="Contact Us"
        title={
          <>
            {"We'd Love to"}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hear From You
            </span>
          </>
        }
        description="Have questions about SmartCSE? Want to schedule a demo? Our team is here to help you transform your academic management."
      />

      {/* Contact Info Cards */}
      <section className="section-alt py-14">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="glass-card hover-lift border-border/50"
              >
                <CardContent className="p-6">
                  <div className="icon-box mb-4">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <SectionHeader
                badge="Send a Message"
                badgeVariant="accent"
                title="Get in Touch"
                description="Fill out the form below and our team will get back to you within 24 hours."
                align="left"
                className="mb-8"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution Name</Label>
                    <Input
                      id="institution"
                      placeholder="Enter institution name"
                      value={formData.institution}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          institution: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, subject: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="demo">Request a Demo</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="pricing">
                        Pricing Information
                      </SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Support Options */}
            <div>
              <SectionHeader
                badge="Support Options"
                title="Other Ways to Reach Us"
                description="Choose the support channel that works best for you."
                align="left"
                className="mb-8"
              />

              <div className="space-y-3">
                {supportOptions.map((option, index) => (
                  <Card
                    key={index}
                    className="glass-card group cursor-pointer border-border/50 hover-lift"
                  >
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="icon-box-lg shrink-0 group-hover:bg-primary/20">
                        <option.icon className="h-7 w-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-1">
                          {option.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {option.description}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        {option.action}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Demo Section */}
      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                badge="Book a Demo"
                badgeVariant="accent"
                title="See SmartCSE in Action"
                description="Schedule a personalized demo with our product experts and discover how SmartCSE can transform your institution."
                align="left"
                className="mb-8"
              />
              <div className="space-y-4 mb-8">
                {demoFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" asChild>
                <Link href="/register">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-accent/10 p-8">
                <Card className="glass-card shadow-xl">
                  <CardHeader>
                    <CardTitle>Demo Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>Duration: 30-45 minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Personalized for your team</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-primary" />
                      <span>Live Q&A session included</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionHeader
            badge="Our Offices"
            title="Visit Us in Person"
            description="We have offices across Bangladesh to serve you better."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {offices.map((office, index) => (
              <Card
                key={index}
                className="glass-card hover-lift border-border/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mb-3">
                    {office.type}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {office.city}
                  </h3>
                  <p className="text-muted-foreground mb-4">{office.address}</p>
                  {/* <Button variant="outline" size="sm">
                    Get Directions
                  </Button> */}

                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={office.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Map Section */}
      <section className="section-alt py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="glass-card h-[400px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Dhaka%20Tech%20Park%2C%20Dhaka%2C%20Bangladesh&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionHeader
            badge="FAQ"
            badgeVariant="accent"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about SmartCSE."
          />

          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/features">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              badge="Connect With Us"
              title="Follow Us on Social Media"
              description="Stay updated with the latest news, updates, and tips from SmartCSE."
            />
            <div className="flex justify-center gap-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="h-12 w-12 rounded-xl bg-background/80 p-0 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Subscribe to Our Newsletter"
        description="Get the latest updates, tips, and news delivered directly to your inbox."
        actions={[
          { label: "Start Free Trial", href: "/register" },
          { label: "Explore Features", href: "/features", variant: "outline" },
        ]}
      />
    </MarketingLayout>
  );
}
