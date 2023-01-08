import Image from 'next/image'
import React from 'react'

const Transition = () => {
  return (
    <div>
      <button className=" px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700">
        确认
      </button>
      <button className=" px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-1000 hover:opacity-20">
        确认
      </button>

      <button className=" px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-1000 hover:opacity-20 hover:rotate-12">
        确认
      </button>
      <Image
        alt=""
        src={'/img/img1.jpg'}
        height={0}
        width={0}
        className=" w-48 hover:rotate-180 hover:scale-75 hover:skew-x-12 transition duration-2000"
      />
    </div>
  )
}

export default Transition
