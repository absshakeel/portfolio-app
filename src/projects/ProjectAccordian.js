import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CustomCard from '../commonComponents/CustomCard';

const ProjectAccordian = ({ data: projectData }) => {

    /*
     * TODO: Update this function to ensure that additional project data details are added. 
     */
    function getAccordian()
    {
        var projectDataArr = new Array(); 

        for(let i = 0; i < projectData.length; i++)
        {
            projectDataArr.push(
                <div key={i} style={{marginRight: '10px'}}>
                    <CustomCard data = {projectData[i]}/>
                    <Accordion  disableGutters style={{ width: '300px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>What is a DSA course?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This DSA course covers all topics.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
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
                  {getAccordian()}
                </Grid>
            </div>
        </>
    )
}

export default ProjectAccordian; 