import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from "@mui/material/Chip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { Box } from '@mui/material';
import '../views/Projects/projects.css';
import { Link } from 'react-router-dom';

export default function ProjectCard(props) {
    const {name, details, tool1, tool2, tool3, tool4, git, demo} = props
  return (
    <Link className="git-card" to={git}>
      <Card
        sx={{
          width: "100%",
          bgcolor: "var(--background-color)",
          border: "1px solid var(--border-color)",
        }}
        id="project-card"
      >
        <CardContent sx={{ p: 5 }}>
          <Typography
            variant="text"
            fontFamily="Sono"
            color="var(--content-color)"
            sx={{ float: "right" }}
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "24px" }} />
          </Typography>
          <Typography
            gutterBottom
            fontSize={{
              lg: 32,
              sm: 32,
              xs: 22,
            }}
            id="project-title"
            color="var(--text-color)"
            component="div"
            sx={{ m: "20px 0px" }}
          >
            {name}
          </Typography>

          <Typography
            gutterBottom
            variant="subtitle"
            fontFamily="Sono"
            color="var(--content-color)"
            component="div"
          >
            {details}
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Chip
              label={tool1}
              variant="outlined"
              sx={{
                textTransform: "uppercase",
                fontFamily: "Sono",
                color: "rgb(126,87,194)",
                border: "none",
              }}
            />
            <Chip
              label={tool2}
              variant="outlined"
              sx={{
                textTransform: "uppercase",
                fontFamily: "Sono",

                color: "rgb(126,87,194)",
                border: "none",
              }}
            />
            <Chip
              label={tool3}
              variant="outlined"
              sx={{
                textTransform: "uppercase",
                fontFamily: "Sono",
                color: "rgb(126,87,194)",
                border: "none",
              }}
            />
            <Chip
              label={tool4}
              variant="outlined"
              sx={{
                textTransform: "uppercase",
                fontFamily: "Sono",

                color: "rgb(126,87,194)",
                border: "none",
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
