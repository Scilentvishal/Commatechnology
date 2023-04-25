import Head from 'next/head'
import React from 'react'
import About from '../components/About'
import Team from '../components/team'

const about = () => {
  return (
    <div>
        <Head>
        <title>About Us</title>
        <link rel="icon" href="/commatechfav.png" />
      </Head>
      <About className="" />
      <Team />
    </div>
  )
}

export default about