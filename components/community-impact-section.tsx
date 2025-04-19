"use client"

import type React from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

interface ImpactStat {
  label: string
  value: string
  description?: string
}

interface CommunityImpactSectionProps {
  impactStats: ImpactStat[]
}

const CommunityImpactSection: React.FC<CommunityImpactSectionProps> = ({ impactStats }) => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Community Impact</h2>

        {/* Impact Stats with Visual Elements - Make horizontally scrollable on mobile with navigation buttons */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          {/* Left navigation button - visible only on mobile */}
          <button
            className="absolute -left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:hidden"
            aria-label="Previous stat"
            onClick={(e) => {
              const container = (e.currentTarget as HTMLButtonElement).nextElementSibling as HTMLDivElement
              if (container) {
                container.scrollBy({ left: -220, behavior: "smooth" })
              }
            }}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-4 md:gap-6 md:overflow-visible"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {impactStats.map((stat, index) => (
              <div key={index} className="snap-start rounded-lg bg-white shadow-md p-6 w-64 md:w-auto">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide">{stat.label}</div>
                {stat.description && <p className="mt-2 text-slate-600">{stat.description}</p>}
              </div>
            ))}
          </div>

          {/* Right navigation button - visible only on mobile */}
          <button
            className="absolute -right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:hidden"
            aria-label="Next stat"
            onClick={(e) => {
              const container = (e.currentTarget as HTMLButtonElement).previousElementSibling as HTMLDivElement
              if (container) {
                container.scrollBy({ left: 220, behavior: "smooth" })
              }
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CommunityImpactSection
