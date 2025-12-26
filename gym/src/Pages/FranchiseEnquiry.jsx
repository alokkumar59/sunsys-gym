import React, { useState } from "react";
import styles from "./FranchiseEnquiry.module.css";
import { FaChartLine, FaUsers, FaGlobe, FaCertificate } from "react-icons/fa";

const FranchiseEnquiry = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    investmentCapacity: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.franchisePage}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>PARTNER WITH <br /><span>INDIA'S FASTEST GROWING</span> <br />FITNESS BRAND</h1>
          <p>Join the movement that is redefining the fitness industry through science and community.</p>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <FaChartLine className={styles.statIcon} />
              <h4>Proven ROI</h4>
              <p>High-yield business model with a rapid break-even period.</p>
            </div>
            <div className={styles.statItem}>
              <FaCertificate className={styles.statIcon} />
              <h4>360° Support</h4>
              <p>From site selection to staff training and marketing.</p>
            </div>
            <div className={styles.statItem}>
              <FaUsers className={styles.statIcon} />
              <h4>Strong Tribe</h4>
              <p>Access to a loyal community of 5000+ fitness enthusiasts.</p>
            </div>
            <div className={styles.statItem}>
              <FaGlobe className={styles.statIcon} />
              <h4>Scalable Model</h4>
              <p>Modular gym setups adaptable to various city tiers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formCard}>
            <h2>FRANCHISE <span>APPLICATION</span></h2>
            <p>Please fill out the form below and our expansion team will get in touch.</p>
            
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
                <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
              </div>

              <div className={styles.formGroup}>
                <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
                <input type="text" name="city" placeholder="Target City for Franchise" required onChange={handleChange} />
              </div>

              <div className={styles.formGroup}>
                <select name="investmentCapacity" required onChange={handleChange}>
                  <option value="">Investment Capacity</option>
                  <option value="50L-1Cr">₹50 Lakhs - ₹1 Crore</option>
                  <option value="1Cr-2Cr">₹1 Crore - ₹2 Crores</option>
                  <option value="2Cr+">Above ₹2 Crores</option>
                </select>
                <select name="experience" required onChange={handleChange}>
                  <option value="">Business Experience</option>
                  <option value="none">No prior experience</option>
                  <option value="fitness">Fitness Industry experience</option>
                  <option value="other">Other Business owner</option>
                </select>
              </div>

              <textarea name="message" placeholder="Tell us about your background and why you want to join MultiFit" rows="5"></textarea>
              
              <button type="submit" className={styles.submitBtn}>SUBMIT INTEREST</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FranchiseEnquiry;