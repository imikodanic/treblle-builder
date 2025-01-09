import { Box, styled } from "~styled-system/jsx";
import { css } from "~styled-system/css";
import { Button } from "~components/ui/Button";

type HeroSectionProperties = {
  heroImage: string;
  title: string;
  intro: string;
  buttonText: string;
};

export default function HeroSection({
  title,
  intro,
  buttonText,
  heroImage,
}: HeroSectionProperties) {
  return (
    <Box
      css={{
        display: "flex",
        gap: "10",
        backgroundColor: "midnight",
        paddingX: "10",
      }}
    >
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          justifyContent: "center",
        }}
      >
        <styled.h1
          css={{
            fontSize: "52px",
            fontWeight: "700",
            color: "white",
            fontFamily: "poppins",
          }}
        >
          {title}
        </styled.h1>
        <styled.p css={{ fontSize: "18px", color: "cloud" }}>{intro}</styled.p>
        <Button css={{ marginTop: "20px" }}>{buttonText}</Button>
      </Box>
      <Box css={{ width: "60%" }}>
        <styled.img
          src={heroImage}
          alt="Hero image"
          className={css({ width: "100%", height: "auto" })}
        />
      </Box>
    </Box>
  );
}
