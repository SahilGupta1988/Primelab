import React, { FC } from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { Collectible } from "store/collectible/type";

interface ICollectibleTab {
  collectibles: Collectible[];
}

const CollectiblesTab: FC<ICollectibleTab> = (props) => {
  const { collectibles } = props;
  return (
    <Box>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {collectibles.map((collectible) => (
          <ListItem key={collectible.id}>
            <ListItemText
              primary={collectible.name}
              secondary={collectible.createdBy}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CollectiblesTab;
