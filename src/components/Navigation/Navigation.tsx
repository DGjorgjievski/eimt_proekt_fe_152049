import React from "react";
import {
  makeStyles,
  createStyles,
  Box,
  Typography,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    menuContainer: {
      height: "100px",
      maxWidth: "1330px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",

      "& a": {
        color: "grey",
      },
    },
    navLinks:{
      width:'100%',
      maxWidth:'350px',
      display: "flex",
      justifyContent: "space-around",      
    },
    col6:{
      width:'100%',
      maxWidth:'40%',
    }
  })
);

export const Navigation = () => {
  const classes = useStyles();
  return (
    <Box className={classes.menuContainer}>
      <Link href="/">
        <Box>
          <img src="logo_transparent.png" width={150} height={150} alt="logo"></img>
        </Box>
      </Link>
      <Box className={classes.navLinks}>
        <Link href="/books" className="col6">
          {/* name of the logged in user */}
          <Typography variant="h6">User name</Typography> 
        </Link>
        <Link href="/logout" className={classes.col6}>
          <Typography variant="h6">logout</Typography> 
        </Link>
      </Box>
    </Box>
  );
};
