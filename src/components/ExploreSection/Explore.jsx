'use client'
import styles from '@/constants/styles'
import React from 'react'
import TittleText from '../typography/TittleText'
import { exploreWorlds } from '@/constants/appdata'
import ExploreCards from './ExploreCards'

const Explore = () => {
  return (
    <>
      <section className='px-6 py-10'>
        <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TittleText title={<span className='text-gray-900 font-extrabold'>Why Ride With Us?</span>} />
        <div className="my-9 flex lg:flex-row flex-col min-h-[50vh] gap-8 lg:mx-32">
          {exploreWorlds?.map((items, index)=>(
<ExploreCards key={index} items={items}/>
          ))}
        </div>
        </div>
      </section>
    </>
  )
}

export default Explore
