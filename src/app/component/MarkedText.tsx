'use client'

import React, { useRef, useEffect } from 'react'
import { annotate } from 'rough-notation'

interface MarkedTextProps {
  children: React.ReactNode
  color?: string
  type?:
    | 'underline'
    | 'box'
    | 'circle'
    | 'highlight'
    | 'strike-through'
    | 'crossed-off'
  strokeWidth?: number
  padding?: number
  iterations?: number
  roughness?: number
  bowing?: number
  animationDuration?: number
  responsive?: boolean
}

const MarkedText = ({
  children,
  color = 'var(--color-brand-primary)',
  type = 'underline',
  strokeWidth = 4,
  padding = -4,
  iterations = 2,
  roughness = 10,
  bowing = 10,
  animationDuration = 3000,
  responsive = true,
}: MarkedTextProps) => {
  const spanRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (spanRef.current) {
      // Get responsive padding based on screen size
      const getResponsivePadding = () => {
        if (!responsive) return padding

        const screenWidth = window.innerWidth
        if (screenWidth < 640) {
          // mobile
          return -3 // Fixed -8 padding on mobile
        } else if (screenWidth < 1024) {
          // tablet
          return Math.max(padding * 0.75, -4)
        }
        return padding // desktop
      }

      const getResponsiveStrokeWidth = () => {
        if (!responsive) return strokeWidth

        const screenWidth = window.innerWidth
        if (screenWidth < 640) {
          // mobile
          return Math.max(strokeWidth * 0.75, 2)
        } else if (screenWidth < 1024) {
          // tablet
          return Math.max(strokeWidth * 0.85, 3)
        }
        return strokeWidth // desktop
      }

      const annotation = annotate(spanRef.current, {
        type,
        color,
        strokeWidth: getResponsiveStrokeWidth(),
        padding: getResponsivePadding(),
        iterations,
        animationDuration,
        roughOptions: {
          roughness,
          bowing,
        },
      })
      annotation.show()
    }
  }, [
    type,
    color,
    strokeWidth,
    padding,
    iterations,
    roughness,
    animationDuration,
    bowing,
    responsive,
  ])

  return <span ref={spanRef}>{children}</span>
}

export default MarkedText
