import React from 'react'
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
import { useProducts } from './Hooks/useProducts';

const initialValues = {
  title: "",
  file: "",
  price: "",
  description: "",
};





const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  file: Yup.string().required("Required"),
  price: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
 
});

const Upload = () => {



    const onSubmit = (values) => {
      console.log("Form Data", values);

        addProducts(values);
    };
    const { mutate: addProducts } = useProducts();

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
              <label htmlFor="title">Title</label>
              <Field
                placeholder="Enter title"
                type="text"
                id="title"
                name="title"
                style={textfieldStyle}
              />
              <ErrorMessage name="title" />
            </div>
            <div className="form-control">
              <label htmlFor="file">Image</label>
              <Field
                placeholder="Enter image"
                type="file"
                id="file"
                name="file"
                
                style={textfieldStyle}
              />
              <ErrorMessage name="file" />
            </div>

            <div className="form-control">
              <label htmlFor="price">Price</label>
              <Field
                placeholder="Enter price"
                type="text"
                id="price"
                name="price"
                style={textfieldStyle}
              />
              <ErrorMessage name="price" />
            </div>
            <div className="form-control">
              <label htmlFor="description">Description</label>
              <Field
                placeholder="Enter description"
                type="text"
                id="description"
                name="description"
                style={textfieldStyle}
              />
              <ErrorMessage name="description" />
            </div>

            <Button
              variant="contained"
              type="submit"
              // component={NavLink}
              // to="/login"
              style={btnStyle}
              fullWidth
            >
              Submit
            </Button>
          </Form>
        </Formik>
      </Paper>
    </Grid>
  );
}

export default Upload