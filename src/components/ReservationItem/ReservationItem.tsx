import React, { useState } from "react";
import {
  CardContent,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Box, createStyles, makeStyles } from "@material-ui/core";
import {
  deleteReservation,
  confirmReservation,
} from "../../pages/Home/Home.service";

interface ICard {
  LocalName: string;
  dateTime: string;
  id: number;
  confirmed: boolean;
  numberOfTables: number;
  handleChanges: () => void;
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
      maxWidth: "300px",
      width: "100%",
    },
    tableItemContent: {
      flexGrow: 2,
      padding: "20px",
      borderRight: "1px solid blue",
    },
  })
);

export const ReservationItem = (props: ICard) => {
  const classes = useStyles();
  const [confirm, setConfirm] = useState<number>();

  const handleReservation = (type: any) => {
    //0 -delete; 1-confirm
    const formData = {
      id: props.id,
    };

    if (type == 0) {
      deleteReservation(formData);
    } else if (type == 1) {
      confirmReservation(formData);
    }
    props.handleChanges();
  };

  return (
    <Box className={classes.tableItemContainer}>
      <Box className={classes.tableItemContent}>
        <Typography gutterBottom variant="h5" component="div">
          Plase of reservation: {props.LocalName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Date & Time of reservation: {props.dateTime}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Number of tables: {props.numberOfTables}
        </Typography>
      </Box>
      <Button
        size="small"
        color="warning"
        onClick={() => {
          console.log(props.id);
          //Send POST to BE TO UPDATE RESERVATION
          handleReservation(0);
        }}
      >
        Cancle Reservation
      </Button>
      <Button
        size="small"
        color="primary"
        disabled={props.confirmed == true}
        onClick={() => {
          console.log(props.id);
          handleReservation(1);
          //Send POST to BE TO UPDATE RESERVATION
        }}
      >
        Confirm Reservation
      </Button>
    </Box>
  );
};
