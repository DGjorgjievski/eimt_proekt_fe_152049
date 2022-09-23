import React from "react";
import { makeStyles, createStyles, Box, Typography } from "@material-ui/core";
import { TableItem } from "../../components";
import { cardData } from "./Home.data";
import { LocationsList } from "../../components/LocationsList/LocationsList";

const useStyles = makeStyles(() =>
  createStyles({
    mainSection: {
      height: "10vh",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "0",

      "& h5": {
        color: "#000",
      },
    },
    booksContainer: {
      display: "flex",
      flexDirection: "column",
    },
  })
);

export const Home = () => {
  const classes = useStyles();
  return (
    <Box style={{ padding: "0 10% 0 10%" }}>
      <Box className={classes.mainSection}>
        <Typography variant="h5">List of registered locals</Typography>
      </Box>
      <Box className={classes.booksContainer}>
        <LocationsList />
      </Box>
    </Box>
  );
};
