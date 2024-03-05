import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-scroll';

// Import Styles. 
import './navigation-bar.css';

import { BrowserRouter as Router, Link as RouterLink, Route, Navigate, useNavigate } from "react-router-dom";
import {Routes} from 'react-router-dom'; 
import Blog from '../Blog/Blog';

const NavigationBar = () => {


  return (
    <>
      {/* Banner tool bar for navigation purposes */}
      <AppBar id="navigationBar" style={{ background: '#484848' }}>
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
              <FontAwesomeIcon icon={faLinkedin} className="linkedInButton linkedInButtonSize"> </FontAwesomeIcon>
            </a>

            <a href="https://github.com/abizsrm" target="_blank" title="GitHub" rel="nofollow">
              <FontAwesomeIcon icon={faGithub} className="githubButton githubButtonSize"></FontAwesomeIcon>
            </a>
          </div>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Gap between different navigation heads and menu icon*/}
          </Typography>

          {/* Different navigation heads. */}
          <Link to="home" spy={true} smooth={true} duration={500}>
            <Button color="inherit" className='navElements'>Home</Button>
          </Link>

          <Link to="employmentEducationHistory" spy={true} smooth={true} offset={-75} duration={500}>
            <Button color="inherit" className='navElements'>Experience</Button>
          </Link>

          <Link to="employmentEducationHistory" spy={true} smooth={true} duration={500}>
            <Button color="inherit" className='navElements'>Education</Button>
          </Link>

          <Link to="projects" spy={true} smooth={true} duration={500}>
            <Button color="inherit" className='navElements'>Projects</Button>
          </Link>

          <Link to="profCertsAwards" spy={true} smooth={true} duration={500}>
            <Button color="inherit" className='navElements'>Certs &amp; Awards</Button>
          </Link>

          <Link to="publications" spy={true} smooth={true} duration={500}>
            <Button color="inherit" className='navElements'>Publications</Button>
          </Link>

          <Link to="testimonials" spy={true} smooth={true} duration={500}>
            <Button color="inherit" className='navElements'>Testimonials</Button>
          </Link>

          {/* TODO: Dynamically retrieve the url and assign it. Don't keep it static */}
          <a class='navElements' href="http://localhost:3000/Blog">
            <Button color="inherit" style={{color: "white"}} className='navElements'>BLOG</Button>
          </a>
         
        </Toolbar>

      </AppBar>

      
    </>
  )
}

export default NavigationBar; 