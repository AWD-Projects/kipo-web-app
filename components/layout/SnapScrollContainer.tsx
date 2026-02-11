'use client'

import { ReactNode } from 'react'

interface SnapScrollContainerProps {
  children: ReactNode
}

export function SnapScrollContainer({ children }: SnapScrollContainerProps) {
  return (
    <div className="snap-scroll-container bg-black">
      {children}
    </div>
  )
}
