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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: { xs: "100vh", sm: "50vh" },
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bolder"
        fontSize={{ sm: 40 }}
        m={2}
        color="#ffffff"
        align="center"
      >
        Benefícios do Pilates
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Stack
          mb={{ xs: 4, sm: 2 }}
          spacing={2}
          alignItems="center"
          justifyItems="center"
        >
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
        <Stack
          mb={{ xs: 4, sm: 2 }}
          spacing={2}
          alignItems="center"
          justifyItems="center"
        >
          <HealingIcon sx={{ color: "#ffffff", fontSize: 70 }} />
          <Typography align="center" color="#ffffff" fontSize={{ sm: 25 }}>
            Alívio da Dor
          </Typography>
        </Stack>
        <Stack
          mb={{ xs: 4, sm: 2 }}
          spacing={2}
          alignItems="center"
          justifyItems="center"
        >
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
    </Box>
  );
}

export default Benefícios;
