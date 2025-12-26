import React, { useState } from "react";
import styles from "./Contacts.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for reaching out! Our tribe will contact you soon.");
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        <div className={styles.contactWrapper}>
          
          {/* LEFT SIDE: INFO */}
          <div className={styles.infoSide}>
            <h1 className={styles.title}>GET IN <span>TOUCH</span></h1>
            <p className={styles.subtitle}>
              Have questions? Our fitness experts are here to help you start your journey.
            </p>

            <div className={styles.details}>
              <div className={styles.infoCard}>
                <FaPhoneAlt className={styles.icon} />
                <div>
                  <h4>Call Us</h4>
                  <p>+91 84210 77717</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <FaEnvelope className={styles.icon} />
                <div>
                  <h4>Email Us</h4>
                  <p>digital@multifit.co.in</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <FaMapMarkerAlt className={styles.icon} />
                <div>
                  <h4>Visit Us</h4>
                  <p>Wadgaon Sheri, Pune, MH</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className={styles.formSide}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" name="name" placeholder="Full Name" 
                  required onChange={handleChange} 
                />
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="email" name="email" placeholder="Email Address" 
                  required onChange={handleChange} 
                />
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="tel" name="phone" placeholder="Phone Number" 
                  required onChange={handleChange} 
                />
              </div>
              <div className={styles.inputGroup}>
                <select name="subject" onChange={handleChange}>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Membership">Membership Plans</option>
                  <option value="Personal Training">Personal Training</option>
                  <option value="Franchise">Franchise Enquiry</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <textarea 
                  name="message" placeholder="How can we help you?" 
                  rows="5" required onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>
                SEND MESSAGE <FaPaperPlane />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;