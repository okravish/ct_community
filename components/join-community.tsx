"use client"

import {
  Check,
  Mail,
  CreditCard,
  Lock,
  Shield,
  Award,
  Gift,
  Users,
  Globe,
  Calendar,
  ChevronDown,
  Tag,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef } from "react"

export default function JoinCommunity() {
  // Ref for scroll reveal
  const sectionRef = useRef(null)

  // Add scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )

    const revealElements = document.querySelectorAll(".reveal-on-scroll")
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section className="relative w-full bg-slate-100 py-12 text-slate-800 md:py-16" ref={sectionRef}>
      {/* Subtle pattern overlay with animation */}
      <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-5 animate-shimmer"></div>

      {/* Decorative elements with animations */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
      <div
        className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-8 text-center md:mb-10 reveal-on-scroll">
          <div className="mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover-lift">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft"></span>
            Exclusive Membership
          </div>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Join Our Travel <span className="text-gradient">Community</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-sm text-slate-600 md:text-base">
            Become a member today and start connecting with fellow travelers around India.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Community Stats - Moved up with animations */}
          <div className="mb-8 grid gap-3 md:grid-cols-3 md:gap-4 reveal-on-scroll">
            {[
              {
                icon: Users,
                title: "10,000+ Members",
                desc: "Join a thriving community of passionate Indian travelers.",
              },
              {
                icon: Calendar,
                title: "500+ Monthly Events",
                desc: "Access exclusive meetups, trips, and online gatherings.",
              },
              { icon: Globe, title: "120+ City Groups", desc: "Connect with travelers in your city and across India." },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover-lift hover:border-primary/30"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary animate-pulse-soft"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <h4 className="mb-1 font-medium text-slate-800 transition-colors duration-300 hover:text-primary">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* More Compact Membership Card with enhanced animations */}
          <Card className="overflow-hidden rounded-xl border-2 border-primary/50 bg-white shadow-md hover-glow reveal-on-scroll">
            <CardHeader className="relative border-b border-slate-200 bg-gradient-to-r from-primary/20 to-transparent p-4 pb-4 text-slate-800 md:p-6">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl animate-pulse-soft"></div>

              {/* Early Bird Discount Badge with animation */}
              <div className="absolute -right-2 -top-2 rotate-12 md:right-4 md:top-4">
                <div className="relative">
                  <div className="animate-pulse rounded-full bg-primary/30 p-6 blur-xl"></div>
                  <Badge className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-primary px-2 py-1 text-xs text-white animate-bounce-subtle">
                    <Tag className="mr-1 h-3 w-3" />
                    Early Bird Discount
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                <div>
                  <CardTitle className="text-xl md:text-2xl">Community Membership</CardTitle>
                  <CardDescription className="text-sm text-slate-600">
                    Full access to our Indian travel community
                  </CardDescription>
                </div>
                <div className="mt-3 flex items-end gap-3 md:mt-0">
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-slate-500">Regular Price</span>
                    <span className="text-base text-slate-500 line-through">₹499</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-primary">Limited Time</span>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-primary animate-pulse-soft">₹99</span>
                      <span className="ml-1 text-xs text-slate-500">only</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="grid gap-6 p-4 md:grid-cols-2 md:gap-6 md:p-6">
              <div>
                <div className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">Premium Access</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "All city groups",
                    "Local meetups",
                    "Travel deals",
                    "Buddy matching",
                    "Community forums",
                    "Priority access",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 transition-all duration-300 hover:translate-x-1">
                      <div
                        className="mt-0.5 rounded-full bg-primary/20 p-0.5 text-primary animate-pulse-soft"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-xs text-slate-600 transition-colors duration-300 hover:text-slate-800">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5">
                <div className="mb-2 flex items-center gap-2">
                  <div className="rounded-full bg-primary/20 p-1.5 text-primary animate-pulse-soft">
                    <Mail className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-medium text-slate-800">Simple Joining Process</h4>
                </div>
                <div className="space-y-2">
                  {[
                    { num: 1, title: "Pay ₹99", desc: "Complete payment securely" },
                    { num: 2, title: "Check Email", desc: "Get community link" },
                    { num: 3, title: "Join In", desc: "Create profile & join groups" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
                      <div
                        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white animate-pulse-soft"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      >
                        {step.num}
                      </div>
                      <p className="text-xs text-slate-600">
                        <span className="font-medium text-slate-800">{step.title}</span> - {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col border-t border-slate-200 bg-slate-50 p-4 md:p-6">
              <div className="mb-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-600">
                {[
                  { icon: Shield, text: "One-time payment" },
                  { icon: Award, text: "Premium benefits" },
                  { icon: Gift, text: "Welcome package" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1 transition-all duration-300 hover:scale-110">
                    <item.icon className="h-3.5 w-3.5 text-primary" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="w-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 btn-pulse"
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Join Now for ₹99 Only
              </Button>
              <p className="mt-2 flex items-center justify-center gap-1 text-xs text-slate-500">
                <Lock className="h-3 w-3 animate-pulse-soft" />
                Secure payment with 256-bit encryption
              </p>
            </CardFooter>
          </Card>

          {/* Frequently Asked Questions - Moved to the end with animations */}
          <div className="mt-12 reveal-on-scroll">
            <h3 className="mb-4 text-center text-xl font-bold text-slate-800">Frequently Asked Questions</h3>
            <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
              <div className="max-h-[400px] overflow-y-auto pr-4 md:max-h-none md:overflow-visible">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      q: "Is this a one-time payment?",
                      a: "Yes, this is a one-time payment of ₹99 (early bird discount from the regular price of ₹499). Once you pay, you'll have lifetime access to the community with no recurring fees.",
                    },
                    {
                      q: "How quickly will I get access after payment?",
                      a: "You'll receive an email with access instructions within 5 minutes of completing your payment. If you don't see it, please check your spam folder or contact our support team.",
                    },
                    {
                      q: "Are there any additional fees for events?",
                      a: "Most local meetups are free for members. Special events and trips may have additional costs, but members always receive preferential rates and early access to limited spots.",
                    },
                    {
                      q: "What if there's no group in my city?",
                      a: "You can still join and participate in online discussions. We also support members who want to start new city groups with resources and guidance. Many of our most active groups were started by passionate members!",
                    },
                    {
                      q: "How long will the early bird discount be available?",
                      a: "The early bird discount price of ₹99 (instead of ₹499) is available for a limited time only. We recommend joining now to lock in this special rate before it returns to the regular price.",
                    },
                  ].map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i + 1}`}
                      className="border-slate-200 transition-all duration-300 hover:border-primary/30"
                    >
                      <AccordionTrigger className="text-sm text-slate-800 hover:text-primary transition-all duration-300">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-slate-600 transition-all duration-300 data-[state=open]:animate-shimmer">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Scroll indicator for mobile with animation */}
              <div className="mt-4 flex items-center justify-center gap-1 md:hidden">
                <ChevronDown className="h-5 w-5 animate-bounce text-primary" />
                <span className="text-xs text-primary">Scroll for more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
