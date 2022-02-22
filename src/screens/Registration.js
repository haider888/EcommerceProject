import React, { useState } from "react";
import {
  Avatar,
  Grid,
  Paper,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useRegister } from "../components/Hooks/useRegister";

import { NavLink } from "react-router-dom";

const initialValues = {
  username: "",
  email: "",
  number: "",
  password: "",
};

// const onSubmit = (values, addUsers) => {
//   console.log("Form Data", values);
//   //  const values={username,email,number,password}
//   addUsers(values);
// };


const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().email("invalid email format").required("Required"),
  number: Yup.string()
    .required("Required")
    .matches(phoneRegExp, "Phone number is not valid"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const Registration = () => {
  const onSubmit = (values) => {
    console.log("Form Data", values);
    addUsers(values);
  };
  const { mutate: addUsers } = useRegister();

  const paperStyle = {
    padding: 20,
    Maxheight: "75vh",
    width: "280px",
    margin: "50px auto",
    borderRadius: "20px",
  };
  const avtarStyle = { backgroundColor: "#3acb71" };
  const label = {
    inputProps: { "aria-label": "Checkbox demo" },
    align: "start",
  };

  const textfieldStyle = { margin: "10px 0px", padding: 12, width: "250px" };
  const btnStyle = { margin: "15px 0px" };
  const forgotStyle = { margin: "15px 0px" };
  // const errorStyle={color:"red"}

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avtarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>

          <h3>Sign Up</h3>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="form-control">
              <label htmlFor="username">UserName</label>
              <Field
                placeholder="Enter username"
                type="text"
                id="username"
                name="username"
                style={textfieldStyle}
              />
              <ErrorMessage name="username" />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field
                placeholder="Enter email"
                type="email"
                id="email"
                name="email"
                style={textfieldStyle}
              />
              <ErrorMessage name="email" />
            </div>
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                // style={textfieldStyle}
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                {" "}
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />{" "}
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>

            <div className="form-control">
              <label htmlFor="number">Phone Number</label>
              <Field
                placeholder="Enter phone number"
                type="number"
                id="number"
                name="number"
                style={textfieldStyle}
              />
              <ErrorMessage name="number" />
            </div>

            <div className="form-control">
              <label htmlFor="password">Password</label>
              <Field
                placeholder="Enter password"
                type="password"
                id="password"
                name="password"
                style={textfieldStyle}
              />
              <ErrorMessage name="password" />
            </div>
            {/* <div className="form-control">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <Field
                placeholder="Enter Confirm password"
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                style={textfieldStyle}
              />
              <ErrorMessage name="confirmpassword" />
            </div> */}

            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  {...label}
                  defaultChecked
                  size="small"
                />
              }
              label="I accept the terms and coditions"
            />
            <Button
              variant="contained"
              type="submit"
              // component={NavLink}
              // to="/login"
              style={btnStyle}
              fullWidth
            >
              Sign Up
            </Button>
            <Typography>
              Back to Login
              <Link href="Login">Login</Link>
            </Typography>
          </Form>
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Registration;
