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
import SliderCard from './commonComponents/SliderCard';
import CertsAndAwards from './profCertsAndAwards/CertsAndAwards';

// Employment History Data. 
import ibmGbs from './assets/Education-Employment/ibmGBS.jpg';
import gmu from './assets/Education-Employment/georgeMasonUniversity.jpg';

// Project History Data. 
import artificialIntelligence from './assets/Projects/artificial_intelligence.png';
import networkSystemsSecurity from './assets/Projects/network_systems_security.png';
import webProgramDataScience from './assets/Projects/web_program_dataScience.png'; 
import miscellaneous from './assets/Projects/miscellaneous.png'; 

// Professional Certification & Awards Data. 
import ocpjpContent from './assets/Certifications-Resume/Certifications/OCPJP.jpg'; 
import ocwcdContent from './assets/Certifications-Resume/Certifications/OW.jpg'; 
import ocwcdBadge from './assets/Badges/Oracle University - Custom Badge.png'; 
import ocpjpBadge from './assets/Badges/Oracle-Certification-badge_OC-Professional.png'; 

// Import css. 
import './css/projects.css';
import ProjectAccordian from './projects/ProjectAccordian';


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

  // Eventually this will be retrieved from backend. 
  const certificationAndAwards = [
    {
      id: 7, 
      modalContentImage: ocpjpContent, 
      modalClickImage: ocpjpBadge, 
      modalTitle: 'Oracle Certified Professional Java Programmer SE 6.', 
      modalName: 'OCPJPSE6'
    },
    {
      id: 8, 
      modalContentImage: ocwcdContent, 
      modalClickImage: ocwcdBadge, 
      modalTitle: 'Oracle Certified Web Component Developer.', 
      modalName: 'OCWCD'
    }
  ]


  // Eventually this will be retrieved from backend.
  const projectHistoryData = [
    {
      id: 3,
      image: artificialIntelligence,
      projectType: "Artificial Intelligence",
      projects: [
        {
          projectName: "Connect 4 - AI",
          projectDescription: "Developed and implemented a Connect 4 AI in JAVA using min-max algorithm wherein"
                            + " given a board, a ply depth and evaluation function, the program returns a structure" 
                            + " containing which move to make and how good it considers that move to win the game." 
                            + " Alpha-beta pruning was used to reduce computations and improve performance of the program."
        },
        {
          projectName: "Tetris - AI", 
          projectDescription: "Created a Tetris AI model in JAVA using genetic algorithm by evolving a set of weights for the"
                            + " game features  maximizing the fitness value associated with accomplishing the goal. This AI model"
                            + " can play well enough to ensure that the game lasts."
                            + " Fitness is determined by the number of rows the agent is able to clear and the ratio of lines to the pieces played."
        }, 
        {
          projectName: "Nim - AI", 
          projectDescription: "Implemented a LISP program capable of learning the game Nim through reinforcement learning (Q-Learning). A Q-table is"
                            + "generated as the computer plays against its own policy for several iterations updating the utility in the Q-table. The"
                            + "generated Q-table could be used to play a game of Nim against a human opponent."
        }, 
        {
          projectName: "Neural Net System", 
          projectDescription: "Implemented a neural network system using LISP to learn solutions to more complicated problems than the simple q-learning"
                            + " algorithm. By providing a neural network with feedback on the accuracy of its output, it is possible for the neural network"
                            + " to adjust its internal weights in order to achieve better results on subsequent runs. The process of updating weights through"
                            + " back-propagation, and producing outputs through forward-propagation allows a neural network to converge on more accurate solutions"
                            + " after repeated iterations of learning from test data. Simple-generalization and K-fold-validation techniques are used for validating"
                            + " the neural network system."
        }, 
        {
          projectName: "ECGA", 
          projectDescription: "Implemented an Evolutionary Computation Genetic Algorithm using LISP to find the best solution through various exploration and exploitation"
                            + "mechanism for problems like Symbolic Regression, Boolean-vector, Floating-point-vector."
        }, 
        {
          projectName: "POP - Planner", 
          projectDescription: "Implemented a brute-force Partial Order Planner to resolve the two-block world, and three-block world problems creating a complete plan which"
                            + " has the goal condition reachable from the starting state after a sequence of operations are performed."
        }
      ]
    },
    {
      id: 4,
      image: networkSystemsSecurity,
      projectType: "Cryptocurrency, Blockchain and Secure Systems",
      projects: [
        {
          projectName: "Ripple Wallet", 
          projectDescription: "Designed and Developed a public wallet interface for ripple that could be used to send,"
                            + " receive currencies, establish trust links with different accounts and view transaction history, compatible"
                            + " currencies associated with the ripple account on a test-net server."
        }, 
        {
          projectName: "Secure checker's game web application", 
          projectDescription: "Developed a web based secure multiplayer checkers game using a client server architecture" 
                            + " defending against some of the top OWASP vulnerabilities. Utilized Argon2 with salt for password hashing. "
                            + " Prepared assurance case to strengthen and defend the security claim."
        }
      ]
    }, 
    {
      id: 5, 
      image: webProgramDataScience, 
      projectType: "Web Development, Programming and Data Science", 
      projects: [
        {
          projectName: "Survey Application", 
          projectDescription: "Designed and developed a survey page to collect, store and search the records using JSF managed beans,"
                            + " hibernate, REST and SOAP web service technologies. The application is hosted using AWS (Amazon Web Services - S3 and EC2)."
        }, 
        {
          projectName: "State Of Union", 
          projectDescription: "Designed, Developed and Implemented a web based application to obtain political insights on"
                            + " State of the Union speeches in the past 2 decades."
        }, 
        {
          projectName: "Personal Website", 
          projectDescription: "Designed and Developed a personal website using React, Google MDL framework."
                           + "Deployed using Amazon AWS EC2 with routing configurations between Route 65 and Google Domains."
        }
      ]
    }, 
    {
      id: 6, 
      image: miscellaneous, 
      projectType: "Miscellaneous", 
      projects: [
        {
          projectName: "SBCA", 
          projectDescription: "A simple stack-based computer architecture simulation to read a program in assembly language and execute it."
                            + " Since this architecture is stack-based, the only \"register\" is the program counter that tells the system the address of next instruction to execute."
        }
      ]
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
          <Link to="employmentEducationHistory"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} > <Button style={{ color: 'white' }}>Home </Button></Link>
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
      <Box id="projects" component={Paper} >
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

      {/* Professional Certifications & Awards */}
      <Box id ="profCertsAwards" component={Paper}>
        <br /> 
        <br /> 
        <h2 style={{textAlign: "center"}}>
          Professional Certifications &amp; Awards
        </h2>
       <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <CertsAndAwards data = {certificationAndAwards}/>
        </div>
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
