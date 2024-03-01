import { TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import React from 'react';
import SliderCard from './SliderCard';

// Employment History Data. 

// Project History Data. 

// Professional Certification Data. 

// Professional Certifications Badges Data. 

// Awards Data. 

// Awards Badges Data. 

// Import css. 
// import './css/projects.css';


// My landing page banner. 

const EmploymentEducationHistory = ({data: employmentEducationHistory}) => {
    return (
        <>
        {/* Employment & Education History*/}
      <Box id="employmentEducationHistory" component={Paper} style={{borderRadius: '10px'}}>
       
       <TableContainer >
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
                  <SliderCard data={employmentEducationHistory.employmentHistoryData} />
                </div>
              </TableCell>

              <TableCell style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-block' }}>
                  <SliderCard data={employmentEducationHistory.educationHistoryData} />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </TableContainer>
      </Box>
        </>
    )
}

export default EmploymentEducationHistory; 