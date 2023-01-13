import { useRef, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
interface MenuType {
  name?: string
  href?: string
  btn?: string
  menu?: MenuType[]
}
const Header: NextPage = () => {
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menus: MenuType = {
    menu: [
      {
        name: '首页',
        href: '/',
      },
      {
        name: '软件技术&服务',
        btn: '全部',
        menu: [
          {
            name: '遥在TPCloud云平台',
            btn: '软件技术&服务',
            menu: [
              {
                name: 'XR超高清低延迟云平台',
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
            btn: '软件技术&服务',
            menu: [
              {
                name: '相机端低延迟SDK',
                href: '/',
              },
              {
                name: 'VR/AR播放端SDK',
                href: '/',
              },
            ],
          },
        ],
      },
      {
        name: '硬件产品',
        btn: '全部',
        menu: [
          {
            name: 'TP Robot',
            href: '/',
          },
          {
            name: 'TP C100',
            href: '/',
          },
          {
            name: 'TP C300',
            href: '/',
          },
          {
            name: 'TP视觉互动采集模组',
            href: '/',
          },
        ],
      },
      {
        name: '解决方案',
        btn: '全部',
        menu: [
          {
            name: '教育培训',
            btn: '解决方案',
            menu: [
              {
                name: '遥在远程教学平台',
                href: '/',
              },
              {
                name: '遥在旅游专业实训平台',
                href: '/',
              },
              {
                name: 'XR实训教室',
                href: '/',
              },
            ],
          },
          {
            name: '文化旅游',
            btn: '解决方案',
            menu: [
              {
                name: '山东文旅元宇宙平台',
                href: '/',
              },
              {
                name: '山东文旅数字场景化平台',
                href: '/',
              },
              {
                name: '遥在远程祈福平台',
                href: '/',
              },
            ],
          },
          {
            name: '工业生产',
            btn: '解决方案',
            menu: [
              {
                name: '数字孪生工厂',
                href: '/',
              },
            ],
          },
          {
            name: '体育健康',
            btn: '解决方案',
            menu: [
              {
                name: '自由视角体育拍摄',
                href: '/',
              },
              {
                name: '全景赛事直播',
                href: '/',
              },
              {
                name: '沉浸式心理健康诊疗平台',
                href: '/',
              },
            ],
          },
          {
            name: '演艺娱乐',
            btn: '解决方案',
            menu: [
              {
                name: '自由视角演绎拍摄',
                href: '/',
              },
              {
                name: '全景演艺直播',
                href: '/',
              },
            ],
          },
          {
            name: '残障辅助',
            btn: '解决方案',
            menu: [
              {
                name: '残障人士远程体验平台',
                href: '/',
              },
            ],
          },
          {
            name: '商贸创意',
            btn: '解决方案',
            menu: [
              {
                name: '遥在远程逛展平台',
                href: '/',
              },
              {
                name: '遥在沉浸式跨境直播带货解决方案',
                href: '/',
              },
            ],
          },
          {
            name: '安全应急',
            btn: '解决方案',
            menu: [
              {
                name: '特种行业远程应急及实训平台',
                href: '/',
              },
            ],
          },
          {
            name: '融合媒体',
            btn: '解决方案',
            menu: [
              {
                name: '遥在超高清低延迟视频解决方案',
                href: '/',
              },
            ],
          },
        ],
      },
      {
        name: '内容研发服务',
        btn: '全部',
        menu: [
          {
            name: '3D全直播',
            href: '/',
          },
          {
            name: '全景内容',
            href: '/',
          },
          {
            name: '自由视角直播',
            href: '/',
          },
          {
            name: '虚拟仿真与数字李生',
            href: '/',
          },
          {
            name: 'NeRF建模',
            href: '/',
          },
        ],
      },
      {
        name: '服务支持',
        btn: '全部',
        menu: [],
      },
      {
        name: '关于我们',
        btn: '全部',
        menu: [
          {
            name: '行业资讯',
            href: '/',
          },
          {
            name: '公司资讯',
            href: '/',
          },
          {
            name: '关于我们',
            href: '/',
          },
          {
            name: '联系我们',
            href: '/',
          },
          {
            name: '加入我们',
            href: '/',
          },
        ],
      },
    ],
  }
  const [menuList, setMenuList] = useState(menus)
  const loadMenu = (list: MenuType) => {
    if (typeof list.menu != 'undefined') {
      return list.menu.map((item: any, index: number) => {
        return (
          <Link
            href={item.href || ''}
            key={index}
            className={
              list.btn
                ? 'flex justify-between items-center text-base text-gray-500'
                : 'flex justify-between text-3xl items-center'
            }
            onClick={() => {
              if (!item.href && list.menu) {
                setMenuList(list.menu[index])
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
  }
  const setMenu = (list: MenuType) => {
    let menu = menus.menu && menus.menu.find((item) => item.name == list.btn)
    if (menu) {
      setMenuList(menu)
    }
  }
  return (
    <div className="fixed w-full bg-white px-14 py-5 mx-auto z-20 2xl:pl-64 2xl:pr-0 2xl:py-3">
      {/* 导航栏 */}
      <nav className=" flex items-center justify-between relative">
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
          <div className=" hidden space-x-14 2xl:flex">
            <Link
              href={'/'}
              className="link relative transition-colors hover:text-blue-400">
              首页
            </Link>
            {/* 软件技术与服务 */}
            <div className="link relative transition-colors cursor-pointer  hover:text-blue-400 group">
              软件技术&服务
              <span className=" group-hover:hidden ml-1 text-sm">▼</span>
              <span className=" hidden ml-1 text-sm group-hover:inline-block">
                ▲
              </span>
              {/* 软件技术与服务下拉 */}
              <div className="hidden absolute  -left-36 w-[600px] pt-5  cursor-default group-hover:flex ">
                <div className="  text-[#333] border flex-col items-start  space-y-14 p-12 flex  ">
                  <div className=" flex items-center justify-start space-x-2">
                    <Image
                      src={'/navbar/rjjsyfw.png'}
                      alt="软件技术与服务"
                      width={33}
                      height={31}
                      className="translate-y-0.5"
                    />
                    <span className=" font-bold text-4xl">软件技术与服务</span>
                  </div>
                  <div className=" grid grid-cols-2 gap-16">
                    <div className=" flex flex-col items-center justify-center space-y-5">
                      <div className=" flex items-center h-44">
                        <Image
                          src={'/navbar/yztpypt.png'}
                          alt="遥在TPCloud云平台"
                          height={169}
                          width={160}
                        />
                      </div>
                      <div className=" text-2xl font-normal">
                        遥在TPCloud云平台
                      </div>
                      <div className=" flex flex-col space-y-8">
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            XR超高清低延迟云平台
                          </Link>
                        </div>
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            XR-NeRF实景建模引擎
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col items-center justify-center space-y-5">
                      <div className=" flex items-center h-44">
                        <Image
                          src="/navbar/tpxrsdk.png"
                          height={160}
                          width={220}
                          alt="TP-XRSDK"
                        />
                      </div>

                      <div className="text-2xl font-normal">TP-XRSDK</div>
                      <div className=" flex flex-col space-y-8">
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg  hover:text-blue-400">
                            相机端低延迟SDK
                          </Link>
                        </div>
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            VR/AR播放端SDK
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 硬件产品 */}
            <div className="link relative transition-colors cursor-pointer hover:text-blue-400 group">
              硬件产品
              <span className=" group-hover:hidden ml-1 text-sm">▼</span>
              <span className=" hidden ml-1 text-sm group-hover:inline-block">
                ▲
              </span>
              {/* 硬件产品下拉 */}
              <div className="hidden absolute -left-96 w-[900px] pt-5  cursor-default group-hover:flex ">
                <div className=" text-[#333] border flex-col items-start  space-y-14 p-12 flex">
                  <div className=" flex items-center justify-start space-x-2">
                    <Image
                      src={'/navbar/yjcp.png'}
                      alt="硬件产品"
                      width={34}
                      height={32}
                      className="translate-y-0.5"
                    />
                    <span className=" font-bold text-4xl">硬件产品</span>
                  </div>
                  <div className=" flex items-center justify-center space-x-12">
                    <div className=" flex flex-col items-center justify-center space-y-2">
                      <div className=" h-44 flex items-center">
                        <Image
                          src={'/navbar/tprobot.png'}
                          width={76}
                          height={148}
                          alt="TP Robot"
                        />
                      </div>
                      <Link
                        href={'/'}
                        className="link relative transition-colors font-normal text-2xl hover:text-blue-400">
                        TP Robot
                      </Link>
                    </div>
                    <div className=" flex flex-col items-center justify-center space-y-2">
                      <div className=" h-44 flex items-center">
                        <Image
                          src={'/navbar/tpc100.png'}
                          width={202}
                          height={162}
                          alt="TP C100"
                        />
                      </div>
                      <Link
                        href={'/'}
                        className="link relative transition-colors font-normal text-2xl hover:text-blue-400">
                        TP C100
                      </Link>
                    </div>
                    <div className=" flex flex-col items-center justify-center space-y-2">
                      <div className=" h-44 flex items-center">
                        <Image
                          src={'/navbar/tpc300.png'}
                          width={120}
                          height={160}
                          alt="TP C300"
                        />
                      </div>
                      <Link
                        href={'/'}
                        className="link relative transition-colors font-normal text-2xl hover:text-blue-400">
                        TP C300
                      </Link>
                    </div>
                    <div className=" flex flex-col items-center justify-center space-y-2">
                      <div className=" h-44 flex items-center">
                        <Image
                          src={'/navbar/tpsjhdcjmz.png'}
                          width={185}
                          height={160}
                          alt="TP 视觉互动采集模组"
                        />
                      </div>
                      <Link
                        href={'/'}
                        className="link relative transition-colors font-normal text-2xl hover:text-blue-400">
                        TP 视觉互动采集模组
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 解决方案 */}
            <div className="link relative transition-colors hover:text-blue-400 group">
              解决方案
              <span className=" group-hover:hidden ml-1 text-sm">▼</span>
              <span className=" hidden ml-1 text-sm group-hover:inline-block">
                ▲
              </span>
              {/* 解决方案下拉 */}
              <div className="hidden absolute -left-[600px]  w-[1400px] pt-5  cursor-default group-hover:flex ">
                <div className="  text-[#333] border flex-col items-start space-y-8 p-11 flex  ">
                  <div className=" flex items-center justify-start space-x-2">
                    <Image
                      src={'/navbar/jjfa.png'}
                      alt="解决方案"
                      width={36}
                      height={32}
                      className="translate-y-0.5"
                    />
                    <span className=" font-bold text-4xl">解决方案</span>
                  </div>
                  <div className=" grid grid-cols-10 gap-6">
                    <div className=" flex flex-col items-center justify-start space-y-5 col-span-2">
                      <div className=" flex items-center h-40">
                        <Image
                          src={'/navbar/jypx.png'}
                          alt="教育培训"
                          height={142}
                          width={178}
                        />
                      </div>
                      <div className=" text-2xl font-normal">教育培训</div>
                      <div className=" flex flex-col space-y-8">
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            遥在远程教学平台
                          </Link>
                        </div>
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            遥在旅游专业实训平台
                          </Link>
                        </div>
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            XR实训教室
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col items-center justify-start space-y-5 col-span-2">
                      <div className=" flex items-center h-40">
                        <Image
                          src={'/navbar/whly.png'}
                          alt="文化旅游"
                          height={131}
                          width={143}
                        />
                      </div>
                      <div className=" text-2xl font-normal">文化旅游</div>
                      <div className=" flex flex-col space-y-8">
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            山东文旅元宇宙平台
                          </Link>
                        </div>
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            山东文旅数字场景化平台
                          </Link>
                        </div>
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            遥在远程祈福平台
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col items-center justify-start space-y-5 col-span-2">
                      <div className=" flex items-center h-40">
                        <Image
                          src={'/navbar/gysc.png'}
                          alt="工业生产"
                          height={143}
                          width={147}
                        />
                      </div>
                      <div className=" text-2xl font-normal">工业生产</div>
                      <div className=" flex flex-col space-y-8">
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            数字孪生工厂
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col items-center justify-start space-y-5 col-span-2">
                      <div className=" flex items-center h-40">
                        <Image
                          src={'/navbar/tyjk.png'}
                          alt="体育健康"
                          height={140}
                          width={174}
                        />
                      </div>
                      <div className=" text-2xl font-normal">体育健康</div>
                      <div className=" flex flex-col space-y-8">
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            自由视角体育拍摄
                          </Link>
                        </div>
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            全景赛事直播
                          </Link>
                        </div>
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            沉浸式心理健康诊疗平台
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col items-center justify-start space-y-5 col-span-2">
                      <div className=" flex items-center h-40">
                        <Image
                          src={'/navbar/yyyl.png'}
                          alt="演艺娱乐"
                          height={119}
                          width={200}
                        />
                      </div>
                      <div className=" text-2xl font-normal">演艺娱乐</div>
                      <div className=" flex flex-col space-y-8">
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            自由视角演绎拍摄
                          </Link>
                        </div>
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            全景演艺直播
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col items-center justify-start space-y-5 col-span-2">
                      <div className=" flex items-center h-40">
                        <Image
                          src={'/navbar/czfz.png'}
                          alt="残障辅助"
                          height={149}
                          width={200}
                        />
                      </div>
                      <div className=" text-2xl font-normal">残障辅助</div>
                      <div className=" flex flex-col space-y-8">
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            残障人士远程体验平台
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col items-center justify-start space-y-5 col-span-3">
                      <div className=" flex items-center h-40 ">
                        <Image
                          src={'/navbar/smcy.png'}
                          alt="商贸创意"
                          height={144}
                          width={198}
                        />
                      </div>
                      <div className=" text-2xl font-normal">商贸创意</div>
                      <div className=" flex flex-col space-y-8">
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400">
                            遥在远程逛展平台
                          </Link>
                        </div>
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400 ">
                            遥在沉浸式跨境直播带货解决方案
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col items-center justify-start space-y-5 col-span-2">
                      <div className=" flex items-center h-40">
                        <Image
                          src={'/navbar/aqyj.png'}
                          alt="安全应急"
                          height={114}
                          width={200}
                        />
                      </div>
                      <div className=" text-2xl font-normal">安全应急</div>
                      <div className=" flex flex-col space-y-8">
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400 whitespace-nowrap">
                            特种行业远程应急及实训平台
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col items-center justify-start space-y-5 col-span-3">
                      <div className=" flex items-center h-40">
                        <Image
                          src={'/navbar/rhmt.png'}
                          alt="融合媒体"
                          height={139}
                          width={200}
                        />
                      </div>
                      <div className=" text-2xl font-normal">融合媒体</div>
                      <div className=" flex flex-col space-y-8">
                        <div className="flex space-x-3 items-center">
                          <Image
                            src={'/navbar/shu.png'}
                            alt=""
                            width={4}
                            height={25}
                          />
                          <Link
                            href={'/'}
                            className="link relative transition-colors font-normal text-lg hover:text-blue-400 ">
                            遥在超高清低延迟视频解决方案
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 内容研发服务 */}
            <div className="link relative transition-colors hover:text-blue-400 group">
              内容研发服务
              <span className=" group-hover:hidden ml-1 text-sm">▼</span>
              <span className=" hidden ml-1 text-sm group-hover:inline-block">
                ▲
              </span>
              {/* 内容研发服务下拉 */}
              <div className=" hidden absolute -left-[600px] w-[1300px] pt-5  cursor-default group-hover:flex ">
                <div className=" text-[#333] border flex-col items-start  space-y-14 p-12 flex">
                  <div className=" flex items-center justify-start space-x-2">
                    <Image
                      src={'/navbar/nryffw.png'}
                      alt="内容研发服务"
                      width={34}
                      height={32}
                      className="translate-y-0.5"
                    />
                    <span className=" font-bold text-4xl">内容研发服务</span>
                  </div>
                  <div className=" flex items-center justify-center space-x-12">
                    <div className=" flex flex-col items-center justify-center space-y-2">
                      <div className=" h-40 flex items-center">
                        <Image
                          src={'/navbar/3dqjzb.png'}
                          width={200}
                          height={143}
                          alt="3D 全景直播"
                        />
                      </div>
                      <Link
                        href={'/'}
                        className="link relative transition-colors font-normal text-2xl hover:text-blue-400">
                        3D 全景直播
                      </Link>
                    </div>
                    <div className=" flex flex-col items-center justify-center space-y-2">
                      <div className=" h-40 flex items-center">
                        <Image
                          src={'/navbar/qjnr.png'}
                          width={200}
                          height={124}
                          alt="全景内容"
                        />
                      </div>
                      <Link
                        href={'/'}
                        className="link relative transition-colors font-normal text-2xl hover:text-blue-400">
                        全景内容
                      </Link>
                    </div>
                    <div className=" flex flex-col items-center justify-center space-y-2">
                      <div className=" h-40 flex items-center">
                        <Image
                          src={'/navbar/zysjzb.png'}
                          width={218}
                          height={125}
                          alt="自由视角直播"
                        />
                      </div>
                      <Link
                        href={'/'}
                        className="link relative transition-colors font-normal text-2xl hover:text-blue-400">
                        自由视角直播
                      </Link>
                    </div>
                    <div className=" flex flex-col items-center justify-center space-y-2">
                      <div className=" h-40 flex items-center">
                        <Image
                          src={'/navbar/xnfzyszls.png'}
                          width={200}
                          height={156}
                          alt="虚拟仿真与数字孪生"
                        />
                      </div>
                      <Link
                        href={'/'}
                        className="link relative transition-colors font-normal text-2xl hover:text-blue-400">
                        虚拟仿真与数字孪生
                      </Link>
                    </div>
                    <div className=" flex flex-col items-center justify-center space-y-2">
                      <div className=" h-40 flex items-center">
                        <Image
                          src={'/navbar/nerfjm.png'}
                          width={168}
                          height={159}
                          alt="NeRF建模"
                        />
                      </div>
                      <Link
                        href={'/'}
                        className="link relative transition-colors font-normal text-2xl hover:text-blue-400">
                        NeRF建模
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="link relative transition-colors hover:text-blue-400 group">
              服务支持
              <span className=" group-hover:hidden ml-1 text-sm">▼</span>
              <span className=" hidden ml-1 text-sm group-hover:inline-block">
                ▲
              </span>
            </div>
            <div className="link relative transition-colors hover:text-blue-400 group">
              关于我们
              <span className=" group-hover:hidden ml-1 text-sm">▼</span>
              <span className=" hidden ml-1 text-sm group-hover:inline-block">
                ▲
              </span>
            </div>
          </div>
        </div>
        <button
          ref={menuBtnRef}
          onClick={() => {
            menuBtnRef.current?.classList.toggle('munuBtn-open')
            menuRef.current?.classList.toggle('menu-open')
            setTimeout(() => {
              setMenuList(menus)
            }, 500)
          }}
          className="block hamburger focus:outline-none  2xl:hidden"
          type="button">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </nav>
      {/* 导航栏菜单-mobile */}
      <div
        className="fixed top-0 right-0 w-1/2 h-full  bg-white z-30 translate-x-full transition-transform duration-500 ease-in-out px-6"
        ref={menuRef}>
        {menuList.btn && (
          <button
            className=" absolute top-8 flex space-x-1 items-center"
            onClick={() => {
              if (menuList.btn == '全部') {
                setMenuList(menus)
              } else {
                setMenu(menuList)
              }
            }}>
            <Image
              src={'/navbar/action-left.svg'}
              alt=""
              height={0}
              width={0}
              className=" w-4 text-base"
            />
            <span>{menuList.btn}</span>
          </button>
        )}
        <div className="flex flex-col space-y-5 mt-24">
          {menuList.name && (
            <div className=" text-2xl font-medium">{menuList.name}</div>
          )}
          {loadMenu(menuList)}
        </div>
      </div>
    </div>
  )
}

export default Header
