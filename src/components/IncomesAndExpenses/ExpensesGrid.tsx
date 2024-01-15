import { Box, Typography } from '@mui/material';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useExpenses from '../../hooks/useExpenses';
import useEarnings from '../../hooks/useEarnings';
import { error } from 'console';



const ExpensesGrid = () => {

  const { getAllExpenses, addExpense, updateExpense, removeExpense } = useExpenses();
  const { data, isLoading, error} = getAllExpenses();

  const navigate = useNavigate();

  const expensesColumns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "size",
      headerName: "Size",
      type: "number",
      editable: true,
      flex: 1,
    },
    {
      field: "cropType",
      headerName: "Crop Type",
      type: "number",
      editable: true,
      flex: 1,
    },
    {
      field: "stage",
      headerName: "Stage",
      type: "number",
      editable: true,
      flex: 1,
    },
    {
      field: "enterFieldButton",
      type: "number",
      flex: 1,
      renderCell: (cellValues: GridCellParams) => {
        return (
          <Box
            sx={{ cursor: "pointer" }}
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            bgcolor="white"
            borderRadius="6px"
            onClick={() => {
              console.log(cellValues.row);
              navigate(`/field/${cellValues.row.id}`);
            }}
          >
            Manage Field
          </Box>
        );
      },
    },
  ];


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Box>
        <Typography sx={{ alignContent: "baseline" }}>Expenses</Typography>
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
          <DataGrid rows={[]} columns={expensesColumns} checkboxSelection />
        </Box>
      </Box>
  )
}

export default ExpensesGrid