import React from "react";
import { makeStyles, createStyles, Box, Typography } from "@material-ui/core";
import { CardComponent } from "../../components";
import { cardData } from "./Home.data";

const useStyles = makeStyles(() =>
  createStyles({
    mainSection: {
      height: "10vh",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding:"0 10% 0 10%",

      "& h5": {
        color: "#000",
      },
    },
    booksContainer: {
      maxWidth: "60vw",
      margin: "0 auto",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      marginTop: "40px",
    },
  })
);

export const Home = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.mainSection}>
        <Typography variant="h5">List of registered locals</Typography>
      </Box>
      <Box className={classes.booksContainer}>
        {cardData.map((local: any) => (
          <CardComponent
            title={local.name}
            content={local.location}
            image={local.image}
            id={local.id}
          />
        ))}
      </Box>
    </Box>
  );
};
