import Head from 'next/head'

import Template from '../components/Template'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Hell Let Loose SEA - GamersGarage
        </title>
        <meta name="robots" content="all"/>
        <meta
          name="description"
          content="Your very first Hell Let Loose South-East Asian English speaking server!"
        />
        <meta property="og:image" content="https://gamersgarage.tv/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.037434f3.jpg&w=1920&q=75"/>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <Template />
    </>
  )
}
