import PropTypes from 'prop-types';
import { 
  faUser, 
  faBriefcase, 
  faCode, 
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import './Navbar.scss';
import "../../style/themes.scss";

function Navbar({ setActiveSection }) {
  const navItems = [
    { id: 'about', title: 'About', icon: faUser },
    { id: 'experience', title: 'Experience', icon: faBriefcase },
    { id: 'skills', title: 'Skills', icon: faCode },
    { id: 'contact', title: 'Contact', icon: faEnvelope },
  ];

  return (
    <nav className="navbar">
      <div className="navContent">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navItem"
            activeClass="active"
            onClick={() => setActiveSection(item.id)}
          >
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: 'spring' }}
            >
              <FontAwesomeIcon icon={item.icon} className="icon" />
            </motion.div>
            <span className="text">{item.title}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};

export default Navbar;
