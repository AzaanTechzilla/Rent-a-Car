import Banners from '@/components/Banners'
import Insights from '@/components/Insights'
import React from 'react'

const OurFleet = () => {
  return (
    <>
       <Banners
        img="/our-fleet-banner.jpg"
        title="Our Fleet"
        text="Experience elevated travel with Azaan: Where style, comfort, and saftey meet for every occassion. Travle in sophistication and peace of mind"
      />
      <div className='relative'>
        <Insights isFrom={false} />
      </div>
    </>
  )
}

export default OurFleet
