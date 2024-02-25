import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-scroll';

// Employment History Data. 
import ibmGbs from './assets/Education-Employment/ibmGBS.jpg';
import gmu from './assets/Education-Employment/georgeMasonUniversity.jpg';

import SliderCard from './commonComponents/SliderCard';


const IndexApp = () => {

  //TODO: Eventually this will be retrieved from the backend. 
  const employmentHistoryData = [
    {
      id: 1,
      image: ibmGbs,
      briefDescription: "Worked as an \"Application Developer\" implementing core functionalities, redesigning the system to improve centralization and automating web service calls to reduce faulty data from 10% to 3%.",
      yearsOfExperience: 2
      // jobResponsibilitiesDocument: TODO: Add this. 
    }
  ]

  const educationHistoryData = [
    {
      id: 2,
      image: gmu,
      briefDescription: " Instructing and assisting students in lab at the Department of Information Sciences and Technology for courses IT106 (Solving Using Computer Programming) and IT 206 (Object Oriented Techniques for IT Problem Solving) using JAVA.",
      yearsOfExperience: 2
    }
  ]

  return (
    <>

      {/* Banner tool bar for navigation purposes */}
      <AppBar style={{ background: '#484848' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }} >
            <MenuIcon />
          </IconButton>

          <div>
            <a href="https://www.linkedin.com/in/abizsrm" target="_blank" title="Linkedin" rel="nofollow" >
              <LinkedInIcon style={{ color: 'white', fontSize: 50 }} />
            </a>
            &nbsp;
            <a href="https://github.com/abizsrm" target="_blank" title="GitHub" rel="nofollow">
              <GitHubIcon style={{ color: 'white', fontSize: 50 }} />
            </a>
            &nbsp;
          </div>

          {/* Gap between different navigation heads and menu icon*/}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> </Typography>

          {/* Different navigation heads. */}
          <Button color="inherit" href="#">
            <Link to="employmentEducationHistory"
              spy={true}
              smooth={true}
              offset={50}
              duration={500} > Home </Link>
          </Button>
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

      {/* Employment & Education History*/}
      <Box id="employmentEducationHistory" component={Paper}>
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
                  <SliderCard data={employmentHistoryData} />
                </div>
              </TableCell>

              <TableCell style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-block' }}>
                  <SliderCard data={educationHistoryData} />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      {/* Projects */}
      <Box id="projectsHistory" component={Paper}>

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
