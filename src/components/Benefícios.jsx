import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HealingIcon from "@mui/icons-material/Healing";

function Benefícios() {
  return (
    <Box
      id="benefícios"
      component="div"
      sx={{
        backgroundColor: "#e83e2e",
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-around",
        height: { xs: "80vh", sm: "50vh" },
      }}
    >
      <Stack m={2} spacing={2} alignItems="center" justifyItems="center">
        <FitnessCenterIcon sx={{ color: "#ffffff", fontSize: 70 }} />
        <Typography
          lineHeight={1.2}
          align="center"
          color="#ffffff"
          fontSize={{ sm: 25 }}
        >
          Melhora do<br></br>Condicionamento físico
        </Typography>
      </Stack>
      <Stack m={2} spacing={2} alignItems="center" justifyItems="center">
        <HealingIcon sx={{ color: "#ffffff", fontSize: 70 }} />
        <Typography align="center" color="#ffffff" fontSize={{ sm: 25 }}>
          Alívio da Dor
        </Typography>
      </Stack>
      <Stack m={2} spacing={2} alignItems="center" justifyItems="center">
        <FavoriteBorderIcon sx={{ color: "#ffffff", fontSize: 70 }} />
        <Typography
          lineHeight={1.2}
          align="center"
          color="#ffffff"
          fontSize={{ sm: 25 }}
        >
          Redução do stress
        </Typography>
      </Stack>
    </Box>
  );
}

export default Benefícios;
