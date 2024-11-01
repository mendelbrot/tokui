'use client'

import React from 'react'

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState<
    [number, number]
  >([0, 0])

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowDimensions([window.innerWidth, window.innerHeight])
    }

    handleWindowResize()

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return windowDimensions
}

export default useWindowDimensions
