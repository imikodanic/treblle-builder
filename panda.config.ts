import { defineConfig } from "@pandacss/dev";

import { recipes } from "./theme/recipes";
import { semanticTokens } from "./theme/semantic-tokens";
import { textStyles } from "./theme/text-styles";
import { tokens } from "./theme/tokens";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./app/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            semanticTokens,
            tokens,
            textStyles,
            recipes,
            keyframes: {
                meteor: {
                    "0%": { transform: "rotate(-90deg) translateX(0)", opacity: "0" },
                    "70%": { opacity: "1" },
                    "100%": {
                        transform: "rotate(-90deg) translateX(-200px)",
                        opacity: "0",
                    },
                },
                "meteor-tail": {
                    "0%": { width: 0 },
                    "50%": { width: "100px" },
                    "100%": { width: 0 },
                },
            },
        },
    },

    // The output directory for your css system
    outdir: "styled-system",

    jsxFramework: "react",
    jsxStyleProps: "minimal",
});
