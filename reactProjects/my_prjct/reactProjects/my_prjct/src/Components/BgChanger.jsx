import React from 'react'

const BgChanger = () => {
  return (
    <>
     <div>
         <button className='bg-red-600 text-white px-4 py-2 m-4  rounded-lg'>Red</button>
      <button className='bg-blue-600 text-white px-4 py-2 m-4  rounded-lg'>Blue</button>
      <button className='bg-green-600 text-white px-4 py-2 m-4  rounded-lg'>Green</button>
      <button className='bg-black text-white px-4 py-2 m-4  rounded-lg'>Black</button>
      <button className='bg-white text-gray px-4 py-2 m-4  rounded-lg'>White</button>
      <button className='bg-pink-600 text-white px-4 py-2 m-4  rounded-lg'>Pink</button>
      <button className='bg-purple-600 text-white px-4 py-2 m-4  rounded-lg'>Purple</button>
     </div>
    </>
  )
}

export default BgChanger
