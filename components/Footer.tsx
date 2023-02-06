import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const [tabActive, setTabActive] = useState<number | boolean>(false)
  return (
    <footer>
      <div className="py-9 px-4 text-center mx-auto lg:px-[10%] 2xl:px-80 lg:py-20">
        <div className="text-center font-medium text-xl mb-4 lg:pb-8 lg:mb-8 lg:text-3xl lg:border-b-2  lg:text-left">
          遥在科技
        </div>
        <div className="lg:hidden">
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
                <Link href="/paas" className=" font-thin py-2">
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
        <div className="hidden lg:flex  lg:justify-around">
          <div className="flex flex-col   items-start space-y-3">
            <div className="lg:text-base font-semibold  mb-3">
              软件技术&服务
            </div>
            <Link
              className="link relative transition-colors hover:text-blue-400"
              href="/paas">
              XR超高清低延迟云平台
            </Link>
            <Link
              className="link relative transition-colors hover:text-blue-400"
              href="/">
              XR-NeRF实景建模引擎
            </Link>
          </div>
          <div className="flex flex-col   items-start space-y-3">
            <div className="lg:text-base font-semibold  mb-3">硬件产品</div>
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
            <div className="lg:text-base font-semibold  mb-3">解决方案</div>
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
            <div className="lg:text-base font-semibold  mb-3">内容研发服务</div>
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
            <div className="lg:text-base font-semibold  mb-3">服务支持</div>
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
            <div className="lg:text-base font-semibold  mb-3">关于我们</div>
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
      <div className="pt-5 pb-4 pl-6 pr-3 bg-black lg:pl-64 lg:pt-9">
        <Image
          alt="遥在科技"
          width={0}
          height={0}
          src="/footer/logo_write.png"
          className=" w-44 h-auto"
        />
        <div className="lg:flex">
          <div>
            <div className="text-[#666666] text-xs mt-4 mb-3 lg:mt-8 lg:mb-5">
              XR场景应用层技术平台与服务商
            </div>
            <div className="text-[#666666] text-xs mt-3 mb-3 lg:mt-5 lg:mb-5">
              Copyright©www.yaozai.net 遥在（山东）数字科技有限公司
              <span className=" lg:text-[#ffffff] lg:pl-8">
                鲁ICP备18021506号-8
              </span>
            </div>
          </div>
          <div className=" lg:ml-80">
            <div className="text-[#ffffff] text-xs mt-4 mb-3 lg:mt-8 lg:mb-5">
              联系我们 400-1612-007
            </div>
            {/* <div className="text-[#ffffff] text-xs mt-4 mb-3 lg:mt-5 lg:mb-5">
              友情链接
              www.zhimeiwulian.com
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
