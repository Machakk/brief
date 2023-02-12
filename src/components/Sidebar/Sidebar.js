import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactCard,
  faHome,
  faLightbulb,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassename="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#d4d4e4" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassename="active"
          className="contact-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faStar} color="#d4d4e4" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassename="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faContactCard} color="#d4d4e4" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="/">
            <FontAwesomeIcon icon={faLinkedin} color="#d4d4e4" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="/">
            <FontAwesomeIcon icon={faGithub} color="#d4d4e4" />
          </a>
        </li>
      </ul>
      <p className="copy-right">© 2023 Machak</p>
    </div>
  );
};

export default Sidebar;
