import type { NextPage } from 'next'
import { useRef } from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import Image from 'next/image'
const Home: NextPage = () => {
  const sectionOneRef = useRef<HTMLDivElement>(null)
  return (
    <div>
      <style jsx global>{`
        span.swiper-pagination-bullet.swiper-pagination-bullet-active {
          width: 1.5rem;
          border-radius: 0.25rem;
        }
      `}</style>
      <Head>
        <title>
          遥在科技-XR场景应用层技术平台与服务商，专注遥在技术，赋能虚拟现实+产业
        </title>
        <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
        <meta
          name="keywords"
          content="遥在科技，遥在技术，智慧文旅，元宇宙，文旅元宇宙，NeRF，VR，AR，XR，8K全景视频，全景直播，直播机，超高清低延迟，虚拟现实"
        />
        <meta
          name="description"
          content="遥在科技是建立在遥在技术基础上的XR场景应用层技术平台与服务商，目前聚焦文化、旅游、体育、娱乐、教育产业的应用，在遥在技术范畴内的前沿科技领域不断探索进取。公司确立了真实（Reality）、实时（Real-time）、远程（Remote）的3R技术发展战略，致力于为客户场景数字化服务，共同为用户开创前所未有的沉浸式体验。遥在科技将成长为领先的web3.0时代“虚拟现实+产业”技术平台与服务商。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="renderer" content="webkit" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative top-0">
        {/* 移动第一屏 */}
        <section className="pt-24 2xl:hidden">
          <div className="container">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper w-screen">
              <SwiperSlide className="relative">
                <Image
                  src={'/home/bg_m_1_1.png'}
                  alt=""
                  height={0}
                  width={0}
                  className=" w-screen absolute"
                />
              </SwiperSlide>
              <SwiperSlide className="relative">
                <Image
                  src={'/home/bg_m_1_2.png'}
                  alt=""
                  height={0}
                  width={0}
                  className=" w-screen absolute"
                />
              </SwiperSlide>
              <SwiperSlide className="relative">
                <Image
                  src={'/home/bg_m_1_3.png'}
                  alt=""
                  height={0}
                  width={0}
                  className=" w-screen"
                />
              </SwiperSlide>
              <SwiperSlide className="relative">
                <Image
                  src={'/home/bg_m_1_4.png'}
                  alt=""
                  height={0}
                  width={0}
                  className=" w-screen"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* PC第一屏 */}
        <section>
          <div className="container"></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
