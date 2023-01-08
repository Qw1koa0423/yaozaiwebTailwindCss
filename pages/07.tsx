import { url } from 'inspector'
import React from 'react'

const Background = () => {
  return (
    <div>
      <div
        className="h-64 w-72 bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: 'url(/img/img1.jpg)',
        }}></div>
      <div className=" h-24 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className=" h-24 bg-gradient-to-l from-cyan-500 to-blue-500"></div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea modi
        delectus quae unde et ratione? Enim vel, et corrupti porro atque
        obcaecati asperiores deserunt laudantium, nobis delectus accusantium,
        molestias molestiae.
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea modi
        delectus quae unde et ratione? Enim vel, et corrupti porro atque
        obcaecati asperiores deserunt laudantium, nobis delectus accusantium,
        molestias molestiae.
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea modi
        delectus quae unde et ratione? Enim vel, et corrupti porro atque
        obcaecati asperiores deserunt laudantium, nobis delectus accusantium,
        molestias molestiae.
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea modi
        delectus quae unde et ratione? Enim vel, et corrupti porro atque
        obcaecati asperiores deserunt laudantium, nobis delectus accusantium,
        molestias molestiae.
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-inner">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea modi
        delectus quae unde et ratione? Enim vel, et corrupti porro atque
        obcaecati asperiores deserunt laudantium, nobis delectus accusantium,
        molestias molestiae.
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-2xl shadow-blue-500/50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea modi
        delectus quae unde et ratione? Enim vel, et corrupti porro atque
        obcaecati asperiores deserunt laudantium, nobis delectus accusantium,
        molestias molestiae.
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-2xl shadow-red-500/50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea modi
        delectus quae unde et ratione? Enim vel, et corrupti porro atque
        obcaecati asperiores deserunt laudantium, nobis delectus accusantium,
        molestias molestiae.
      </div>
      <div className="flex justify-center -space-x-24">
        <div className=" bg-blue-400 mix-blend-multiply">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem doloremque ea repudiandae repellendus blanditiis, ipsa
          nisi asperiores molestias, ducimus maiores minima! Sint vel magni
          laudantium voluptatem omnis ullam fuga placeat!
        </div>
        <div className=" bg-pink-400 mix-blend-multiply">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, sint
          quod modi officiis suscipit assumenda nisi laudantium quo iure magni
          recusandae voluptatem inventore sequi delectus, ut fuga vel, ducimus
          reprehenderit?
        </div>
      </div>
    </div>
  )
}

export default Background
