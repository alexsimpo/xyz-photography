import { useEffect, useState } from 'react'
import { cn } from '../utils/classNameUtils'

export const GalleryCursor = ({ progress, cursorPointerHover = false }: { progress: number; cursorPointerHover: boolean }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    window.addEventListener('mousemove', (e) => setMousePosition({ x: e.clientX, y: e.clientY }))

    return () => window.removeEventListener('mousemove', (e) => setMousePosition({ x: e.clientX, y: e.clientY }))
  }, [])

  return (
    <div className='fixed top-0 left-0 h-screen w-screen pointer-events-none z-50'>
      <div className='relative h-full w-full'>
        <div
          className={cn(
            'absolute w-[42px] h-[42px] min-w-[42px] min-h-[42px] -rotate-90 rounded-full border border-white/10  -translate-x-1/2 -translate-y-1/2'
          )}
          style={{
            top: mousePosition.y,
            left: mousePosition.x,
          }}>
          <CircleSVG progress={progress} />
          <div
            className={cn(
              'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all bg-white rounded-full',
              {
                'w-1 h-1': !cursorPointerHover,
                'w-6 h-6': cursorPointerHover,
              }
            )}
          />
        </div>
      </div>
    </div>
  )
}

const CircleSVG = ({ progress }: { progress: number }) => {
  return (
    <div className='progress-circle'>
      <svg height='40' width='40' xmlns='http://www.w3.org/2000/svg'>
        <circle
          r='20'
          cx='20'
          cy='20'
          fill='transparent'
          stroke='white'
          strokeWidth='1'
          style={{ strokeDashoffset: 450 - 135 * progress }}
        />
      </svg>
    </div>
  )
}
