import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CustomCard from '../CustomCard';

const ProjectAccordian = ({ data: projectData }) => {

    /*
     * TODO: Update this function to ensure that additional project data details are added. 
     */
    function getAccordians()
    {
        var projectDataArr = [];

        for(let i = 0; i < projectData.length; i++)
        {
            projectDataArr.push(
                <div key={i} style={{marginRight: '10px'}}>
                    <CustomCard data = {projectData[i]}/>
                     {getAccordian(projectData[i].projects)}
                </div>
            ); 
        }

        return projectDataArr; 
    }

    function getAccordian(projectData)
    {
        let projectDataArr = []; 
        let accordianKey = "accordian"; 
        for(let i = 0; i < projectData.length; i++)
        {
            projectDataArr.push(
                <Accordion key={accordianKey + i} disableGutters style = {{width: '300px'}}>
                    <AccordionSummary
                        expandIcon= {<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                    <Typography>{projectData[i].projectName}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            {projectData[i].projectDescription}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ); 
        }

        return projectDataArr; 
    }

    return (
        <>
        {/* Convert the following to generate components while looping over.*/}
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Grid container spacing={2}>
                  {getAccordians()}
                </Grid>
            </div>
        </>
    )
}

export default ProjectAccordian; 