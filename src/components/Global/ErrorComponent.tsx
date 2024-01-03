import { Box, Typography } from "@mui/material";
import React from "react";

interface ErrorComponentProps {
    errorMessage?: string;
  }
  
const ErrorComponent:React.FC<ErrorComponentProps> = ({errorMessage}) => {
  return (
    <Box>
      <Typography variant="h5">Oops! Something went wrong.</Typography>
      {errorMessage && (
        <Typography variant="h6">{errorMessage}</Typography>
      )}
    </Box>
  );
};

export default ErrorComponent;
