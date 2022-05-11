import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { MoralisProvider } from "react-moralis";
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from "../constants";

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <MoralisProvider serverUrl={MORALIS_SERVER_URL} appId={MORALIS_APP_ID}>
      <Component {...pageProps} />
    </MoralisProvider>
  </Provider >
}

export default MyApp;
