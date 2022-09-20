import React from "react";
import { Box, Typography } from "@material-ui/core";
import { TableComponent } from "../../components";

export const Books = () => {
  return (
    <Box>
      <Typography variant="h3">Books</Typography>
      <TableComponent />
    </Box>
  );
};
