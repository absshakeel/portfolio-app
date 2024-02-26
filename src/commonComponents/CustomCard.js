import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const CustomCard = ({ data: customCardData }) => {

  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="194"
          image={customCardData.image}
          alt="Paella dish" />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {customCardData.projectType}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CustomCard; 