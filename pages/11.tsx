import React from 'react'

const Breakpoints = () => {
  const [width, setWidth] = React.useState(0)
  function handleResize() {
    setWidth(window.innerWidth)
  }
  React.useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div>
      <div className=" bg-black lg:bg-yellow-500 xl:bg-purple-800 sm:bg-green-500 md:bg-blue-800 2xl:bg-red-800">
        <h1 className=" text-white text-4xl md:text-3xl xl:text-5xl">
          width:{width}
        </h1>
      </div>
    </div>
  )
}

export default Breakpoints
