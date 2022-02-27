import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { ModalType } from "utils";
import { Chip, IconButton } from "@mui/material";
// import PersonIcon from "@mui/icons-material/Person";
// import MenuIcon from "@mui/icons-material/Menu";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import { Account } from "store/account/type";
// import SettingsIcon from "@mui/icons-material/Settings";
import { Logo } from "../../../public/assets/icons/Logo";
import { NotificationIcon } from "../../../public/assets/icons/NotificationIcon";
import { SettingIcon } from "../../../public/assets/icons/SettingIcon";
import { PersonIcon } from "../../../public/assets/icons/PersonIcon";
import { DownIcon } from "../../../public/assets/icons/DownIcon";

interface INavbar {
  accountModal: boolean;
  activeAccount: Account;
  openModal: (modalName: string) => void;
}

const Navbar: FC<INavbar> = (props) => {
  const { activeAccount, accountModal, openModal } = props;
  const handleMenuClick = () => {
    openModal(ModalType.AccountModal);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ background: "#F5F5F5", boxShadow: "none", padding: "13px 0" }}
        color="default"
        position="static"
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <Logo />
          </IconButton>
          <Box
            component="div"
            sx={{
              position: "relative",
              margin: "0 7px 0 auto",
              zIndex: accountModal ? 99999 : 0,
            }}
          >
            <Chip
              icon={
                <Box
                  component="div"
                  sx={{
                    border: "2px solid #33373B",
                    padding: "2px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PersonIcon />
                </Box>
              }
              label={activeAccount.accountName}
              variant="outlined"
              sx={{
                background: "#ffffff",
                borderColor: "#DFDFE0",
                height: "auto",
                padding: "10px 24px 8px 8px",
                borderRadius: "30px",
                fontSize: "14px",
                color: "#33373B",
                fontWeight: "600",
              }}
              onClick={handleMenuClick}
            />
            <Box
              component="div"
              sx={{
                position: "absolute",
                right: "13px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <DownIcon />
            </Box>
          </Box>
          <IconButton color="inherit" aria-label="open drawer">
            <NotificationIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="open drawer">
            <SettingIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
