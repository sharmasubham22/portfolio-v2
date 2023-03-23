import React from 'react'
import { Typography, Grid, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import './work.css'

function Work() {
  return (
    <div style={{ paddingTop: "10%" }}>
      <Container>
        <Typography
          id="page-head"
          fontSize={{
            lg: 42,
            xs: 36,
          }}
          sx={{ py: 8, display: "flex" }}
        >
          Work Experience
          {/* <span style={{width: '40%'}} className="line"></span> */}
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={12} md={6}>
            <Card
              sx={{
                width: "100%",
                bgcolor: "var(--background-color)",
                border: "1px solid var(--border-color)",
              }}
          
            >
              <CardContent sx={{ p: 5 }}>
                <Typography
                  variant="text"
                  fontFamily="Sono"
                  color="var(--content-color)"
                >
                  2019-2021
                </Typography>
                <Typography
                  gutterBottom
                  variant="h4"
                  id="company-name"
                  color="var(--text-color)"
                  component="div"
                  sx={{ m: "20px 0px" }}
                >
                  Townscript
                </Typography>
                <Chip
                  label="Analytics"
                  variant="outlined"
                  sx={{
                    mb: 4,
                    textTransform: "uppercase",
                    fontFamily: "Sono",
                    color: "rgb(126,87,194)",
                    borderColor: "rgb(126,87,194)",
                  }}
                />
                <Chip
                  label="Business"
                  variant="outlined"
                  sx={{
                    mb: 4,
                    textTransform: "uppercase",
                    fontFamily: "Sono",
                    ml: 2,
                    color: "rgb(126,87,194)",
                    borderColor: "rgb(126,87,194)",
                  }}
                />
                <Typography
                  gutterBottom
                  variant="subtitle"
                  fontFamily="Sono"
                  color="var(--content-color)"
                  component="div"
                >
                  Townscript is a cloud-based event management solution. It is
                  designed for a variety of industries including education,
                  entertainment, travel and sports. The solution supports
                  various types of events such as conferences, reunions,
                  workshops and training.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card
              sx={{
                width: "100%",
                bgcolor: "var(--background-color)",
                border: "1px solid var(--border-color)",
              }}
              id="card"
            >
              <CardContent sx={{ p: 5 }}>
                <Typography
                  variant="text"
                  fontFamily="Sono"
                  color="var(--content-color)"
                >
                  2018
                </Typography>
                <Typography
                  gutterBottom
                  variant="h4"
                  id="company-name"
                  color="var(--text-color)"
                  component="div"
                  sx={{ m: "20px 0px" }}
                >
                  SkillSanta
                </Typography>
                <Chip
                  label="Web Design"
                  variant="outlined"
                  sx={{
                    mb: 4,
                    textTransform: "uppercase",
                    fontFamily: "Sono",
                    color: "rgb(126,87,194)",
                    borderColor: "rgb(126,87,194)",
                  }}
                />
                <Chip
                  label="Internship"
                  variant="outlined"
                  sx={{
                    mb: 4,
                    textTransform: "uppercase",
                    fontFamily: "Sono",
                    ml: 2,
                    color: "rgb(126,87,194)",
                    borderColor: "rgb(126,87,194)",
                  }}
                />
                <Typography
                  gutterBottom
                  variant="subtitle"
                  fontFamily="Sono"
                  color="var(--content-color)"
                  component="div"
                >
                  SkillSanta is a provider of a platform for competency
                  building. It educates people about skills in demand in their
                  locality or anywhere they wish, helps them make an
                  informed decision regarding what and how they should be learning those skills.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Work
