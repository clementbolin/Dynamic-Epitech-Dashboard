import React from "react";
import { createRef, useEffect } from "react";

export type ColorTheme = "light" | "dark";

export type DateRange = "1D" | "1M" | "3M" | "12M" | "60M" | "ALL";

export type DisplayMode = "regular" | "compact" | "adaptive";

export type ChartType = "area" | "bars" | "candlesticks";

export type ScalePosition = "no" | "left" | "right";

export type ScaleMode = "Normal" | "Percentage" | "Logarithmic";

declare const TradingView: any;

export const SetDivRef = (
  scriptHTML: any,
  scriptSRC: string,
  containerId?: string,
  type?: "Widget" | "MediumWidget"
): any => {
  const ref: { current: HTMLDivElement | null } = createRef();

  useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = scriptSRC;
      script.async = true;
      script.type = "text/javascript";

      if (type === "Widget" || type === "MediumWidget") {
        if (typeof TradingView !== undefined) {
          script.onload = () => {
            script.innerHTML = JSON.stringify(
              type === "Widget"
                ? new TradingView.widget(scriptHTML)
                : type === "MediumWidget"
                ? new TradingView.MediumWidget(scriptHTML)
                : undefined
            );
          };
        }
      } else {
        script.innerHTML = JSON.stringify(scriptHTML);
      }
      ref.current.appendChild(script);
      refValue = ref.current;
    }
    return () => {
      if (refValue) {
        while (refValue.firstChild) {
          refValue.removeChild(refValue.firstChild);
        }
      }
    };
  }, [ref, scriptHTML]);
  return <div ref={ref} id={containerId} />;
};

export const createId = (length: number): string => {
  let result = "";
  const characters = "abcdef0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};