import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-scroll';
// Import css. 
// import './css/projects.css';
import '../css/banner-styles.css';
// import './css/publications.css';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// My landing page banner. 

const Banner = () => {

    return(
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
                <FontAwesomeIcon icon={faLinkedin} className="linkedInButton linkedInButtonSize"> </FontAwesomeIcon>
            </a>

            <a href="https://github.com/abizsrm" target="_blank" title="GitHub" rel="nofollow">
                <FontAwesomeIcon icon={faGithub}  className="githubButton githubButtonSize" ></FontAwesomeIcon>
            </a>
          </div>

          {/* Gap between different navigation heads and menu icon*/}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> </Typography>

          {/* Different navigation heads. */}
          {/* TODO: Put this into its own component called Navigation Bar (Including the AppBar.), Move associated style sheets.*/}
          <Link>
            <Button color="inherit" >Home</Button>
          </Link>
        
          <Link to="employmentEducationHistory" spy={true} smooth={true} offset={-75} duration={500}> 
            <Button style={{ color: 'white' }} >Experience</Button></Link>
          <Button color="inherit" className='navElements'>Education</Button>
          
          <Link to="projects" spy={true} smooth={true} duration={500}>
            <Button color="inherit" >Projects</Button>
          </Link>
          
          <Link to="profCertsAwards" spy={true} smooth={true} duration={500}>
            <Button color="inherit" >Certs &amp; Awards</Button>
          </Link>

          <Link>
            <Button color="inherit" >Publications</Button>
          </Link>

          <Link>
            <Button color="inherit" >Testimonials</Button>
          </Link>
        </Toolbar>
      </AppBar>
        </>
    )
}

export default Banner; 