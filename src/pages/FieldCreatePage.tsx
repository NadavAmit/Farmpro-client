import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Global/Header";
import Field from "../api/models/field";
import useFields from "../hooks/useFields";
import { useNavigate } from "react-router-dom";

const FieldCreatePage = () => {
  const { addField: addField } = useFields();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();


  const handleFormSubmit = async (newField: Field) => {
    console.log(newField);
    const createdField = await addField(newField);
    console.log(createdField);
  };

  const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
    size: yup.number().required("required"),
    cropType: yup.number().required("required"),
    stage: yup.number().required("required"),
  });
  const initialValues: Field = {
    name: "",
    size: 0,
    cropId: 0,
    cropType: 0,
    stage: 0,
  };

  return (
    <Box m="20px">
      <Header title="Create Field" subtitle="Create a New Field" />

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
          <form onSubmit={()=>{
            handleSubmit();
            navigate('/field');
            }}>
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
                Create New Field
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default FieldCreatePage;
