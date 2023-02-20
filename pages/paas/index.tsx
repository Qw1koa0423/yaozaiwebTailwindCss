import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { PASS_DATA_TWO } from '../../constants'
import type { NextPage } from 'next'
import Link from 'next/link'
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
                  window.open('https://jiqing.yaozai.net/user/login')
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
                  window.open('https://jiqing.yaozai.net/user/login')
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
                <div
                  key={item.img}
                  className="flex flex-col items-center justify-center space-y-4 w-64 text-center">
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
                <div
                  key={item.img}
                  className="flex flex-col items-center  space-y-2  py-4 px-5 w-1/2  break-all">
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
      {/* pc第四屏 */}
      <section className=" hidden lg:block lg:bg-cover lg:pb-16 lg:px-[15%] 2xl:px-[10rem]">
        <div className=" lg:text-4xl lg:font-medium lg:text-center lg:pt-16 lg:pb-10">
          热门应用场景
        </div>
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="lg:w-[60%] 2xl:w-[40.5rem]">
            <Image
              src={'/paas/rmyycj.png'}
              alt=""
              height={0}
              width={0}
              className=" lg:w-full"
            />
          </div>
          <div className="lg:ml-3">
            <div>
              <div className="lg:flex lg:items-center">
                <div className=" lg:w-8 lg:h-8 lg:mr-[0.63rem]">
                  <Image
                    src={'/paas/ycgz.png'}
                    alt=""
                    height={0}
                    width={0}
                    className="lg:w-full"
                  />
                </div>
                <div className="lg:text-[1.25rem] lg:font-medium color-[#333333]">
                  远程逛展
                </div>
              </div>
              <div className="lg:text-[0.88rem] lg:color-[#666666] lg:leading-7 lg: mt-2 lg:pl-10">
                超越时间空间的限制，随时随地参展，不错过每一场寻找更多商机的时刻
              </div>
            </div>
            <div className="lg:mt-2 2xl:mt-6">
              <div className="lg:flex lg:items-center">
                <div className=" lg:w-8 lg:h-8 lg:mr-[0.63rem]">
                  <Image
                    src={'/paas/gyxj.png'}
                    alt=""
                    height={0}
                    width={0}
                    className="lg:w-full"
                  />
                </div>
                <div className="lg:text-[1.25rem] lg:font-medium color-[#333333]">
                  工业巡检
                </div>
              </div>
              <div className="lg:text-[0.88rem] lg:color-[#666666] lg:leading-7 lg: mt-2 lg:pl-10">
                第一时间排查潜在危险，降低事故发生率，守护生命财产安全
              </div>
            </div>
            <div className="lg:mt-2 2xl:mt-6">
              <div className="lg:flex lg:items-center">
                <div className=" lg:w-8 lg:h-8 lg:mr-[0.63rem]">
                  <Image
                    src={'/paas/sjyl.png'}
                    alt=""
                    height={0}
                    width={0}
                    className="lg:w-full"
                  />
                </div>
                <div className="lg:text-[1.25rem] lg:font-medium color-[#333333]">
                  社交娱乐
                </div>
              </div>
              <div className="lg:text-[0.88rem] lg:color-[#666666] lg:leading-7 lg: mt-2 lg:pl-10">
                纵使地域相隔千万里，也可以拥有近在咫尺的真实体验
              </div>
            </div>
            <div className="lg:mt-2 2xl:mt-6">
              <div className="lg:flex lg:items-center">
                <div className=" lg:w-8 lg:h-8 lg:mr-[0.63rem]">
                  <Image
                    src={'/paas/zxjy.png'}
                    alt=""
                    height={0}
                    width={0}
                    className="lg:w-full"
                  />
                </div>
                <div className="lg:text-[1.25rem] lg:font-medium color-[#333333]">
                  在线教育
                </div>
              </div>
              <div className="lg:text-[0.88rem] lg:color-[#666666] lg:leading-7 lg: mt-2 lg:pl-10">
                全景课堂，支持老师和学生互动连麦，远程沉浸式的学习体验
              </div>
            </div>
            <div className="lg:mt-2 2xl:mt-6">
              <div className="lg:flex lg:items-center">
                <div className=" lg:w-8 lg:h-8 lg:mr-[0.63rem]">
                  <Image
                    src={'/paas/hdyx.png'}
                    alt=""
                    height={0}
                    width={0}
                    className="lg:w-full"
                  />
                </div>
                <div className="lg:text-[1.25rem] lg:font-medium color-[#333333]">
                  互动游戏
                </div>
              </div>
              <div className="lg:text-[0.88rem] lg:color-[#666666] lg:leading-7 lg: mt-2 lg:pl-10">
                交流可以联系你我，互动更能拉近你我之间的距离，在游戏中体验真实
              </div>
            </div>
            <div className="lg:mt-2 2xl:mt-6">
              <div className="lg:flex lg:items-center">
                <div className=" lg:w-8 lg:h-8 lg:mr-[0.63rem]">
                  <Image
                    src={'/paas/zxyl.png'}
                    alt=""
                    height={0}
                    width={0}
                    className="lg:w-full"
                  />
                </div>
                <div className="lg:text-[1.25rem] lg:font-medium color-[#333333]">
                  在线医疗
                </div>
              </div>
              <div className="lg:text-[0.88rem] lg:color-[#666666] lg:leading-7 lg: mt-2 lg:pl-10">
                一对一的诊疗体验，免去您四处寻医问药的奔波劳累，为您的健康保驾护航
              </div>
            </div>
            <div className="lg:mt-2 2xl:mt-6">
              <div className="lg:flex lg:items-center">
                <div className=" lg:w-8 lg:h-8 lg:mr-[0.63rem]">
                  <Image
                    src={'/paas/qybg.png'}
                    alt=""
                    height={0}
                    width={0}
                    className="lg:w-full"
                  />
                </div>
                <div className="lg:text-[1.25rem] lg:font-medium color-[#333333]">
                  企业办公
                </div>
              </div>
              <div className="lg:text-[0.88rem] lg:color-[#666666] lg:leading-7 lg: mt-2 lg:pl-10">
                跨越地理位置的限制，即使不在公司页可以体验真实的办公氛围
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 移动第四屏 */}
      <section className="lg:hidden p-8 bg-cover">
        <div className="text-lg font-medium text-center pt-9 pb-9">
          热门应用场景
        </div>
        <div>
          <div className="flex items-center">
            <div className=" w-7 h-7 mr-[0.63rem]">
              <Image
                src={'/paas/ycgz.png'}
                alt=""
                height={0}
                width={0}
                className="w-full"
              />
            </div>
            <div className="text-[0.88rem] font-medium">远程逛展</div>
          </div>
          <div className="text-[0.75rem] color-[#666666] leading-5 mt-2">
            超越时间空间的限制，随时随地参展，不错过每一场寻找更多商机的时刻
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className=" w-7 h-7 mr-[0.63rem]">
              <Image
                src={'/paas/gyxj.png'}
                alt=""
                height={0}
                width={0}
                className="w-full"
              />
            </div>
            <div className="text-[0.88rem] font-medium">工业巡检</div>
          </div>
          <div className="text-[0.75rem] color-[#666666] leading-5 mt-2">
            第一时间排查潜在危险，降低事故发生率，守护生命财产安全
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className=" w-7 h-7 mr-[0.63rem]">
              <Image
                src={'/paas/sjyl.png'}
                alt=""
                height={0}
                width={0}
                className="w-full"
              />
            </div>
            <div className="text-[0.88rem] font-medium">社交娱乐</div>
          </div>
          <div className="text-[0.75rem] color-[#666666] leading-5 mt-2">
            纵使地域相隔千万里，也可以拥有近在咫尺的真实体验
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className=" w-7 h-7 mr-[0.63rem]">
              <Image
                src={'/paas/zxjy.png'}
                alt=""
                height={0}
                width={0}
                className="w-full"
              />
            </div>
            <div className="text-[0.88rem] font-medium">在线教育</div>
          </div>
          <div className="text-[0.75rem] color-[#666666] leading-5 mt-2">
            全景课堂，支持老师和学生互动连麦，远程沉浸式的学习体验
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className=" w-7 h-7 mr-[0.63rem]">
              <Image
                src={'/paas/hdyx.png'}
                alt=""
                height={0}
                width={0}
                className="w-full"
              />
            </div>
            <div className="text-[0.88rem] font-medium">互动游戏</div>
          </div>
          <div className="text-[0.75rem] color-[#666666] leading-5 mt-2">
            交流可以联系你我，互动更能拉近你我之间的距离，在游戏中体验真实
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className=" w-7 h-7 mr-[0.63rem]">
              <Image
                src={'/paas/zxyl.png'}
                alt=""
                height={0}
                width={0}
                className="w-full"
              />
            </div>
            <div className="text-[0.88rem] font-medium">在线医疗</div>
          </div>
          <div className="text-[0.75rem] color-[#666666] leading-5 mt-2">
            一对一的诊疗体验，免去您四处寻医问药的奔波劳累，为您的健康保驾护航
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className=" w-7 h-7 mr-[0.63rem]">
              <Image
                src={'/paas/qybg.png'}
                alt=""
                height={0}
                width={0}
                className="w-full"
              />
            </div>
            <div className="text-[0.88rem] font-medium">企业办公</div>
          </div>
          <div className="text-[0.75rem] color-[#666666] leading-5 mt-2">
            跨越地理位置的限制，即使不在公司页可以体验真实的办公氛围
          </div>
        </div>
      </section>
      {/* pc第五屏 */}
      <section
        className=" hidden lg:block lg:bg-cover lg:px-[15%] 2xl:px-[30rem]"
        style={{
          backgroundImage: `url(/paas/bg_2.png)`,
        }}>
        <div className=" lg:text-4xl lg:font-medium lg:text-center lg:pt-16 lg:pb-10">
          首购特惠，新人专享
        </div>
        <div className="lg:flex lg:pb-28  lg:justify-center">
          <div className="group lg:w-[23.75rem]  lg:mb-5 lg:pl-8 lg:justify-between lg:pr-8 lg:pt-8 lg:items-center lg:bg-[#ffffff] hover:shadow-md">
            <div className="lg:w-16 lg:block lg:h-11 group-hover:hidden">
              <Image
                src={'/paas/jqcjb.png'}
                alt=""
                height={0}
                width={0}
                className=" lg:w-full"
              />
            </div>
            <div className="lg:text-lg lg:mt-4">极清采集包</div>
            <div className=" lg:text-base lg:text-center lg:mt-2 lg:mb-2">
              25千分钟
            </div>
            <div className=" lg:text-3xl lg:text-center lg:mb-4">
              <span className="lg:text-base">￥</span>168.00{' '}
              <span className="lg:text-xs lg:text-[#999999]">元/年</span>
            </div>
            <div className="lg:text-sm lg:leading-6 ">适用人群：轻度用户</div>
            <div className=" lg:text-sm lg:h-20">
              使用场景：轻度适用人群，使用率不高，用于功能测试
            </div>
            <div className=" lg:pt-6 lg:pb-5 lg:text-center">
              <button
                className=" lg:mx-auto lg:bg-[#0B9EFD] hover:bg-[#49b4fb] lg:text-white lg:text-xs lg:rounded lg:px-[3.25rem] lg:py-[0.63rem] lg:hidden group-hover:block"
                onClick={() => {
                  window.open('https://jiqing.yaozai.net/user/login')
                }}>
                立即购买
              </button>
            </div>
          </div>
          <div className="group lg:w-[23.75rem]  mr-7 ml-7 lg:mb-5 lg:pl-8 lg:justify-between lg:pr-8 lg:pt-8 lg:items-center lg:bg-[#ffffff] hover:shadow-md">
            <div className="lg:w-16 lg:block lg:h-11 group-hover:hidden">
              <Image
                src={'/paas/jqcjb.png'}
                alt=""
                height={0}
                width={0}
                className=" lg:w-full"
              />
            </div>
            <div className="lg:text-lg lg:mt-4">极清采集包</div>
            <div className=" lg:text-base lg:text-center lg:mt-2 lg:mb-2">
              250千分钟
            </div>
            <div className=" lg:text-3xl lg:text-center lg:mb-4">
              <span className="lg:text-base">￥</span>1588.00{' '}
              <span className="lg:text-xs lg:text-[#999999]">元/年</span>
            </div>
            <div className="lg:text-sm lg:leading-6">
              适用人群：用户量不高的开发者
            </div>
            <div className=" lg:text-sm lg:h-20">
              使用场景：用户量不高，使用的高清服务较少的用户可以最大限度的以较低成本保证软件运行
            </div>
            <div className=" lg:pt-6 lg:pb-5 lg:text-center">
              <button
                className=" lg:mx-auto lg:bg-[#0B9EFD] hover:bg-[#49b4fb] lg:text-white lg:text-xs lg:rounded lg:px-[3.25rem] lg:py-[0.63rem] lg:hidden group-hover:block"
                onClick={() => {
                  window.open('https://jiqing.yaozai.net/user/login')
                }}>
                立即购买
              </button>
            </div>
          </div>
          <div className="group lg:w-[23.75rem] lg:mb-5 lg:pl-8 lg:justify-between lg:pr-8 lg:pt-8 lg:items-center lg:bg-[#ffffff] hover:shadow-md">
            <div className="lg:w-16 lg:block lg:h-11 group-hover:hidden">
              <Image
                src={'/paas/jqcjb.png'}
                alt=""
                height={0}
                width={0}
                className=" lg:w-full"
              />
            </div>
            <div className="lg:text-lg lg:mt-4">极清采集包</div>
            <div className=" lg:text-base lg:text-center lg:mt-2 lg:mb-2">
              1000千分钟
            </div>
            <div className=" lg:text-3xl lg:text-center lg:mb-4">
              <span className="lg:text-base">￥</span>5968.00{' '}
              <span className="lg:text-xs lg:text-[#999999]">元/年</span>
            </div>
            <div className="lg:text-sm lg:leading-6">
              适用人群：用户量较大的开发者
            </div>
            <div className=" lg:text-sm lg:h-20">
              使用场景：高频率使用超清服务，且用户量较大，需要保证用户体验
            </div>
            <div className=" lg:pt-6 lg:pb-5 lg:text-center">
              <button
                className=" lg:mx-auto lg:bg-[#0B9EFD] hover:bg-[#49b4fb] lg:text-white lg:text-xs lg:rounded lg:px-[3.25rem] lg:py-[0.63rem] lg:hidden group-hover:block"
                onClick={() => {
                  window.open('https://jiqing.yaozai.net/user/login')
                }}>
                立即购买
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 移动第五屏 */}
      <section
        className="lg:hidden px-8  pb-9 bg-cover"
        style={{
          backgroundImage: `url(/paas/bg_2.png)`,
        }}>
        <div className="text-lg font-medium text-center pt-9 pb-9">
          首购特惠，新人专享
        </div>
        <div className=" mb-5 w-full rounded-2xl shadow-md m-auto pl-8 justify-between pr-8 pt-8 items-center bg-[#ffffff]">
          <div className="w-16 h-11">
            <Image
              src={'/paas/jqcjb.png'}
              alt=""
              height={0}
              width={0}
              className=" w-full"
            />
          </div>
          <div className="text-lg mt-4">极清采集包</div>
          <div className=" text-base text-center mt-2 mb-2">25千分钟</div>
          <div className=" text-3xl text-center mb-4">
            <span className="text-base">￥</span>168.00{' '}
            <span className="text-xs text-[#999999]">元/年</span>
          </div>
          <div className="text-sm leading-6">适用人群：轻度用户</div>
          <div className=" text-sm ">
            使用场景：轻度适用人群，使用率不高，用于功能测试
          </div>
          <div className=" pt-7 pb-9 text-center">
            <button
              className=" mx-auto bg-[#0B9EFD] text-white text-xs rounded px-[1rem] py-[0.35rem]"
              onClick={() => {
                window.open('https://jiqing.yaozai.net/user/login')
              }}>
              立即购买
            </button>
          </div>
        </div>
        <div className=" mb-5 w-full rounded-2xl shadow-md m-auto pl-8 justify-between pr-8 pt-8 items-center bg-[#ffffff]">
          <div className="w-16 h-11">
            <Image
              src={'/paas/jqcjb.png'}
              alt=""
              height={0}
              width={0}
              className=" w-full"
            />
          </div>
          <div className="text-lg mt-4">极清采集包</div>
          <div className=" text-base text-center mt-2 mb-2">250千分钟</div>
          <div className=" text-3xl text-center mb-4">
            <span className="text-base">￥</span>1588.00{' '}
            <span className="text-xs text-[#999999]">元/年</span>
          </div>
          <div className="text-sm leading-6">适用人群：用户量不高的开发者</div>
          <div className=" text-sm">
            使用场景：用户量不高，使用的高清服务较少的用户可以最大限度的以较低成本保证软件运行
          </div>
          <div className=" pt-7 pb-9 text-center">
            <button
              className=" mx-auto bg-[#0B9EFD] text-white text-xs rounded px-[1rem] py-[0.35rem]"
              onClick={() => {
                window.open('https://jiqing.yaozai.net/user/login')
              }}>
              立即购买
            </button>
          </div>
        </div>
        <div className=" mb-5 w-full rounded-2xl shadow-md m-auto pl-8 justify-between pr-8 pt-8 items-center bg-[#ffffff]">
          <div className="w-16 h-11">
            <Image
              src={'/paas/jqcjb.png'}
              alt=""
              height={0}
              width={0}
              className=" w-full"
            />
          </div>
          <div className="text-lg mt-4">极清采集包</div>
          <div className=" text-base text-center mt-2 mb-2">1000千分钟</div>
          <div className=" text-3xl text-center mb-4">
            <span className="text-base">￥</span>5968.00{' '}
            <span className="text-xs text-[#999999]">元/年</span>
          </div>
          <div className="text-sm leading-6">适用人群：用户量较大的开发者</div>
          <div className=" text-sm">
            使用场景：高频率使用超清服务，且用户量较大，需要保证用户体验
          </div>
          <div className=" pt-7 pb-9 text-center">
            <button
              className=" mx-auto bg-[#0B9EFD]  text-white text-xs rounded px-[1rem] py-[0.35rem]"
              onClick={() => {
                window.open('https://jiqing.yaozai.net/user/login')
              }}>
              立即购买
            </button>
          </div>
        </div>
      </section>
      {/* pc第六屏 */}
      <section className=" hidden lg:block">
        <div
          className="lg:w-full lg:bg-cover lg:h-96 lg:flex lg:items-center lg:px-[10%] 2xl:px-80 lg:justify-around"
          style={{
            backgroundImage: `url(/paas/bg_3.png)`,
          }}>
          <div>
            <div className="lg:text-2xl lg: font-medium">产品文档</div>
            <div className=" lg:text-base lg:mt-2">
              <Link
                className="lg:link lg:relative lg:transition-colors lg:hover:text-blue-400"
                href="/">
                极清采集产品说明文档
              </Link>
            </div>
          </div>
          <div>
            <div className="lg:text-2xl lg: font-medium">开发指南</div>
            <div className=" lg:text-base lg:mt-2">
              <Link
                className="lg:link lg:relative lg:transition-colors lg:hover:text-blue-400"
                href="/">
                快速开始
              </Link>
            </div>
          </div>
          <div>
            <div className="lg:text-2xl lg: font-medium">SDK下载</div>
            <div className=" lg:text-base lg:mt-2">
              <Link
                className="lg:link lg:relative lg:transition-colors lg:hover:text-blue-400"
                href="/">
                极清采集SDK下载
              </Link>
            </div>
          </div>
          <div>
            <div className="lg:text-2xl lg: font-medium">客服中心</div>
            <div className=" lg:text-base lg:mt-2">
              <Link
                className="lg:link lg:relative lg:transition-colors lg:hover:text-blue-400"
                href="/">
                前往客服中心
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 移动第六屏 */}
      <section className="lg:hidden px-8 pt-9">
        <div className=" w-full h-28 rounded-2xl  shadow-md m-auto flex pl-8 justify-between pr-8 items-center">
          <div>
            <div className=" text-sm font-medium">产品文档</div>
            <div className=" text-xs mt-2">极清采集产品说明文档</div>
          </div>
          <div
            className="w-2 h-4 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(/paas/next.png)`,
            }}></div>
        </div>
        <div className=" w-full h-28 rounded-2xl shadow-md m-auto flex pl-8 justify-between pr-8 items-center mt-5 mb-5">
          <div>
            <div className=" text-sm font-medium">SDK下载</div>
            <div className=" text-xs mt-2">极清采集SDK下载</div>
          </div>
          <div
            className="w-2 h-4 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(/paas/next.png)`,
            }}></div>
        </div>
        <div className=" w-full h-28 rounded-2xl shadow-md m-auto flex pl-8 justify-between pr-8 items-center">
          <div>
            <div className=" text-sm font-medium">客服中心</div>
            <div className=" text-xs mt-2">前往客服中心</div>
          </div>
          <div
            className="w-2 h-4 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(/paas/next.png)`,
            }}></div>
        </div>
      </section>
      <section></section>
      <Footer />
    </div>
  )
}

export default Paas
