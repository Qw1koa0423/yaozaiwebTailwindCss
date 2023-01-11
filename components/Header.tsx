import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
const Header: NextPage = () => {
  const menuBtnRef = React.useRef<HTMLButtonElement>(null)
  const menuRef = React.useRef<HTMLDivElement>(null)
  return (
    <div className="fixed w-full bg-white px-14 py-5 mx-auto ">
      <nav className=" flex items-center justify-between z-20">
        <div className=" flex items-center space-x-11">
          {/* logo */}
          <Image
            src={'/navbar/logo_black.png'}
            alt="遥在科技"
            height={0}
            width={0}
            className=" h-14 w-auto cursor-pointer"
          />
          {/* 导航栏 */}
          <div className=" hidden space-x-14 ">
            <Link
              href={'/'}
              className="link relative transition-colors hover:text-blue-400">
              首页
            </Link>
            <Link
              href={'/'}
              className="link relative transition-colors hover:text-blue-400 group">
              软件技术&服务
              <span className=" group-hover:hidden ml-1 text-sm">▼</span>
              <span className=" hidden ml-1 text-sm group-hover:inline-block">
                ▲
              </span>
            </Link>
            <Link
              href={'/'}
              className="link relative transition-colors hover:text-blue-400 group">
              硬件产品
              <span className=" group-hover:hidden ml-1 text-sm">▼</span>
              <span className=" hidden ml-1 text-sm group-hover:inline-block">
                ▲
              </span>
            </Link>
            <Link
              href={'/'}
              className="link relative transition-colors hover:text-blue-400 group">
              解决方案
              <span className=" group-hover:hidden ml-1 text-sm">▼</span>
              <span className=" hidden ml-1 text-sm group-hover:inline-block">
                ▲
              </span>
            </Link>
            <Link
              href={'/'}
              className="link relative transition-colors hover:text-blue-400 group">
              内容研发服务
              <span className=" group-hover:hidden ml-1 text-sm">▼</span>
              <span className=" hidden ml-1 text-sm group-hover:inline-block">
                ▲
              </span>
            </Link>
            <Link
              href={'/'}
              className="link relative transition-colors hover:text-blue-400 group">
              服务支持
              <span className=" group-hover:hidden ml-1 text-sm">▼</span>
              <span className=" hidden ml-1 text-sm group-hover:inline-block">
                ▲
              </span>
            </Link>
            <Link
              href={'/'}
              className="link relative transition-colors hover:text-blue-400 group">
              关于我们
              <span className=" group-hover:hidden ml-1 text-sm">▼</span>
              <span className=" hidden ml-1 text-sm group-hover:inline-block">
                ▲
              </span>
            </Link>
          </div>
        </div>
        <button
          ref={menuBtnRef}
          onClick={() => {
            menuBtnRef.current?.classList.toggle('munuBtn-open')
            menuRef.current?.classList.toggle('menu-open')
          }}
          className="block hamburger focus:outline-none"
          type="button">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </nav>
      {/* 移动菜单 */}
      <div
        className="fixed top-0 right-0 w-full h-full bg-white z-30 translate-x-full transition-transform duration-500 ease-in-out px-10"
        ref={menuRef}>

        </div>
    </div>
  )
}

export default Header
