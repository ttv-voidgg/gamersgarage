import Head from 'next/head'

import Template from '../components/Template'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Hell Let Loose SEA - GamersGarage
        </title>
        <meta name="robots" content="noindex"/>
        <meta
          name="description"
          content="Your very first Hell Let Loose South-East Asian English speaking server!"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <Template />
    </>
  )
}
