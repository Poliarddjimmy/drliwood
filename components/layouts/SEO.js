import Head from "next/head";
import { useRouter } from 'next/router'

export default function SEO({
  title,
  description,
}) {

  const router = useRouter();

  return <Head>
    <title>{`DRLIWOOD | ${title}`} </title>
    <meta name="title" property="og:title" content={`DRLIWOOD | ${title}`} key="title" />
    <meta property="og:site_name" content="DRLIWOOD" key="site_name" />
    <meta property="og:url" content={'drliwood.com' + router.pathname} key="url" />
    <meta property="og:description" content={description ? description : "Description will goes here"} key="description" />
    <meta property="og:type" content="website" key="type" />
    <meta name="keywords" content="Label, music, video, production, DRLIWOOD, video production, music production" key="keywords" />

    <meta name="image" property="og:image" content="/images/logo.png" key="image" />
    <meta property="og:image:width" content="300" key="og:image:width" />
    <meta property="og:image:height" content="300" key="og:image:height" />

    <meta name="author" content="DRLIWOOD" />
    <meta property="og:type:article:published_time" content="Jun 1, 2021" key="type" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@poliard88" />
    <meta name="twitter:title" content={`DRLIWOOD | ${title}`} />
    <meta name="twitter:description" content={description ? description : "Description will goes here"} />
    <meta name="twitter:image" content="/images/logo.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  </Head>
}