import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebookF, FaChevronUp } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      {/* CTA BAR */}
      <div className={styles.ctaBar}>
        <div className={styles.container}>
          <div className={styles.ctaFlex}>
            <h2>Call us Now! Get a 3 days free Membership trial</h2>
            <button className={styles.contactBtn}>CONTACT US</button>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className={styles.container}>
        <div className={styles.footerMain}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.logoWrapper}>
              {/* Replace with your actual M-Logo SVG or Image */}
              <div className={styles.mLogo}>G</div>
              <h1 className={styles.brandName}>GYMFIT</h1>
            </div>
            <div className={styles.socialIcons}>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaFacebookF /></a>
            </div>
          </div>

          {/* Info Column */}
          <div className={styles.linksCol}>
            <h6>INFO</h6>
            <nav className={styles.footerNav}>
              <NavLink to="/about">About us</NavLink>
              <NavLink to="/centers">Centers</NavLink>
              <NavLink to="/franchise-enquiry">Franchise Enquiry</NavLink>
              <NavLink to="/privacy">Privacy & Policy</NavLink>
              <NavLink to="/terms">Terms & Condition</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </nav>
          </div>

          {/* Contact Column */}
          <div className={styles.linksCol}>
            <h6>CONTACT US</h6>
            <p className={styles.contactInfo}>+91 84210 77717</p>
            <p className={styles.contactInfo}>digital@multifit.co.in</p>
          </div>

          {/* Find Us Column */}
          <div className={styles.linksCol}>
            <h6>FIND US</h6>
            <p className={styles.address}>
              Besides LSBI, Badminton Court, near <br />
              Nyati Enchante Society, behind F <br />
              Residency, Digambar Nagar, Wadgaon <br />
              Sheri, Pune, Maharashtra 411014
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>© 2023 — Copyright</div>
          <button className={styles.backToTop} onClick={scrollToTop}>
            <FaChevronUp /> BACK TO TOP
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;