import { Inter as InterFont, Poppins as PoppinsFont } from "next/font/google";

import { cx } from "~styled-system/css";

const poppins = PoppinsFont({
    weight: ["400", "500", "600", "700"],
    display: "swap",
    subsets: ["latin"],
    variable: "--font-poppins",
});

const inter = InterFont({
    weight: ["400", "500", "600", "700"],
    display: "swap",
    subsets: ["latin"],
    variable: "--font-inter",
});

export const fontClassName = cx(inter.variable, poppins.variable);
