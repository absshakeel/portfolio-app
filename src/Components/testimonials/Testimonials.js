import { Avatar, TableBody, TableCell, TableRow } from '@mui/material';
import Table from '@mui/material/Table';
import React from 'react';
import ibmGBS from '../../assets/Education-Employment/ibmGBS.jpg';
import ReadMore from './ReadMore';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// Import css. 
import './testimonials.css';

/**
 * TODO: Eventually this would be convereted to carousel of 2 column tables. 
 */
const Testimonials = () => {

  const testimonialData = [
    {
      id: 1,
      testimonialAvatarImage: { ibmGBS },
      testimonialDescription: "Besides being in one of my UX design and development graduate classes (SWE 632), Abhishek was an active author on one research project that was then published online with Predictive Analytics Times: http://www.predictiveanalyticsworld.com/patimes/mind-text-public-data-political-insights/9125/ When Abhishek was in class, he continuously illustrated high interest, hard work, good team spirit, and dedication. Abhishek has been a creative member of his project team; he also presented the work done in a very clear manner - any software team would be lucky to have him.",
      testimonialDescriptionMore: "Besides being in one of my UX design and development graduate classes (SWE 632), Abhishek was an active author on one research project that was then published online with Predictive Analytics Times: http://www.predictiveanalyticsworld.com/patimes/mind-text-public-data-political-insights/9125/ When Abhishek was in class, he continuously illustrated high interest, hard work, good team spirit, and dedication. Abhishek has been a creative member of his project team; he also presented the work done in a very clear manner - any software team would be lucky to have him."
    }, 
    {
      id: 2,
      testimonialAvatarImage: { ibmGBS },
      testimonialDescription: "Besides being in one of my UX design and development graduate classes (SWE 632), Abhishek was an active author on one research project that was then published online with Predictive Analytics Times: http://www.predictiveanalyticsworld.com/patimes/mind-text-public-data-political-insights/9125/ When Abhishek was in class, he continuously illustrated high interest, hard work, good team spirit, and dedication. Abhishek has been a creative member of his project team; he also presented the work done in a very clear manner - any software team would be lucky to have him.",
      testimonialDescriptionMore: "Besides being in one of my UX design and development graduate classes (SWE 632), Abhishek was an active author on one research project that was then published online with Predictive Analytics Times: http://www.predictiveanalyticsworld.com/patimes/mind-text-public-data-political-insights/9125/ When Abhishek was in class, he continuously illustrated high interest, hard work, good team spirit, and dedication. Abhishek has been a creative member of his project team; he also presented the work done in a very clear manner - any software team would be lucky to have him."
    }
  ]

  function getTestimonials(testimonialData) {
    let testimonialDataArr = [];

    for (let i = 0; i < testimonialData.length; i++) {
      testimonialDataArr.push(
        <>
          <TableCell className="displayTextNextToAvatar">
            <Avatar
              className="avatar"
              src={ibmGBS}
              sx={{ width: 156, height: 156, border: '3px solid red', marginRight: '10px'}}>
              {testimonialData[i].testimonialDescription}
            </Avatar>
            <ReadMore className="readMore" style={{ float: 'right' }}>
              {testimonialData[i].testimonialDescriptionMore}
            </ReadMore>
          </TableCell>
        </>
      );
    }

    return testimonialDataArr;
  }

  return (
    <Box id="testimonials" component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            {getTestimonials(testimonialData)}
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Testimonials;