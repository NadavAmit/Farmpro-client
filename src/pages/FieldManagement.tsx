import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Global/Header";
import Field from "../api/models/field";
import { useParams } from "react-router-dom";
import { useField } from "formik";
import useFields from "../hooks/useFields";
import ErrorComponent from "../components/Global/ErrorComponent";
import { DataGrid, GridAlignment, GridCellParams, GridRenderCellParams } from "@mui/x-data-grid";
import AddActivityModal from "../components/Field/AddActivityModal";
import useActivities from "../hooks/useActivities";

const FieldManagement = () => {
  const { id } = useParams<{ id: string }>();
  const [openActivityModal, setOpenActivityModal] = React.useState(false);

  const { getSingleField } = useFields();
  const { getAllActivities } = useActivities();
  const{data} = getAllActivities();
  
  if (!id) {
    // Redirect to a 404 page or render default content specific to this component
    // history.push('/404');
    // Or render default content within this component
    return <div>No field ID provided for this page</div>;
  }

  const {
    data: field,
    isError,
    isLoading,
    error,
  } = getSingleField(id);

  const allignLeft:GridAlignment = 'left';
  const defaultColumnConfig = {   
    headerAlign: allignLeft,
    align:allignLeft,
  }

  if (isLoading) {
    return <Typography>Loading ...</Typography>;
  }

  if (isError) {
    console.log(error);
    if (error) return <ErrorComponent errorMessage={error.message} />;
    else {
      return <ErrorComponent />;
    }
  }
  const columns = [
    {
        sortable: true,
        field: 'lineNo',
        headerName: '#',
        flex: 0,
        editable: false,
        renderCell: (params: GridRenderCellParams) =>
          params.api.getRowIndexRelativeToVisibleRows(params.row.id) + 1,
      },
    {
      field: "status",
      headerName: "status",
      flex: 1,

    },
    // {
    //   field: "date",
    //   headerName: "Date",
    //   type:'date',
    //   editable: true,
    //   flex: 1,
    // },
    {
      field: "cropType",
      headerName: "Crop Type",
      type: "number",
      editable: true,
      flex: 1,
    },
    {
      field: "fieldSize",
      headerName: "Field Size",
      type: "number",
      editable: true,
      flex: 1,
      
    },
  ];

  const getColumns = () => {
    return columns.map((column) => ({
      ...defaultColumnConfig, // Merge default properties
      ...column,
    }));
  };


  return (
    <Box m="20px">
      <Header title={"Field Management"} subtitle={field?.name} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>Field Name</Box>
        <Box>Field Status</Box>
        <Box>
          <Button variant="contained">Edit field</Button>
        </Box>
      </Box>
      <Box width="80%">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "baseline",
          }}
        >
          <Typography sx={{ alignContent: "baseline" }}>
            Activities List
          </Typography>
          <Button variant="contained" onClick={()=>setOpenActivityModal(true)}>Add new Activity</Button>
          <AddActivityModal open={openActivityModal} setOpen={setOpenActivityModal} fieldId={Number(id)} />
        </Box>
        <Box height="45vh" m="5px 0 0 0">
          <DataGrid columns={getColumns()} rows={data}/>
        </Box>
        
      </Box>
      <Box width='100%' display='flex' flexDirection='row' justifyContent='space-evenly'>
      <Box width="45%">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "baseline",
          }}
        >
          <Typography sx={{ alignContent: "baseline" }}>
            Earnings List
          </Typography>
          <Button variant="contained" >Add new Activity</Button>
        </Box>
        <Box height="45vh" m="5px 0 0 0">
          <DataGrid columns={[]} rows={[]} />
        </Box>
        
      </Box>
      <Box width="45%">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ alignContent: "baseline" }}>
            Expenses List
          </Typography>
          <Button variant="contained">Add new Activity</Button>
        </Box>
        <Box height="45vh" m="5px 0 0 0">
          <DataGrid columns={[]} rows={[]}/>
        </Box>
        
      </Box>
      
    </Box>
    </Box>
    
  );
};

export default FieldManagement;
