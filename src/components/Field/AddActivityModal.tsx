import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import Activity from "../../api/models/activity";
import useActivities from "../../hooks/useActivities";

interface AddActivityModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  fieldId:number;
}
const AddActivityModal: React.FC<AddActivityModalProps> = ({
  open,
  setOpen,
  fieldId
}) => {
  const { addActivity } = useActivities();
  
  const today = new Date();

  const handleFormSubmit = async (newActivity: Activity) => {
    console.log(newActivity);
    const createdActivity = await addActivity(newActivity);
    console.log(createdActivity);
  };

  const checkoutSchema = yup.object().shape({
    status: yup.string().required("required"),
    // date: yup.date().max(today),
    cropType: yup.number().required("required"),
    fieldSize: yup.number().required("required"),
  });
  const initialValues: Activity = {
    status: "",
    date: new Date(),
    cropType: "",
    fieldSize: 0,
    field: fieldId
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Activity</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
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
                // sx={{
                //   "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                // }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Status"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.status}
                  name="status"
                  error={!!touched.status && !!errors.status}
                  helperText={touched.status && errors.status}
                  sx={{ gridColumn: "span 2" }}
                />
                {/* <DateField
                  label="Date"
                  value={values.date}
                  onChange={handleChange}
                  format="MM-DD-YYYY"
                /> */}
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
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Field Size"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fieldSize}
                  name="fieldSize"
                  error={!!touched.fieldSize && !!errors.fieldSize}
                  helperText={touched.fieldSize && errors.fieldSize}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" onClick={handleClose}>
                  Add Activity
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AddActivityModal;
