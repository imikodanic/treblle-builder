import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    alignItems: "center",
    borderRadius: "22px",
    cursor: "pointer",
    display: "inline-flex",
    outline: "none",
    transition: "all 0.3s",
    fontSize: "sm",
    paddingX: "7",
    paddingY: "2.5",
    height: "10",
    width: "fit-content",
  },
  defaultVariants: {
    variant: "solid",
  },
  variants: {
    variant: {
      solid: {
        backgroundColor: "electric.300",
        color: "white",
        _hover: {
          backgroundColor: "electric.400",
        },
      },
      muted: {
        backgroundColor: "#22263c",
        color: "white",
        _hover: {
          backgroundColor: "#2c3851",
        },
      },
      outline: {
        color: "midnight",
        borderWidth: "1",
        borderStyle: "solid",
        borderColor: "metal",
        _hover: {
          borderColor: "midnight",
        },
        _dark: {
          color: "white",
          borderWidth: "1",
          borderStyle: "solid",
          borderColor: "metal",
          _hover: {
            borderColor: "fog",
          },
        },
      },
    },
  },
});
