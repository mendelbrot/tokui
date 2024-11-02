'use client'

import Spanner from '@/components/Spanner'
import useBoundingClientRect from '@/lib/useBoundingClientRect'
import React from 'react'

export const BoundaryContext = React.createContext<DOMRect | null>(null)

function ContentLayout({ children }: { children: React.ReactNode }) {
  const boundaryRef = React.useRef<HTMLDivElement | null>(null)
  const boundingRect = useBoundingClientRect(boundaryRef)

  return (
    <BoundaryContext.Provider value={boundingRect}>
      <main ref={boundaryRef} className="prose max-w-prose p-[16px]">
        {children}
        <Spanner />
      </main>
    </BoundaryContext.Provider>
  )
}

export default ContentLayout
