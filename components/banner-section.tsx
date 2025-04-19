"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useEffect, useRef } from "react"

export default function BannerSection() {
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
    <section
      className="relative w-full overflow-hidden bg-[#0F172A] py-12 text-white sm:py-16 lg:py-24"
      ref={sectionRef}
    >
      {/* Premium background with overlay and animation */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/premium-travel-bg.jpg"
          alt="Travel community"
          fill
          className="object-cover opacity-30 transition-transform duration-10000 hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/95 to-[#0F172A]/90"></div>
      </div>

      {/* Subtle pattern overlay with animation */}
      <div className="absolute inset-0 z-0 bg-[url('/subtle-pattern.png')] opacity-5 animate-shimmer"></div>

      {/* Green accent line with animation */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 animate-shimmer"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Main content - properly aligned for both mobile and desktop */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text content with reveal animations */}
          <div className="flex w-full flex-col justify-center space-y-6 lg:w-1/2">
            <div className="reveal-on-scroll">
              <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover-lift">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft"></span>
                Exclusive Travel Community
              </div>
              <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
                Join Our Indian <span className="text-gradient">Travel Community</span>
              </h1>
              <p className="max-w-[600px] text-base text-slate-300 sm:text-lg md:text-xl">
                Connect with passionate travelers, share experiences, and discover hidden gems across India. Get
                exclusive travel tips, deals, and make friends along the way.
              </p>
            </div>

            {/* Community metrics - responsive grid with animations */}
            <div className="grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm sm:gap-4 sm:p-4 hover-glow reveal-on-scroll">
              <div className="text-center transition-all duration-300 hover:scale-110">
                <p className="text-xl font-bold text-primary sm:text-2xl animate-float">10K+</p>
                <p className="text-xs text-slate-400 sm:text-sm">Members</p>
              </div>
              <div className="text-center transition-all duration-300 hover:scale-110">
                <p
                  className="text-xl font-bold text-primary sm:text-2xl animate-float"
                  style={{ animationDelay: "0.3s" }}
                >
                  120+
                </p>
                <p className="text-xs text-slate-400 sm:text-sm">Cities</p>
              </div>
              <div className="text-center transition-all duration-300 hover:scale-110">
                <p
                  className="text-xl font-bold text-primary sm:text-2xl animate-float"
                  style={{ animationDelay: "0.6s" }}
                >
                  500+
                </p>
                <p className="text-xs text-slate-400 sm:text-sm">Meetups</p>
              </div>
            </div>

            {/* CTA buttons - responsive layout with hover effects */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 reveal-on-scroll">
              <Button
                size="lg"
                className="bg-primary text-[#0F172A] hover:bg-primary/90 transition-all duration-300 hover:scale-105 btn-pulse"
              >
                Join Our Community
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Explore Meetups
              </Button>
            </div>

            {/* Community members preview - responsive with animations */}
            <div className="flex items-center gap-3 reveal-on-scroll">
              <div className="flex -space-x-2 sm:-space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-[#0F172A] ring-2 ring-primary/20 sm:h-10 sm:w-10 transition-all duration-300 hover:scale-110 hover:z-10 hover:ring-primary/50"
                    style={{
                      backgroundImage: `url('/member-${i + 1}.jpg')`,
                      backgroundSize: "cover",
                      transitionDelay: `${i * 50}ms`,
                    }}
                  />
                ))}
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-medium text-white">
                  Join <span className="text-primary animate-pulse-soft">2,500+</span> travelers
                </p>
                <p className="text-slate-400">who joined this month</p>
              </div>
            </div>
          </div>

          {/* Video section - properly aligned for both mobile and desktop with animations */}
          <div className="relative w-full lg:w-1/2 reveal-on-scroll">
            <div className="mx-auto max-w-md">
              {/* Decorative border - properly positioned with animation */}
              <div className="absolute -inset-4 rounded-2xl border border-white/10 bg-gradient-to-br from-primary/5 to-transparent animate-pulse-soft"></div>

              {/* Main video container with hover effects */}
              <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/5 shadow-xl backdrop-blur-sm hover-glow">
                <div className="aspect-video w-full overflow-hidden">
                  <div className="relative h-full w-full">
                    <Image
                      src="/community-gathering.jpg"
                      alt="Travel community gathering"
                      fill
                      className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10 transition-opacity duration-300 group-hover:opacity-70"></div>

                    {/* Play button - centered with animations */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 rounded-full border-2 border-primary/50 bg-black/30 text-primary backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:border-primary hover:text-primary/90 sm:h-14 sm:w-14 animate-pulse-soft"
                      >
                        <Play className="h-5 w-5 sm:h-6 sm:w-6" />
                        <span className="sr-only">Play community video</span>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Video caption - properly positioned with hover effect */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-md transition-all duration-300 group-hover:border-primary/30 group-hover:bg-black/70">
                  <p className="text-xs font-medium text-white sm:text-sm">Our Community Story</p>
                  <p className="text-xs text-slate-300">2:45</p>
                </div>
              </div>

              {/* Testimonial below the video with hover effect */}
              <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-md hover-lift">
                <div className="flex items-start gap-3">
                  <div
                    className="h-8 w-8 flex-shrink-0 rounded-full transition-transform duration-300 hover:scale-110"
                    style={{
                      backgroundImage: "url('/testimonial-avatar.jpg')",
                      backgroundSize: "cover",
                    }}
                  />
                  <div>
                    <p className="text-xs italic text-slate-300 transition-all duration-300 hover:text-white">
                      "This community changed how I travel across India. I've made lifelong friends in multiple states."
                    </p>
                    <p className="mt-1 text-xs font-medium text-primary">Priya S., Member since 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
