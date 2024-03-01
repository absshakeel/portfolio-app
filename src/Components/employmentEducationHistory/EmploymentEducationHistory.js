import { TableBody, TableCell, TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import React from 'react';
import SliderCard from '../SliderCard';

// Employment-Education History Data. 
import gmu from '../../assets/Education-Employment/georgeMasonUniversity.jpg';
import ibmGbs from '../../assets/Education-Employment/ibmGBS.jpg';

// My landing page banner. 
const EmploymentEducationHistory = () => {

  //TODO: Eventually this will be retrieved from the backend. 
  const employmentHistoryData = [
    {
      id: 1,
      image: ibmGbs,
      briefDescription: "Worked as an \"Application Developer\" implementing core functionalities, redesigning the system to improve centralization and automating web service calls to reduce faulty data from 10% to 3%.",
      yearsOfExperience: 2
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
      {/* Employment & Education History*/}
      <Box id="employmentEducationHistory" component={Paper} style={{ borderRadius: '10px' }}>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                EMPLOYMENT HISTORY
              </TableCell>

              <TableCell align="center">
                EDUCATION HISTORY
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
    </>
  )
}

export default EmploymentEducationHistory; 