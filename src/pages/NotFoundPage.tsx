import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4">404 - Page Not Found</Typography>
      <Typography variant="body1">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Typography variant="body1" mt={2}>
        Go back to{' '}
        <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </RouterLink>
      </Typography>
    </Box>
  )
}

export default NotFoundPage