import React from "react";
import { Box, createStyles, makeStyles, Typography } from "@material-ui/core";
import { aboutData } from "./About.data";

const useStyles = makeStyles(() =>
  createStyles({
    aboutContainer: {
      maxWidth: "90vw",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
    },
    contentContainer: {
      marginTop: "40px",
    },
  })
);

export const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.aboutContainer}>
      <Typography variant="h3">About page</Typography>
      <Box className={classes.contentContainer}>
        {aboutData.map((item) => {
          return (
            <Box>
              <Typography variant="h4">{item.title}</Typography>
              <Typography variant="body1">{item.content}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
