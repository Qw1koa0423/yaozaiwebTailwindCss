import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { PASS_DATA_TWO } from '../../constants'
import type { NextPage } from 'next'
import Image from 'next/image'
const Paas: NextPage = () => {
  return (
    <div>
      <Head>
        <title>遥在科技-XR超高清低延迟云平台</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="renderer" content="webkit" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* pc第一屏 */}
      <section className="hidden pt-20  lg:block">
        <div
          style={{
            backgroundImage: 'url(/paas/bg_1.png)',
          }}
          className="w-full relative  py-44 2xl:pl-[19%]  pl-[10%] bg-cover bg-no-repeat bg-center ">
          <div className="flex flex-col space-y-3">
            <div className="text-[2.5rem] font-medium text-[#333]">
              XR超高清低延迟云平台
            </div>
            <div className=" text-2xl font-normal leading-10">
              稳定可靠，超低延时，高并发的全球信令与消息云服务<br></br>
              帮助你快速构建实时互动场景
            </div>
            <div>
              <button
                onClick={() => {
                  window.open('https://jiqing-beta.yaozai.net/user/login')
                }}
                className="bg-[#0b9efd] hover:bg-[#49b4fb] text-lg  text-white px-11  py-3 rounded-lg  mt-6">
                立即体验
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 移动第一屏 */}
      <section className="lg:hidden  pt-11 ">
        <div
          style={{
            backgroundImage: 'url(/paas/bg_m_1.png)',
          }}
          className="
           w-full pt-60 sm:pt-[600px] pb-4 sm:pb-16 text-center bg-cover bg-no-repeat 
          ">
          <div className="flex flex-col space-y-2">
            <div className="text-base font-bold text-[#333]">
              XR超高清低延迟云平台
            </div>
            <div className=" text-xs font-normal leading-5">
              稳定可靠，超低延时，高并发的全球信令与消息云服务<br></br>
              帮助你快速构建实时互动场景
            </div>
            <div>
              <button
                className="bg-[#0b9efd]  text-xs  text-white px-5  py-2  rounded  mt-3"
                onClick={() => {
                  window.open('https://jiqing-beta.yaozai.net/user/login')
                }}>
                立即体验
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* pc第二屏 */}
      <section className="hidden lg:block">
        <div className="relative">
          <div className=" absolute w-4/5 2xl:w-3/5 left-1/2  py-10 bg-white text-center  -translate-x-1/2 -translate-y-1/2 rounded-xl">
            <span className=" text-[#666] font-medium text-lg">
              8K 360度全景视频端对端延迟
            </span>
            <span className=" text-[#009FFF] font-medium text-3xl">300</span>
            <span className=" text-[#666] font-medium text-lg">
              毫秒，SLA服务可用性
            </span>
            <span className=" text-[#009FFF] font-medium text-3xl">99.9%</span>
          </div>
        </div>
      </section>
      {/* 移动第二屏 */}
      <section className="lg:hidden">
        <div className=" bg-white flex items-center justify-center space-x-6 py-9">
          <div className=" flex flex-col space-y-3 text-center">
            <div className=" text-base text-[#0B9EFD] font-bold">300毫秒</div>
            <div className=" text-sm text-[#666] font-medium">
              8K 360度全景视频端对端延迟
            </div>
          </div>
          <div className=" flex flex-col space-y-3 text-center">
            <div className=" text-base text-[#0B9EFD] font-bold">99.9%</div>
            <div className=" text-sm text-[#666] font-medium">
              8K SLA服务可用性
            </div>
          </div>
        </div>
      </section>
      {/* pc第三屏 */}
      <section className="hidden lg:block">
        <div
          style={{
            backgroundImage: 'url(/paas/bg_2.png)',
          }}
          className="w-full bg-cover bg-no-repeat bg-center py-20">
          <div className=" flex justify-center space-x-10">
            {PASS_DATA_TWO.map((item, index) => {
              return (
                <div className="flex flex-col items-center justify-center space-y-4 w-64 text-center">
                  <Image
                    alt={item.title}
                    src={item.img}
                    width={0}
                    height={0}
                    className=" w-48 h-48 object-contain"
                  />
                  <span className=" mt-3  font-bold  text-xl text-[#333]">
                    {item.title}
                  </span>
                  <p className=" text-sm text-[#666]">{item.content}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* 移动第三屏 */}
      <section className="lg:hidden">
        <div
          style={{
            backgroundImage: 'url(/paas/bg_m_2.png)',
          }}
          className="w-full bg-cover bg-no-repeat bg-center py-6">
          <div className=" flex  justify-around flex-wrap ">
            {PASS_DATA_TWO.map((item, index) => {
              return (
                <div className="flex flex-col items-center  space-y-2  py-4 px-5 w-1/2  break-all">
                  <Image
                    alt={item.title}
                    src={item.img}
                    width={0}
                    height={0}
                    className=" w-24 h-24 object-contain"
                  />
                  <span className=" mt-1  font-bold  text-sm text-[#333]">
                    {item.title}
                  </span>
                  <p className=" text-xs text-[#666]">{item.content}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* 第四屏 */}
      <section></section>
      {/* pc第五屏 */}
      <section></section>
      {/* 移动第五屏 */}
      <section></section>
      {/* pc第六屏 */}
      <section></section>
      {/* 移动第六屏 */}
      <section></section>
      <Footer />
    </div>
  )
}

export default Paas
