import React from 'react'
import Image from 'next/image'
const Possition = () => {
  return (
    <div>
      <div className=" relative w-1/2 h-12 bg-red-200">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
        <div className=" absolute bottom-0 right-0 bg-red-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
      </div>
      <div className=" relative h-32 w-32 bg-yellow-100">
        <div className=" absolute left-0 top-0 h-16 w-16 bg-yellow-300"></div>
      </div>
      <div className=" relative h-32 w-32 bg-yellow-100">
        <div className=" absolute right-0 top-0 h-16 w-16 bg-yellow-300"></div>
      </div>
      <div className=" relative h-32 w-32 bg-yellow-100">
        <div className=" absolute left-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
      </div>
      <div className=" relative h-32 w-32 bg-yellow-100">
        <div className=" absolute right-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
      </div>
      <div className=" relative h-32 w-32 bg-yellow-100">
        <div className=" absolute inset-x-0 top-0 h-16 bg-yellow-300"></div>
      </div>
      <div className=" relative h-32 w-32 bg-yellow-100">
        <div className=" absolute inset-x-0 bottom-0 h-16 bg-yellow-300"></div>
      </div>
      <div className=" relative h-32 w-32 bg-yellow-100">
        <div className=" absolute inset-y-0 left-0 w-16 bg-yellow-300"></div>
      </div>
      <div className=" relative h-32 w-32 bg-yellow-100">
        <div className=" absolute inset-y-0 right-0 w-16 bg-yellow-300"></div>
      </div>
      <div className="">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        <span className=" inline font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </span>
        ipsum nisi, ducimus cupiditate quidem consequatur optio. Pariatur, at.
        Odio alias doloremque
        <span className=" inline-block font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </span>
        sed placeat
        <span className=" block font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </span>
        dolorum in tempore esse facere iste, maiores ab quisquam, molestiae
        earum vitae dolores, corporis delectus nam. Fugit, perspiciatis dolor
        <span className=" hidden font-bold">hidden</span>
        adipisci nisi, maxime placeat dignissimos labore eaque et cupiditate
        exercitationem laboriosam! Reprehenderit incidunt laboriosam doloribus
        laborum illum. Eos.
      </div>
      <div className=" relative h-36">
        <div className="absolute left-10 w-24 h-24 bg-blue-300 z-40">1</div>
        <div className="absolute w-24 left-20 h-24 bg-blue-400">2</div>
        <div className="absolute left-40 w-24 h-24 bg-blue-500 z-10">3</div>
        <div className="absolute z-20 left-60 w-24 h-24 bg-blue-600">4</div>
        <div className="absolute left-80 w-24 h-24 z-30 bg-blue-700">5</div>
      </div>
      <div className=" w-1/2">
        <Image
          src="/img/img1.jpg"
          alt=""
          height={0}
          width={0}
          className=" h-48 w-48 float-left m-4"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          debitis eos molestiae fugit obcaecati est recusandae facere
          consequuntur aut quas facilis voluptas! Quasi voluptatibus placeat
          possimus maxime, libero hic. Blanditiis consequatur dolores,
          obcaecati, omnis, laudantium corrupti quam optio dolorem magnam
          incidunt deleniti? Reiciendis at ea commodi sapiente maiores cumque
          perferendis accusamus optio impedit ad eos laudantium quam ullam
          officia, nam dicta hic aut magnam facere asperiores sit quis minus.
          Perspiciatis hic vitae corporis iusto in non velit aliquid. Voluptatem
          assumenda corporis ex possimus non impedit voluptas doloribus quis
          porro commodi ducimus accusantium recusandae delectus ratione,
          repudiandae minus accusamus. Ipsam, aut.
        </p>
      </div>
    </div>
  )
}

export default Possition
