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
import { login } from "../Home/Home.service";
import { useHistory } from "react-router-dom";

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

export const Login = () => {
  let history = useHistory();
  var link = null;
  const classes = useStyles();
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [retrievedData, setRetrievedData] = useState<any>(null);

  const methods = useForm({
    reValidateMode: "onSubmit",
  });
  const onSubmit = (data: any) => {
    const formData = {
      username: userName,
      password: password,
    };
    link = login(formData);
    history.push("/home"); // this will redirect
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
              variant="outlined"
              type="button"
              color="primary"
              style={{ color: "blue", marginRight: "15px" }}
            >
              <Link
                href="/register"
                className="col6"
                style={{ textDecoration: "none" }}
              >
                REGISTER
              </Link>
            </Button>
            <Button variant="contained" type="submit" color="success">
              LOGIN
            </Button>
          </Box>
        </form>
      </FormContext>
    </Box>
  );
};
