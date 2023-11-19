import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Stack,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/pulse_pilates_logo_small.png";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box flexGrow={1}>
      <AppBar sx={{ backgroundColor: "#FFFFFF" }} position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img src={logo} alt="logo" />
          <Box sx={{ display: { xs: "block", md: "none", lg: "none" } }}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color="inherit"
            >
              <MenuIcon sx={{ color: "#e83e2e" }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                sx={{ backgroundColor: "#FFFFFF" }}
                onClick={handleClose}
              >
                <Link
                  href="#about"
                  underline="none"
                  color="#e83e2e"
                  p={1}
                  sx={{
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#e83e2e",
                      borderRadius: 1,
                    },
                  }}
                >
                  Pulse Pilates Studio
                </Link>
              </MenuItem>
              <MenuItem
                sx={{ backgroundColor: "#ffffff" }}
                onClick={handleClose}
              >
                <Link
                  href="#benefícios"
                  underline="none"
                  color="#e83e2e"
                  p={1}
                  sx={{
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#e83e2e",
                      borderRadius: 1,
                    },
                  }}
                >
                  Benefícios
                </Link>
              </MenuItem>
              <MenuItem
                sx={{ backgroundColor: "#ffffff" }}
                onClick={handleClose}
              >
                <Link
                  href="#atendimento"
                  underline="none"
                  color="#e83e2e"
                  p={1}
                  sx={{
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#e83e2e",
                      borderRadius: 1,
                    },
                  }}
                >
                  Galeria
                </Link>
              </MenuItem>
              <MenuItem
                sx={{ backgroundColor: "#ffffff" }}
                onClick={handleClose}
              >
                <Link
                  href="#contact"
                  underline="none"
                  color="#e83e2e"
                  p={1}
                  sx={{
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#e83e2e",
                      borderRadius: 1,
                    },
                  }}
                >
                  Contato
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block", lg: "block" } }}>
            <Stack direction="row" spacing={2}>
              <Link
                href="#about"
                underline="none"
                color="#e83e2e"
                p={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 17,
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#e83e2e",
                    borderRadius: 2,
                  },
                }}
              >
                Pulse Pilates Studio
              </Link>

              <Link
                href="#benefícios"
                underline="none"
                color="#e83e2e"
                p={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 17,
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#e83e2e",
                    borderRadius: 2,
                  },
                }}
              >
                Benefícios
              </Link>

              <Link
                href="#atendimento"
                underline="none"
                color="#e83e2e"
                p={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 17,
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#e83e2e",
                    borderRadius: 2,
                  },
                }}
              >
                Galeria
              </Link>

              <Link
                href="#contact"
                underline="none"
                color="#e83e2e"
                p={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 17,
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#e83e2e",
                    borderRadius: 2,
                  },
                }}
              >
                Contato
              </Link>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
