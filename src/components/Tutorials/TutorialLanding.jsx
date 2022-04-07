import React from 'react'
import {Typography} from '@mui/material'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function TutorialLanding() {
  return (
    <section className='landing'>
      <Typography variant="h1" color="text.main" align="center">Welcome<br></br> to my <Typography variant="span" color="primary.main">
           Tutorials
        </Typography></Typography>
        <br></br>
      <br></br>
      <br></br>
      <Typography variant="h5" color="text.main" align="center" sx={{ marginBottom: "10px" }}>This is a small collection of tutorials, how-to's, and introdiction to libraries, frameworks, and other useful technologies for code. See the tabs below to get started on your subejct!</Typography>
      <ArrowCircleDownIcon sx={{color: "white"}} fontSize="large"/>
    </section>
  )
}

export default TutorialLanding