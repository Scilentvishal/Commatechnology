import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import NextNProgress from "nextjs-progressbar";

const Layout = ({children}) => {
  return (
    <div className='relative'>
      <Head>
      <link rel="icon" href="/commatechfav.png" />
      </Head>
        <Navbar />
        <NextNProgress height={6} color="#07F300 
" />
        {children}
        <Footer />
        </div>
  )
}


export default Layout