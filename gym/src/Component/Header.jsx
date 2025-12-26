import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../src/assets/images/Gym.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}
        <NavLink to="/" className={styles.logo}>
          <img src={logo} alt="Gym Logo" />
        </NavLink>

        {/* Navigation */}
        <nav className={styles.nav}>
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink to="/centers">CENTERS</NavLink>
          <NavLink to="/franchise-enquiry">FRANCHISE ENQUIRY</NavLink>
          <NavLink to="/contact">CONTACT US</NavLink>
          <NavLink to="/enquiry" className={styles.enquiry}>
            ENQUIRY
          </NavLink>
        </nav>

      </div>
    </header>
  );
};

export default Header;
