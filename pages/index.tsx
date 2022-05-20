import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Liquidwork</title>
        <meta name="description" content="Use pay-as-you-go services from web2/3, create plugins, stream crypto in real-time." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/liquid-work">Liquidwork!</a>
        </h1>
        <br />
        <br />
        <Image src="/liquidwork.png" width={300} height={300} alt="logo" />
      </main>
    </div>
  )
}

export default Home;
