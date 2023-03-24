import React, {useState} from 'react';
import './home.css';
import { Chip, Container, Typography, Button } from '@mui/material';
import Marquee from '../../components/marquee';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import About from '../About/about';
import Work from '../Work/work';
import Skills from '../Skills/skills';
import { Link } from "react-router-dom";

function Home() {

  // const[cursorX, setCursorX]=useState();
  // const[cursorY, setCursorY]=useState();

  // window.addEventListener('mousemove',(e)=>{
  //   setCursorX(e.pageX)
  //   setCursorY(e.pageY)
  // })

  return (
    <div>
      {/* <div
        className="cursor"
        style={{ left: cursorX + "px", top: cursorY + "px" }}
      ></div> */}
      <div class="background"></div>
      <Container id="home-container">
        <Typography
          variant="h6"
          sx={{ py: 10 }}
          alignItems="center"
          id="content"
        >
          <Chip
            sx={{
              mb: 4,

              textTransform: "uppercase",
              fontFamily: "Sono",
              color: "rgb(126,87,194)",
              borderColor: "rgb(126,87,194)",
            }}
            label="About Me"
            variant="outlined"
          />{" "}
          <br />
          <Typography
            fontSize={{
              lg: 58,
              md: 54,
              sm: 40,
              xs: 36,
            }}
            id="top-head"
          >
            I make things beautiful. <br />I am a Developer.
          </Typography>
          Hello <span class="material-symbols-outlined">waving_hand</span> I am
          Subham.
          <br />I love to design, develop and deploy. Attending{" "}
          <Link
            to="https://www.dal.ca/"
            target="_blank"
            className="intext-links"
          >
            Dalhousie University
          </Link>
          , Halifax (CA).
        </Typography>
        <Link className="connect" to="/contact">
          Let's Connect &nbsp;
          <FontAwesomeIcon icon={faAnglesRight} />
        </Link>
      </Container>
      <About />
      <Work />
      <Skills />

      <div className="cursor"></div>
      <div className="footer">
        <Link className="connect" to="/contact">
          Get in Touch &nbsp;
          <FontAwesomeIcon icon={faAnglesRight} />
        </Link>
      </div>
      <Link to="/contact">{/* <Marquee /> */}</Link>

      <Typography
        textAlign="center"
        sx={{
          mt: 5,
          padding: 5,
          color: "var(--content-color)",
          fontFamily: "Sono",
        }}
      >
        Designed & Built with <FontAwesomeIcon icon={faHeart} /> by Subham
      </Typography>
    </div>
  );
}

export default Home;
