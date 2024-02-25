import * as React from "react";
import { Stack, Typography } from '@mui/material';
import { default as bubbleShooter, default as candyCrash, default as clashRoyal } from '../assets/Education-Employment/ibmGBS.jpg';
import { CardSwiper } from 'react-card-swiper';

const SliderCard = () => {

  /* Functions to ensure that SliderCardRecurse works */ 
  const handleDismiss = (el, meta, id, action, operation) => { }
  const handleFinish = (status) => { }
  const handleEnter = (el, meta, id) => { }

  const Content = () => (

    <Typography px={2} style={{ color: 'black' }} variant="h6">
      {/* Add content */}
    </Typography>
  )

  const mockData = [
    { id: '88552078', meta: { apk: 'some-apk-a.apk' }, src: bubbleShooter, content: <Content /> },
    { id: 'fc7e0bd4', meta: { apk: 'some-apk-b.apk' }, src: candyCrash, content: <Content /> },
    { id: 'da9a7067', meta: { apk: 'some-apk-c.apk' }, src: clashRoyal, content: <Content /> },
  ]

  const copyData = [
    { id: '88552078', meta: { apk: 'some-apk-a.apk' }, src: bubbleShooter, content: <Content /> },
    { id: 'fc7e0bd4', meta: { apk: 'some-apk-b.apk' }, src: candyCrash, content: <Content /> },
    { id: 'da9a7067', meta: { apk: 'some-apk-c.apk' }, src: clashRoyal, content: <Content /> },
  ]


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
      <Stack height={'250px'} width={'250px'} direction="column" >
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