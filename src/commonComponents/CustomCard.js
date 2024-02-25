import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import * as React from 'react';
import IBMGBS from '../assets/Education-Employment/ibmGBS.jpg'; 
import { useLocation } from 'react-router-dom';

const CustomCard = ({data : customCardDataObj}) => {

  const customCardDataObjJson  = customCardDataObj;
    
    return (
        <>
         <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={customCardDataObjJson[0].title}
        subheader="September 14, 2016"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {customCardDataObjJson.body}
        </Typography>
      </CardContent>
     
        </Card>
        </>
    ); 
}

export default CustomCard; 