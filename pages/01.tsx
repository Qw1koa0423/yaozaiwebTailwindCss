import Image from 'next/image'
import React from 'react'

const Email = () => {
  return (
    <div className=" flex items-center justify-center h-screen bg-zinc-700">
      <div className=" bg-zinc-800 p-2 m-6 rounded-2xl">
        <div className=" flex flex-col md:flex-row rounded-l-xl">
          <Image
            alt=""
            src={'/img/email-image.jpg'}
            className=" object-fill rounded-xl h-80 w-auto md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
            height={0}
            width={0}
          />
          <div className=" p-3 md:p-12">
            <h2 className=" font-serif text-xl font-medium text-center text-white md:text-left">
              Get diet and fitness tips in your inbox
            </h2>
            <p className=" max-w-xs my-4 leading-5 tracking-wide text-center text-white md:text-left">
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter.
            </p>
            <div className=" flex flex-col md:flex-row mt-5 space-y-4 md:space-x-3 md:space-y-0">
              <input
                type="text"
                placeholder="请输入地址"
                className=" p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs
              placeholder:text-center md:text-left
               focus:outline-none
              placeholder:md:text-left"
              />
              <button className=" px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
                提交
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Email
