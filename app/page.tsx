'use client'

import Image from 'next/image'
import { cn } from '../utils/classNameUtils'
import { useState } from 'react'
import { motion } from 'framer-motion'

const caseStudies = [
  {
    id: 1,
    title: 'Everyday Flowers',
    img: '/images/image01.jpg',
    largeImg: '/images/image01@2x.jpg',
  },
  {
    id: 2,
    title: 'The Wilder Night',
    img: '/images/image02.jpg',
    largeImg: '/images/image02@2x.jpg',
  },
  {
    id: 3,
    title: 'Smooth Memories',
    img: '/images/image03.jpg',
    largeImg: '/images/image03@2x.jpg',
  },
  {
    id: 4,
    title: 'The Future Universe',
    img: '/images/image04.jpg',
    largeImg: '/images/image04@2x.jpg',
  },
  {
    id: 5,
    title: 'She Was Born Urban',
    img: '/images/image05.jpg',
    largeImg: '/images/image05@2x.jpg',
  },
]

const caseStudyTitleClass =
  'absolute lg:text-[220px] inline-flex flex-wrap gap-x-7 justify-center tracking-[0.04em] lg:leading-[176px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 min-w-[898px] w-full leading-none text-center font-semibold uppercase max-w-4xl'

export default function Home() {
  const [loadingPreviousCaseStudyIndex, setLoadingPreviousCaseStudyIndex] = useState(caseStudies.length - 2)
  const [previousCaseStudyIndex, setPreviousCaseStudyIndex] = useState(caseStudies.length - 1)
  const [activeCaseStudyIndex, setActiveCaseStudyIndex] = useState(0)
  const [nextCaseStudyIndex, setNextCaseStudyIndex] = useState(1)
  const [loadingNextCaseStudyIndex, setLoadingNextCaseStudyIndex] = useState(2)

  return (
    <main>
      <section className='min-h-screen relative'>
        <div className='container py-4 relative z-10'>
          <p className='uppercase tracking-wider text-white font-semibold'>xyz - Alex Simpson</p>
        </div>
        {caseStudies.map((caseStudy, caseStudyIndex) => {
          const isActiveCaseStudy = activeCaseStudyIndex === caseStudyIndex
          const isPreviousCaseStudy = previousCaseStudyIndex === caseStudyIndex
          const isNextCaseStudy = nextCaseStudyIndex === caseStudyIndex
          const isLoadingPreviousCaseStudy = loadingPreviousCaseStudyIndex === caseStudyIndex
          const isLoadingNextCaseStudy = loadingNextCaseStudyIndex === caseStudyIndex

          const isHiddenCaseStudy = !isActiveCaseStudy && !isPreviousCaseStudy && !isNextCaseStudy

          const caseStudyTitleArray = caseStudy.title.split(' ')

          return (
            <div key={caseStudy.id}>
              <div className='absolute top-0 left-0 w-full h-full max-w-[100vw] overflow-hidden'>
                <div className='relative w-full h-full'>
                  <Image
                    src={caseStudy.largeImg}
                    alt={caseStudy.title}
                    fill
                    className={cn('transition-opacity duration-1000 object-cover', {
                      'opacity-1': isActiveCaseStudy,
                      'opacity-0 pointer-events-none': !isActiveCaseStudy,
                    })}
                  />

                  <div className='absolute top-0 left-0 w-full h-full backdrop-blur-2xl' />

                  <div className='container py-4 h-full w-full pointer-events-none'>
                    <div className={cn('relative h-full w-full z-10', {})}>
                      <h2
                        className={cn('text-transparent', caseStudyTitleClass)}
                        style={{
                          WebkitTextStroke: '1px white',
                        }}>
                        {caseStudyTitleArray.map((word, index) => {
                          return (
                            <div key={index} className='overflow-hidden'>
                              <h2
                                className={cn('transition-all duration-500', {
                                  'translate-y-[125%]': !isActiveCaseStudy,
                                  'translate-y-4 delay-1000': isActiveCaseStudy,
                                })}>
                                {word}
                              </h2>
                            </div>
                          )
                        })}
                      </h2>
                      <motion.div
                        initial={false} // Use false as the initial position state
                        animate={{
                          top: isActiveCaseStudy ? '50%' : isLoadingPreviousCaseStudy || isPreviousCaseStudy ? '100%' : '0%',
                          left: isActiveCaseStudy ? '50%' : isLoadingPreviousCaseStudy || isPreviousCaseStudy ? '0' : '100%',
                          translateX: isActiveCaseStudy
                            ? '-50%'
                            : isLoadingPreviousCaseStudy
                              ? '-200%'
                              : isLoadingNextCaseStudy
                                ? '100%'
                                : isPreviousCaseStudy
                                  ? '0%'
                                  : '-100%',
                          translateY: isActiveCaseStudy
                            ? '-50%'
                            : isLoadingPreviousCaseStudy || isPreviousCaseStudy
                              ? '-100%'
                              : '0%',
                          maxWidth: isActiveCaseStudy ? '512px' : '248px',
                          opacity: isHiddenCaseStudy ? 0 : 1,
                        }}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.3 }}
                        onClick={() => {
                          setActiveCaseStudyIndex(caseStudyIndex)

                          setPreviousCaseStudyIndex(caseStudyIndex === 0 ? caseStudies.length - 1 : caseStudyIndex - 1)
                          setNextCaseStudyIndex(caseStudyIndex === caseStudies.length - 1 ? 0 : caseStudyIndex + 1)

                          setLoadingPreviousCaseStudyIndex(
                            caseStudyIndex === 0
                              ? caseStudies.length - 2
                              : caseStudyIndex - 2 < 0
                                ? caseStudies.length + (caseStudyIndex - 2)
                                : caseStudyIndex - 2
                          )
                          setLoadingNextCaseStudyIndex(
                            caseStudyIndex === caseStudies.length - 1
                              ? 1
                              : caseStudyIndex + 2 >= caseStudies.length
                                ? caseStudyIndex + 2 - caseStudies.length
                                : caseStudyIndex + 2
                          )
                        }}
                        className={cn(
                          'absolute overflow-hidden rounded-[10px] border-black border aspect-[7/9] w-full hover:cursor-pointer',
                          {
                            'pointer-events-auto': isPreviousCaseStudy || isNextCaseStudy,
                          }
                        )}>
                        <Image src={caseStudy.largeImg} alt={caseStudy.title} fill className={cn('object-cover')} />

                        <div
                          className={cn('text-white', caseStudyTitleClass)}
                          style={{
                            WebkitTextStroke: '1px white',
                          }}>
                          {caseStudyTitleArray.map((word, index) => {
                            return (
                              <div key={index} className='overflow-hidden'>
                                <h2
                                  className={cn('transition-all duration-500', {
                                    'translate-y-[125%]': !isActiveCaseStudy,
                                    'translate-y-4 delay-1000': isActiveCaseStudy,
                                  })}>
                                  {word}
                                </h2>
                              </div>
                            )
                          })}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}
