import { Box, } from "@mui/material";
import {DataGrid } from "@mui/x-data-grid";
import React from "react";

interface CustomDataGridProps {
  rows: any;
  isLoading: boolean;
  error: Error | null;
  columns: any[];
}

const CustomDataGrid: React.FC<CustomDataGridProps> = ({
  rows,
  isLoading,
  error,
  columns,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Box>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </Box>
  );
};

export default CustomDataGrid;
