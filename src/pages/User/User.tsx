import { Box, createStyles, makeStyles, Typography } from "@material-ui/core";
import { userData } from "./User.data";
import { ReservationItem } from "../../components/ReservationItem/ReservationItem";
import React, { useEffect, useState } from "react";
import { getUserReservations } from "../../pages/Home/Home.service";
import { UserReservation } from "../../config";

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
    userHeader: {
      padding: "10px 0 10px 0",
      marginBottom: "25px",
      borderBottom: "1px solid #ebebeb",
    },
  })
);

export const User = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [userReservation, setuserReservation] =
    useState<UserReservation | null>(null);
  const [retrievedData, setRetrievedData] = useState<any>(null);

  useEffect(() => {
    getUserReservations().then((res) => setRetrievedData(res));
  }, []);

  const handleChanges = () => {
    setRetrievedData(null);
  };
  useEffect(() => {
    getUserReservations().then((res) => setRetrievedData(res));
  }, [retrievedData]);
  const classes = useStyles();
  const userName = localStorage.getItem("userName");
  const userPoints = localStorage.getItem("points");
  return (
    <Box className={classes.aboutContainer} style={{ padding: "0 10% 0 10%" }}>
      <Box className={classes.userHeader}>
        <Typography variant="h5">User: {userName}</Typography>
        <Typography variant="h6">Points: {userPoints}</Typography>
      </Box>
      <Box>
        {!!retrievedData &&
          retrievedData.map((userReservation: any) => (
            <ReservationItem
              LocalName={userReservation.localName}
              dateTime={
                userReservation.dateTime.split("T")[0] +
                " " +
                userReservation.dateTime.split("T")[1].split(".")[0]
              }
              id={userReservation.id}
              confirmed={userReservation.isConfirmed}
              numberOfTables={userReservation.numberOfTables}
              handleChanges={handleChanges}
            ></ReservationItem>
          ))}
      </Box>
    </Box>
  );
};
