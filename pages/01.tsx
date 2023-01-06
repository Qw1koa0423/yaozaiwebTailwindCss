import React from 'react'
import Image from 'next/image'
const First = () => {
  return (
    <div className="flex items-center  p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4 mt-12">
      <Image
        src="/img/warning.svg"
        alt="warning"
        className="w-12 h-12"
        height={0}
        width={0}
      />
      <div>
        <div className="text-xl font-medium text-black">确定删除吗？</div>
        <p className="text-slate-500">关于删除的卡片aaaaaaaa</p>
      </div>
    </div>
  )
}

export default First
