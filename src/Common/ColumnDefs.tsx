import { GridValueGetterParams } from "@mui/x-data-grid";

export const earningsColumns = [
    {
      field: "fieldId",
      headerName: "Field Name",
      flex: 1,
    },
    {
      field: "earningType",
      headerName: "Earning Type",
      type: "text",
      editable: true,
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      editable: true,
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      type: "date",
      editable: true,
      flex: 1,
      valueGetter: (params:GridValueGetterParams) => {
        const dateString = params.value;
        return new Date(dateString);
      },
    },
    // {
    //   field: "enterFieldButton",
    //   type: "number",
    //   flex: 1,
    //   renderCell: (cellValues: GridCellParams) => {
    //     return (
    //       <Box
    //         sx={{ cursor: "pointer" }}
    //         width="100%"
    //         m="0 auto"
    //         p="5px"
    //         display="flex"
    //         justifyContent="center"
    //         bgcolor="white"
    //         borderRadius="6px"
    //         onClick={() => {
    //           console.log(cellValues.row);
    //           navigate(`/field/${cellValues.row.id}`);
    //         }}
    //       >
    //         Manage Field
    //       </Box>
    //     );
    //   },
    // },
  ];

  export const expensesColumns =[
    {
      field: "fieldId",
      headerName: "Field Name",
      flex: 1,
    },
    {
      field: "expenseType",
      headerName: "Expense Type",
      type: "text",
      editable: true,
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      editable: true,
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      type: "date",
      editable: true,
      flex: 1,
      valueGetter: (params:GridValueGetterParams) => {
        const dateString = params.value;
        return new Date(dateString);
      },
    },
    // {
    //   field: "enterFieldButton",
    //   type: "number",
    //   flex: 1,
    //   renderCell: (cellValues: GridCellParams) => {
    //     return (
    //       <Box
    //         sx={{ cursor: "pointer" }}
    //         width="100%"
    //         m="0 auto"
    //         p="5px"
    //         display="flex"
    //         justifyContent="center"
    //         bgcolor="white"
    //         borderRadius="6px"
    //         onClick={() => {
    //           console.log(cellValues.row);
    //           navigate(`/field/${cellValues.row.id}`);
    //         }}
    //       >
    //         Manage Field
    //       </Box>
    //     );
    //   },
    // },
  ]
