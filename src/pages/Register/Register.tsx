import {
  Box,
  createStyles,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import { useForm, FormContext, Controller } from "react-hook-form";
import { LocationType } from "../../config";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { register } from "../Home/Home.service";

const useStyles = makeStyles(() =>
  createStyles({
    formContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      boxShadow: "5px 5px 15px 0px rgb(143 32 32 / 75%)",
      maxWidth: "500px",
      flexWrap: "wrap",
      height: "auto",
      minHeight: "250px",
      padding: "25px",
      margin: "0 auto",
    },
    formComponents: {
      width: "100%",
    },
    fields: {
      width: "100%",
      margin: "5px 0 5px 0 !important",
    },
  })
);

export const Register = () => {
  const classes = useStyles();
  const [name, setName] = useState<string>();
  const [surName, setSurName] = useState<string>();
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [retrievedData, setRetrievedData] = useState<any>(null);

  const methods = useForm({
    reValidateMode: "onSubmit",
  });
  const onSubmit = (data: any) => {
    const formData = {
      name: name,
      surName: surName,
      userName: userName,
      password: password,
      points: 10,
      isManager: false,
    };
    register(formData);
  };

  return (
    <Box style={{ padding: "0 10% 0 10%" }}>
      <FormContext {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={classes.formContainer}
        >
          <Box className={classes.formComponents}>
            <TextField
              name="name"
              id="outlined-required"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              type="text"
              className={classes.fields}
              required
            />
            <TextField
              name="surname"
              id="outlined-required"
              label="Surname"
              variant="outlined"
              onChange={(e) => setSurName(e.target.value)}
              type="text"
              className={classes.fields}
              required
            />
            <TextField
              name="email"
              id="outlined-required"
              label="Email"
              variant="outlined"
              onChange={(e) => setUserName(e.target.value)}
              type="email"
              className={classes.fields}
              required
            />
            <TextField
              name="password"
              id="outlined-required"
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className={classes.fields}
              required
            />
          </Box>
          <Box>
            <Button
              variant="text"
              type="button"
              color="primary"
              style={{ color: "blue", marginRight: "15px" }}
            >
              <Link
                href="/login"
                className="col6"
                style={{ textDecoration: "none" }}
              >
                Already have account LOGIN
              </Link>
            </Button>
            <Button variant="contained" type="submit" color="success">
              REGISTER
            </Button>
          </Box>
        </form>
      </FormContext>
    </Box>
  );
};
