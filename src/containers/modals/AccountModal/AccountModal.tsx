import {
  Avatar,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
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
  const handleAddAccount = () => {};
  const handleClose = () => {
    closeModal(ModalType.AccountModal);
  };

  return (
    <Dialog sx={{ width: "90%" }} onClose={handleClose} open={open}>
      <DialogTitle sx={{ padding: "10px" }}>My accounts</DialogTitle>
      <List sx={{ pt: 0 }}>
        {accounts.map((account) => (
          <ListItem
            button
            onClick={() => handleAccountClick(account)}
            key={account.id}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={account.accountName} />
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
