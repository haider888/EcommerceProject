import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};
// const onSubmit = async (values) => {
//   console.log("Form Data", values);
//   const { data: userRecords } = await axios.get("http://127.0.0.1:3003/users");

//   const isExistingUser = userRecords.some(
//     ({ email, password }) =>
//       email === values.email && password === values.password
//   );

//   if (isExistingUser) {
    
//   }
// };

const validationSchema = Yup.object({
  email: Yup.string().email("invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
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

  const navigate = useNavigate();
  const onSubmit = async (values) => {
    console.log("Form Data", values);
    const { data: userRecords } = await axios.get(
      "http://127.0.0.1:3003/users"
    );
    console.log("user", userRecords);

    const isExistingUser = userRecords.some(
      ({ email, password }) => email === values.email && password === values.password );
    console.log("isExistingUser", isExistingUser);

    if (isExistingUser) {
      navigate("/")
    }
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avtarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h3>Login</h3>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
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
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  {...label}
                  defaultChecked
                  size="small"
                />
              }
              label="Remember Me"
            />
            <Button
              variant="contained"
              type="submit"
              //  component={NavLink}
              //  to="/"
              style={btnStyle}
              fullWidth
            >
              Sign In
            </Button>
            <Typography style={forgotStyle}>
              <Link href="#">Forgot Password</Link>
            </Typography>
            <Typography>
              Do you have account?
              <Link href="Registration">Sign Up</Link>
            </Typography>
          </Form>
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Login;
