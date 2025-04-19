"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Globe, ChevronRight, ChevronLeft, ArrowRight, Users, MessageSquare } from "lucide-react"

const communityMembers = [
  {
    name: "Alex Rivera",
    location: "New York, USA",
    memberSince: "2021",
    trips: 14,
    countries: 8,
    image: "/member-profile-1.jpg",
    interests: ["Urban Exploration", "Food Tours", "Photography"],
    bio: "Digital nomad and street photographer capturing urban stories around the world.",
  },
  {
    name: "Sophia Chen",
    location: "London, UK",
    memberSince: "2022",
    trips: 9,
    countries: 6,
    image: "/member-profile-2.jpg",
    interests: ["Hiking", "Cultural Immersion", "Local Cuisine"],
    bio: "Environmental scientist who loves exploring natural wonders and connecting with local communities.",
  },
  {
    name: "Marcus Johnson",
    location: "Cape Town, South Africa",
    memberSince: "2020",
    trips: 22,
    countries: 12,
    image: "/member-profile-3.jpg",
    interests: ["Adventure Sports", "Wildlife", "Volunteering"],
    bio: "Former corporate lawyer who left it all behind to pursue meaningful travel experiences.",
  },
  {
    name: "Aisha Patel",
    location: "Mumbai, India",
    memberSince: "2021",
    trips: 11,
    countries: 7,
    image: "/member-profile-4.jpg",
    interests: ["Architecture", "History", "Street Food"],
    bio: "Travel writer documenting hidden gems and authentic cultural experiences across Asia.",
  },
  {
    name: "Liam O'Connor",
    location: "Sydney, Australia",
    memberSince: "2022",
    trips: 8,
    countries: 5,
    image: "/member-profile-5.jpg",
    interests: ["Surfing", "Coastal Hikes", "Marine Conservation"],
    bio: "Marine biologist and ocean enthusiast connecting travelers with conservation efforts.",
  },
]

const communityStories = [
  {
    title: "From Strangers to Lifelong Friends",
    location: "Kyoto, Japan",
    image: "/story-japan.jpg",
    author: {
      name: "Emma W.",
      image: "/member-2.jpg",
    },
    excerpt:
      "What started as a casual meetup in Tokyo turned into a two-week adventure across Japan with three amazing people I now consider family.",
    date: "March 2023",
  },
  {
    title: "Finding My Purpose Through Travel",
    location: "Cusco, Peru",
    image: "/story-peru.jpg",
    author: {
      name: "Michael R.",
      image: "/member-1.jpg",
    },
    excerpt:
      "After connecting with local artisans through our community meetup, I've started a social enterprise that helps preserve traditional crafts.",
    date: "January 2023",
  },
  {
    title: "The Unexpected Road Trip",
    location: "Amalfi Coast, Italy",
    image: "/story-italy.jpg",
    author: {
      name: "Sarah J.",
      image: "/testimonial-avatar.jpg",
    },
    excerpt:
      "Five members from different countries met in Rome and decided to rent a car for an impromptu coastal adventure. Best decision ever!",
    date: "June 2023",
  },
  {
    title: "Cultural Exchange in Morocco",
    location: "Marrakech, Morocco",
    image: "/story-morocco.jpg",
    author: {
      name: "David L.",
      image: "/host-avatar.jpg",
    },
    excerpt:
      "Our community cooking class turned into a deep cultural exchange that changed my perspective on travel and connection.",
    date: "October 2023",
  },
]

export default function RealConnectionSection() {
  return (
    <section className="relative w-full bg-white py-10 text-slate-800 md:py-16">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('/diagonal-pattern.png')] opacity-5"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-8 text-center md:mb-10">
          <div className="mb-2 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
            Our Community
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Real Connection, Real <span className="text-primary">Adventure</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-sm text-slate-600 sm:text-base">
            Our community is built on authentic relationships that transform how we experience the world. Discover the
            people, stories, and connections that make our travel community special.
          </p>
        </div>

        <Tabs defaultValue="members" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-100">
            <TabsTrigger value="members" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Users className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Community</span> Members
            </TabsTrigger>
            <TabsTrigger value="stories" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <MessageSquare className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Community</span> Stories
            </TabsTrigger>
            <TabsTrigger value="join" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Users className="mr-2 h-4 w-4" />
              Join <span className="hidden sm:inline">Community</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="members" className="mt-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-800 sm:text-xl">Meet Our Members</h3>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/30 bg-transparent text-primary hover:bg-primary/10"
              >
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            {/* Horizontal scrollable container with navigation buttons */}
            <div className="relative -mx-4 px-4">
              {/* Left navigation button - visible only on mobile */}
              <button
                className="absolute -left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:hidden"
                aria-label="Previous member"
                onClick={(e) => {
                  const container = e.currentTarget.nextElementSibling
                  if (container) {
                    container.scrollBy({ left: -250, behavior: "smooth" })
                  }
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div
                className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-3 md:gap-4 md:overflow-x-visible lg:grid-cols-5"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {communityMembers.map((member, index) => (
                  <Card
                    key={index}
                    className="min-w-[220px] max-w-[85vw] flex-shrink-0 snap-start overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md sm:min-w-[240px] md:w-full"
                  >
                    <div className="relative">
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={member.image || `/placeholder.svg?height=300&width=400&query=travel%20portrait`}
                          alt={member.name}
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                        <h4 className="text-base font-bold text-white">{member.name}</h4>
                        <div className="flex items-center gap-1 text-xs text-slate-300">
                          <MapPin className="h-3 w-3 text-primary" />
                          {member.location}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="h-3 w-3 text-primary" />
                          Since {member.memberSince}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-xs">
                            <span className="font-medium text-primary">{member.trips}</span>
                            <span className="text-slate-500">trips</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs">
                            <Globe className="h-3 w-3 text-primary" />
                            <span className="text-slate-500">{member.countries}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {member.interests.map((interest, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="border-primary/20 bg-primary/10 text-xs text-primary"
                          >
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Right navigation button - visible only on mobile */}
              <button
                className="absolute -right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:hidden"
                aria-label="Next member"
                onClick={(e) => {
                  const container = e.currentTarget.previousElementSibling
                  if (container) {
                    container.scrollBy({ left: 250, behavior: "smooth" })
                  }
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </TabsContent>

          <TabsContent value="stories" className="mt-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-800 sm:text-xl">Community Stories</h3>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/30 bg-transparent text-primary hover:bg-primary/10"
              >
                Read All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            {/* Horizontal scrollable container with navigation buttons */}
            <div className="relative -mx-4 px-4">
              {/* Left navigation button - visible only on mobile */}
              <button
                className="absolute -left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:hidden"
                aria-label="Previous story"
                onClick={(e) => {
                  const container = e.currentTarget.nextElementSibling
                  if (container) {
                    container.scrollBy({ left: -250, behavior: "smooth" })
                  }
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div
                className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-2 md:gap-4 md:overflow-x-visible lg:grid-cols-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {communityStories.map((story, index) => (
                  <Card
                    key={index}
                    className="min-w-[240px] max-w-[85vw] flex-shrink-0 snap-start overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md sm:min-w-[260px] md:w-full"
                  >
                    <div className="relative">
                      <div className="aspect-[16/9] w-full overflow-hidden">
                        <Image
                          src={story.image || `/placeholder.svg?height=225&width=400&query=travel%20${story.location}`}
                          alt={story.title}
                          width={400}
                          height={225}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-6 w-6 rounded-full border border-white ring-1 ring-primary/20"
                            style={{
                              backgroundImage: `url('${story.author.image}')`,
                              backgroundSize: "cover",
                            }}
                          />
                          <div>
                            <p className="text-xs font-medium text-white">{story.author.name}</p>
                            <p className="text-xs text-primary">{story.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <div className="mb-1 flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="h-3 w-3 text-primary" />
                        {story.location}
                      </div>
                      <h4 className="mb-1 text-base font-bold text-slate-800">{story.title}</h4>
                      <p className="mb-2 line-clamp-2 text-xs text-slate-600">{story.excerpt}</p>
                      <Button variant="link" className="h-auto p-0 text-xs text-primary hover:text-primary/80">
                        Read full story
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Right navigation button - visible only on mobile */}
              <button
                className="absolute -right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:hidden"
                aria-label="Next story"
                onClick={(e) => {
                  const container = e.currentTarget.previousElementSibling
                  if (container) {
                    container.scrollBy({ left: 250, behavior: "smooth" })
                  }
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </TabsContent>

          {/* Join Community Tab - More compact */}
          <TabsContent value="join" className="mt-4">
            <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="grid gap-4 p-4 md:grid-cols-2 md:gap-6 md:p-6">
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-800">Join Our Community</h3>
                  <p className="mb-4 text-sm text-slate-600">
                    Become part of a global network of travelers who share your passion for authentic experiences and
                    meaningful connections.
                  </p>

                  <div className="mb-4 space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-xs">
                        1
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">Create Your Profile</p>
                        <p className="text-xs text-slate-600">
                          Sign up and build your travel profile to connect with like-minded adventurers.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-xs">
                        2
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">Join Local Groups</p>
                        <p className="text-xs text-slate-600">
                          Connect with travelers in your city and participate in regular meetups.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-xs">
                        3
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">Explore Together</p>
                        <p className="text-xs text-slate-600">
                          Discover new destinations with friends who share your travel style and interests.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Button className="bg-primary text-white hover:bg-primary/90">Join Now</Button>
                    <Button variant="outline" className="border-slate-300 bg-white text-slate-800 hover:bg-slate-50">
                      Learn More
                    </Button>
                  </div>
                </div>

                <div className="relative hidden overflow-hidden rounded-lg md:block">
                  <Image src="/community-join.jpg" alt="Join our travel community" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="rounded-lg border border-white/10 bg-black/50 p-3 backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="h-8 w-8 rounded-full border-2 border-white ring-1 ring-primary/20"
                              style={{
                                backgroundImage: `url('/member-${i + 1}.jpg')`,
                                backgroundSize: "cover",
                              }}
                            />
                          ))}
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-primary text-xs font-medium text-white ring-1 ring-primary/20">
                            +2.5k
                          </div>
                        </div>
                        <p className="text-xs text-white">
                          <span className="text-primary">2,500+</span> travelers joined this month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 bg-slate-50 p-3 text-center">
                <p className="text-xs text-slate-600">
                  Already a member?{" "}
                  <a href="#" className="font-medium text-primary hover:text-primary/80">
                    Sign in to your account
                  </a>
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
