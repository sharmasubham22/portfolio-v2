import { Typography, Grid, Container } from "@mui/material";
import Chip from "@mui/material/Chip";
import React from "react";
import "./projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart, faAnglesRight
} from "@fortawesome/free-solid-svg-icons";
import Marquee from "../../components/marquee";
import projectData from '../../data/projects.json';
import ProjectCard from "../../components/ProjectsCard";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <Container sx={{pb:8}}>
        <Chip
          label="Projects"
          variant="outlined"
          sx={{
            mb: 8,
            mt: 18,
            textTransform: "uppercase",
            fontFamily: "Sono",
            color: "rgb(126,87,194)",
            borderColor: "rgb(126,87,194)",
          }}
        />

        <Grid container spacing={8}>
          {projectData.map((e) => (
            <Grid item key={e.id} xs={12} sm={12} md={6}>
              <ProjectCard
                key={e.id}
                id={e.id}
                name={e.pname}
                details={e.pdetails}
                tool1={e.ptool1}
                tool2={e.ptool2}
                tool3={e.ptool3}
                tool4={e.ptool4}
                git={e.git}
                demo={e.demo}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className="footer">
        <Link className="connect" to="/contact">
          Get in Touch &nbsp;
          <FontAwesomeIcon icon={faAnglesRight} />
        </Link>
      </div>
      <Link href="/contact">{/* <Marquee /> */}</Link>
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
    </>
  );
}

export default Projects;
