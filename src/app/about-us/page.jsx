'use client'
import Banners from '@/components/Banners'
import CallToAction from '@/components/CallToAction'
import FeedBack from '@/components/FeedBack'
import TitleText from '@/components/typography/TitleText'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
       <Banners
        img="/about-banner.jpg"
        title="About US"
        text="We are an all-new chauffeured car service driving Victoria"
      />
      <TitleText title={<span className=''>About Us</span>} textStyles='mt-10' />
      <FeedBack />
      <CallToAction />
    </div>
  )
}

export default AboutUs
