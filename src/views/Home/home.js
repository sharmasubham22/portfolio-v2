import React, {useState} from 'react';
import './home.css';
import { Chip, Container, Typography, Button } from '@mui/material';
import Marquee from '../../components/marquee';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faAnglesRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import { styled } from "@mui/material/styles";
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

  // const ColorButton = styled(Button)(({ theme }) => ({
  //   backgroundColor: "var(--background-color)",
  //   border: "1px solid var(--highlight-color)",
  //   color: 'var(--text-color)',
  //   padding: "10px 40px",
  //   textTransform:'none',
  //   transition: "0.3s",
   
  //   "&:hover": {
  //     backgroundColor: "rgb(126, 87, 194, 0.3)",
  //     border: "1px solid var(--highlight-color)",
  //   },
  // }));

  return (
    <div>
      {/* <div
        className="cursor"
        style={{ left: cursorX + "px", top: cursorY + "px" }}
      ></div> */}
      <div>
        <div class="background"></div>
        {/* <div class="background2"></div> */}
        {/* <div class="circle1"></div> */}
        {/* <div class="blob2"></div> */}
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
                lg: 78,
                md: 54,
                sm: 40,
                xs: 36,
              }}
              id="top-head"
            >
              I try to make things beautiful, <br />I am a developer.
            </Typography>
            Hello <FontAwesomeIcon icon={faHand} fontSize="24px" /> I am Subham.
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

          {/* <div class="i-profile"> */}
          {/* <div class="blob"></div> */}
          {/* </div> */}
        </Container>

        <About />
        <Work />
        <Skills />

        <div className="cursor"></div>
        <div className='footer'>
          <Link
            className="connect"
            to="/contact"
          >
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
    </div>
  );
}

export default Home;
