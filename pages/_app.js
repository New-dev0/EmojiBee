import '../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from "../styles/Home.module.css";
import { NextUIProvider, Row, Text } from '@nextui-org/react';
import { AppBar } from '../src/components/header';

function MyApp({ Component, pageProps }) {
  return <NextUIProvider>
    <Head>
      <title>EmojiBee</title>
      <meta title="EmojiBee" property="og:title" />
      <meta name="description" content="Generate emojis from images." />
      <meta name="keywords" content="Emojis, images, photos, convert, api" />
      <meta property="og:image" content="/bee.jpg" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AppBar />
    <Component {...pageProps} />
    <footer className={styles.footer}>
      <Row justify='center' align='center' >
        <Link style={{ maxWidth: "max-content" }} href="https://github.com/New-dev0/EmojiBee">
          <Image src="https://img.icons8.com/fluency/144/null/github.png" height={40} width={40} alt="Github icon" />
          <Text style={{ marginLeft: 8 }} className={styles.text}>
            EmojiBee
          </Text>
        </Link>
        <iframe src="https://github.com/sponsors/New-dev0/button" title="Sponsor New-dev0" height="32" width="114" style={{
          borderRadius: "6px",
          marginLeft: 8,
          border: 0
        }}></iframe>
      </Row>
    </footer>
  </NextUIProvider>
}

export default MyApp
