'use client'

import Image from 'next/image'
import { cn } from '../utils/classNameUtils'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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

export default function Home() {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(2)
  const [previousCaseStudyId, setPreviousCaseStudyId] = useState(1)
  const [nextCaseStudyId, setNextCaseStudyId] = useState(3)

  return (
    <main>
      <section className='min-h-screen relative'>
        <div className='container py-4 relative z-10'>
          <p className='uppercase tracking-wider text-white font-semibold'>xyz - Alex Simpson</p>
        </div>
        {caseStudies.map((caseStudy, caseStudyIndex) => {
          const isActiveCaseStudy = activeCaseStudyId === caseStudy.id
          const isPreviousCaseStudy = previousCaseStudyId === caseStudy.id
          const isNextCaseStudy = nextCaseStudyId === caseStudy.id
          const isHiddenCaseStudy = !isActiveCaseStudy && !isPreviousCaseStudy && !isNextCaseStudy

          return (
            <div key={caseStudy.id}>
              <div className='absolute top-0 left-0 w-full h-full'>
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
                    <div
                      className={cn('relative h-full w-full z-10', {
                        'opacity-1': !isHiddenCaseStudy,
                        'opacity-0 pointer-events-none': isHiddenCaseStudy,
                      })}>
                      <h2
                        className={cn(
                          'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:text-[220px] tracking-[0.04em] leading-none text-center font-semibold uppercase min-w-[898px] text-transparent lg:leading-[176px]',
                          {
                            'opacity-1': isActiveCaseStudy,
                            'opacity-0 pointer-events-none': !isActiveCaseStudy,
                          }
                        )}
                        style={{
                          WebkitTextStroke: '1px white',
                        }}>
                        {caseStudy.title}
                      </h2>
                      <div
                        onClick={() => {
                          setActiveCaseStudyId(caseStudy.id)
                          setPreviousCaseStudyId(caseStudyIndex === 0 ? caseStudies.length : caseStudies[caseStudyIndex - 1].id)
                          setNextCaseStudyId(caseStudyIndex === caseStudies.length - 1 ? 1 : caseStudies[caseStudyIndex + 1].id)
                        }}
                        className={cn(
                          'absolute overflow-hidden rounded-[10px] border-black border aspect-[7/9] w-full hover:cursor-pointer',
                          {
                            'max-w-[512px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2': isActiveCaseStudy,
                            'max-w-[248px]': !isActiveCaseStudy,
                            'bottom-0 left-0 pointer-events-auto': isPreviousCaseStudy,
                            'top-0 right-0 pointer-events-auto': isNextCaseStudy,
                          }
                        )}>
                        <Image src={caseStudy.largeImg} alt={caseStudy.title} fill className={cn('object-cover')} />
                        <h2
                          className={cn(
                            'absolute lg:text-[220px] tracking-[0.04em] lg:leading-[176px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-30 min-w-[898px] w-full leading-none text-center font-semibold text-white uppercase max-w-4xl',
                            {
                              'opacity-1': isActiveCaseStudy,
                              'opacity-0 pointer-events-none': !isActiveCaseStudy,
                            }
                          )}
                          style={{
                            WebkitTextStroke: '1px white',
                          }}>
                          {caseStudy.title}
                        </h2>
                      </div>
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
