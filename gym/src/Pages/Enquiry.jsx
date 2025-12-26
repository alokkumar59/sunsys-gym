import React, { useState } from "react";
import styles from "./Enquiry.module.css";
import { FaCheckCircle, FaUser, FaPhone, FaMapMarkerAlt, FaDumbbell } from "react-icons/fa";

const Enquiry = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.successWrapper}>
        <FaCheckCircle className={styles.successIcon} />
        <h1>ENQUIRY RECEIVED!</h1>
        <p>One of our fitness consultants will call you within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className={styles.backBtn}>SEND ANOTHER</button>
      </div>
    );
  }

  return (
    <div className={styles.enquiryPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>START YOUR <span>TRANSFORMATION</span></h1>
          <p>Fill out the form below to book your 3-day free trial or ask about our memberships.</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.enquiryForm}>
          <div className={styles.grid}>
            {/* Personal Details */}
            <div className={styles.inputBox}>
              <label><FaUser /> Full Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className={styles.inputBox}>
              <label><FaPhone /> Phone Number</label>
              <input type="tel" placeholder="Enter mobile number" required />
            </div>

            {/* Selection Details */}
            <div className={styles.inputBox}>
              <label><FaMapMarkerAlt /> Preferred Center</label>
              <select required>
                <option value="">Select a Location</option>
                <option value="pune">Wadgaon Sheri, Pune</option>
                <option value="mumbai">Andheri, Mumbai</option>
                <option value="bangalore">Indiranagar, Bangalore</option>
              </select>
            </div>

            <div className={styles.inputBox}>
              <label><FaDumbbell /> Fitness Goal</label>
              <select required>
                <option value="">Select your goal</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="functional">Functional Fitness</option>
                <option value="general">General Wellness</option>
              </select>
            </div>
          </div>

          <div className={styles.textAreaBox}>
            <label>Any specific questions? (Optional)</label>
            <textarea placeholder="Tell us more about what you're looking for..."></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>BOOK MY FREE TRIAL</button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;