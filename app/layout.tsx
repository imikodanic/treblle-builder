import "../styles/panda.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { css, cx } from "~styled-system/css";

import { fontClassName } from "../styles/fonts";

interface RootLayoutProperties {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Treblle",
  description: "Treblle description",
  robots: "noindex",
};

export default function RootLayout(properties: RootLayoutProperties) {
  const { children } = properties;
  return (
    <html
      lang="en"
      className={cx(
        fontClassName,
        css({ overflowX: "hidden", fontFamily: "body" })
      )}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
