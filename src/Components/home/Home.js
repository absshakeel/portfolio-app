import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import myBackground from '../../assets/My-Images/BannerBackground_2.png';

// Import Styles. 
import './home.css';

const Home = () => {

    return (
        <>
            <Box id="home" style={{ backgroundColor: "#484848", borderRadius: '10px' }}>
                <Table>
                    <TableBody>
                        <TableRow>

                            <TableCell>
                                <Typography id="homeIntro" variant='h4' align='center'>
                                    Abhishek Madhusudhan
                                </Typography>
                                <Typography id="homeIntro2" variant='h6' align='center'>
                                    Software Development Engineer II
                                </Typography>
                                    <ul>
                                        <li style={{ display: 'inline' }}> Develop -</li>
                                        <li style={{ display: 'inline' }}> Optimize -</li>
                                        <li style={{ display: 'inline' }}> Scale </li>
                                    </ul>
                            </TableCell>

                            <TableCell align="center">
                                <img id="homeIntroImage" src={myBackground}></img>
                            </TableCell>

                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
        </>
    )
}

export default Home; 