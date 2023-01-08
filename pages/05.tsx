import React from 'react'

const Size = () => {
  return (
    <div>
      <div className="bg-black text-white w-4">bg-black text-white w-4</div>
      <div className=" bg-black t`ext-white w-48">bg-black text-white w-48</div>
      <div className=" bg-black text-white w-96">bg-black text-white w-96</div>
      <div className=" bg-green-700 text-white w-1/4">
        bg-green-700 text-white w-1/4
      </div>
      <div className=" bg-green-700 text-white w-1/3">
        bg-green-700 text-white w-1/3
      </div>
      <div className=" bg-green-700 text-white w-1/2">
        bg-green-700 text-white w-1/2
      </div>
      <div className=" bg-blue-500 text-white w-screen">
        bg-blue-500 text-white w-screen
      </div>
      <div className=" bg-blue-300 text-white w-full">
        bg-blue-300 text-white w-full
      </div>
      <div className=" bg-blue-700 text-white w-[300px]">
        bg-blue-700 text-white w-[300px]
      </div>
      <div className=" bg-gray-300 max-w-sm mx-auto">
        bg-blue-300 text-white w-fullbg-blue-300 text-white w-fullbg-blue-300
        text-white w-fullbg-blue-300 text-white w-fullbg-blue-300 text-white
        w-fullbg-blue-300 text-white w-fullbg-blue-300 text-white
        w-fullbg-blue-300 text-white w-full
      </div>
      <div className=" flex items-end">
        <div className="bg-orange-500 w-20 h-24">Item 1</div>
        <div className="bg-orange-500 w-20 h-32">Item 2</div>
        <div className="bg-orange-500 w-20 h-40">Item 3</div>
        <div className="bg-orange-500 w-20 h-48">Item 4</div>
        <div className="bg-orange-500 w-20 h-64">Item 5</div>
        <div className="bg-orange-500 w-20 h-96">Item 6</div>
      </div>
    </div>
  )
}

export default Size
