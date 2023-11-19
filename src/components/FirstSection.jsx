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
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        height: "80%",
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
          backgroundColor: "rgba(232, 62, 46, 0.5)",
        },
      }}
    >
      <Typography
        variant="h2"
        color="#ffffff"
        sx={{
          textAlign: "center",
          position: "absolute",
        }}
      >
        Bem vindo a <br></br>Pulse Pilates Studio
      </Typography>
    </Box>
  );
}

export default FirstSection;
