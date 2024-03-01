import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from 'react';
import ReactDOM from 'react-dom/client';
import WebsiteFooter from './Components/WebsiteFooter';

// My website components. 
import NavigationBar from './Components/NavigationBar';
import EmploymentEducationHistory from './Components/employmentEducationHistory/EmploymentEducationHistory';
import Home from './Components/home/Home';
import CertsAndAwards from './Components/profCertsAndAwards/CertsAndAwards';
import Projects from './Components/projects/Projects';
import Testimonials from './Components/testimonials/Testimonials';
import Publication from './Components/publication/Publication';


const IndexApp = () => {


  return (
    <>
      <div >
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
        <CertsAndAwards />

        {/* Publications */}
        <Publication />

        {/* Testimonials 
        <Testimonials />*/}

        {/* Website Footer */}
        <Box id="websiteFooter" component={Paper}>
          <WebsiteFooter />
        </Box>
      </div>
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
