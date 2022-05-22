import type { NextPage } from "next";
import Head from "next/head";
import ConnectWallet from "../components/ConnectWallet";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Liquidwork</title>
        <meta name="description" content="Use pay-as-you-go services from web2/3, create plugins, stream crypto in real-time." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <ConnectWallet />
    </div>
  )
}

export default Home;
