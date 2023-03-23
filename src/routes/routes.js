import Home from "../views/Home/home";
import About from "../views/About/about";
import Projects from "../views/Projects/projects";
import Work from "../views/Work/work";
import Skills from "../views/Skills/skills";
import Contact from "../views/Contact/contact";

const routes = [
  {
    name: "About",
    path: "/",
    element: <Home />,
  },
  {
    name: "Projects",
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
