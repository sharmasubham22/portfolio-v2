import React, { useState, useRef } from 'react';
import { Container, Typography, Chip, Box, Input } from "@mui/material";
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import emailjs from "@emailjs/browser";

const Result=()=>{
  return (
    <Typography sx={{py:3, fontFamily:"Sono"}}>Your Message is sent successfully. I will get back to you as soon as possible.</Typography>
  );
}

function Contact() {
const [result, showResult]=useState(false);
const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_eq769mw",
          "subham-portfolio",
          form.current,
          "Y3cUPmlGmNZfS3sZ_"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        e.target.reset();
        showResult(true);
    };
    setTimeout(()=>{
      showResult(false)
    }, 5000)
  return (
    <Container>
      <Box class="grid-container2">
        <Box class="grid-item grid-item-01">
          <Typography sx={{ py: 10 }} fontSize="24px" fontFamily="Sono">
            <Chip
              sx={{
                mb: 4,
                textTransform: "uppercase",
                fontFamily: "Sono",
                color: "rgb(126,87,194)",
                borderColor: "rgb(126,87,194)",
              }}
              label="Contact Me"
              variant="outlined"
            />{" "}
            <br />
            <Typography
              fontSize={{
                lg: 62,
                md: 52,
                sm: 60,
                xs: 52,
              }}
              sx={{ py: 8 }}
              id="title-touch"
            >
              Get in Touch
            </Typography>
            <a
              href="mailto:subham@dal.ca"
              target="_blank"
              className="intext-links"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="email-arrow"
                fontSize="18px"
              />{" "}
              subham@dal.ca
            </a>
          </Typography>
          <Box id="social-icons">
            <a
              href="https://www.linkedin.com/in/subham-sharma-137985128/"
              target="_blank"
            >
              <FontAwesomeIcon
                className="social2"
                icon={faLinkedinIn}
                href="#"
              />
            </a>
            <a href="https://github.com/sharmasubham22" target="_blank">
              <FontAwesomeIcon className="social2" icon={faGithub} />
            </a>
            <a href="https://twitter.com/subh_sharma22" target="_blank">
              <FontAwesomeIcon className="social2" icon={faTwitter} />
            </a>
          </Box>
        </Box>
        <Box class="grid-item grid-item-02">
          <form ref={form} onSubmit={sendEmail}>
            <label className="input-label">Name</label>
            <br />
            <input
              type="text"
              name='fullName'
              placeholder="What is your name?"
              className="form-input"
            />
            <br />
            <label className="input-label">Email id</label>
            <br />
            <input
              type="email"
              name='email'
              placeholder="What is your email id"
              className="form-input"
              required
            />
            <br />
            <label className="input-label">Message</label>
            <br />
            <textarea
            name='message'
              placeholder="Please enter your message.."
              className="form-message"
              required
            />
            <br />
            <button type="submit" className="form-submit">
              Submit
            </button>
            <div>{result ? <Result/> : null}</div>
          </form>
        </Box>
      </Box>
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
    </Container>
  );
}

export default Contact
