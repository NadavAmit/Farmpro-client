import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Global/Header";
import Land from "../api/models/land";
import useLands from "../hooks/useLands";
import { useState } from "react";

const LandCreatePage = () => {
  const { addLand } = useLands();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (newLand: Land) => {
    console.log(newLand);
    const createdLand = await addLand(newLand);
    console.log(createdLand);
  };

  const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
    size: yup.number().required("required"),
    cropType: yup.number().required("required"),
    stage: yup.number().required("required"),
  });
  const initialValues: Land = {
    name: "",
    size: 0,
    cropId: 0,
    cropType: 0,
    stage: 0,
  };

  return (
    <Box m="20px">
      <Header title="Create Land" subtitle="Create a New Land" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Size"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.size}
                name="size"
                error={!!touched.size && !!errors.size}
                helperText={touched.size && errors.size}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Crop Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cropType}
                name="cropType"
                error={!!touched.cropType && !!errors.cropType}
                helperText={touched.cropType && errors.cropType}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                select
                variant="filled"
                type="number"
                label="Stage"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.stage}
                name="stage"
                error={!!touched.stage && !!errors.stage}
                helperText={touched.stage && errors.stage}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                select
                variant="filled"
                type="number"
                label="Age"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.stage}
                name="stage"
                error={!!touched.stage && !!errors.stage}
                helperText={touched.stage && errors.stage}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Land
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default LandCreatePage;
