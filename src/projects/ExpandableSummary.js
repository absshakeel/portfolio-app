import React from 'react';
import ReadMore from '../testimonials/ReadMore';
import { Avatar, CardMedia } from '@mui/material';
import ibmGBS from '../assets/Education-Employment/ibmGBS.jpg'; 
import { TableBody, TableCell, TableRow } from '@mui/material';
import Table from '@mui/material/Table';

const ExpandableSummary = () => {

  const style = {
    paddingTop: '81.25%',
    borderRadius: '50%',
    margin: '28px'
  };

  return (
    <div>
      <Table>
        <TableRow>
          <TableCell>
          <Avatar
     src={ibmGBS}
     sx={{ width: 156, height: 156, border: '3px solid red' }}/>

          </TableCell>
          <TableCell>
          <ReadMore  
      style= {{float: 'right'}}>
          Besides being in one of my UX design and development graduate classes (SWE 632), Abhishek was an active author on one research project that was then published online with Predictive Analytics Times: http://www.predictiveanalyticsworld.com/patimes/mind-text-public-data-political-insights/9125/ When Abhishek was in class, he continuously illustrated high interest, hard work, good team spirit, and dedication. Abhishek has been a creative member of his project team; he also presented the work done in a very clear manner - any software team would be lucky to have him.
      </ReadMore>
          </TableCell>
          <TableCell>
          <Avatar
     src={ibmGBS}
     sx={{ width: 156, height: 156, border: '3px solid red' }}/>

          </TableCell>
          <TableCell>
          <ReadMore  
      style= {{float: 'right'}}>
          Besides being in one of my UX design and development graduate classes (SWE 632), Abhishek was an active author on one research project that was then published online with Predictive Analytics Times: http://www.predictiveanalyticsworld.com/patimes/mind-text-public-data-political-insights/9125/ When Abhishek was in class, he continuously illustrated high interest, hard work, good team spirit, and dedication. Abhishek has been a creative member of his project team; he also presented the work done in a very clear manner - any software team would be lucky to have him.
      </ReadMore>
          </TableCell>
        </TableRow>


      </Table>
    </div>
  );
};

export default ExpandableSummary;