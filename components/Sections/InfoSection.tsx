import { Box, styled } from "~styled-system/jsx";

type InfoSectionProperties = {
  title: string;
  content: string;
  image: string;
};

export default function InfoSection({
  title,
  content,
  image,
}: InfoSectionProperties) {
  return (
    <Box
      css={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        paddingY: "120px",
      }}
    >
      <Box css={{ paddingY: "16px", zIndex: "2", maxWidth: "400px" }}>
        <styled.img src={image} alt="Info section image" />
      </Box>
      <Box
        css={{
          backgroundColor: "fog",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "120px",
          paddingRight: "16px",
          marginLeft: "-80px",
          width: "50%",
        }}
      >
        <styled.h2
          css={{
            fontSize: "36px",
            color: "midnight",
            fontFamily: "poppins",
            fontWeight: "500",
          }}
        >
          {title}
        </styled.h2>
        <styled.p css={{ color: "metal" }}>{content}</styled.p>
      </Box>
    </Box>
  );
}
