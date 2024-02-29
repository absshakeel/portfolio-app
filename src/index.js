import { Table } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from 'react';
import ReactDOM from 'react-dom/client';
import WebsiteFooter from './commonComponents/WebsiteFooter';
import CertsAndAwards from './profCertsAndAwards/CertsAndAwards';

// Employment History Data. 
import gmu from './assets/Education-Employment/georgeMasonUniversity.jpg';
import ibmGbs from './assets/Education-Employment/ibmGBS.jpg';

// Project History Data. 
import artificialIntelligence from './assets/Projects/artificial_intelligence.png';
import miscellaneous from './assets/Projects/miscellaneous.png';
import networkSystemsSecurity from './assets/Projects/network_systems_security.png';
import webProgramDataScience from './assets/Projects/web_program_dataScience.png';

// Professional Certification Data. 
import awsContent from './assets/Certifications-Resume/Certifications/AWSCertifiedDA.jpg';
import androidContent from './assets/Certifications-Resume/Certifications/Coursera Android.jpg';
import ocpjpContent from './assets/Certifications-Resume/Certifications/OCPJP.jpg';
import ocwcdContent from './assets/Certifications-Resume/Certifications/OW.jpg';

// Professional Certifications Badges Data. 
import androidBadge from './assets/Badges/Coursera - Android Badge - Custom Made.png';
import ocwcdBadge from './assets/Badges/Oracle University - Custom Badge.png';
import ocpjpBadge from './assets/Badges/Oracle-Certification-badge_OC-Professional.png';
import awsBadge from './assets/Badges/awsAssociateDeveloper.png';

// Awards Data. 
import apexon2022Award from './assets/Certifications-Resume/Certifications/Apexon.Performance.Award.2022.jpg';
import deepskillAwardIBM from './assets/Certifications-Resume/Certifications/Deep Skill.PNG';
import managerChoiceAwardIBM from './assets/Certifications-Resume/Certifications/mgrChoice.PNG';

// Awards Badges Data. 
import apexon2022AwardBadge from './assets/Badges/Apexon.Award.Badge.png';
import deepSkillAwardBadge from './assets/Badges/Deep Skill - Full Badge.png';
import managerChoiceAwardIBMBadge from './assets/Badges/Manager\'s Choice Award - Transparent - Final.png';

// Import css. 
import TimelineComponent from './commonComponents/TimelineComponent';
import './css/banner-styles.css';
import './css/projects.css';
import './css/publications.css';
import ExpandableSummary from './projects/ExpandableSummary';


// My landing page banner. 
import { TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import myBackground from './assets/My-Images/BannerBackground_2.png';
import Banner from './commonComponents/NavigationBar';
import Projects from './commonComponents/Projects';

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
    }, 
    {
      id: 9, 
      modalContentImage: androidContent, 
      modalClickImage: androidBadge, 
      modalTitle: 'Coursera Android Application Development.', 
      modalName: 'CourseraAndroid'
    }, 
    {
      id: 10, 
      modalContentImage: awsContent, 
      modalClickImage: awsBadge, 
      modalTitle: 'Amazon Developer Associate.', 
      modalName: 'AWSDA'
    }, 
    {
      id: 11, 
      modalContentImage: managerChoiceAwardIBM, 
      modalClickImage: managerChoiceAwardIBMBadge, 
      modalTitle: 'IBM Manager\'s Choice Award.', 
      modalName: 'IBMMGRAward'
    }, 
    {
      id: 12, 
      modalContentImage: deepskillAwardIBM,
      modalClickImage: deepSkillAwardBadge, 
      modalTitle: 'IBM Deep Skill Award.', 
      modalName: 'IBMDSAward' 
    },
    {
      id: 13, 
      modalContentImage: apexon2022Award, 
      modalClickImage: apexon2022AwardBadge, 
      modalTitle: 'Apexon 2022 Performance Award.', 
      modalName: 'ApexonAward'
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

  const boxSX = {
    "&:hover": {
      backgroundColor: 'rgba(0, 0, 0, 0.3)'

    }
  }

  const styles = theme => ({
    hoverButton: {
      '&:hover': {
        backgroundColor: 'green', // Change this to the desired hover color
      },
    },
  });

  // useEffect(() => {
  //   // Create a link element
  //   const link = document.createElement('link');
  //   link.rel = 'stylesheet';
  //   link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';

  //   // Append the link element to the document head
  //   document.head.appendChild(link);

  //   // Cleanup function to remove the link element when the component unmounts
  //   return () => {
  //     document.head.removeChild(link);
  //   };
  // }, []); 


  return (
    <>
    <div >
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <Banner/>


      <Box id="landingPageHome" style={{backgroundColor: "#484848" }}>
          <Table>
          <TableBody>

          
          
          <TableRow>
            <TableCell>
            {/* <Box key={"landingPageHomeLeft"}id="landingPageHomeLeft"> */}
              <h1>Abhishek Madhusudhan</h1>

              <h2> Software Development Engineer II</h2>

              <ul style={{ display: 'block', margin: 'auto', textAlign: 'center', color: 'white', fontWeight: '500', fontSize: '20px' }}>
                <li style={{ display: 'inline' }}> Code -</li>
                <li style={{ display: 'inline' }}> Optimize -</li>
                <li style={{ display: 'inline' }}> Rewrite </li>
              </ul>
            {/* </Box> */}
            </TableCell>
            <TableCell align="center">
              <img src={myBackground}></img>
            </TableCell>
          </TableRow>
          </TableBody>

          </Table>
           

            
        </Box>

      <Projects data = {projectHistoryData}/>
<br /> 
<br />
<br />
      

     

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

      {/* Publications */}
      <Box id="publications" component={Paper} style={{backgroundColor: "#484848"}}> 
      <h2>
        Publications
      </h2>
        <TimelineComponent/>
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

      <Box id="testimonials" component={Paper}>
        {/* 1. Name the component right. 
            2. Ensure to add carousel. (embed the table inside the carousel.)
            3. Fix padding. 
            4. Add proper images. */}
           <ExpandableSummary/>
      </Box>

      <Box id = "websiteFooter" component={Paper}>
        <WebsiteFooter/>
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
