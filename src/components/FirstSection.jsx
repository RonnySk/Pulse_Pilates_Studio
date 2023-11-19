import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Image } from "mui-image";
import React from "react";
import insideStudio from "../images/Studio.jpg";

function FirstSection() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "80vh",
        backgroundImage: `url(${insideStudio})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        "&::before": {
          content: '""',
          display: "block",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "rgba(232, 62, 46, 0.6)",
        },
      }}
    >
      <Typography
        variant="h1"
        color="#ffffff"
        fontSize={{ xs: 30, sm: 45 }}
        sx={{
          textAlign: "center",
          zIndex: 2,
          p: 2,
        }}
      >
        Transforme Seu Corpo, Fortaleça Sua Mente:
      </Typography>
      <Typography
        variant="h1"
        color="#ffffff"
        fontWeight="bolder"
        fontSize={{ xs: 30, sm: 45 }}
        sx={{
          textAlign: "center",
          zIndex: 2,
          p: 3,
        }}
      >
        Descubra o Poder do Pilates!
      </Typography>
    </Box>
  );
}

export default FirstSection;
