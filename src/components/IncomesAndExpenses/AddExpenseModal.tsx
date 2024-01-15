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
import useExpenses from "../../hooks/useExpenses";
import Expense from "../../api/models/expense";

interface AddExpenseModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  fieldId:number;
}
const AddExpenseModal: React.FC<AddExpenseModalProps> = ({
  open,
  setOpen,
  fieldId
}) => {
  const { addExpense } = useExpenses();
  
  const today = new Date();

  const handleFormSubmit = async (newExpense: Expense) => {
    await addExpense(newExpense);
  };

  const checkoutSchema = yup.object().shape({
    expenseType: yup.string().required("required"),
    // date: yup.date().max(today),
    amount: yup.number().required("required"),
  });
  const initialValues: Expense = {
    fieldId,
    expenseType: "",
    amount: 0,
    date: today
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Expense</DialogTitle>
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
                  label="Expense Type"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.expenseType}
                  name="expenseType"
                  error={!!touched.expenseType && !!errors.expenseType}
                  helperText={touched.expenseType && errors.expenseType}
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
                  Add Expense
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AddExpenseModal;
