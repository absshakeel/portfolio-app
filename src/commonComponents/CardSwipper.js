import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import * as React from "react";
import { default as bubbleShooter, default as candyCrash, default as clashRoyal } from '../assets/Education-Employment/ibmGBS.jpg';

import { CardSwiper } from 'react-card-swiper';

const Content = () => (
  <Typography px={2} style = {{color: 'black'}} variant="h6">
    Some Damn Content.Some Damn Content.Some Damn Content.Some Damn Content.Some Damn Content.Some Damn Content.Some Damn Content.
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
 
const SwipeSelectionPage = () => {
  const handleDismiss = (el, meta, id, action, operation) => {
    console.log({ el, meta, id, action, operation }) // event data to be handled
  }

  const handleFinish = (status) => {
    console.log(status) // 'finished'
  }

  const handleEnter = (el, meta, id) => {
    // OnEnter(); 
  }


const CardSwipperTwo = () => {
    return(
        <>
         <CardSwiper
        
        data={mockData}
        onEnter={handleEnter}
        onFinish={handleFinish}
        onDismiss={handleDismiss}
        // dislikeButton={<div>Left</div>}
        // likeButton={<div>Right</div>}
        // withActionButtons
        // withRibbons
        // likeRibbonText="INSTALL"
        // dislikeRibbonText="PASS"
        // ribbonColors={{ bgLike: 'green', bgDislike: 'red', textColor: 'white' }}
        // Recursively call the same component over and over again. 
        emptyState={
          <CardSwipperTwo/>
        }
        />
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
        // dislikeButton={<div>Left</div>}
        // likeButton={<div>Right</div>}
        // withActionButtons
        // withRibbons
        // likeRibbonText="INSTALL"
        // dislikeRibbonText="PASS"
        // ribbonColors={{ bgLike: 'green', bgDislike: 'red', textColor: 'white' }}
        emptyState={
          <CardSwipperTwo/>
        }
      />
    </Stack>
    </div>
  )
}; 

export default SwipeSelectionPage; 