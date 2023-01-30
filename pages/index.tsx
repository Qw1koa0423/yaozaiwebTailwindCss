import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import Link from 'next/link'
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
  const [planActive, setPlanActive] = useState(0)
  const [tabActive, setTabActive] = useState<number | boolean>(false)
  const btnRef = useRef<HTMLDivElement>(null)
  const [up, setUp] = useState(true)
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
            className="z-10  absolute  bottom-0  left-1/2 -translate-x-1/2  flex "
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
        {/* 第三屏 */}
        <section>
          <div
            className="bg-cover px-8 py-9  bg-center bg-no-repeat h-auto 2xl:h-screen 2xl:relative"
            style={{
              backgroundImage: `url('/home/bg_3.png')`,
            }}>
            <div className="2xl:absolute 2xl:left-1/2 2xl:top-1/2 2xl:-translate-x-1/2 2xl:-translate-y-1/2">
              <div className=" text-center text-white text-xl 2xl:text-3xl 2xl:text-start ">
                解决方案
              </div>
              <div className=" flex flex-col space-y-5  mt-5 2xl:mt-14 2xl:flex-row 2xl:space-x-5 2xl:space-y-0 2xl:relative">
                {!up && (
                  <div
                    className="hidden 2xl:block absolute -top-12 rotate-180 left-24 h-9 w-9 bg-center bg-no-repeat bg-cover hover:cursor-pointer"
                    style={{
                      backgroundImage: `url('/home/action.png')`,
                    }}
                    onClick={() => {
                      if (btnRef.current) {
                        setUp(true)
                        btnRef.current.style.transform = 'translateY(0)'
                      }
                    }}></div>
                )}
                {up && (
                  <div
                    className="hidden 2xl:block absolute -bottom-12 left-20 h-9 w-9 bg-center bg-no-repeat bg-cover hover:cursor-pointer"
                    style={{
                      backgroundImage: `url('/home/action.png')`,
                    }}
                    onClick={() => {
                      if (btnRef.current) {
                        setUp(false)
                        btnRef.current.style.transform = 'translateY(-300px)'
                      }
                    }}></div>
                )}
                {/* 第三屏切换按钮 */}
                <div className=" overflow-hidden w-full 2xl:w-[183px]  overflow-x-scroll 2xl:overflow-x-hidden 2xl:max-h-[570px] 2xl:rounded-xl 2xl:bg-black 2xl:bg-opacity-50">
                  <div
                    className="flex w-[600px] 2xl:flex-col 2xl:w-[183px] 2xl:space-y-6 2xl:items-center 2xl:justify-center 2xl:transition-all 2xl:transform 2xl:duration-500 2xl:ease-in-out"
                    ref={btnRef}>
                    <button
                      className={`w-20 2xl:w-[183px] 2xl:h-[75px]  2xl:rounded-xl py-2 flex flex-col 2xl:flex-row 2xl:space-x-3 items-center justify-center space-y-2  2xl:group outline-none 2xl:relative ${
                        planActive == 0 && 'bg-[#2f99fa]'
                      }`}
                      onMouseEnter={() => {
                        setPlanActive(0)
                      }}>
                      <Image
                        src={'/home/jypx.png'}
                        alt="教育培训"
                        height={0}
                        width={0}
                        className={`w-8 h-8 2xl:w-11 2xl:h-11  ${
                          planActive == 0 && '2xl:tabActive'
                        }  `}
                      />
                      <div className="text-white text-sm 2xl:text-base">
                        教育培训
                      </div>
                      {planActive != 0 && (
                        <hr className="w-6 absolute hidden bottom-0 2xl:flex" />
                      )}
                    </button>
                    <button
                      className={`w-20 2xl:w-[183px] 2xl:h-[75px]  2xl:rounded-xl py-2 flex flex-col 2xl:flex-row 2xl:space-x-3 items-center justify-center space-y-2  2xl:group outline-none 2xl:relative ${
                        planActive == 1 && 'bg-[#2f99fa]'
                      }`}
                      onMouseEnter={() => {
                        setPlanActive(1)
                      }}>
                      <Image
                        src={'/home/whly.png'}
                        alt="文化旅游"
                        height={0}
                        width={0}
                        className={` w-8 h-8 2xl:w-11 2xl:h-11 ${
                          planActive == 1 && '2xl:tabActive'
                        } `}
                      />
                      <div className="text-white text-sm 2xl:text-base">
                        文化旅游
                      </div>
                      {planActive != 1 && (
                        <hr className="w-6 absolute hidden bottom-0 2xl:flex" />
                      )}
                    </button>
                    <button
                      className={`w-20 2xl:w-[183px] 2xl:h-[75px]  2xl:rounded-xl py-2 flex flex-col 2xl:flex-row 2xl:space-x-3 items-center justify-center space-y-2  2xl:group outline-none 2xl:relative ${
                        planActive == 2 && 'bg-[#2f99fa]'
                      }`}
                      onMouseEnter={() => {
                        setPlanActive(2)
                      }}>
                      <Image
                        src={'/home/gysc.png'}
                        alt="工业生产"
                        height={0}
                        width={0}
                        className={`w-8 h-8 2xl:w-11 2xl:h-11 ${
                          planActive == 2 && '2xl:tabActive'
                        }`}
                      />
                      <div className="text-white text-sm 2xl:text-base">
                        工业生产
                      </div>
                      {planActive != 2 && (
                        <hr className="w-6 absolute hidden bottom-0 2xl:flex" />
                      )}
                    </button>
                    <button
                      className={`w-20 2xl:w-[183px] 2xl:h-[75px]  2xl:rounded-xl py-2 flex flex-col 2xl:flex-row 2xl:space-x-3 items-center justify-center space-y-2  2xl:group outline-none 2xl:relative ${
                        planActive == 3 && 'bg-[#2f99fa]'
                      }`}
                      onMouseEnter={() => {
                        setPlanActive(3)
                      }}>
                      <Image
                        src={'/home/tyjk.png'}
                        alt="体育健康"
                        height={0}
                        width={0}
                        className={` w-8 h-8 2xl:w-11 2xl:h-11 ${
                          planActive == 3 && '2xl:tabActive'
                        }`}
                      />
                      <div className="text-white text-sm 2xl:text-base">
                        体育健康
                      </div>
                      {planActive != 3 && (
                        <hr className="w-6 absolute hidden bottom-0 2xl:flex" />
                      )}
                    </button>
                    <button
                      className={`w-20 2xl:w-[183px] 2xl:h-[75px]  2xl:rounded-xl py-2 flex flex-col 2xl:flex-row 2xl:space-x-3 items-center justify-center space-y-2  2xl:group outline-none 2xl:relative ${
                        planActive == 4 && 'bg-[#2f99fa]'
                      }`}
                      onMouseEnter={() => {
                        setPlanActive(4)
                      }}>
                      <Image
                        src={'/home/smcy.png'}
                        alt="商贸创意"
                        height={0}
                        width={0}
                        className={` w-8 h-8 2xl:w-11 2xl:h-11 ${
                          planActive == 4 && '2xl:tabActive'
                        }`}
                      />
                      <div className="text-white text-sm 2xl:text-base">
                        商贸创意
                      </div>
                      {planActive != 4 && (
                        <hr className="w-6 absolute hidden bottom-0 2xl:flex" />
                      )}
                    </button>
                    <button
                      className={`w-20 2xl:w-[183px] 2xl:h-[75px]  2xl:rounded-xl py-2 flex flex-col 2xl:flex-row 2xl:space-x-3 items-center justify-center space-y-2  2xl:group outline-none 2xl:relative ${
                        planActive == 5 && 'bg-[#2f99fa]'
                      }`}
                      onMouseEnter={() => {
                        setPlanActive(5)
                      }}>
                      <Image
                        src={'/home/aqyj.png'}
                        alt="安全应急"
                        height={0}
                        width={0}
                        className={` w-8 h-8 2xl:w-11 2xl:h-11 ${
                          planActive == 5 && '2xl:tabActive'
                        }`}
                      />
                      <div className="text-white text-sm 2xl:text-base">
                        安全应急
                      </div>
                      {planActive != 5 && (
                        <hr className="w-6 absolute hidden bottom-0 2xl:flex" />
                      )}
                    </button>
                    <button
                      className={`w-20 2xl:w-[183px] 2xl:h-[75px]  2xl:rounded-xl py-2 flex flex-col 2xl:flex-row 2xl:space-x-3 items-center justify-center space-y-2  2xl:group outline-none 2xl:relative ${
                        planActive == 6 && 'bg-[#2f99fa]'
                      }`}
                      onMouseEnter={() => {
                        setPlanActive(6)
                      }}>
                      <Image
                        src={'/home/yyyl.png'}
                        alt="演艺娱乐"
                        height={0}
                        width={0}
                        className={` w-8 h-8 2xl:w-11 2xl:h-11 ${
                          planActive == 6 && '2xl:tabActive'
                        }`}
                      />
                      <div className="text-white text-sm 2xl:text-base">
                        演艺娱乐
                      </div>
                      {planActive != 6 && (
                        <hr className="w-6 absolute hidden bottom-0 2xl:flex" />
                      )}
                    </button>
                    <button
                      className={`w-20 2xl:w-[183px] 2xl:h-[75px]  2xl:rounded-xl py-2 flex flex-col 2xl:flex-row 2xl:space-x-3 items-center justify-center space-y-2  2xl:group outline-none 2xl:relative ${
                        planActive == 7 && 'bg-[#2f99fa]'
                      }`}
                      onMouseEnter={() => {
                        setPlanActive(7)
                      }}>
                      <Image
                        src={'/home/czfz.png'}
                        alt="残障辅助"
                        height={0}
                        width={0}
                        className={` w-8 h-8 2xl:w-11 2xl:h-11 ${
                          planActive == 7 && '2xl:tabActive'
                        }`}
                      />
                      <div className="text-white text-sm 2xl:text-base">
                        残障辅助
                      </div>
                      {planActive != 7 && (
                        <hr className="w-6 absolute hidden bottom-0 2xl:flex" />
                      )}
                    </button>
                    <button
                      className={`w-20 2xl:w-[183px] 2xl:h-[75px]  2xl:rounded-xl py-2 flex flex-col 2xl:flex-row 2xl:space-x-3 items-center justify-center space-y-2  2xl:group outline-none 2xl:relative ${
                        planActive == 8 && 'bg-[#2f99fa]'
                      }`}
                      onMouseEnter={() => {
                        setPlanActive(8)
                      }}>
                      <Image
                        src={'/home/rhmt.png'}
                        alt="融合媒体"
                        height={0}
                        width={0}
                        className={` w-8 h-8 2xl:w-11 2xl:h-11 ${
                          planActive == 8 && '2xl:tabActive'
                        }`}
                      />
                      <div className="text-white text-sm 2xl:text-base">
                        融合媒体
                      </div>
                      {planActive != 8 && (
                        <hr className="w-6 absolute hidden bottom-0 2xl:flex" />
                      )}
                    </button>
                  </div>
                </div> 
                {/* 第三屏图片 */}
                <div className="grid grid-cols-4  gap-y-4 2xl:gap-0 2xl:w-[1004px] 2xl:h-[570px] 2xl:grid-rows-2">
                  {planActive == 0 && (
                    <>
                      <div className="col-span-4 relative h-52 2xl:col-span-2 2xl:h-full 2xl:overflow-hidden 2xl:row-span-1">
                        <Image
                          src={'/home/jypx_1.png'}
                          fill
                          alt="AR教育培训"
                          className="rounded-2xl 2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                        />
                        <div className="absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                          AR教育培训
                        </div>
                      </div>
                      <div className=" col-span-4 relative h-52 2xl:col-span-2 2xl:h-full 2xl:overflow-hidden 2xl:row-span-1">
                        <Image
                          src={'/home/jypx_2.png'}
                          fill
                          alt="AR教育培训"
                          className="rounded-2xl 2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                        />
                        <div className="absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                          AR教育培训
                        </div>
                      </div>
                      <div className="col-span-4 relative h-52 2xl:col-span-2 2xl:h-full 2xl:overflow-hidden 2xl:row-span-1">
                        <Image
                          src={'/home/jypx_3.png'}
                          fill
                          alt="VR虚拟现实教育仿真开发"
                          className="rounded-2xl  2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                        />
                        <div className="absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                          VR虚拟现实教育仿真开发
                        </div>
                      </div>
                      <div className=" col-span-4 relative h-52 2xl:col-span-2 2xl:h-full 2xl:overflow-hidden 2xl:row-span-1">
                        <Image
                          src={'/home/jypx_4.png'}
                          fill
                          alt="遥在远程教学平台"
                          className=" rounded-2xl 2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                        />
                        <div className=" absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                          遥在远程教学平台
                        </div>
                      </div>
                    </>
                  )}
                  {planActive == 1 && (
                    <>
                      <div className="col-span-4 relative h-52 2xl:col-span-2  2xl:h-full 2xl:overflow-hidden 2xl:row-span-2">
                        <Image
                          src={'/home/whly_1.png'}
                          alt="文旅元宇宙"
                          fill
                          className=" rounded-2xl 2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                        />
                        <div className="  absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                          文旅元宇宙
                        </div>
                      </div>
                      <div className=" col-span-4 relative h-52 2xl:col-span-2 2xl:h-full 2xl:overflow-hidden 2xl:row-span-2">
                        <Image
                          src={'/home/whly_2.png'}
                          fill
                          alt="山东文旅数字场景化平台"
                          className=" rounded-2xl 2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                        />
                        <div className=" absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                          山东文旅数字场景化平台
                        </div>
                      </div>
                    </>
                  )}
                  {planActive == 2 && (
                    <div className=" col-span-4 relative h-52 2xl:col-span-4 2xl:h-full 2xl:overflow-hidden 2xl:row-span-2">
                      <Image
                        src={'/home/gysc_1.png'}
                        alt="数字孪生工厂"
                        fill
                        className="rounded-2xl 2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                      />
                      <div className="absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                        数字孪生工厂
                      </div>
                    </div>
                  )}
                  {planActive == 3 && (
                    <>
                      <div className=" col-span-4 relative h-52 2xl:col-span-2 2xl:h-full 2xl:row-span-2 2xl:overflow-hidden">
                        <Image
                          src={'/home/tyjk_1.png'}
                          alt="自由视角体育拍摄"
                          fill
                          className="rounded-2xl 2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                        />
                        <div className="absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                          自由视角体育拍摄
                        </div>
                      </div>
                      <div className="col-span-4 relative h-52 2xl:col-span-2 2xl:row-span-1 2xl:h-full 2xl:overflow-hidden">
                        <Image
                          src={'/home/tyjk_2.png'}
                          fill
                          alt="沉浸式心理健康诊疗平台"
                          className="rounded-2xl 2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                        />
                        <div className="absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                          沉浸式心理健康诊疗平台
                        </div>
                      </div>
                      <div className=" col-span-4 relative h-52 2xl:col-span-2 2xl:row-span-1 2xl:h-full 2xl:overflow-hidden">
                        <Image
                          src={'/home/tyjk_3.png'}
                          fill
                          alt="全景赛事直播"
                          className="rounded-2xl 2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                        />
                        <div className="absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                          全景赛事直播
                        </div>
                      </div>
                    </>
                  )}
                  {planActive == 4 && (
                    <>
                      <div className="col-span-4 relative h-52 2xl:col-span-4 2xl:h-full 2xl:row-span-1 2xl:overflow-hidden">
                        <Image
                          src={'/home/smcy_1.png'}
                          alt="遥在远程逛展平台"
                          fill
                          className="rounded-2xl 2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                        />
                        <div className="absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                          遥在远程逛展平台
                        </div>
                      </div>
                      <div className=" col-span-4 relative h-52 2xl:col-span-4 2xl:h-full 2xl:row-span-1 2xl:overflow-hidden">
                        <Image
                          src={'/home/smcy_2.png'}
                          fill
                          alt="遥在沉浸式跨境直播带货解决方案"
                          className="rounded-2xl 2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                        />
                        <div className="absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                          遥在沉浸式跨境直播带货解决方案
                        </div>
                      </div>
                    </>
                  )}
                  {planActive == 5 && (
                    <div className=" col-span-4 relative h-52 2xl:col-span-4 2xl:h-full 2xl:row-span-2 2xl:overflow-hidden">
                      <Image
                        src={'/home/aqyj_1.png'}
                        alt="特种行业远程应急及实训平台"
                        fill
                        className="rounded-2xl  2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                      />
                      <div className="absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                        特种行业远程应急及实训平台
                      </div>
                    </div>
                  )}
                  {planActive == 6 && (
                    <>
                      <div className=" col-span-4 relative h-52 2xl:col-span-4 2xl:h-full 2xl:row-span-1 2xl:overflow-hidden">
                        <Image
                          src={'/home/yyyl_1.png'}
                          alt="自由视角演艺拍摄"
                          fill
                          className="rounded-2xl 2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                        />
                        <div className="absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                          自由视角演艺拍摄
                        </div>
                      </div>
                      <div className=" col-span-4 relative h-52 2xl:col-span-4 2xl:h-full 2xl:row-span-1 2xl:overflow-hidden">
                        <Image
                          src={'/home/yyyl_2.png'}
                          alt="全景演艺直播"
                          fill
                          className="rounded-2xl  2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                        />
                        <div className="absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                          全景演艺直播
                        </div>
                      </div>
                    </>
                  )}
                  {planActive == 7 && (
                    <div className=" col-span-4 relative h-52 2xl:col-span-4 2xl:h-full 2xl:row-span-2 2xl:overflow-hidden">
                      <Image
                        src={'/home/czrs_1.png'}
                        alt="残障人士远程体验平台"
                        fill
                        className="rounded-2xl 2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                      />
                      <div className="absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                        残障人士远程体验平台
                      </div>
                    </div>
                  )}
                  {planActive == 8 && (
                    <div className="col-span-4 relative h-52 2xl:col-span-4 2xl:h-full 2xl:row-span-2 2xl:overflow-hidden">
                      <Image
                        src={'/home/rhmt_1.png'}
                        alt="遥在超高清低延迟视频解决方案"
                        fill
                        className="rounded-2xl 2xl:rounded-none 2xl:hover:scale-125 2xl:transition-transform 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                      />
                      <div className="absolute bottom-0 rounded-b-2xl text-white bg-black bg-opacity-[60%] text-xs py-2 px-3 w-full 2xl:rounded-b-none 2xl:text-lg 2xl:px-6 2xl:py-2">
                        遥在超高清低延迟视频解决方案
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 第四屏 */}
        <section>
          <div className=" bg-white w-full  mb-5 2xl:mb-24 ">
            <div className=" text-center mt-10 text-lg font-medium 2xl:mt-20 2xl:text-3xl">
              硬件产品
            </div>
            <div className="flex flex-col items-center justify-center mt-4 space-y-4 2xl:flex-row 2xl:space-y-0 2xl:mt-24 2xl:h-56">
              <div
                className=" bg-center bg-cover bg-no-repeat w-80 h-40 rounded-2xl relative 2xl:w-72 2xl:h-52 2xl:hover:h-56 2xl:hover:-translate-y-4 2xl:transition-all 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                style={{
                  backgroundImage: `url(/home/yj_bg1.png)`,
                }}>
                <div
                  style={{
                    backgroundImage: `url(/home/yj_1.png)`,
                  }}
                  className="absolute bottom-0 right-0 w-56 h-full bg-contain bg-center bg-no-repeat 2xl:w-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white font-bold text-xl text-center">
                  <div className="2xl:text-2xl">TP C300</div>
                  <div className="2xl:text-sm 2xl:font-normal mt-3">
                    720°全景相机
                  </div>
                </div>
              </div>
              <div
                className=" bg-center bg-cover bg-no-repeat w-80 h-40 rounded-2xl relative 2xl:w-72 2xl:h-52 2xl:hover:h-56 2xl:hover:-translate-y-4 2xl:transition-all 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                style={{
                  backgroundImage: `url(/home/yj_bg2.png)`,
                }}>
                <div
                  style={{
                    backgroundImage: `url(/home/yj_2.png)`,
                  }}
                  className=" absolute -bottom-1 right-10 w-20 h-full bg-contain bg-center bg-no-repeat 2xl:w-24 2xl:right-1"></div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white font-bold text-xl text-center">
                  <div className="2xl:text-2xl">TP Robot</div>
                  <div className="2xl:text-sm 2xl:font-normal mt-3">
                    遥在机器人
                  </div>
                </div>
              </div>
              <div
                className=" bg-center bg-cover bg-no-repeat w-80 h-40 rounded-2xl relative 2xl:w-72 2xl:h-52 2xl:hover:h-56 2xl:hover:-translate-y-4 2xl:transition-all 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                style={{
                  backgroundImage: `url(/home/yj_bg3.png)`,
                }}>
                <div
                  style={{
                    backgroundImage: `url(/home/yj_3.png)`,
                  }}
                  className=" absolute bottom-0 right-6 w-40 h-full  bg-contain bg-center bg-no-repeat 2xl:w-56 2xl:right-0"></div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white font-bold text-xl text-center">
                  <div className="2xl:text-2xl">TP C100</div>
                  <div className="2xl:text-sm 2xl:font-normal mt-3">
                    180°3D全景相机
                  </div>
                </div>
              </div>
              <div
                className=" bg-center bg-cover bg-no-repeat w-80 h-40 rounded-2xl relative 2xl:w-72 2xl:h-52 2xl:hover:h-56 2xl:hover:-translate-y-4 2xl:transition-all 2xl:duration-500 2xl:transform-gpu 2xl:transform-origin-center"
                style={{
                  backgroundImage: `url(/home/yj_bg4.png)`,
                }}>
                <div
                  style={{
                    backgroundImage: `url(/home/yj_4.png)`,
                  }}
                  className="absolute bottom-0 right-10 w-32 h-full  bg-contain bg-center bg-no-repeat 2xl:w-48"></div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white font-bold text-xl text-center">
                  <div className="2xl:text-2xl">TP 视觉互动</div>
                  <div className="2xl:text-2xl mt-3">采集模组</div>
                </div>
              </div>
            </div>
            <div className="flex w-[600px] max-w-full 2xl:w-[1200px] mx-auto mt-5 2xl:mt-10 overflow-hidden">
              <div className=" flex  space-x-10 2xl:space-x-36 animate-scroll_mobile  2xl:animate-scroll hover:paused items-center">
                <Image
                  src="/navbar/logo_black.png"
                  alt="遥在科技"
                  height={0}
                  width={0}
                  className=" hover:cursor-pointer w-[156px] h-[55px]"
                />
                <Image
                  src="/home/sddx.png"
                  width={0}
                  height={0}
                  alt="山东大学"
                  className=" hover:cursor-pointer w-[128px] h-[39px]"
                />
                <Image
                  src="/home/sdyyjt.png"
                  width={0}
                  height={0}
                  alt="山东产业技术研究院"
                  className=" hover:cursor-pointer w-[151px] h-[41px]"
                />
                <Image
                  src="/home/sdcyyjy.png"
                  width={0}
                  height={0}
                  alt="山东演艺集团"
                  className=" hover:cursor-pointer w-[201px] h-[40px]"
                />
                <Image
                  src="/navbar/logo_black.png"
                  alt="遥在科技"
                  height={0}
                  width={0}
                  className=" hover:cursor-pointer w-[156px] h-[55px]"
                />
                <Image
                  src="/home/sddx.png"
                  width={0}
                  height={0}
                  alt="山东大学"
                  className=" hover:cursor-pointer w-[128px] h-[39px]"
                />
                <Image
                  src="/home/sdyyjt.png"
                  width={0}
                  height={0}
                  alt="山东产业技术研究院"
                  className=" hover:cursor-pointer w-[151px] h-[41px]"
                />
                <Image
                  src="/home/sdcyyjy.png"
                  width={0}
                  height={0}
                  alt="山东演艺集团"
                  className=" hover:cursor-pointer w-[201px] h-[40px]"
                />
              </div>
            </div>
          </div>
        </section>
        {/* 第五屏 */}
        <section>
          <div
            className=" 2xl:hidden bg-left bg-cover bg-no-repeat px-5 pt-5 pb-10 text-white"
            style={{
              backgroundImage: `url(/home/bg_m_4.png)`,
            }}>
            <div className=" text-xl font-bold">XR超高清低延迟云平台</div>
            <div className="text-xs mt-2 font-normal">
              面向企业/机构/创业者/开发者的产品服务平台
            </div>
          </div>
          <div
            className="hidden 2xl:block bg-left bg-cover bg-no-repeat px-96 pt-24 pb-24 text-white"
            style={{
              backgroundImage: `url(/home/bg_4.png)`,
            }}>
            <div className=" text-3xl font-bold">XR超高清低延迟云平台</div>
            <div className="text-xl mt-4 font-normal">
              面向企业/机构/创业者/开发者的产品服务平台
            </div>
          </div>
        </section>
        {/* 第六屏 */}
        <section>
          <div className=" bg-[#FBFCFF] 2xl:hidden pb-4">
            <div className="text-xl text-center font-medium pt-9">
              虚拟现实+产业
            </div>
            <div
              className=" bg-cover bg-center bg-no-repeat h-[489px]  flex items-center justify-center"
              style={{
                backgroundImage: `url(/home/bg_m_5.png)`,
              }}>
              <div
                className=" bg-center bg-contain bg-no-repeat w-24 h-24 relative"
                style={{
                  backgroundImage: `url(/home/map.png)`,
                }}>
                <div
                  className=" absolute w-14 h-14 flex items-center justify-center text-xs bg-contain bg-no-repeat bg-center -top-full left-1/2 -translate-x-1/2"
                  style={{
                    backgroundImage: `url(/home/ty.png)`,
                  }}>
                  教育
                  <br />
                  培训
                </div>
                <div
                  className="absolute w-14 h-14 flex items-center justify-center  text-xs bg-contain bg-no-repeat bg-center -top-[70%] -right-[60%] "
                  style={{
                    backgroundImage: `url(/home/ty.png)`,
                  }}>
                  文化
                  <br />
                  旅游
                </div>
                <div
                  className="absolute w-14 h-14 flex items-center justify-center  text-xs bg-contain bg-no-repeat bg-center -top-[0%] -right-full"
                  style={{
                    backgroundImage: `url(/home/ty.png)`,
                  }}>
                  工业
                  <br />
                  生产
                </div>
                <div
                  className="absolute w-14 h-14 flex items-center justify-center  text-xs bg-contain bg-no-repeat bg-center -bottom-[40%] -right-[90%]"
                  style={{
                    backgroundImage: `url(/home/ty.png)`,
                  }}>
                  体育
                  <br />
                  健康
                </div>
                <div
                  className="absolute w-14 h-14 flex items-center justify-center  text-xs bg-contain bg-no-repeat bg-center -bottom-[90%] -right-[20%]"
                  style={{
                    backgroundImage: `url(/home/ty.png)`,
                  }}>
                  融合
                  <br />
                  媒体
                </div>
                <div
                  className="absolute w-14 h-14 flex items-center justify-center  text-xs bg-contain bg-no-repeat bg-center  -bottom-[90%] -left-[18%]"
                  style={{
                    backgroundImage: `url(/home/ty.png)`,
                  }}>
                  商贸
                  <br />
                  创意
                </div>
                <div
                  className="absolute w-14 h-14 flex items-center justify-center  text-xs bg-contain bg-no-repeat bg-center -bottom-[40%] -left-[90%]"
                  style={{
                    backgroundImage: `url(/home/ty.png)`,
                  }}>
                  安全
                  <br />
                  应急
                </div>
                <div
                  className="absolute w-14 h-14 flex items-center justify-center  text-xs bg-contain bg-no-repeat bg-center -top-[0%] -left-full"
                  style={{
                    backgroundImage: `url(/home/ty.png)`,
                  }}>
                  残障
                  <br />
                  辅助
                </div>
                <div
                  className="absolute w-14 h-14 flex items-center justify-center  text-xs bg-contain bg-no-repeat bg-center -top-[70%] -left-[60%]"
                  style={{
                    backgroundImage: `url(/home/ty.png)`,
                  }}>
                  演艺
                  <br />
                  娱乐
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-2">
              <Image
                alt=""
                width={236}
                height={96}
                src="/home/logo_sddx.png"
                className=" col-span-1"
              />
              <Image
                alt=""
                width={236}
                height={96}
                src="/home/logo_sdqnzzxy.png"
                className=" col-span-1"
              />
              <Image
                width={236}
                height={96}
                alt=""
                className=" col-span-1"
                src="/home/logo_sdyyjt.png"
              />
              <Image
                width={236}
                height={96}
                alt=""
                className=" col-span-1"
                src="/home/logo_sdlyxy.png"
              />
              <Image
                width={236}
                height={96}
                alt=""
                className=" col-span-1"
                src="/home/logo_sdcyyjy.png"
              />
              <Image width={236} height={96} alt="" src="/home/logo_wjt.png" />
              <Image
                width={236}
                height={96}
                alt=""
                src="/home/logo_lc.png"
                className=" col-span-1"
              />
              <Image
                width={236}
                height={96}
                alt=""
                className=" col-span-1"
                src="/home/logo_jndx.png"
              />
            </div>
          </div>
          <div
            className="hidden 2xl:flex bg-cover bg-no-repeat bg-center w-full h-[887px]  justify-center items-center"
            style={{
              backgroundImage: `url(/home/bg_5.png)`,
            }}>
            <div
              className=" bg-center bg-contain bg-no-repeat w-72 h-72 relative "
              style={{
                backgroundImage: `url(/home/map.png)`,
              }}>
              <div className=" absolute -top-[80%] left-1/2 -translate-x-1/2 text-3xl text-center w-64">
                虚拟现实+产业
              </div>
              <div
                className=" absolute w-20 h-20 flex items-center justify-center text-base bg-contain bg-no-repeat bg-center -top-[120px] left-1/2 -translate-x-1/2  cursor-pointer"
                style={{
                  backgroundImage: `url(/home/ty.png)`,
                }}>
                教育
                <br />
                培训
              </div>
              <div
                className="absolute w-20 h-20 flex items-center justify-center  text-base bg-contain bg-no-repeat bg-center -top-[60px] left-[280px] cursor-pointer"
                style={{
                  backgroundImage: `url(/home/ty.png)`,
                }}>
                文化
                <br />
                旅游
              </div>
              <div
                className="absolute w-20 h-20 flex items-center justify-center  text-base bg-contain bg-no-repeat bg-center top-[80px] left-[350px] cursor-pointer"
                style={{
                  backgroundImage: `url(/home/ty.png)`,
                }}>
                工业
                <br />
                生产
              </div>
              <div
                className="absolute w-20 h-20 flex items-center justify-center  text-base bg-contain bg-no-repeat bg-center top-[220px] left-[320px] cursor-pointer"
                style={{
                  backgroundImage: `url(/home/ty.png)`,
                }}>
                体育
                <br />
                健康
              </div>
              <div
                className="absolute w-20 h-20 flex items-center justify-center text-base bg-contain bg-no-repeat bg-center top-[330px] left-[195px] cursor-pointer"
                style={{
                  backgroundImage: `url(/home/ty.png)`,
                }}>
                融合
                <br />
                媒体
              </div>
              <div
                className="absolute w-20 h-20 flex items-center justify-center text-base bg-contain bg-no-repeat bg-center  top-[330px] left-[25px] cursor-pointer"
                style={{
                  backgroundImage: `url(/home/ty.png)`,
                }}>
                商贸
                <br />
                创意
              </div>
              <div
                className="absolute w-20 h-20 flex items-center justify-center  text-base bg-contain bg-no-repeat bg-center top-[220px] left-[-100px] cursor-pointer"
                style={{
                  backgroundImage: `url(/home/ty.png)`,
                }}>
                安全
                <br />
                应急
              </div>
              <div
                className="absolute w-20 h-20 flex items-center justify-center text-base bg-contain bg-no-repeat bg-center top-[80px] -left-[130px] cursor-pointer"
                style={{
                  backgroundImage: `url(/home/ty.png)`,
                }}>
                残障
                <br />
                辅助
              </div>
              <div
                className="absolute w-20 h-20 flex items-center justify-center  text-base bg-contain bg-no-repeat bg-center -top-[60px] left-[-70px] cursor-pointer"
                style={{
                  backgroundImage: `url(/home/ty.png)`,
                }}>
                演艺
                <br />
                娱乐
              </div>
              <Image
                alt="山东大学"
                width={236}
                height={96}
                src="/home/logo_sddx.png"
                className=" absolute -top-1/3 -left-[150%] cursor-pointer"
              />
              <Image
                alt="山东青年政治学院"
                width={236}
                height={96}
                src="/home/logo_sdqnzzxy.png"
                className=" absolute -top-1/3 -right-[150%] cursor-pointer"
              />
              <Image
                width={236}
                height={96}
                alt="山东演艺集团"
                src="/home/logo_sdyyjt.png"
                className=" absolute top-1/4 -left-[200%] cursor-pointer"
              />
              <Image
                width={236}
                height={96}
                alt="山东旅游职业学院"
                src="/home/logo_sdlyxy.png"
                className=" absolute top-1/4 -right-[200%] cursor-pointer"
              />
              <Image
                width={236}
                height={96}
                alt="山东产业技术研究院"
                src="/home/logo_sdcyyjy.png"
                className=" absolute -bottom-[15%] -left-[175%] cursor-pointer"
              />
              <Image
                width={236}
                height={96}
                alt="伟基炭科技"
                src="/home/logo_wjt.png"
                className=" absolute -bottom-[15%] -right-[175%] cursor-pointer"
              />
              <Image
                width={236}
                height={96}
                alt="浪潮"
                src="/home/logo_lc.png"
                className=" absolute -bottom-[65%] -left-[135%] cursor-pointer"
              />
              <Image
                width={236}
                height={96}
                alt="济南大学"
                src="/home/logo_jndx.png"
                className=" absolute -bottom-[65%] -right-[135%] cursor-pointer"
              />
            </div>
          </div>
        </section>
        {/* 第七屏 */}
        <section>
          <div className="py-9 px-4 text-center mx-auto 2xl:px-80 2xl:py-20">
            <div className="text-center font-medium text-xl mb-4 2xl:pb-8 2xl:mb-8 2xl:text-3xl 2xl:border-b-2  2xl:text-left">
              遥在科技
            </div>
            <div className="2xl:hidden">
              <div className="py-1 px-4">
                <button
                  className=" border-b outline-none group w-full flex items-center justify-between text-[#333]"
                  onClick={() => {
                    setTabActive(1)
                  }}>
                  <div className="transtition duration-500 ease text-lg font-normal">
                    软件技术&服务
                  </div>
                  <Image
                    src={'/home/add.svg'}
                    alt=""
                    width={20}
                    height={20}
                    className="group-focus:rotate-45 transition duration-500 ease"
                  />
                </button>
                {tabActive == 1 && (
                  <div className=" flex flex-col items-start justify-center">
                    <Link href="/" className=" font-thin py-2">
                      XR超高清低延迟云平台
                    </Link>
                    <Link href="/" className=" font-thin py-2">
                      XR-NeRF实景建模引擎
                    </Link>
                  </div>
                )}
              </div>
              <div className="py-1 px-4">
                <button
                  className=" border-b outline-none group w-full flex items-center justify-between text-[#333]"
                  onClick={() => {
                    setTabActive(2)
                  }}>
                  <div className="transtition duration-500 ease text-lg font-normal">
                    硬件产品
                  </div>
                  <Image
                    src={'/home/add.svg'}
                    alt=""
                    width={20}
                    height={20}
                    className="group-focus:rotate-45 transition duration-500 ease"
                  />
                </button>
                {tabActive == 2 && (
                  <div className=" flex flex-col items-start justify-center">
                    <Link href="/" className="font-thin py-2">
                      TP Robot
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      TP C100
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      TP C300
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      TP 视觉互动采集模组
                    </Link>
                  </div>
                )}
              </div>
              <div className="py-1 px-4">
                <button
                  className=" border-b outline-none group w-full flex items-center justify-between text-[#333]"
                  onClick={() => {
                    setTabActive(3)
                  }}>
                  <div className="transtition duration-500 ease text-lg font-normal">
                    解决方案
                  </div>
                  <Image
                    src={'/home/add.svg'}
                    alt=""
                    width={20}
                    height={20}
                    className="group-focus:rotate-45 transition duration-500 ease"
                  />
                </button>
                {tabActive == 3 && (
                  <div className=" flex flex-col items-start justify-center">
                    <Link href="/" className="font-thin py-2">
                      教育培训
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      文化旅游
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      工业生产
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      体育健康
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      融合媒体
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      智慧城市
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      商贸创意
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      安全应急
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      残障辅助
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      演艺娱乐
                    </Link>
                  </div>
                )}
              </div>
              <div className="py-1 px-4">
                <button
                  className=" border-b outline-none group w-full flex items-center justify-between text-[#333]"
                  onClick={() => {
                    setTabActive(4)
                  }}>
                  <div className="transtition duration-500 ease text-lg font-normal">
                    内容研发服务
                  </div>
                  <Image
                    src={'/home/add.svg'}
                    alt=""
                    width={20}
                    height={20}
                    className="group-focus:rotate-45 transition duration-500 ease"
                  />
                </button>
                {tabActive == 4 && (
                  <div className=" flex flex-col items-start justify-center">
                    <Link href="/" className="font-thin py-2">
                      全景直播
                    </Link>
                    <Link href="" className="font-thin py-2">
                      全景内容
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      3D 180度直播
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      3D 180度内容
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      多角度视频
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      虚拟仿真
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      数字孪生
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      三维建模
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      NERF视频
                    </Link>
                  </div>
                )}
              </div>
              <div className="py-1 px-4">
                <button
                  className=" border-b outline-none group w-full flex items-center justify-between text-[#333]"
                  onClick={() => {
                    setTabActive(5)
                  }}>
                  <div className="transtition duration-500 ease text-lg font-normal">
                    服务支持
                  </div>
                  <Image
                    src={'/home/add.svg'}
                    alt=""
                    width={20}
                    height={20}
                    className="group-focus:rotate-45 transition duration-500 ease"
                  />
                </button>
                {tabActive == 5 && (
                  <div className=" flex flex-col items-start justify-center">
                    <Link href="/" className="font-thin py-2">
                      售前服务
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      软件下载
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      使用说明
                    </Link>
                  </div>
                )}
              </div>
              <div className="py-1 px-4">
                <button
                  className=" border-b outline-none group w-full flex items-center justify-between text-[#333]"
                  onClick={() => {
                    setTabActive(6)
                  }}>
                  <div className="transtition duration-500 ease text-lg font-normal">
                    关于我们
                  </div>
                  <Image
                    src={'/home/add.svg'}
                    alt=""
                    width={20}
                    height={20}
                    className="group-focus:rotate-45 transition duration-500 ease"
                  />
                </button>
                {tabActive == 6 && (
                  <div className=" flex flex-col items-start justify-center">
                    <Link href="/" className="font-thin py-2">
                      行业资讯
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      公司咨询
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      关于我们
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      联系我们
                    </Link>
                    <Link href="/" className="font-thin py-2">
                      加入我们
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="hidden 2xl:flex  2xl:justify-around">
              <div className="flex flex-col   items-start space-y-3">
                <div className="2xl:text-base font-semibold  mb-3">
                  软件技术&服务
                </div>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  XR超高清低延迟云平台
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  XR-NeRF实景建模引擎
                </Link>
              </div>
              <div className="flex flex-col   items-start space-y-3">
                <div className="2xl:text-base font-semibold  mb-3">
                  硬件产品
                </div>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  TP Robot
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  TP C100
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  TP C300
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  TP 视觉互动采集模组
                </Link>
              </div>
              <div className="flex flex-col   items-start space-y-3">
                <div className="2xl:text-base font-semibold  mb-3">
                  解决方案
                </div>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  教育培训
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  文化旅游
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  工业生产
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  体育健康
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  融合媒体
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  智慧城市
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  商贸创意
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  安全应急
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  残障辅助
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  演艺娱乐
                </Link>
              </div>
              <div className="flex flex-col   items-start space-y-3">
                <div className="2xl:text-base font-semibold  mb-3">
                  内容研发服务
                </div>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  全景直播
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  全景内容
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  3D 180度直播
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  3D 180度内容
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  多角度视频
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  虚拟仿真
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  数字孪生
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  三维建模
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  NERF视频
                </Link>
              </div>
              <div className="flex flex-col   items-start space-y-3">
                <div className="2xl:text-base font-semibold  mb-3">
                  服务支持
                </div>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  售前售后
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  软件下载
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  使用说明
                </Link>
              </div>
              <div className="flex flex-col   items-start space-y-3">
                <div className="2xl:text-base font-semibold  mb-3">
                  关于我们
                </div>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  行业资讯
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  公司咨询
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  关于我们
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  联系我们
                </Link>
                <Link
                  className="link relative transition-colors hover:text-blue-400"
                  href="/">
                  加入我们
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
