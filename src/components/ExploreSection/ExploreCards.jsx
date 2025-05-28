import React from 'react'

const ExploreCards = ({items}) => {
  return (
    <>
      <div className="text-center w-full sm:mx-auto mt-16 shadow-xl text-gray-900 px-10 py-6 gradient-05 sm:p-8 rounded-lg border-third-color border-2 relative cursor-pointer hover:shadow-third-color">
        <div className="mx-auto w-32 h-32 absolute -top-12 left-[50%] translate-x-[-50%] border-4 border-white rounded-full overflow-hidden">
            <img src={items.imgUrl} alt="" className='object-cover object-center h-32' />
        </div>
        <div className="h-full flex flex-col justify-center">
            <h2 className='text-xl font-bold text-third-color'>{items.title}</h2>
            <p className='text-gray-500 mt-6'>{items.description}</p>
        </div>
      </div>
    </>
  )
}

export default ExploreCards
