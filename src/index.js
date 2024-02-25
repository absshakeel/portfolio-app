import React from 'react';
import ReactDOM from 'react-dom/client';
import MenuIcon from '@mui/icons-material/Menu';
import { TableBody, TableCell, TableRow } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import EmploymentHistory from './sections/EmploymentHistory';

const IndexApp = () => {

  return (
    <>

        {/* Banner tool bar for navigation purposes */}
        <AppBar >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }} >
              <MenuIcon />
            </IconButton>

            {/* Gap between different navigation heads and menu icon*/}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> </Typography>

            {/* Different navigation heads. */}
            <Button color="inherit">Home</Button>
            <Button color="inherit">Experience</Button>
            <Button color="inherit">Education</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Skills &amp; Awards</Button>
            <Button color="inherit">Publications</Button>
            <Button color="inherit">Recommendations</Button>
          </Toolbar>
        </AppBar>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* Employment & Education History*/}
        <Box component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center">
                  Employment History
                </TableCell>

                <TableCell align="center">
                  Education History
                </TableCell>
              </TableRow>


              <TableRow>
                <TableCell style={{ textAlign: 'center' }}>
                  <div style={{ display: 'inline-block' }}>
                    <EmploymentHistory />
                  </div>
                </TableCell>

                <TableCell style={{ textAlign: 'center' }}>
                  <div style={{ display: 'inline-block' }}>
                    <EmploymentHistory />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>

    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IndexApp />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
