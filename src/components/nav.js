import { useRef } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav.css";
import routes from "../routes/routes";
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import res from '../files/ssres.pdf';
import { Link } from "react-router-dom";

function Nav() {


  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

const setDarkMode = () =>{
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme","dark");
}
const setLightMode = () => {
  document.querySelector("body").setAttribute("data-theme", "light");
  localStorage.setItem("selectedTheme", "light");
};

const selectedTheme = localStorage.getItem("selectedTheme");

if(selectedTheme==="dark"){
    setDarkMode();
}

const toggleTheme = (e)=>{
    if(e.target.checked){
        setDarkMode();
    } else{
        setLightMode();
    }
}
  return (
    <div>
      <header>
        <div id="logo-section">
          <h2 title="Subham" className="logo-main">
            <a href={"/"} className="logo-link">
              {" "}
              &#60;subham.sharma/&#62;
            </a>
          </h2>
        </div>
        <nav ref={navRef}>
          {routes
            .filter((route) => route.name)
            .map((route) => (
              <a className="routes-link" href={route.path}>
                {route.name}
              </a>
            ))}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div id="social-icons" className="nav-section">
            <a
              href="https://www.linkedin.com/in/subham-sharma-137985128/"
              target="_blank"
            >
              {/* <FontAwesomeIcon
                className="social"
                icon={faLinkedinIn}
                href="#"
              /> */}
              <i class="bx bxl-linkedin" id="social"></i>
            </a>
            <a href="https://github.com/sharmasubham22" target="_blank">
              <i class="bx bxl-github" id="social"></i>
              {/* <FontAwesomeIcon className="social" icon={faGithub} /> */}
            </a>
            <a href="https://twitter.com/subh_sharma22" target="_blank">
              <i class="bx bxl-twitter" id="social"></i>
              {/* <FontAwesomeIcon className="social" icon={faTwitter} /> */}
            </a>
          </div>
          <div id="resume" className="nav-section">
            <a href={res} target="_blank">
              Resume
            </a>
          </div>
          <div className="dark">
            <input
              type="checkbox"
              id="dark-mode"
              onChange={toggleTheme}
              defaultChecked={selectedTheme === "dark"}
            />
            <label for="dark-mode"></label>
          </div>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <i class="bx bx-menu-alt-right"></i>
        </button>
      </header>
    </div>
  );
}

export default Nav;
