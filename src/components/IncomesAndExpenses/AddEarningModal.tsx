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
import useEarnings from "../../hooks/useEarnings";
import Earning from "../../api/models/earning";

interface AddEarningModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  fieldId:number;
}
const AddEarningModal: React.FC<AddEarningModalProps> = ({
  open,
  setOpen,
  fieldId
}) => {
  const { addEarning } = useEarnings();
  
  const today = new Date();

  const handleFormSubmit = async (newEarning: Earning) => {
    await addEarning(newEarning);
  };

  const checkoutSchema = yup.object().shape({
    earningType: yup.string().required("required"),
    // date: yup.date().max(today),
    amount: yup.number().required("required"),
   });
  const initialValues: Earning = {
    fieldId,
    earningType: "",
    amount: 0,
    date: today
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Earning</DialogTitle>
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
                  label="Earning Type"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.earningType}
                  name="earningType"
                  error={!!touched.earningType && !!errors.earningType}
                  helperText={touched.earningType && errors.earningType}
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
                  label="Amount"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.amount}
                  name="amount"
                  error={!!touched.amount && !!errors.amount}
                  helperText={touched.amount && errors.amount}
                  sx={{ gridColumn: "span 2" }}
                />
              </Box>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" onClick={handleClose}>
                  Add Earning
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AddEarningModal;
