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
      <meta name="description" content="Generate emojis from images." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AppBar />
    <Component {...pageProps} />
    <footer className={styles.footer}>
      <Row justify='center' align='center' >
        <Link href="https://github.com/New-dev0/EmojiBee">
          <Image src="https://img.icons8.com/fluency/144/null/github.png" height={40} width={40} alt="Github icon" />
          <Text style={{ marginLeft: 8 }} className={styles.text}>
            EmojiBee
          </Text>
        </Link>
      </Row>
    </footer>
  </NextUIProvider>
}

export default MyApp
