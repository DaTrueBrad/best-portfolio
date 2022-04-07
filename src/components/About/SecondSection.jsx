import {
  Container,
  ImageList,
  ImageListItem,
  ListSubheader,
  Typography,
} from "@mui/material";
import React from "react";
import brady from "../../assets/Brady.jpg";
import { images } from "../../assets/imagesList";

function SecondSection() {
  return (
    <section>
      <div className="info-container">
        <img src={brady} className="brady-img" />
        <div className="information">
          <div>
          <Typography variant="h2" align="center" color="white">
            I'm a{" "}
            <Typography variant="span" color="primary.main">
              React Developer
            </Typography>
          </Typography>
          <Typography variant="h5" color="white" align="center">
            Avid exercise enthusiest, partaker in sushi, and hiker of hikes!<br></br> (best description out there, 10/10)
          </Typography>
          </div>
          <div className="images-container">
          
            {images.map((image, index) => {
              return (
                <div className="image-card" key={index}>
                  <img
                    src={image.url}
                    loading="lazy"
                  />
                  <Typography variant="h5" color="text.main">{image.lang}</Typography>
                </div>
              );
            })}
            </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
