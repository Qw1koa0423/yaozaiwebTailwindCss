import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import type { NextPage } from 'next'
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
      <Footer />
    </div>
  )
}

export default Paas
