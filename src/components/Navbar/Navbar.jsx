import PropTypes from 'prop-types';
import { 
  faUser, 
  faBriefcase, 
  faCode, 
  faEnvelope ,faTasks 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../Lang/LanguageContext';

import './Navbar.scss';
import "../../style/themes.scss";

function Navbar({ setActiveSection }) {
  const { t } = useLanguage();
  const navItems = [
    { id: 'about', title: t.about, icon: faUser },
    { id: 'experience', title: t.experience, icon: faBriefcase },
    { id: 'projects', title: t.projects, icon: faTasks  },
    { id: 'skills', title: t.skills, icon: faCode },
    { id: 'contact', title: t.contact, icon: faEnvelope },
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
            href={`#${item.id}`} 
            role="link" 
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
