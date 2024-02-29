import Box from '@mui/material/Box';
import React from 'react';
import ProjectAccordian from '../projects/ProjectAccordian'
// Employment History Data. 

// Project History Data. 

// Professional Certification Data. 

// Professional Certifications Badges Data. 

// Awards Data. 

// Awards Badges Data. 

// Import css. 
// import './css/projects.css';



// My landing page banner. 
const Projects = ({data: projectHistoryData}) => {
    return (
        <>
         {/* Projects */}
      <Box id="projects" style={{backgroundColor: "#484848"}}>
        <br />
        <br />
        <br />
        <br />
        <h2 style={{ textAlign: "center" }}> PROJECTS <hr /></h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <ProjectAccordian data={projectHistoryData} />
        </div>
      </Box>
        </>
    ); 
}

export default Projects; 