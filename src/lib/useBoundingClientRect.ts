import React from 'react'

function useBoundingClientRect(
  elementRef: React.MutableRefObject<HTMLElement | null>
): DOMRect | null {
  const [elementBoundingClientRect, setElementBoundingClientRect] =
    React.useState<DOMRect | null>(null)

  React.useEffect(() => {
    const handleWindowResize = () => {
      if (elementRef.current) {
        setElementBoundingClientRect(elementRef.current.getBoundingClientRect())
      }
    }

    handleWindowResize()

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [elementRef])

  return elementBoundingClientRect
}

export default useBoundingClientRect
