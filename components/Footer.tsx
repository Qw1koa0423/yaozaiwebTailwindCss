import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer>
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
            <div className="text-[#ffffff] text-xs mt-4 mb-3 lg:mt-5 lg:mb-5">
              友情链接
              {/* www.zhimeiwulian.com */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
