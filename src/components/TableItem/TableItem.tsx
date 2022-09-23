import React from "react";
import {
  CardContent,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Box, createStyles, makeStyles } from "@material-ui/core";

interface ICard {
  title: string;
  content: string;
  image: string;
  id: number;
  handleModal: (id: any) => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    tableItemContainer: {
      width: "100%",
      border: "0.5px solid #d3d3d3",
      boxShadow: "2px 2px 4px #d3d3d3",
      marginBottom: "10px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      flexGrow: 1,
    },
    imageContainer: {
      height: "auto",
      maxWidth: "150px",
      width: "100%",
    },
    tableItemContent: {
      flexGrow: 2,
      padding: "20px",
      borderRight: "1px solid blue",
    },
  })
);

export const TableItem = (props: ICard) => {
  const classes = useStyles();

  return (
    <Box className={classes.tableItemContainer}>
      <img className={classes.imageContainer} src={props.image}></img>
      <Box className={classes.tableItemContent}>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {props.content}
        </Typography>
      </Box>
      <Button
        size="small"
        color="primary"
        onClick={() => {
          // console.log(props.id);
          props.handleModal(props.id);
        }}
      >
        Make reservation
      </Button>
    </Box>
  );
};
