import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import PublicationTimeline from './PublicationTimeline';

const Publication = () => {


    return (
        <Box id="publications" component={Paper} style={{ backgroundColor: "#484848" }}>
          <br />
          <Typography variant='h6' align="center">
            PUBLICATIONS
          </Typography>
          <PublicationTimeline />
        </Box>
    )
}

export default Publication; 