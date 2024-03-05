import React from 'react';
import ReactDOM from 'react-dom/client';

// My website components. 
import NavigationBar from './Components/NavigationBar';
import EmploymentEducationHistory from './Components/employmentEducationHistory/EmploymentEducationHistory';
import Home from './Components/home/Home';
import Projects from './Components/projects/Projects';
import Publication from './Components/publication/Publication'; 
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import WebsiteFooter from './Components/WebsiteFooter'; 
import CertsAndAwards from './Components/profCertsAndAwards/CertsAndAwards';


const Portfolio = () => {

    return (
        <>
          {/* <Timeline/> */}

        {/* Navigation Bar */}
        <NavigationBar />

        <br />
        <br />
        <br />
        <br />

        {/* Home */}
        <Home />

        {/* Employment & Education */}
        <EmploymentEducationHistory />

        {/* Projects */}
        <Projects />

        {/* Professional Certifications & Awards */}
        {/* TODO: Add certs and awards here. */}        
        <CertsAndAwards />

        {/* Publications */}
        <Publication />

        {/* Testimonials */}
        {/* <Testimonials /> */}

        {/* Website Footer */}
        <Box id="websiteFooter" component={Paper}>
          <WebsiteFooter />
        </Box> 
        </>
    )
}

export default Portfolio; 