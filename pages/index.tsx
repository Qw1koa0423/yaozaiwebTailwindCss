import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import Image from 'next/image'
const Home: NextPage = () => {
  //切换按钮实例
  const switchBtnRef = useRef<HTMLDivElement>(null)
  //swiper 实例
  const swiperRef = useRef<any>(null)
  //当前swiper索引
  const [activeIndex, setActiveIndex] = useState(0)
  //控制swiper切换
  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      if (i === activeIndex) {
        switchBtnRef.current?.children[i].classList.add('switchBtnActive')
      } else {
        switchBtnRef.current?.children[i].classList.remove('switchBtnActive')
      }
      swiperRef.current?.slideTo(activeIndex, 500, false)
    }
  }, [activeIndex])
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
        <section className="pt-10 2xl:hidden">
          <div className="container">
            <Swiper
              pagination={true}
              modules={[Pagination, Autoplay]}
              autoplay={true}
              loop={true}
              className="mySwiper w-screen">
              <SwiperSlide className="relative">
                <Image
                  src={'/home/bg_m_1_1.png'}
                  alt=""
                  height={0}
                  width={0}
                  className=" w-screen"
                />
                <div className="absolute  top-2/3 w-full font-normal text-center  flex flex-col space-y-3">
                  <p className="text-base ">
                    遥在式<span className=" font-bold">远程</span>互动
                    <span className=" font-bold">沉浸</span>体验
                  </p>
                  <div className=" text-xs">
                    <p>实时遥在 分身互动</p>
                    <p>多场景适用 多采集端适配</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <Image
                  src={'/home/bg_m_1_2.png'}
                  alt=""
                  height={0}
                  width={0}
                  className=" w-screen"
                />
                <div className="absolute  top-2/3 w-full font-normal text-center  flex flex-col space-y-3">
                  <p className="text-base ">
                    所见即所得<span className=" font-bold">照片级</span>建模
                  </p>
                  <div className=" text-xs">
                    <p>神经网络算法</p>
                    <p>实景快速建模</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <Image
                  src={'/home/bg_m_1_3.png'}
                  alt=""
                  height={0}
                  width={0}
                  className=" w-screen"
                />
                <div className="absolute  top-2/3 w-full font-normal text-center  flex flex-col space-y-3">
                  <p className="text-base ">
                    前端<span className=" font-bold">超高清</span>采集
                  </p>
                  <div className=" text-xs">
                    <p>支持多目3D图像采集</p>
                    <p>业务端遥在机器人 适用各类场景</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <Image
                  src={'/home/bg_m_1_4.png'}
                  alt=""
                  height={0}
                  width={0}
                  className=" w-screen"
                />
                <div className="absolute  top-2/3 w-full font-normal text-center  flex flex-col space-y-3">
                  <p className="text-base ">
                    行业<span className=" font-bold">深度定制</span>
                  </p>
                  <div className=" text-xs">
                    <p>灵活配置 简单易用</p>
                    <p>虚拟现实关键技术突破</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* PC第一屏 */}
        <section className=" hidden 2xl:flex relative ">
          <div className=" relative overflow-hidden max-w-full">
            <Swiper
              ref={swiperRef}
              className="mySwiper w-full"
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              onActiveIndexChange={(swiper) => {
                setActiveIndex(swiper.activeIndex)
              }}>
              <SwiperSlide className="relative">
                <Image
                  src={'/home/bg_pc_1_1.png'}
                  alt=""
                  height={0}
                  width={0}
                  className=" w-full h-screen"
                />
                <div className="absolute  top-1/3 left-[19%] w-full font-normal  flex flex-col space-y-7">
                  <p className=" text-5xl ">
                    遥在式<span className=" font-bold">远程</span>互动
                    <span className=" font-bold">沉浸</span>体验
                  </p>
                  <div className=" text-xl flex flex-col  space-y-2">
                    <p>实时遥在 分身互动</p>
                    <p>多场景适用 多采集端适配</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <Image
                  src={'/home/bg_pc_1_2.png'}
                  alt=""
                  height={0}
                  width={0}
                  className=" w-full h-screen"
                />
                <div className="absolute  top-1/3 left-[19%] w-full font-normal  flex flex-col space-y-7">
                  <p className="text-5xl ">
                    所见即所得<span className=" font-bold">照片级</span>建模
                  </p>
                  <div className="text-xl flex flex-col  space-y-2">
                    <p>神经网络算法</p>
                    <p>实景快速建模</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <Image
                  src={'/home/bg_pc_1_3.png'}
                  alt=""
                  height={0}
                  width={0}
                  className=" w-full h-screen"
                />
                <div className="absolute  top-1/3 left-[19%] w-full font-normal  flex flex-col space-y-7">
                  <p className="text-5xl ">
                    前端<span className=" font-bold">超高清</span>采集
                  </p>
                  <div className="text-xl flex flex-col  space-y-2">
                    <p>支持多目3D图像采集</p>
                    <p>业务端遥在机器人 适用各类场景</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <Image
                  src={'/home/bg_pc_1_4.png'}
                  alt=""
                  height={0}
                  width={0}
                  className=" w-full h-screen"
                />
                <div className="absolute  top-1/3 left-[19%] w-full font-normal  flex flex-col space-y-7">
                  <p className="text-5xl">
                    行业<span className=" font-bold">深度定制</span>
                  </p>
                  <div className="text-xl flex flex-col  space-y-2">
                    <p>灵活配置 简单易用</p>
                    <p>虚拟现实关键技术突破</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            className=" z-50  absolute  bottom-0  left-1/2 -translate-x-1/2  flex "
            ref={switchBtnRef}>
            <button
              onClick={() => {
                setActiveIndex(0)
              }}
              className=" outline-none w-72 h-28 flex items-center justify-center cursor-pointer text-lg  rounded-t-lg ">
              XR超高清低延迟云平台
            </button>
            <button
              onClick={() => {
                setActiveIndex(1)
              }}
              className="outline-none w-72 h-28 flex items-center justify-center  cursor-pointer text-lg rounded-t-lg ">
              XR-NeRF 实景建模引擎
            </button>
            <button
              onClick={() => {
                setActiveIndex(2)
              }}
              className="outline-none w-72 h-28 flex items-center justify-center  cursor-pointer text-lg rounded-t-lg ">
              遥在硬件产品
            </button>
            <button
              onClick={() => {
                setActiveIndex(3)
              }}
              className="outline-none w-72 h-28 flex items-center justify-center  cursor-pointer text-lg rounded-t-lg ">
              虚拟现实+行业
            </button>
          </div>
        </section>
        {/* 第二屏 */}
        <section>
          <Image
            src={'/home/bg_2.png'}
            alt=""
            height={0}
            width={0}
            className=" 2xl:h-screen w-screen "
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
