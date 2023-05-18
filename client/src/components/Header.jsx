import { Link } from 'react-scroll'
import logo from '../blp-logo-bwc.png'
import logo2 from '../blp-logo.png'

const Header = () => {
  return (
    <div className="header-container">
      <nav id="main-menu">
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
              offset={-200}
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
              offset={-80}
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
              offset={-80}
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
              offset={-80}
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
              offset={-80}
              duration={500}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mobile-header">
        <img src={logo2} alt="logo" className="logo2"/>
        <button id="hamburger-menu">
          <nav id="sidebar-menu">
            <ul>
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
                  Contact
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
      </button>
    </div>
  </div>
  );
};

export default Header;
