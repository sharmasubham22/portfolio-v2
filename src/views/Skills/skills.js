import React from 'react';
import { Typography, Container, List } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faReact,
  faNodeJs, faJava, faSquareJs, faAws, faGitAlt, faJira, faFigma
} from "@fortawesome/free-brands-svg-icons";
import './skills.css'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Skills() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div style={{ paddingTop: "10%", paddingBottom: "5%" }}>
      <Container>
        <Typography
          id="big-head"
          fontSize={{
            lg: 192,
            md: 146,
            sm: 96,
            xs: 56,
          }}
        >
          Skills
        </Typography>
        <Typography
          id="page-head"
          fontSize={{
            lg: 42,
            sm: 32,
            xs: 26,
          }}
          sx={{ py: 8, display: "flex" }}
        >
          Skills and Tools I learned
          {/* <span style={{width:'40%'}} className="line"></span> */}
        </Typography>
        <Typography id="about-2" sx={{ mb: "10%" }}>
          Over the years, I have been learning new skills and use them to create
          new projects. I try to be industry ready with latest tools and
          technologies. Below are the skills that I have learned and tools which
          I have knowledge on.
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{ sx: { display: "none" } }}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTabs-flexContainer": {
                  flexWrap: "wrap",
                  "& .MuiTabs-indicator": {
                    backgroundColor: "var(--highlight-color)",
                  },
                  "& .MuiTab-root": {
                    color: "var(--text-color)",
                    fontFamily: "Sono",
                  },
                  "& .Mui-selected": {
                    color: "var(--highlight-color)",
                    border: "1px solid var(--highlight-color)",
                    fontFamily: "Sono",
                    borderRadius: "50px",
                  },
                },
              }}
              centered
            >
              <Tab label="Web Technologies" {...a11yProps(0)} />
              <Tab label="Languages" {...a11yProps(1)} />
              <Tab label="Databases" {...a11yProps(2)} />
              <Tab label="Cloud Services" {...a11yProps(3)} />
              <Tab label="Project Management" {...a11yProps(4)} />
              <Tab label="Other" {...a11yProps(5)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div id="skills-tab">
              <List
                sx={{
                  width: "100%",
                  maxWidth: 460,
                  bgcolor: "var(--background-color)",
                }}
              >
                <ListItem alignItems="flex-start" id="list-item" sx={{}}>
                  <ListItemAvatar>
                    <FontAwesomeIcon icon={faHtml5} fontSize="48px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="HTML"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    <FontAwesomeIcon icon={faCss3} fontSize="48px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="CSS"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    <FontAwesomeIcon icon={faReact} fontSize="48px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="ReactJS"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    <FontAwesomeIcon icon={faNodeJs} fontSize="48px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="NodeJS"
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      ml: 2,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    {/* <img
                      src="https://img.icons8.com/color/512/spring-logo.png"
                      alt="sb"
                      style={{ width: "48px" }}
                    /> */}
                    <i
                      class="bx bxl-spring-boot"
                      style={{ fontSize: "48px" }}
                    ></i>
                    
                  </ListItemAvatar>
                  <ListItemText
                    primary="Spring Boot"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
              </List>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div id="skills-tab">
              <List
                sx={{
                  width: "100%",
                  maxWidth: 460,
                  bgcolor: "var(--background-color)",
                }}
              >
                <ListItem alignItems="flex-start" id="list-item" sx={{}}>
                  <ListItemAvatar>
                    <FontAwesomeIcon icon={faJava} fontSize="48px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Java"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    <FontAwesomeIcon icon={faSquareJs} fontSize="48px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="JavaScript"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png"
                      alt="kt"
                      style={{ width: "48px" }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Kotlin"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
              </List>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div id="skills-tab">
              <List
                sx={{
                  width: "100%",
                  maxWidth: 460,
                  bgcolor: "var(--background-color)",
                }}
              >
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    {/* <img
                      src="https://seeklogo.com/images/A/azure-sql-database-logo-D7A32C9CD9-seeklogo.com.png"
                      alt="sql"
                      style={{ width: "36px" }}
                    /> */}
                    <i class="bx bxs-data" style={{ fontSize: "48px" }}></i>
                  </ListItemAvatar>
                  <ListItemText
                    primary="SQL"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    {/* <img
                      src="https://www.tutorialsteacher.com/Content/images/home/mongodb.svg"
                      alt="mon"
                      style={{ width: "48px" }}
                    /> */}
                    <i class="bx bxl-mongodb" style={{ fontSize: "48px" }}></i>
                  </ListItemAvatar>
                  <ListItemText
                    primary="MongoDB"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png"
                      alt="ddb"
                      style={{ width: "54px" }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="DynamoDB"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    {/* <img
                      src="https://www.gameartguppy.com/wp-content/uploads/2019/04/mascot_firebase-logo.png"
                      alt="fb"
                      style={{ width: "48px" }}
                    /> */}
                    <i class="bx bxl-firebase" style={{ fontSize: "48px" }}></i>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Firebase"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    <img
                      src="https://dist.neo4j.com/wp-content/uploads/2014/04/neo4j_256.png"
                      alt="neo"
                      style={{ width: "48px" }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Neo4j"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    <img
                      src="https://dt-cdn.net/hub/Google_Storage-Logo.wine_NniLldt.svg"
                      alt="cs"
                      style={{ width: "48px" }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Cloud Storage"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
              </List>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div id="skills-tab">
              <List
                sx={{
                  width: "100%",
                  maxWidth: 460,
                  bgcolor: "var(--background-color)",
                }}
              >
                <ListItem alignItems="flex-start" id="list-item" sx={{}}>
                  <ListItemAvatar>
                    <FontAwesomeIcon icon={faAws} fontSize="48px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Amazon Web Services"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    {/* <img
                      src="https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Emblem.png"
                      alt="gcp"
                      style={{ width: "62px" }}
                    /> */}
                    <i
                      class="bx bxl-google-cloud"
                      style={{ fontSize: "48px" }}
                    ></i>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Google Cloud Platform"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                    }}
                  />
                </ListItem>
              </List>
            </div>
          </TabPanel>

          <TabPanel value={value} index={4}>
            <div id="skills-tab">
              <List
                sx={{
                  width: "100%",
                  maxWidth: 460,
                  bgcolor: "var(--background-color)",
                }}
              >
                <ListItem alignItems="flex-start" id="list-item" sx={{}}>
                  <ListItemText
                    primary="Agile Methodology"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item" sx={{}}>
                  <ListItemText
                    primary="Scrum"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
              </List>
            </div>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <div id="skills-tab">
              <List
                sx={{
                  width: "100%",
                  maxWidth: 460,
                  bgcolor: "var(--background-color)",
                }}
              >
                <ListItem alignItems="flex-start" id="list-item" sx={{}}>
                  <ListItemText
                    primary="Object Oriented Programming"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item" sx={{}}>
                  <ListItemText
                    primary="Test Driven Development"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item" sx={{}}>
                  <ListItemAvatar>
                    <FontAwesomeIcon icon={faGitAlt} fontSize="48px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Git"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    <FontAwesomeIcon icon={faJira} fontSize="48px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Jira"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/1900px-Android_Studio_Icon_3.6.svg.png"
                      alt="as"
                      style={{ width: "48px" }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Android Studio"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    <FontAwesomeIcon icon={faFigma} fontSize="48px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Figma"
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      ml: 2,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    <img
                      src="https://i.pinimg.com/originals/9c/ea/ba/9ceaba69b7a9f89158ff953107978f3e.png"
                      alt="ps"
                      style={{ width: "48px" }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Adobe Photoshop"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start" id="list-item">
                  <ListItemAvatar>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/1024px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png"
                      alt="ms"
                      style={{ width: "48px" }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Microsoft Office 365"
                    primaryTypographyProps={{
                      fontSize: 20,
                      ml: 2,
                      fontFamily: "Sono",
                      fontWeight: "medium",
                      letterSpacing: 0,
                      py: 1.5,
                    }}
                  />
                </ListItem>
              </List>
            </div>
          </TabPanel>
        </Box>
      </Container>
    </div>
  );
}

export default Skills;
