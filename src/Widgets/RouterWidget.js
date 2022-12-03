import React, { useRef } from "react";

const RouterWidget = () => {
  const baseUrl = "https://app.thevoyager.io/swap";
  const configuration = {
    isWidget: true,
    widgetId: "24",
    fromChain: "56",
    toChain: "137",
    fromToken: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    toToken: "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4",
    dstChains: "137,56",
    dstTokens:
      "0x6855f7bb6287F94ddcC8915E37e73a3c9fEe5CF3,0x980111ae1B84E50222C8843e3A7a038F36Fecd2b",
    ctaColor: "#0000",
    textColor: "#FFFFFF",
    backgroundColor: "#212429",
    logoURI: "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aDAI.svg",
  };

  const paramString = new URLSearchParams(configuration).toString();
  const srcWidget = useRef(`${baseUrl}?${paramString}`);
  return (
    <>
      <iframe
        id="widget__iframe"
        height="640px"
        width="420px"
        src="https://app.thevoyager.io/swap?isWidget=true&widgetId=widget-0101&fromChain=56&toChain=137&fromToken=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&toToken=0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4"
        style={{
          border: "none",
          borderRadius: "8px",
          // boxShadow: "10px 10px rgb(0, 0, 0)",
        }}>
      </iframe>
    </>
  );
};

export default RouterWidget;