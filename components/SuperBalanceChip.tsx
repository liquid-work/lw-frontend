import { styled } from "@mui/system";
import React, { memo, useEffect, useState } from "react";
import Chip from '@mui/material/Chip';
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { NEXT_PUBLIC_LIQUID_WORK_SC } from "../constants";
import * as MATICX_ABI from "../abi/LiquidWorkAbi.json";

const StyledBalanceChip = styled(Chip, {
    name: "StyledBalanceChip"
})({
    color: "#001d76",
    backgroundColor: "#FD9FBF",
    fontSize: 20
});

const SuperBalanceChip = memo(() => {
    const [balance, setBalance] = useState<string>("");

    const { user, Moralis } = useMoralis();
    const Web3Api = useMoralisWeb3Api();
    const ethers = Moralis.web3Library;

    useEffect(() => {
        const fetchSuperBalance = async () => {
            const userAddress = user?.get("ethAddress");
            if (userAddress) {
                const options = {
                    chain: ("mumbai" as "mumbai"),
                    address: String(userAddress)
                };
                const tokenBalances = await Web3Api.account.getTokenBalances(options); // maticx should be in here
                console.log(tokenBalances);
                // setBalance(balance);
            }
        };
        if (user) {
            fetchSuperBalance();
        }
    }, [Moralis.Units, Web3Api.account, user])


    return <StyledBalanceChip label={(balance || 0) + " MATICX"} />
});

export default SuperBalanceChip; 