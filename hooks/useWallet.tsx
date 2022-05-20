import { useEffect, useState } from "react";
import { BigNumber, ethers } from "ethers";
import { useAppDispatch } from "../redux/hooks";
import { LIQUIDWORK_CONTRACT_ADDRESS } from "../blockchain/constants";

export default function useWallet() {
    const dispatch = useAppDispatch();

    const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0));
    const [address, setAddress] = useState<string>("");
    const [network, setNetwork] = useState<any>(null);
    const [provider, setProvider] = useState<any>(null);
    const [signer, setSigner] = useState<any>(null);

    useEffect(() => {
        if (!provider) {
            console.log("Getting new wallet provider...");
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(provider);
        }
    }, [provider]);

    useEffect(() => {
        async function getSigner() {
            setSigner(await provider.getSigner());
        }
        if (provider) {
            getSigner();
        }
    }, [provider]);

    useEffect(() => {
        async function getNetwork() {
            const network = await provider.getNetwork();
            if (network) {
                setNetwork(network);
            }
        }
        if (provider) {
            getNetwork();
        }
    }, [dispatch, provider]);

    useEffect(() => {
        async function getAddress() {
            const address = await signer.getAddress();
            setAddress(address);
        }
        if (signer && window?.ethereum?.selectedAddress) {
            getAddress();
        }
    }, [dispatch, signer]);

    useEffect(() => {
        async function getBalance() {
            setBalance(BigNumber.from(0)); // todo with our contract
        }
        if (network && provider && address) {
            getBalance();
        }
    }, [address, dispatch, network, provider]);

    useEffect(() => {
        window.ethereum.on("accountsChanged", (accounts: Array<string>) => {
            if (!address) {
                setAddress(accounts[0]);
            } else {
                setBalance(BigNumber.from(0));
                setAddress("");
                setNetwork(null);
                setProvider(null);
                setSigner(null);
            }
        });
    }, [address, dispatch]);

    return { balance, address, network, provider, signer };
}