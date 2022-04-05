import { Typography } from "@mui/material";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import React from "react";


function FirstLanding() {
  return (
    <section className="landing">
      {/* <div> */}
      <Typography
        align="center"
        color="white"
        variant="h1"
        sx={{ marginBottom: "10px" }}
      >
        Hi,<br></br>I'm <Typography variant="span" color="primary.main">
           Brady
        </Typography>
      </Typography>
      
      <br></br>
      <br></br>
      <br></br>
      <Typography
        align="center"
        color="white"
        variant="h5"
        sx={{ marginBottom: "10px" }}
      >
        (Keep Scrolling)
      </Typography>
      <ArrowCircleDownIcon sx={{color: "white"}} fontSize="large"/>
    </section>
  );
}

export default FirstLanding;
