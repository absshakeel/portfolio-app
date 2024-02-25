import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import * as React from 'react';
import IBMGBS from '../assets/Education-Employment/ibmGBS.jpg';
import CustomCard from '../commonComponents/CustomCard';
import { SwipeableDrawer } from '@mui/material';
import SliderCard from '../commonComponents/SliderCard';
const EmploymentHistory = () => {

    const employmentHistoryData =
        [
            {
                title: "IBM GBS",
                subHeader: "",
                imageLocation: IBMGBS,
                imageAlt: ""
            }
        ]

    const styles = {
        media: {
            height: 0,
            paddingTop: '56.25%' // 16:9
        },
        card: {
            position: 'relative',
        },
        overlay: {
            position: 'absolute',
            top: '20px',
            left: '20px',
            color: 'black',
            backgroundColor: 'black'
        }
    }


    return (
        <>
            <div>
                <SliderCard/>
            </div>

            <br />
            <br />

            <div>    
            </div>
        </>
    );
}

export default EmploymentHistory; 