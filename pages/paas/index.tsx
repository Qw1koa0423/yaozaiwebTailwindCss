import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
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
      <section className="hidden  lg:block"></section>
      {/* 移动第一屏 */}
      <section className="lg:hidden"></section>
      {/* pc第二屏 */}
      <section></section>
      {/* 移动第二屏 */}
      <section></section>
      {/* pc第三屏 */}
      <section></section>
      {/* 移动第三屏 */}
      <section></section>
      {/* 第四屏 */}
      <section></section>
      {/* pc第五屏 */}
      <section
        className=" hidden lg:block lg:bg-cover"
        style={{
          backgroundImage: `url(/paas/bg_2.png)`,
        }}>
        <div className=" lg:text-4xl lg:font-medium lg:text-center lg:pt-16 lg:pb-10">
          首购特惠，新人专享
        </div>
        <div className="lg:flex lg:pb-28 ">
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
            <div className=" text-sm">
              使用场景：轻度适用人群，使用率不高，用于功能测试
            </div>
            <div className=" pt-7 pb-9 text-center">
              <button
                className=" mx-auto bg-[#0B9EFD] text-white text-xs rounded px-5 py-1"
                onClick={() => {}}>
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
            <div className="text-sm leading-6">
              适用人群：用户量不高的开发者
            </div>
            <div className=" text-sm">
              使用场景：用户量不高，使用的高清服务较少的用户可以最大限度的以较低成本保证软件运行
            </div>
            <div className=" pt-7 pb-9 text-center">
              <button
                className=" mx-auto bg-[#0B9EFD] text-white text-xs rounded px-5 py-1"
                onClick={() => {}}>
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
            <div className="text-sm leading-6">
              适用人群：用户量较大的开发者
            </div>
            <div className=" text-sm">
              使用场景：高频率使用超清服务，且用户量较大，需要保证用户体验
            </div>
            <div className=" pt-7 pb-9 text-center">
              <button
                className=" mx-auto bg-[#0B9EFD] text-white text-xs rounded px-5 py-1"
                onClick={() => {}}>
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
          <div className=" text-sm">
            使用场景：轻度适用人群，使用率不高，用于功能测试
          </div>
          <div className=" pt-7 pb-9 text-center">
            <button
              className=" mx-auto bg-[#0B9EFD] text-white text-xs rounded px-5 py-1"
              onClick={() => {}}>
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
              className=" mx-auto bg-[#0B9EFD] text-white text-xs rounded px-5 py-1"
              onClick={() => {}}>
              立即购买
            </button>
          </div>
        </div>
        <div className=" w-full rounded-2xl shadow-md m-auto pl-8 justify-between pr-8 pt-8 items-center bg-[#ffffff]">
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
              className=" mx-auto bg-[#0B9EFD] text-white text-xs rounded px-5 py-1"
              onClick={() => {}}>
              立即购买
            </button>
          </div>
        </div>
      </section>
      {/* pc第六屏 */}
      <section className=" hidden lg:flex">
        <div
          className="lg:w-full lg:h-96 lg:flex lg:items-center lg:px-[10%] 2xl:px-80 lg:justify-around"
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
        <div className=" w-full h-28 rounded-2xl shadow-md m-auto flex pl-8 justify-between pr-8 items-center">
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
      <Footer />
    </div>
  )
}

export default Paas
