import React from 'react'
import TittleText from './typography/TittleText'
import { homeCards } from '@/constants/appdata'

const OurObjective = () => {
  return (
    <>
      <div className="bg-teal-50 pt-12">
        <TittleText title={<span className='text-gray-900 font-extrabold'>Our Objective</span>} />
        <div className="mx-10 md:mx-[10%] mt-8">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-10">
                 {homeCards?.map((cards, index)=>(
                    <div className="rounded shadow-lg bg-white" key={index}>
                        <div className="w-full relative">
                            <img src={cards.img} alt="" className='w-full object-cover' />
                        </div>
                        <div className="font-bold text-xl mb-2 text-third-color p-2">
                            {cards.title}
                        </div>
                        <p className='text-gray-500 text-base p-2'>{cards.description}</p>
                    </div>
                 ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default OurObjective
