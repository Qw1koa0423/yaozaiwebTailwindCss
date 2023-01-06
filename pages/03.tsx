import React from 'react'

const Spacing = () => {
  return (
    <div className=" container mx-auto">
      <article>
        <h3>Article One</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem laboriosam libero molestiae recusandae accusantium
          voluptates? Expedita dignissimos amet eveniet dolore nobis odio a
          sunt, maiores quasi. Modi amet quos dolores!
        </p>
      </article>
      <div className=" bg-slate-100 m-2">bg-slate-100 m-2</div>
      <div className=" bg-slate-100 ml-4">ml-4</div>
      <div className=" bg-slate-100 mr-4">mr-4</div>
      <div className=" bg-slate-100 mt-4">mt4</div>
      <div className=" bg-slate-100 mb-4">mb4</div>
      <div className=" bg-slate-100 mt-[20px]">pt-20px</div>
      <div className=" bg-slate-100 p-2">bg-slate-100 p-2</div>
      <div className=" bg-slate-100 pl-4">pl-4</div>
      <div className=" bg-slate-100 pr-4">pr-4</div>
      <div className=" bg-slate-100 pt-4">pt4</div>
      <div className=" bg-slate-100 pb-4">pb4</div>
      <div className=" bg-slate-100 pt-[20px]">pt-20px</div>
      <div className=" flex mt-24 space-x-4">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
      </div>
      <div className=" flex flex-col mt-24 space-y-8">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
      </div>
    </div>
  )
}

export default Spacing
