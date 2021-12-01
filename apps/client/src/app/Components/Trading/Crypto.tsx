import React from "react";
import { SetDivRef, ColorTheme } from "./utils";

export type CryptoCurrencyMarketProps = {
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  defaultColumn?:
    | "overview"
    | "performance"
    | "oscillators"
    | "moving_averages";
  screener_type?: "crypto_mkt";
  displayCurrency?: "USD" | "BTC";
  colorTheme?: ColorTheme;
  locale?: string;
  isTransparent?: boolean;

  children?: never;
};


export const CryptoCurrencyMarket: React.FC<CryptoCurrencyMarketProps> = ({
  width = 1000,
  height = 490,
  autosize = false,
  defaultColumn = "overview",
  screener_type = "crypto_mkt",
  displayCurrency = "USD",
  colorTheme = "light",
  locale = "en",
  isTransparent = false,
  ...props
}) => {
  return SetDivRef(
    {
      ...(!autosize ? { width } : { width: "100%" }),
      ...(!autosize ? { height } : { height: "100%" }),
      defaultColumn,
      screener_type,
      displayCurrency,
      colorTheme,
      locale,
      isTransparent,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
  );
};