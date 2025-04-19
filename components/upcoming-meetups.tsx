"use client"

import Image from "next/image"
import { Calendar, MapPin, Users, ArrowRight, Clock, Heart, Check, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef } from "react"

const upcomingMeetups = [
  {
    title: "Rishikesh River Rafting",
    date: "April 5, 2024",
    time: "2:00 PM",
    location: "Laxman Jhula, Rishikesh",
    attendees: 24,
    image: "/tokyo-sakura-event.jpg", // Should be replaced with Rishikesh image
    city: "Rishikesh",
    host: {
      name: "Amit T.",
      image: "/member-3.jpg", // Should be replaced with Indian host image
    },
    interested: 42,
  },
  {
    title: "Mumbai Heritage Walk",
    date: "May 12, 2024",
    time: "6:30 AM",
    location: "CSMT, Mumbai",
    attendees: 38,
    image: "/nyc-rooftop-event.jpg", // Should be replaced with Mumbai image
    city: "Mumbai",
    host: {
      name: "Riya R.",
      image: "/member-1.jpg", // Should be replaced with Indian host image
    },
    interested: 67,
  },
  {
    title: "Coorg Coffee Plantation Tour",
    date: "June 3, 2024",
    time: "7:00 AM",
    location: "Madikeri, Coorg",
    attendees: 42,
    image: "/london-pub-event.jpg", // Should be replaced with Coorg image
    city: "Coorg",
    host: {
      name: "Deepa W.",
      image: "/member-2.jpg", // Should be replaced with Indian host image
    },
    interested: 53,
  },
  {
    title: "Goa Beach Cleanup & BBQ",
    date: "June 15, 2024",
    time: "4:00 PM",
    location: "Anjuna Beach, Goa",
    attendees: 28,
    image: "/barcelona-event.jpg", // Should be replaced with Goa image
    city: "Goa",
    host: {
      name: "Rohan M.",
      image: "/member-4.jpg", // Should be replaced with Indian host image
    },
    interested: 39,
  },
  {
    title: "Varanasi Sunrise Boat Ride",
    date: "July 8, 2024",
    time: "5:00 AM",
    location: "Assi Ghat, Varanasi",
    attendees: 35,
    image: "/sydney-event.jpg", // Should be replaced with Varanasi image
    city: "Varanasi",
    host: {
      name: "Aditya A.",
      image: "/member-5.jpg", // Should be replaced with Indian host image
    },
    interested: 48,
  },
]

export default function UpcomingMeetups() {
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

      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-10 reveal-on-scroll">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover-lift">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft"></span>
                Connect In Person
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                Upcoming <span className="text-gradient">Meetups</span>
              </h2>
              <p className="max-w-[700px] text-sm text-slate-600 md:text-base">
                Join one of our upcoming events and meet fellow travelers in person. From heritage walks to weekend
                getaways, there's always something happening in our community across India.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="hidden text-primary md:inline">View all events</span>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse"
              >
                <span className="md:hidden">View all events</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Horizontal scrollable container for all devices with enhanced animations */}
        <div className="relative -mx-4 px-4">
          {/* Left navigation button */}
          <button
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:left-2"
            aria-label="Previous meetup"
            onClick={(e) => {
              const container = e.currentTarget.nextElementSibling
              if (container) {
                container.scrollBy({ left: -300, behavior: "smooth" })
              }
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {upcomingMeetups.map((meetup, index) => (
              <Card
                key={index}
                className="group min-w-[280px] max-w-[350px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md reveal-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={meetup.image || `/placeholder.svg?height=160&width=280&query=${meetup.city}%20India%20travel`}
                    alt={meetup.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70" />
                  <Badge
                    className="absolute right-3 top-3 border-none bg-primary/90 text-white hover:bg-primary/90 transition-transform duration-300 group-hover:scale-110"
                    variant="outline"
                  >
                    {meetup.city}
                  </Badge>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 transition-transform duration-300 group-hover:translate-y(-2px)">
                    <div
                      className="h-8 w-8 rounded-full border-2 border-white ring-1 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40 hover-bright"
                      style={{
                        backgroundImage: `url('${meetup.host.image}')`,
                        backgroundSize: "cover",
                      }}
                    />
                    <div>
                      <p className="text-xs text-slate-300 transition-colors duration-300 group-hover:text-white">
                        Hosted by
                      </p>
                      <p className="text-sm font-medium text-white">{meetup.host.name}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 text-lg font-medium text-slate-800 transition-colors duration-300 group-hover:text-primary">
                    {meetup.title}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                      <Calendar
                        className="h-4 w-4 text-primary animate-bounce-subtle"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                      <span className="text-slate-600">{meetup.date}</span>
                    </div>
                    <div className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-slate-600">{meetup.time}</span>
                    </div>
                    <div className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-slate-600">{meetup.location}</span>
                    </div>
                    <div className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                      <Users className="h-4 w-4 text-primary" />
                      <div className="flex items-center gap-1">
                        <span className="text-slate-800">{meetup.attendees}</span>
                        <span className="text-slate-600">attending</span>
                        <span className="mx-1 text-slate-400">•</span>
                        <Heart className="h-3 w-3 text-primary animate-pulse-soft" />
                        <span className="text-slate-600">{meetup.interested}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-slate-200 bg-slate-50 p-4 transition-all duration-300 group-hover:bg-primary/5">
                  <Button
                    variant="outline"
                    className="w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:text-primary/90 btn-pulse"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Right navigation button */}
          <button
            className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:right-2"
            aria-label="Next meetup"
            onClick={(e) => {
              const container = e.currentTarget.previousElementSibling
              if (container) {
                container.scrollBy({ left: 300, behavior: "smooth" })
              }
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-16 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 hover-glow reveal-on-scroll">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-slate-800">Can't Find a Meetup Near You?</h3>
              <p className="mb-6 text-slate-600">
                Our community is constantly growing across India. If you don't see a meetup in your area, you can start
                one! We provide resources and support to help you organize your own local gatherings.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1">
                  <div className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary animate-pulse-soft">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 transition-colors duration-300 hover:text-primary">
                      Host Support
                    </p>
                    <p className="text-sm text-slate-600">
                      We'll guide you through the process of hosting your first meetup.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1">
                  <div
                    className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary animate-pulse-soft"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 transition-colors duration-300 hover:text-primary">
                      Venue Suggestions
                    </p>
                    <p className="text-sm text-slate-600">
                      Get recommendations for traveler-friendly venues in your city.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1">
                  <div
                    className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary animate-pulse-soft"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 transition-colors duration-300 hover:text-primary">
                      Activity Ideas
                    </p>
                    <p className="text-sm text-slate-600">
                      Access our database of successful meetup formats and activities.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-6 bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 btn-pulse">
                Start a Meetup
              </Button>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <div className="relative h-64 w-full md:h-full">
                <Image
                  src="/host-meetup.jpg"
                  alt="Host a meetup in India"
                  fill
                  className="rounded-xl object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-300 hover:opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 transition-all duration-300 hover:translate-y(-5px)">
                    <div
                      className="h-12 w-12 rounded-full border-2 border-white ring-2 ring-primary/20 hover-bright"
                      style={{
                        backgroundImage: "url('/host-avatar.jpg')",
                        backgroundSize: "cover",
                      }}
                    />
                    <div>
                      <p className="text-lg font-medium text-white">"Hosting changed everything for me"</p>
                      <p className="text-primary">Deepak L., Community Host since 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center reveal-on-scroll">
          <p className="mb-4 text-slate-600">Members get priority access to all events and exclusive meetups.</p>
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 btn-pulse"
          >
            View All Meetups
          </Button>
        </div>
      </div>
    </section>
  )
}
