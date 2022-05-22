import { styled } from "@mui/system";
import React, { memo, useEffect, useState } from "react";
import Chip from '@mui/material/Chip';
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const StyledBalanceChip = styled(Chip, {
    name: "StyledBalanceChip"
})({
    color: "#001d76",
    backgroundColor: "#FD9FBF",
    fontSize: 20
});

const MumbaiBalanceChip = memo(() => {
    const [balance, setBalance] = useState<string>("");

    const { user, Moralis } = useMoralis();
    const Web3Api = useMoralisWeb3Api();

    useEffect(() => {
        const fetchNativeBalance = async () => {
            const userAddress = user?.get("ethAddress");
            if (userAddress) {
                const options = {
                    chain: ("mumbai" as "mumbai"),
                    address: String(userAddress)
                };
                const mumbaiBalance = await Web3Api.account.getNativeBalance(options);
                const balance = Moralis.Units.FromWei(mumbaiBalance?.balance)
                setBalance(balance);
            }
        };
        fetchNativeBalance();
    }, [Moralis.Units, Web3Api.account, user])


    return <StyledBalanceChip label={(balance || 0) + " MATIC"} />
});

export default MumbaiBalanceChip; 