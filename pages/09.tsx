import Image from 'next/image'
import React from 'react'

const Filters = () => {
  return (
    <div>
      <div className=" blur-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit non
        facilis pariatur repudiandae labore beatae sit harum aut enim velit,
        sequi inventore ullam ea nam mollitia vitae nesciunt? In provident harum
        vel dolore, vero iusto hic est animi tempora quasi!
      </div>
      <div className=" blur">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        voluptatibus.{' '}
      </div>
      <Image
        src="/img/img1.jpg"
        alt=""
        width={0}
        height={0}
        className=" blur-xl w-48 h-48"
      />
      <Image
        src="/img/img2.jpg"
        alt=""
        width={0}
        height={0}
        className=" brightness-75 w-48 h-48"
      />
      <Image
        src="/img/img2.jpg"
        alt=""
        width={0}
        height={0}
        className=" brightness-100 w-48 h-48"
      />
      <Image
        src="/img/img2.jpg"
        alt=""
        width={0}
        height={0}
        className=" brightness-110 w-48 h-48"
      />
      <Image
        src="/img/img2.jpg"
        alt=""
        width={0}
        height={0}
        className=" brightness-200 w-48 h-48"
      />
      <Image
        src="/img/img3.jpg"
        alt=""
        width={0}
        height={0}
        className=" contrast-0 w-48 h-48"
      />
      <Image
        src="/img/img3.jpg"
        alt=""
        width={0}
        height={0}
        className=" contrast-50 w-48 h-48"
      />
      <Image
        src="/img/img3.jpg"
        alt=""
        width={0}
        height={0}
        className=" contrast-75 w-48 h-48"
      />
      <Image
        src="/img/img3.jpg"
        alt=""
        width={0}
        height={0}
        className=" contrast-100 w-48 h-48"
      />
      <Image
        src="/img/img4.jpg"
        alt=""
        width={0}
        height={0}
        className=" grayscale w-48 h-48"
      />
      <Image
        src="/img/img4.jpg"
        alt=""
        width={0}
        height={0}
        className=" invert w-48 h-48"
      />
      <Image
        src="/img/img4.jpg"
        alt=""
        width={0}
        height={0}
        className=" sepia w-48 h-48"
      />
      <Image
        src="/img/img5.jpg"
        alt=""
        width={0}
        height={0}
        className=" hue-rotate-15 w-48 h-48"
      />
      <Image
        src="/img/img5.jpg"
        alt=""
        width={0}
        height={0}
        className=" hue-rotate-60 w-48 h-48"
      />
      <Image
        src="/img/img5.jpg"
        alt=""
        width={0}
        height={0}
        className=" hue-rotate-90 w-48 h-48"
      />
    </div>
  )
}

export default Filters
