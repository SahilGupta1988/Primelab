import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { ModalType } from "utils";
import { Chip, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Account } from "store/account/type";
import SettingsIcon from "@mui/icons-material/Settings";

interface INavbar {
  activeAccount: Account;
  openModal: (modalName: string) => void;
}

const Navbar: FC<INavbar> = (props) => {
  const { activeAccount, openModal } = props;
  const handleMenuClick = () => {
    openModal(ModalType.AccountModal);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="default" position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Chip
            icon={<PersonIcon />}
            label={activeAccount.accountName}
            variant="outlined"
            sx={{
              margin: "0 auto",
              background: "#ffffff",
              justifyContent: "flex-start",
            }}
            onClick={handleMenuClick}
          />
          <IconButton color="inherit" aria-label="open drawer">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="open drawer">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
