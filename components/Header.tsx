import { useRef, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
const Header: NextPage = () => {
  interface MenuType {
    name: string
    href?: string
    btn?: string
    title?: string
    menu?: MenuType[]
  }
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menu: MenuType[] = [
    {
      name: '首页',
      href: '/',
    },
    {
      name: '软件技术&服务',
      menu: [
        {
          name: '遥在TPCloud云平台',
          btn: '全部',
          title: '软件技术&服务',
          menu: [
            {
              btn: '软件技术&服务',
              name: 'XR超高清低延迟云平台',
              title: '遥在TPCloud云平台',
              href: '/',
            },
            {
              name: 'XR-NeRF实景建模引擎',
              href: '/',
            },
          ],
        },
        {
          name: 'TP-XRSDK',
          title: '软件技术&服务',
          menu: [
            {
              name: '相机端低延迟SDK',
              btn: '软件技术&服务',
              title: 'TP-XRSDK',
              href: '/',
            },
            {
              name: 'VR/AR播放端SDK',
              title: 'TP-XRSDK',
              href: '/',
            },
          ],
        },
      ],
    },
    // {
    //   name: '硬件产品',
    // },
    // {
    //   name: '解决方案',
    // },
    // {
    //   name: '内容研发服务',
    // },
    // {
    //   name: '服务支持',
    // },
    // {
    //   name: '关于我们',
    // },
  ]
  const [menuList, setMenuList] = useState<MenuType[]>(menu)
  const loadMenu = (list: MenuType[]) => {
    return list.map((item: any, index: number) => {
      return (
        <Link
          href={item.href || ''}
          key={index}
          className={
            item.title
              ? 'flex justify-between items-center text-base text-gray-500'
              : 'flex justify-between text-3xl items-center'
          }
          onClick={() => {
            if (!item.href) {
              setMenuList(menuList[index].menu || [])
            }
          }}>
          <span>{item.name}</span>
          {!item.href && (
            <Image
              src={'/navbar/action-rignt.svg'}
              alt=""
              height={0}
              width={0}
              className=" w-5"
            />
          )}
        </Link>
      )
    })
  }
  const setMenu = (list: MenuType[]) => {
    for (let i = 0; i < menu.length; i++) {
      if (list[0].name == menu[i].name) {
        setMenuList(menu[i].menu || [])
      }
    }
  }

  return (
    <div className="fixed w-full bg-white px-14 py-5 mx-auto ">
      {/* 导航栏 */}
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
          {/* 导航栏菜单-pc */}
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
      {/* 导航栏菜单-mobile */}
      <div
        className="fixed top-0 right-0 w-1/2 h-full bg-slate-50 z-30 translate-x-full transition-transform duration-500 ease-in-out px-6"
        ref={menuRef}>
        {menuList[0]?.btn && (
          <button className=" absolute top-8 flex space-x-1 items-center">
            <Image
              src={'/navbar/action-left.svg'}
              alt=""
              height={0}
              width={0}
              className=" w-4 text-base"
            />
            <span>{menuList[0].btn}</span>
          </button>
        )}
        <div className=" bg-slate-100 flex flex-col space-y-5 mt-24">
          {menuList[0].title && (
            <div className=" text-2xl font-medium">{menuList[0].title}</div>
          )}
          {loadMenu(menuList)}
        </div>
      </div>
    </div>
  )
}

export default Header
