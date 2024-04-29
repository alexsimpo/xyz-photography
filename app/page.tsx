'use client'

import { cn } from '../utils/classNameUtils'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const caseStudies = [
  {
    id: '1',
    title: 'Everyday Flowers',
    img: '/images/image01.jpg',
    largeImg: '/images/image01@2x.jpg',
  },
  {
    id: '2',
    title: 'The Wilder Night',
    img: '/images/image02.jpg',
    largeImg: '/images/image02@2x.jpg',
  },
  {
    id: '3',
    title: 'Smooth Memories',
    img: '/images/image03.jpg',
    largeImg: '/images/image03@2x.jpg',
  },
  {
    id: '4',
    title: 'The Future Universe',
    img: '/images/image04.jpg',
    largeImg: '/images/image04@2x.jpg',
  },
  {
    id: '5',
    title: 'She Was Born Urban',
    img: '/images/image05.jpg',
    largeImg: '/images/image05@2x.jpg',
  },
]

export default function Home() {
  return (
    <>
      <main>
        <section className='min-h-screen'>
          <div className='container py-4'>
            <p className='uppercase tracking-wider'>xyz - Alex Simpson</p>
          </div>
        </section>
      </main>
    </>
  )
}
