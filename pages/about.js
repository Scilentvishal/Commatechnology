import Head from 'next/head'
import React from 'react'
import About from '../components/home/About'
import Team from '../components/team'
import Goal from '../components/about/goal'

const about = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/commatechfav.png" />
      </Head>
      <About className="" />
      <Goal class="w-full bg-gradient-to-r px-[1rem] to-black from-[#0b0b3e]" />
      <Team />
    </div>
  )
}

export default about