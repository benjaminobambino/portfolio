import { Link } from 'react-scroll'
import logo from '../blp-logo.png'

const Header = () => {
  return (
    <nav>
      <ul className="header">
      <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            <img src={logo} alt="logo" className="logo"/>
          </Link>
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
            offset={-90}
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
            offset={-90}
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
            offset={-90}
            duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}>
            Connect
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
