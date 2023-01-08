import Image from 'next/image'
import React from 'react'

const Columns = () => {
  return (
    <div>
      <div className=" columns-4 gap-6">
        <Image
          className=" w-full"
          src="/img/img1.jpg"
          alt=""
          height={0}
          width={0}
        />
        <Image
          className=" w-full"
          src="/img/img2.jpg"
          alt=""
          height={0}
          width={0}
        />
        <Image
          className=" w-full"
          src="/img/img3.jpg"
          alt=""
          height={0}
          width={0}
        />
        <Image
          className=" w-full"
          src="/img/img4.jpg"
          alt=""
          height={0}
          width={0}
        />
      </div>
      <div className=" columns-xs">
        <Image
          className=" w-full"
          src="/img/img1.jpg"
          alt=""
          height={0}
          width={0}
        />
        <Image
          className=" w-full"
          src="/img/img2.jpg"
          alt=""
          height={0}
          width={0}
        />
        <Image
          className=" w-full"
          src="/img/img3.jpg"
          alt=""
          height={0}
          width={0}
        />
        <Image
          className=" w-full"
          src="/img/img4.jpg"
          alt=""
          height={0}
          width={0}
        />
      </div>
      <div className=" columns-4">
        <Image
          className=" w-full aspect-video"
          src="/img/img1.jpg"
          alt=""
          height={0}
          width={0}
        />
        <Image
          className=" w-full aspect-square"
          src="/img/img2.jpg"
          alt=""
          height={0}
          width={0}
        />
        <Image
          className=" w-full aspect-auto"
          src="/img/img3.jpg"
          alt=""
          height={0}
          width={0}
        />
      </div>
    </div>
  )
}

export default Columns
