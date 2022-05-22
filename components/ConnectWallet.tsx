import React, { memo } from "react";
import { useEffect } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const ConnectWallet = memo(() => {
    const { authenticate, isAuthenticated, user } = useMoralis();
    const Web3Api = useMoralisWeb3Api();

    useEffect(() => {
        console.log(user);
    }, [user]);

    useEffect(() => {
        const fetchNativeBalance = async () => {
            const userAddress = user?.get("ethAddress");
            if (userAddress) {
                const options = {
                    chain: "mumbai",
                    address: userAddress
                };
                const bscBalance = await Web3Api.account.getNativeBalance(options);
                console.log(bscBalance);
            }
        };
        fetchNativeBalance();
    }, [Web3Api.account, user])

    return <button disabled={isAuthenticated} onClick={() => { authenticate() }}>Connect Wallet</button>
});

export default ConnectWallet; 