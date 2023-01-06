import React from 'react'

const Color = () => {
  return (
    <div>
      <p className="text-black">
        Tailwind CSS is a utility-first CSS framework for rapidly building
      </p>
      <p className="text-white">
        Tailwind CSS is a utility-first CSS framework for rapidly building
      </p>
      <p className=" text-red-500">
        Tailwind CSS is a utility-first CSS framework for rapidly building
      </p>
      <p className=" text-green-500">
        Tailwind CSS is a utility-first CSS framework for rapidly building
      </p>
      <p className=" bg-slate-500 to-yellow-200">
        Tailwind CSS is a utility-first CSS framework for rapidly building
      </p>
      <p className=" bg-black  text-blue-500">
        Tailwind CSS is a utility-first CSS framework for rapidly building
      </p>
      <p className=" underline decoration-red-500">
        Tailwind CSS is a utility-first CSS framework for rapidly building
      </p>
      <p className="underline decoration-emerald-600">
        Tailwind CSS is a utility-first CSS framework for rapidly building
      </p>
      <input type="text" className=" border border-blue-400" />
      <input type="text" className=" border border-green-400" />
      <div className="divide-y divide-blue-300">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
      </div>
      <button className="outline outline-red-500">按钮1</button>
      <button className="outline outline-blue-500">按钮2</button>
      <button className="shadow-lg bg-cyan-500 shadow-cyan-500">按钮3</button>
      <button className="shadow-lg bg-cyan-500 shadow-purple-500/60">
        按钮4
      </button>
      <input type="checkbox" className=" accent-purple-500" checked />
      <input type="checkbox" className=" accent-cyan-500" checked />
      <div className=" bg-[#427fab] text-center">#427fab</div>
      <div className=" bg-[rgb(255,0,0)] text-center">rgb(255,0,0)</div>
      <div className=" bg-[steelblue] text-center">steelblue</div>
      <div className=" bg-[rgba(255,0,0,0.5)] text-center">
        rgb(255,0,0,0.5)
      </div>
    </div>
  )
}

export default Color
