import { Box, Stack, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import React from "react";

function Footer() {
  return (
    <Box
      id="contact"
      component="div"
      sx={{
        backgroundColor: "#e83e2e",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: { xs: "80vh", sm: "50vh" },
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bolder"
        fontSize={{ sm: 40 }}
        color="#ffffff"
      >
        Contato
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <Stack flexDirection="column" alignItems="center" spacing={3}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <WhatsAppIcon sx={{ mr: 2, color: "#ffffff", fontSize: 40 }} />
            <Typography sx={{ color: "#ffffff", fontSize: 30 }}>
              41 99189-9580
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MailOutlineIcon sx={{ mr: 2, color: "#ffffff", fontSize: 40 }} />
            <Typography sx={{ color: "#ffffff", fontSize: 30 }}>
              pulse.pilates@hotmail.com.br
            </Typography>
          </Box>
        </Stack>

        <Box>
          <iframe
            title="google maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.232110028401!2d-49.29412492494803!3d-25.430502432910977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3f106cf12cf%3A0x43d112575502dfc0!2sAv.%20C%C3%A2ndido%20Hartmann%2C%20528%20-%20Merc%C3%AAs%2C%20Curitiba%20-%20PR%2C%2080710-570%2C%20Brasil!5e0!3m2!1spt-BR!2sde!4v1700428530914!5m2!1spt-BR!2sde"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
