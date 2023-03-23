import React from 'react';
import './about.css';
import { Container, Typography } from '@mui/material';
import pic from '../../images/pic2.jpg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function About() {
  let navigate=useNavigate();
  return (
    <div style={{ paddingTop: "18%" }}>
      <Container>
        {/* <Typography
          id="page-head"
          fontSize={{
            lg: 32,
            xs: 28,
          }}
          sx={{ display: "flex" }}
        >
          Who am I? <span className="line"></span>
        </Typography> */}

        <div class="grid-container">
          <div class="grid-item grid-item-1">
            <Typography id="about-1">
              I’m a budding Web Designer & Developer currently pursuing Masters
              of Applied Computer Science at{" "}
              <Link
                to="https://www.dal.ca/"
                target="_blank"
                className="intext-links"
              >
                Dalhousie University
              </Link>
              , Halifax (CA). Passionate for creating modern websites and Strong
              interest in UI UX development.
            </Typography>
            <Typography id="about-2">
              Completed Bachelors in Computer Science Engineering from{" "}
              <Link
                to="https://christuniversity.in/"
                target="_blank"
                className="intext-links"
              >
                Christ University
              </Link>{" "}
              , Bangalore (India) in 2019. I've had the privilege of working as
              a Web Design Intern at{" "}
              <Link
                to="https://www.skillsanta.com/"
                target="_blank"
                className="intext-links"
              >
                SkillSanta
              </Link>
              , and as Success Executive at{" "}
              <Link
                to="https://www.townscript.com/"
                target="_blank"
                className="intext-links"
              >
                Townscript
              </Link>
              .
              <br />
              <br />I have always been interested in learning new technologies
              and languages, so much so that it has become a passion of mine. I
              enjoy the challenge of creating beautiful designs that are both
              clear and easy to navigate through.
            </Typography>
          </div>
          <div class="grid-item grid-item-2">
            {/* <div class="blob"></div> */}
            <img src={pic} alt="photo" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;