import type { NextPage } from "next";
import Head from "next/head";
import ConnectWallet from "../components/ConnectWallet";
import MaticSwap from "../components/MaticSwap";
import MumbaiBalanceChip from "../components/MumbaiBalanceChip";
import Nav from "../components/Nav";
import SuperBalanceChip from "../components/SuperBalanceChip";

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
      <br />
      <br />
      <MumbaiBalanceChip />
      <br />
      <br />
      <SuperBalanceChip />
      <br />
      <br />
      <h3>Swap MATIC to MATICX</h3>
      <MaticSwap />
    </div>
  )
}

export default Home;
