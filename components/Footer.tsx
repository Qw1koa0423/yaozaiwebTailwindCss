import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer>
      <div className="pt-5 pb-4 pl-6 pr-3 bg-black 2xl:pl-64 2xl:pt-9">
        <Image
          alt="遥在科技"
          width={0}
          height={0}
          src="/footer/footericon.png"
          className=" w-44 h-auto"
        />
        <div className="2xl:flex">
          <div>
            <div className="text-[#666666] text-xs mt-4 mb-3 2xl:mt-8 2xl:mb-5">
              XR场景应用层技术平台与服务商
            </div>
            <div className="text-[#666666] text-xs mt-3 mb-3 2xl:mt-5 2xl:mb-5">
              Copyright&#169www.yaozai.net 遥在（山东）数字科技有限公司
              <span className=" 2xl:text-[#ffffff] 2xl:pl-8">
                鲁ICP备18021506号-8
              </span>
            </div>
          </div>
          <div className=" 2xl:ml-80">
            <div className="text-[#ffffff] text-xs mt-4 mb-3 2xl:mt-8 2xl:mb-5">
              联系我们 400-1612-007
            </div>
            <div className="text-[#ffffff] text-xs mt-4 mb-3 2xl:mt-5 2xl:mb-5">
              友情链接 www.zhimeiwulian.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
