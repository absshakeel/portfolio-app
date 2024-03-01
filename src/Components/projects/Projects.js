import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import ProjectAccordian from './ProjectAccordian';

// Project History Data. 
import artificialIntelligence from '../../assets/Projects/artificial_intelligence.png';
import miscellaneous from '../../assets/Projects/miscellaneous.png';
import networkSystemsSecurity from '../../assets/Projects/network_systems_security.png';
import webProgramDataScience from '../../assets/Projects/web_program_dataScience.png';

// Import Styles. 
import './projects.css'; 

/*
 * Component to display projects. 
 */
const Projects = () => {

    // TODO: Eventually replace this with dynamic calls from backend. 
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
            <Box id="projects" style={{ backgroundColor: "#484848", borderRadius: '10px' }}>
                <br />
                <br />

                <Typography variant='h6' align="center">PROJECTS</Typography>

                <br />
                <br />

                <div id="projectAccordian">
                    <ProjectAccordian data={projectHistoryData} />
                </div>
            </Box>
        </>
    );
}

export default Projects; 