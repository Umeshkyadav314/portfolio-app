"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale"
}

export function AnimatedSection({ children, className, delay = 0, animation = "fadeUp" }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClasses = () => {
    const base = "transition-all duration-700 ease-out"

    if (!isVisible) {
      switch (animation) {
        case "fadeIn":
          return `${base} opacity-0`
        case "slideLeft":
          return `${base} opacity-0 -translate-x-8`
        case "slideRight":
          return `${base} opacity-0 translate-x-8`
        case "scale":
          return `${base} opacity-0 scale-95`
        default: // fadeUp
          return `${base} opacity-0 translate-y-8`
      }
    }

    return `${base} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={cn(getAnimationClasses(), className)}>
      {children}
    </div>
  )
}
