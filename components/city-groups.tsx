"use client"

import Image from "next/image"
import { Users, MapPin, Star, ChevronRight, ChevronLeft, Heart, Globe, Award, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const cityGroups = [
  {
    name: "Mumbai",
    members: 1240,
    monthlyMeetups: 4,
    image: "/new-york-premium.jpg", // Should be replaced with Mumbai image
    testimonial: "The Mumbai group feels like family now. We meet weekly and travel together to nearby destinations.",
    testimonialAuthor: "Rahul M.",
  },
  {
    name: "Delhi",
    members: 980,
    monthlyMeetups: 3,
    image: "/london-premium.jpg", // Should be replaced with Delhi image
    testimonial: "From strangers to travel companions in just two meetups. This community is special.",
    testimonialAuthor: "Neha W.",
  },
  {
    name: "Bangalore",
    members: 750,
    monthlyMeetups: 2,
    image: "/tokyo-premium.jpg", // Should be replaced with Bangalore image
    testimonial: "Our Bangalore group has explored hidden gems even locals don't know about.",
    testimonialAuthor: "Karthik T.",
  },
  {
    name: "Pune",
    members: 620,
    monthlyMeetups: 2,
    image: "/paris-premium.jpg", // Should be replaced with Pune image
    testimonial: "We started with coffee meetups and now plan annual trips across Western Ghats together.",
    testimonialAuthor: "Sneha L.",
  },
  {
    name: "Chennai",
    members: 580,
    monthlyMeetups: 2,
    image: "/barcelona-premium.jpg", // Should be replaced with Chennai image
    testimonial:
      "Our weekend trips to nearby temples and beaches have become legendary among South Indian travel groups.",
    testimonialAuthor: "Arun M.",
  },
  {
    name: "Kolkata",
    members: 490,
    monthlyMeetups: 2,
    image: "/sydney-premium.jpg", // Should be replaced with Kolkata image
    testimonial: "From city explorers to weekend road-trippers, our group does it all in Eastern India.",
    testimonialAuthor: "Priyanka A.",
  },
]

const impactStats = [
  {
    icon: Heart,
    value: "87%",
    label: "Lasting Friendships",
    description: "Members who've made close friends through our community",
  },
  {
    icon: Globe,
    value: "62%",
    label: "Travel Together",
    description: "Members who've traveled with people they met in the community",
  },
  {
    icon: Award,
    value: "93%",
    label: "Cultural Connection",
    description: "Report feeling more connected to local cultures",
  },
  {
    icon: TrendingUp,
    value: "4.9",
    label: "Satisfaction Rating",
    description: "Average rating from community members",
  },
]

export default function CityGroups() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-16 text-slate-800 md:py-24">
      {/* Decorative elements with animation */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-10">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover-lift">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft"></span>
                Pan-India Community, Local Connections
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                Join Your Local Travel <span className="text-gradient">Community</span>
              </h2>
              <p className="max-w-[700px] text-sm text-slate-600 md:text-base">
                From online conversations to real-life adventures, our city groups bring travelers together in
                meaningful ways, creating lasting friendships and unforgettable experiences across India.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="hidden text-primary md:inline">View all cities</span>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse"
              >
                <span className="md:hidden">View all cities</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Horizontal scrollable container for all devices */}
        <div className="relative -mx-4 px-4">
          {/* Left navigation button */}
          <button
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:left-2"
            aria-label="Previous city"
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
            {cityGroups.map((city, index) => (
              <Card
                key={city.name}
                className="group min-w-[280px] max-w-[350px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={city.image || `/placeholder.svg?height=160&width=280&query=${city.name}%20India%20cityscape`}
                    alt={`${city.name} travel community`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70" />
                  <Badge
                    className="absolute right-3 top-3 border-none bg-primary/90 text-white hover:bg-primary/90 transition-transform duration-300 group-hover:scale-110"
                    variant="outline"
                  >
                    {city.monthlyMeetups}x Monthly
                  </Badge>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-y(-2px)">
                    <MapPin
                      className="h-4 w-4 text-primary animate-bounce-subtle"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                    <span className="text-lg font-medium text-white">{city.name}</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm text-slate-600">
                        <span className="font-medium text-slate-800">{city.members}</span> members
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-primary text-primary transition-transform duration-300"
                          style={{
                            transitionDelay: `${i * 50}ms`,
                            transform: `scale(${i === 0 && "group-hover:scale-125" ? "1.25" : "1"})`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5">
                    <p className="text-sm italic text-slate-600 transition-all duration-300 group-hover:text-slate-700">
                      "{city.testimonial}"
                    </p>
                    <p className="mt-2 text-xs font-medium text-primary">{city.testimonialAuthor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right navigation button */}
          <button
            className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:right-2"
            aria-label="Next city"
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

        {/* Redesigned Community Impact Section */}
        <div className="mt-16">
          <div className="mb-4 text-center md:mb-6">
            <h3 className="mb-1 text-xl font-bold text-slate-800 md:mb-2 md:text-2xl">Community Impact</h3>
            <p className="mx-auto max-w-2xl text-xs text-slate-600 md:text-sm">
              Our community transforms how people experience India, creating meaningful connections and unforgettable
              adventures across the country.
            </p>
          </div>

          {/* Impact Stats with Visual Elements - Make horizontally scrollable on mobile */}
          <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
              {impactStats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative min-w-[200px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm transition-all duration-500 hover-glow md:p-5"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Decorative background circle with animation */}
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 opacity-50 transition-all duration-500 group-hover:bg-primary/10 group-hover:opacity-80 animate-rotate-slow"></div>

                  <div className="relative z-10">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 md:h-12 md:w-12 md:mb-3">
                      <stat.icon className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <p className="mb-1 text-2xl font-bold text-primary md:text-3xl transition-all duration-300 group-hover:scale-105 group-hover:translate-x-1">
                      {stat.value}
                    </p>
                    <p className="mb-1 text-sm font-medium text-slate-800 transition-all duration-300 group-hover:text-primary">
                      {stat.label}
                    </p>
                    <p className="text-xs text-slate-600 transition-all duration-300 group-hover:text-slate-700">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll indicator for mobile */}
            <div className="mt-2 flex items-center justify-center gap-1 md:hidden">
              <div className="h-1 w-10 rounded-full bg-primary/30 animate-pulse-soft"></div>
              <div
                className="h-1 w-6 rounded-full bg-primary/60 animate-pulse-soft"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="h-1 w-4 rounded-full bg-primary/30 animate-pulse-soft"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>

          {/* Testimonial Section - More compact on mobile */}
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:mt-8 hover-glow">
            <div className="grid md:grid-cols-5">
              {/* Image Column - Hidden on mobile */}
              <div className="relative hidden md:col-span-2 md:block">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
                <Image
                  src="/community-gathering.jpg"
                  alt="Indian travel community gathering"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Content Column - More compact on mobile */}
              <div className="p-4 md:col-span-3 md:p-8">
                <div className="mb-3 flex items-center gap-2 md:mb-4 md:gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20 md:h-14 md:w-14 hover-bright">
                    <Image src="/testimonial-avatar.jpg" alt="Anjali S." fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800 md:text-base transition-colors duration-300 hover:text-primary">
                      Anjali S.
                    </p>
                    <p className="text-xs text-primary md:text-sm">Mumbai Group Member • 2 years</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-3xl text-primary/20 md:text-4xl animate-pulse-soft">
                    "
                  </div>
                  <p className="mb-3 pl-4 text-sm italic text-slate-600 md:mb-4 md:pl-6 md:text-base transition-all duration-300 hover:text-slate-800">
                    I joined the online group first, then attended a local meetup in Mumbai. Now I've traveled to 7
                    states with friends I met through the community! What started as casual coffee meetups has turned
                    into lifelong friendships and adventures across India I never would have experienced on my own.
                  </p>
                  <div
                    className="absolute -bottom-2 right-0 text-3xl text-primary/20 md:text-4xl animate-pulse-soft"
                    style={{ animationDelay: "0.5s" }}
                  >
                    "
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 md:mt-6 md:gap-3">
                  {["Friendships", "Group Travel", "Cultural Exchange", "Local Experiences"].map((tag, i) => (
                    <Badge
                      key={i}
                      className="bg-primary/10 text-xs text-primary hover:bg-primary/20 md:text-sm transition-all duration-300 hover:scale-105 hover-lift"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action - Smaller on mobile */}
          <div className="mt-6 text-center md:mt-8">
            <Button className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 btn-pulse">
              Join Our Community
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
