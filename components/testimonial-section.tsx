"use client"

import Image from "next/image"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef } from "react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    image: "/testimonial-avatar.jpg", // Should be replaced with an Indian woman's photo
    rating: 5,
    quote:
      "This community changed how I explore India. I've made lifelong friends across 8 states and discovered hidden gems in my own country I never knew existed.",
    memberSince: "2022",
    trips: 14,
    highlight: "Made 12 close friends through the community",
  },
  {
    name: "Arjun Patel",
    location: "Delhi, NCR",
    image: "/member-1.jpg", // Should be replaced with an Indian man's photo
    rating: 5,
    quote:
      "From solo traveler to part of a pan-India family. The local meetups in Delhi are incredible, and I've traveled with community members to Ladakh and Kerala.",
    memberSince: "2021",
    trips: 22,
    highlight: "Organized 5 community meetups in North India",
  },
  {
    name: "Meera Iyer",
    location: "Bangalore, Karnataka",
    image: "/member-2.jpg", // Should be replaced with an Indian woman's photo
    rating: 5,
    quote:
      "I was hesitant to join at first, but it's been the best travel decision I've made. The community is supportive, and I've discovered so many weekend getaways from Bangalore.",
    memberSince: "2023",
    trips: 7,
    highlight: "Found travel companions for Northeast India tour",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    image: "/member-3.jpg", // Should be replaced with an Indian man's photo
    rating: 5,
    quote:
      "As a local host in Jaipur, I've enjoyed showing travelers the hidden gems of my city beyond the typical tourist spots. The connections I've made have enriched my life.",
    memberSince: "2022",
    trips: 12,
    highlight: "Hosted 15+ travelers in Rajasthan",
  },
  {
    name: "Ananya Desai",
    location: "Ahmedabad, Gujarat",
    image: "/member-4.jpg", // Should be replaced with an Indian woman's photo
    rating: 5,
    quote:
      "The community helped me gain confidence as a solo female traveler in India. Now I explore with new friends and share my experiences with other women in the group.",
    memberSince: "2021",
    trips: 18,
    highlight: "Started a women's travel safety subgroup",
  },
]

export default function TestimonialSection() {
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
    <section className="relative w-full bg-white py-16 text-slate-800 md:py-24" ref={sectionRef}>
      {/* Decorative elements with animations */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
      <div
        className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Subtle pattern overlay with animation */}
      <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-5 animate-shimmer"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center md:mb-16 reveal-on-scroll">
          <div className="mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover-lift">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft"></span>
            Community Voices
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl md:text-4xl">
            What Our Members <span className="text-gradient">Say</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-sm text-slate-600 md:text-base">
            Hear from travelers who have found connection, adventure, and friendship through our Indian travel
            community.
          </p>
        </div>

        {/* Remove the top navigation controls since we'll add them to the slider */}

        <div className="relative -mx-4 px-4 reveal-on-scroll">
          {/* Left navigation button */}
          <button
            className="absolute -left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:left-2"
            aria-label="Previous testimonial"
            onClick={(e) => {
              const container = e.currentTarget.nextElementSibling
              if (container) {
                container.scrollBy({ left: -350, behavior: "smooth" })
              }
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="min-w-[300px] max-w-[400px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md md:min-w-[350px] reveal-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20 hover-bright">
                      <Image
                        src={
                          testimonial.image || "/placeholder.svg?height=100&width=100&query=Indian traveler portrait"
                        }
                        alt={testimonial.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 transition-colors duration-300 hover:text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-slate-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative mb-4 rounded-lg bg-slate-50 p-4 transition-all duration-300 hover:bg-primary/5 hover:shadow-sm">
                  <Quote className="absolute -left-1 -top-1 h-6 w-6 text-primary/20 animate-pulse-soft" />
                  <p className="pl-2 text-sm italic text-slate-600 transition-all duration-300 hover:text-slate-700">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>Member since {testimonial.memberSince}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                    <span>{testimonial.trips} trips</span>
                  </div>
                  <Badge className="bg-primary/10 text-xs font-normal text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-105">
                    {testimonial.highlight}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          {/* Right navigation button */}
          <button
            className="absolute -right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:right-2"
            aria-label="Next testimonial"
            onClick={(e) => {
              const container = e.currentTarget.previousElementSibling
              if (container) {
                container.scrollBy({ left: 350, behavior: "smooth" })
              }
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Call to Action with enhanced hover effects */}
        <div className="mt-12 rounded-xl border border-slate-200 bg-gradient-to-r from-primary/10 to-white p-8 shadow-sm hover-glow reveal-on-scroll">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-4 text-xl font-bold text-slate-800 md:text-2xl">
              Ready to Join India's Largest Travel <span className="text-gradient">Community</span>?
            </h3>
            <p className="mb-6 text-slate-600">
              Connect with passionate travelers from across India, share experiences, and create memories that last a
              lifetime.
            </p>
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 btn-pulse"
            >
              Join Our Community Today
            </Button>
            <p className="mt-4 text-xs text-slate-500">
              Join now and get access to exclusive travel resources, local meetups, and a nationwide network of friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
