import { Globe, Users, Calendar, MessageSquare, Map, Compass, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Connect with travelers from over 50 countries and share experiences across cultures.",
  },
  {
    icon: Users,
    title: "Local Connections",
    description: "Meet like-minded travelers in your city through regular in-person meetups and events.",
  },
  {
    icon: Calendar,
    title: "Exclusive Events",
    description: "Get access to member-only trips, workshops, and special travel opportunities.",
  },
  {
    icon: MessageSquare,
    title: "Travel Forums",
    description: "Ask questions, share tips, and get advice from experienced travelers in our community forums.",
  },
  {
    icon: Map,
    title: "City Guides",
    description: "Access curated city guides created by locals and community members who know the best spots.",
  },
  {
    icon: Compass,
    title: "Travel Buddies",
    description: "Find companions for your next adventure through our travel buddy matching system.",
  },
]

export default function CommunityBenefits() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0F172A] to-[#1E293B] py-16 text-white md:py-20">
      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-[url('/diagonal-pattern.png')] opacity-5"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
            The Community Experience
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Community <span className="text-primary">Benefits</span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            Join a global network of travelers who share your passion for exploration and authentic experiences.
          </p>
        </div>

        {/* Community Stats */}
        <div className="mb-16 grid gap-4 md:grid-cols-3 md:gap-6">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-primary/20 to-transparent p-6 text-center backdrop-blur-sm md:p-8">
            <p className="text-4xl font-bold text-primary">10,000+</p>
            <p className="mt-1 text-slate-300">Active Members</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-primary/15 to-transparent p-6 text-center backdrop-blur-sm md:col-span-2 md:p-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <p className="text-4xl font-bold text-primary">120+</p>
                <p className="mt-1 text-slate-300">City Groups</p>
              </div>
              <div className="h-px w-full bg-white/10 md:h-16 md:w-px"></div>
              <div>
                <p className="text-4xl font-bold text-primary">500+</p>
                <p className="mt-1 text-slate-300">Monthly Meetups</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section - Horizontal Scroll */}
        <div>
          <h3 className="mb-6 text-center text-2xl font-bold text-white">Why Join Our Community</h3>

          {/* Horizontal scrollable container for all devices */}
          <div className="relative -mx-4 px-4">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="min-w-[280px] max-w-[350px] flex-shrink-0 snap-start rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/10"
                >
                  <div className="mb-4 rounded-lg bg-primary/10 p-3 text-primary">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-white">{benefit.title}</h3>
                  <p className="text-sm text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="mt-4 flex items-center justify-center gap-1">
              <div className="h-1 w-10 rounded-full bg-primary/30"></div>
              <div className="h-1 w-6 rounded-full bg-primary/60"></div>
              <div className="h-1 w-4 rounded-full bg-primary/30"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Button className="bg-primary text-[#0F172A] hover:bg-primary/90">
            Join Our Community
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
