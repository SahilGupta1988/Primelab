import {
  Avatar,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import { PersonIcon } from "../../../../public/assets/icons/PersonIcon";
import { blue } from "@mui/material/colors";
import React, { FC } from "react";
import { ModalType } from "utils";
import { Account } from "store/account/type";

interface IAccountModal {
  open: boolean;
  accounts: Account[];
  activeAccount: Account;
  closeModal: (modalName: string) => void;
  setActiveAccount: (account: Account) => void;
}

const AccountModal: FC<IAccountModal> = (props) => {
  const { open, accounts, activeAccount, closeModal, setActiveAccount } = props;
  const handleAccountClick = (account: Account) => {
    setActiveAccount(account);
    handleClose();
  };
  const handleAddAccount = () => { };
  const handleClose = () => {
    closeModal(ModalType.AccountModal);
  };

  return (
    <Dialog sx={{ width: "100%" }} onClose={handleClose} open={open}>
      <DialogTitle sx={{ padding: "10px", fontWeight: "600", fontSize: "14px", color: "#A0A0A2" }}>My accounts</DialogTitle>
      <List sx={{ pt: 0 }}>
        {accounts.map((account) => (
          <ListItem
            button
            onClick={() => handleAccountClick(account)}
            key={account.id}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box component="div" sx={{ marginRight: "5px", display: "flex" }}>
              <PersonIcon />
            </Box>
            <ListItemText sx={{ margin: 0, fontSize: "15px", fontWeight: "600", color: "#414047" }} primary={account.accountName} />
          </ListItem>
        ))}
        <Divider />
        <ListItem autoFocus button onClick={() => handleAddAccount()}>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default AccountModal;
