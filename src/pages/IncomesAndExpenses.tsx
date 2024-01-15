import React, { useEffect, useState } from "react";
import useFields from "../hooks/useFields";
import { Box, Typography } from "@mui/material";
import Header from "../components/Global/Header";
import useEarnings from "../hooks/useEarnings";
import useExpenses from "../hooks/useExpenses";
import CustomDataGrid from "../components/Global/CustomDataGrid";
import { earningsColumns, expensesColumns } from "../Common/ColumnDefs";

const IncomesAndExpenses = () => {
  const { getAllEarnings, addEarning, updateEarning, removeEarning } = useEarnings();
  const { getAllExpenses, addExpense, updateExpense, removeExpense } = useExpenses();

  const { data:earningsData, isLoading:isLoadingEarnings, error:isErrorEarnings } = getAllEarnings();
  const { data:expensesData, isLoading:isLoadingExpenses, error:isErrorExpenses } = getAllExpenses();
  

  return (
    <Box m="20px">
      <Header
        title="Expenses and Profits"
        subtitle="Manage all your fininicials"
      />
      <Box>
        <Typography sx={{ alignContent: "baseline" }}>Incomes</Typography>
        <Box
          m="40px 0 0 0"
          height="50vh"
          width="75vw"
          // sx={{
          //   '& .MuiDataGrid-root':{
          //     border:'none',
          //   },
          //   '& .MuiDataGrid-cell':{
          //     borderBottom:'none',
          //   },
          //   '& .MuiDataGrid-columnHeaders':{
          //     borderBottom:'none',
          //   }
          // }}
        >
          <CustomDataGrid rows={earningsData} isLoading={isLoadingEarnings} error={isErrorEarnings} columns={earningsColumns}/>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ alignContent: "baseline" }}>Expenses</Typography>
        <Box
          m="40px 0 0 0"
          height="50vh"
          width="75vw"
        >
          <CustomDataGrid rows={expensesData} isLoading={isLoadingExpenses} error={isErrorExpenses} columns={expensesColumns}/>
        </Box>
      </Box>
    </Box>
  );
};

export default IncomesAndExpenses;
