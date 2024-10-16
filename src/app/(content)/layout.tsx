'use client'

import useBoundingClientRect from '@/lib/useBoundingClientRect'
import React from 'react'

export const BoundaryContext = React.createContext<DOMRect | null>(null)

function ContentLayout({ children }: { children: React.ReactNode }) {
  const boundaryRef = React.useRef<HTMLDivElement | null>(null)
  const boundingRect = useBoundingClientRect(boundaryRef)
  
  return (
    <BoundaryContext.Provider value={boundingRect}>
      <main ref={boundaryRef} className="max-w-prose p-[16px]">
        {children}
      </main>
    </BoundaryContext.Provider>
  )
}

export default ContentLayout
