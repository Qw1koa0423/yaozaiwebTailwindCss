import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <p className="font-sans">
        <Link href="/01">01</Link>
      </p>
      <p className="font-serif">
        <Link href="/02">02</Link>
      </p>
      <p className=" font-thin">
        <Link href="/03">03</Link>
      </p>
      <p className=" font-extralight">
        <Link href="/04">04</Link>
      </p>
      <p className=" font-normal">
        <Link href="/05">05</Link>
      </p>
      <p className=" font-medium">
        <Link href="/06">06</Link>
      </p>
      <p className=" font-semibold">
        <Link href="/07">07</Link>
      </p>
      <p className="font-bold">
        <Link href="/08">08</Link>
      </p>
      <p className=" font-light">
        <Link href="/09">09</Link>
      </p>
      <p>
        <Link href="/10">10</Link>
      </p>
      <p>
        <Link href="/11">11</Link>
      </p>
      <p>
        <Link href="/12">12</Link>
      </p>
      <p>
        <Link href="/13">13</Link>
      </p>
      <p>
        <Link href="/14">14</Link>
      </p>
      <p>
        <Link href="/15">15</Link>
      </p>
      <p>
        <Link href="/16">16</Link>
      </p>
      <p>
        <Link href="/17">17</Link>
      </p>
      <p>
        <Link href="/18">18</Link>
      </p>
    </div>
  )
}

export default Home
