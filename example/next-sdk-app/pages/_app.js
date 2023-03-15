import "../styles/globals.css";
import { NextGatingWrapper } from "token-gating-sdk";
import "@rainbow-me/rainbowkit/styles.css";

import { configData } from "../config/config";
const API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

export default function App({ Component, pageProps }) {
  return (
    <NextGatingWrapper config={configData} alchemyApiKey={API_KEY}>
      <Component {...pageProps} />
    </NextGatingWrapper>
  );
}
