import { Link } from 'react-scroll'
import logo from '../blp-logo.png'

const Header = () => {
  return (
    <nav>
      <ul className="header">
      <img src={logo} alt="logo" className="logo"/>
        <li>
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Welcome
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}>
            Repertoire
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}>
            Resume
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}>
            Connect
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
