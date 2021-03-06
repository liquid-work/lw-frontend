import React, { memo, useState } from "react";
import { useMoralis } from "react-moralis";
import { NEXT_PUBLIC_MATICX_ADDRESS } from "../constants";
import MATICX_ABI from "../abi/MATICX.json";
import { ethers, BigNumber } from "ethers";

const MaticSwap = memo(() => {
    const [swapAmount, setSwapAmount] = useState<number>(0);
    const { user, Moralis } = useMoralis();

    const handleSwapChange = (e: any) => {
        const value = e?.target?.value;
        setSwapAmount(value);
    }

    const handleSwapConfirm = async () => {
        if (swapAmount > 0) {
            const web3Provider = await Moralis.enableWeb3();
            const signer = web3Provider.getSigner();
            console.log(typeof swapAmount, swapAmount);
            const maticxContract = new ethers.Contract(NEXT_PUBLIC_MATICX_ADDRESS, MATICX_ABI, signer);
            const parseEther = ethers.utils.parseEther(swapAmount+'');
            await maticxContract.connect(signer).upgradeByETH({ value: parseEther });
        }
    }

    return <>
        <input placeholder="Enter amount to swap MATIC -> MATICX" value={swapAmount} onChange={handleSwapChange} />
        <button style={{ marginLeft: 10 }} onClick={handleSwapConfirm}>Get MaticX</button>
    </>
});

export default MaticSwap; 