import { Stack } from '@mui/material';
import * as React from "react";
import { CardSwiper } from 'react-card-swiper';
import SliderCardContent from "./SliderCardContent";

const SliderCard = ({data: sliderCardData}) => {

  const sliderCardDataJson = sliderCardData; 

  const mockData = [
    { id: 1, src: sliderCardDataJson[0].image, content: <SliderCardContent data = {sliderCardDataJson[0].briefDescription}/> },
  ]

  /* Functions to ensure that SliderCardRecurse works */ 
  const handleDismiss = (el, meta, id, action, operation) => { }
  const handleFinish = (status) => { }
  const handleEnter = (el, meta, id) => { }

  /* Component to continue to slide through the slides once exhausted */
  const SliderCardRecurse = () => {
    
    return (
      <>
        <CardSwiper
          data={mockData}
          onEnter={handleEnter}
          onFinish={handleFinish}
          onDismiss={handleDismiss}
          emptyState={
            <SliderCardRecurse />
          } />
      </>
    )
  }

  return (
    
    <div>
      <Stack height={'400px'} width={'300px'} direction="column" >
        <CardSwiper
          data={mockData}
          onEnter={handleEnter}
          onFinish={handleFinish}
          onDismiss={handleDismiss}
          emptyState={
            <SliderCardRecurse />
          }
        />
      </Stack>
    </div>
  )
};

export default SliderCard; 