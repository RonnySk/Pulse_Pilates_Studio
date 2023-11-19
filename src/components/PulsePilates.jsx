import { Box, Typography } from "@mui/material";
import Image from "mui-image";
import React from "react";
import clientPilates from "../images/client_cadillac.jpg";

function PulsePilates() {
  return (
    <Box
      id="about"
      component="div"
      sx={{
        backgroundColor: "#fbf4e4",
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bolder"
          fontSize={{ sm: 40 }}
          mt={{ xs: 2 }}
          color="#444444"
        >
          Pulse Pilates Studio
        </Typography>
        <Typography
          variant="p"
          fontSize={{ sm: 20 }}
          color="#e83e2e"
          align="center"
          m={4}
          p={2}
        >
          Bem-vindo ao nosso Studio de Pilates - Onde o Bem-Estar Encontra a
          Força! Na Pulse Pilates Studio, estamos comprometidos em proporcionar
          uma experiência única e transformadora para todos os nossos clientes.
          Nosso estúdio foi cuidadosamente projetado para criar um ambiente
          acolhedor e inspirador, onde você pode se dedicar ao seu bem-estar
          físico e mental.
        </Typography>
      </Box>
      <Image
        src={clientPilates}
        alt="client doing Pilates"
        // width="60%"
        sx={{ borderRadius: { xs: 2 }, width: { xs: "10%", sm: "40%" } }}
      />
    </Box>
  );
}

export default PulsePilates;
