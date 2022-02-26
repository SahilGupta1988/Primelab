import React, { FC } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Transaction } from "store/transaction/type";

interface ITransactionsTab {
  transactions: Transaction[];
}

const TransactionsTab: FC<ITransactionsTab> = (props) => {
  const { transactions } = props;
  return (
    <Box>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {transactions.map((transaction) => (
          <ListItem key={transaction.id}>
            <Typography>{`${transaction.amount} NEAR`}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TransactionsTab;
