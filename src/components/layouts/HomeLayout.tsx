import { Box } from "@mui/material";
import React, { ReactElement } from "react";
import { Navbar } from "containers";

const HomeLayout = (page: ReactElement, props: any) => {
  return (
    <Box sx={{ height: "100%", }}>
      <Navbar />
      <Box sx={{ width: "100%" }}>{page}</Box>
    </Box>
  );
};

export default HomeLayout;
