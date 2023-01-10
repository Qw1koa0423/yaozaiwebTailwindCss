import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <div className=" flex  flex-col gap-4">
        <Link href={'/01'}>01</Link>
        <Link href={'/02'}>02</Link>
        <Link href={'/03'}>03</Link>
        <Link href={'/04'}>04</Link>
        <Link href={'/05'}>05</Link>
        <Link href={'/06'}>06</Link>
      </div>
    </div>
  )
}

export default Home
