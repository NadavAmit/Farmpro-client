import React, { useEffect, useState } from "react";
import useLands from "../hooks/useLands";
import {DataGrid} from '@mui/x-data-grid';
import LandGrid from "../components/Land/LandGrid";
import { Box } from "@mui/material";
import Header from "../components/Global/Header";

const Lands = () => {
  const { getAllLands, getSingleLand, addLand, updateLand, removeLand } =
    useLands();
  const { data, isLoading, error } = getAllLands();
  const columns = [
    {field:'id',
     headerName:'ID',
     
    },
    {
      field: 'name',
      headerName: 'Name',
      flex:1
    },
    {
      field: 'size',
      headerName: 'Size',
      type:'number',
      editable: true,
      flex:1
    },
    {
      field: 'cropType',
      headerName: 'Crop Type',
      type:'number',
      editable: true,
      flex:1

    },
    {
      field: 'stage',
      headerName: 'Stage',
      type:'number',
      editable: true,
      flex:1
    },
  ];
  const initialNewLand = {
    name: "",
    size: 0,
    cropType: "",
    currentStage: "",
  };

  const [newLand, setNewLand] = useState(initialNewLand);
  const [updatedLand, setUpdatedLand] = useState({
    id: "",
    name: "",
    size: 0,
    cropType: "",
    currentStage: "",
  });

  const handleCreateLand = async () => {
    await addLand(newLand);
    setNewLand(initialNewLand);
  };

  const handleUpdateLand = async () => {
    await updateLand(updatedLand.id, updatedLand);
    setUpdatedLand({
      id: "",
      name: "",
      size: 0,
      cropType: "",
      currentStage: "",
    });
  };

  const handleDeleteLand = async (id: string) => {
    await removeLand(id);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setUpdatedLand(data[0]); // Set the initial value for update to the first land item
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box m='20px'>
      <Header title = 'Lands' subtitle="Manage all the lands"/>
      <Box
        m='40px 0 0 0'
        height='75vh'
        width='75vw'
      >
        <DataGrid 
        rows={data}
        columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Lands;
