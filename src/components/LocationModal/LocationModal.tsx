import React, { useEffect, useState } from "react";
import { useForm, FormContext, Controller } from "react-hook-form";
import { LocationType } from "../../config";
import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Modal,
  Typography,
} from "@material-ui/core";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { makeReservation } from "../../pages/Home/Home.service";
import { debug } from "console";
import { ok } from "assert";

interface ILocationModal {
  location: LocationType | null;
  isVisible: boolean;
  handleModal: (locationId: any) => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    modalContainer: {
      backgroundColor: "#ffffff",
      width: "500px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "30px",
    },

    modalContent: {},
  })
);

export const LocationModal = (props: ILocationModal) => {
  const classes = useStyles();
  const userID = localStorage.getItem("UserID");
  const methods = useForm({
    reValidateMode: "onSubmit",
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>();
  const [currentDate, setCurrentDate] = useState<string>();
  const [numberOfTables, setNumberOfTables] = useState<number>();

  const handleDateChange = (event: any) => {
    // event.preventDefault();
    const date = event.$d.toISOString().split("Z")[0];
    // console.log("here",date)
    // const currentHours = String(date.getHours()).padStart(2, "0");
    // const currentMinutes = String(date.getMinutes()).padStart(2, "0");

    // // za dvocifreni e padStart ama ne mi uspeva

    // const currentMonth = String(date.getMonth()).padStart(2, "0");
    // const currentDay = String(date.getDate()).padStart(2, "0");

    // const newDate = date.getFullYear() + "-" + currentMonth + "-" + currentDay;
    // const newTime = currentHours + ":" + currentMinutes;
    // console.log("NEwDate", newTime);
    setCurrentDate(date);
    setSelectedDate(date);
  };

  const handleTableChange = (event: any) => {
    // event.preventDefault();

    setNumberOfTables(Number(event.target.value));
  };

  const onSubmit = (data: any) => {
    //     userId: number,
    // localName: string,
    // numberOfTables: number,
    // dateTime: Date,
    // isConfirmed: boolean

    const formData = {
      userId: userID,
      localName: props?.location?.name || "",
      numberOfTables: numberOfTables,
      dateTime: currentDate,
      isConfirmed: false,
    };
    makeReservation(formData);

    props.handleModal(1);
    // DISPATCH FUNCTION
    // console.log("SUBMIT", methods.getValues());
  };

  useEffect(() => {
    // console.log("CURRENT DATE", currentDate);
  }, [selectedDate]);

  useEffect(() => {
    // console.log("PROPS", props);
  }, [props]);

  return (
    <Box>
      <Modal
        open={props.isVisible}
        onClose={props.handleModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            width: 400,
            position: "absolute",
            left: 50,
            top: 50,
          }}
          className={classes.modalContainer}
        >
          <Box className={classes.modalContent}>
            <Typography variant="h6">
              Reserve a table at {props?.location?.name}
            </Typography>
            <Typography variant="h6">
              Address: {props?.location?.address}
            </Typography>
            <Typography variant="h6">
              Total available tables: {props?.location?.totalSpaces}
            </Typography>
          </Box>
          <Box>
            <FormContext {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Box>
                  <TextField
                    id="outlined-basic"
                    label="Number of tables"
                    variant="outlined"
                    onChange={(e) => handleTableChange(e)}
                  />

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      label="Date&Time picker"
                      value={selectedDate}
                      onChange={(e) => handleDateChange(e)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
                <Button
                  size="small"
                  type="button"
                  color="secondary"
                  onClick={props.handleModal}
                >
                  Cacel
                </Button>
                <Button size="small" type="submit" color="primary">
                  Make reservation
                </Button>
              </form>
            </FormContext>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
