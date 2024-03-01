import { Typography } from '@mui/material';
import * as React from "react";


const SliderCardContent = ({ data: sliderCardContent }) => {


    return (
        <>
            <Typography style={{
                display: 'flex',
                color: 'black',
                textAlign: 'justify',
                padding: '10px 20px'
            }}
                variant="p">

                {/* Add content */}
                {sliderCardContent}

            </Typography>
        </>
    );
}

export default SliderCardContent; 