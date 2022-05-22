import React, { memo } from "react";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";

const ConnectWallet = memo(() => {
    const { authenticate, isAuthenticated, user } = useMoralis();

    useEffect(() => {
        console.log(user);
    }, [user]);

    return <button disabled={isAuthenticated} onClick={() => authenticate()}>Connect Wallet</button>
});

export default ConnectWallet; 