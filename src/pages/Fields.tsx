import React, { useEffect, useState } from "react";
import useFields from "../hooks/useFields";
import { DataGrid,GridCellParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Header from "../components/Global/Header";
import { useNavigate } from "react-router-dom";

const Fields = () => {
  const { getAllFields, addField, updateField, removeField } = useFields();
  const { data, isLoading, error } = getAllFields();
  console.log(data)
  const navigate = useNavigate();

  const columns = [
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
      renderCell: (cellValues:GridCellParams) => {
        return (
            <Box
              width="60%"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              bgcolor="white"
              borderRadius="6px"
              onClick={() => {
                console.log(cellValues.row)
                navigate(`/field/${cellValues.row.id}`);
              }}
            >
              Manage Field
            </Box>
        );
      },
    },
  ];
  const initialNewField = {
    name: "",
    size: 0,
    cropType: "",
    currentStage: "",
  };

  const [newField, setNewField] = useState(initialNewField);
  const [updatedField, setUpdatedField] = useState({
    id: "",
    name: "",
    size: 0,
    cropType: "",
    currentStage: "",
  });

  const handleCreateField = async () => {
    await addField(newField);
    setNewField(initialNewField);
  };

  const handleUpdateField = async () => {
    await updateField(updatedField.id, updatedField);
    setUpdatedField({
      id: "",
      name: "",
      size: 0,
      cropType: "",
      currentStage: "",
    });
  };

  const handleDeleteField = async (id: string) => {
    await removeField(id);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setUpdatedField(data[0]); // Set the initial value for update to the first field item
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box m="20px">
      <Header title="Fields" subtitle="Manage all the Fields" />
      <Box
        m="40px 0 0 0"
        height="75vh"
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
        <DataGrid rows={data} columns={columns} />
      </Box>
    </Box>
  );
};

export default Fields;
