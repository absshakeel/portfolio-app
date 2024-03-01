import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from 'react';
import ReactDOM from 'react-dom/client';
import WebsiteFooter from './Components/WebsiteFooter';

// My website components. 
import NavigationBar from './Components/NavigationBar';
import TimelineComponent from './Components/TimelineComponent';
import EmploymentEducationHistory from './Components/employmentEducationHistory/EmploymentEducationHistory';
import Home from './Components/home/Home';
import CertsAndAwards from './Components/profCertsAndAwards/CertsAndAwards';
import ExpandableSummary from './Components/projects/ExpandableSummary';
import Projects from './Components/projects/Projects';

// Import css. 
import './css/projects.css';
import './css/publications.css';

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
        <Box id="publications" component={Paper} style={{ backgroundColor: "#484848" }}>
          <br />
          <Typography variant='h6' align="center">
            Publications
          </Typography>
          <TimelineComponent />
          {/* <div className="timeline" style={{backgroundColor: 'black'}}>
                        <ul>
                            <li>
                                <time style={{color: 'white'}}>Aug 2017 - Dec 2017</time> 
                                <p style={{color: 'white'}}>
                                    Research project - Mind Your Own Text: Public Data for political Insights. <br /> <br />
                                    <a target = "_blank" href="https://www.predictiveanalyticsworld.com/patimes/mind-text-public-data-political-insights/9125">Published</a> an article based on the research project on "predictiveanalyticsworld.com". 
                                </p>
                            </li>
                        </ul>
                    </div> */}
        </Box>
        
        {/* Testimonials */}
        <Box id="testimonials" component={Paper}>
          {/* 1. Name the component right. 
            2. Ensure to add carousel. (embed the table inside the carousel.)
            3. Fix padding. 
            4. Add proper images. */}
          <ExpandableSummary />
        </Box>
        
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
