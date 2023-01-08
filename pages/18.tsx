import React from 'react'
import type { NextPage } from 'next'

const Dark: NextPage = () => {
  const darkRef: any = React.useRef(null)
  return (
    <div ref={darkRef}>
      <div className=" container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow-xl">
        <h3 className=" text-slate-900 dark:text-white font-medium tracking-tight">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
        <p className=" text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          suscipit sapiente similique culpa assumenda reprehenderit?
        </p>
      </div>
      <button
        onClick={() => {
          darkRef.current?.classList.toggle('dark')
        }}
        className=" w-12 h-12 outline rounded-md mr-6">
        切换
      </button>
    </div>
  )
}

export default Dark
