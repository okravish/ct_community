"use client"

import { useEffect } from "react"
import BannerSection from "@/components/banner-section"
import CityGroups from "@/components/city-groups"
import JoinCommunity from "@/components/join-community"
import UpcomingMeetups from "@/components/upcoming-meetups"
import RealConnectionSection from "@/components/real-connection-section"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
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
    <main className="min-h-screen">
      <BannerSection />
      <RealConnectionSection />
      <CityGroups />
      <UpcomingMeetups />
      <JoinCommunity />
      <TestimonialSection />
    </main>
  )
}
