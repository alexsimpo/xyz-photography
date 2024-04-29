'use client'

import { useCallback, useEffect, useState } from 'react'

const useMediaQuery = (width: number, condition: 'min' | 'max'): boolean => {
  const [targetReached, setTargetReached] = useState<boolean>(false)

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(${condition}-width: ${width}px)`)
    media.addEventListener('change', updateTarget)

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true)
    }

    return () => {
      media.removeEventListener('change', updateTarget)
    }
  }, [width, updateTarget])

  return targetReached
}

export default useMediaQuery
