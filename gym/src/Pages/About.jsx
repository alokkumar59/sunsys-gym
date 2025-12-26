import React from "react";
import styles from "./About.module.css";
import aboutHero from "../../src/assets/images/hero.png"; // Use a high-quality gym action shot
import { FaUserFriends, FaFlask, FaDumbbell, FaHeartbeat } from "react-icons/fa";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* SECTION 1: HERO */}
      <section className={styles.hero} style={{ backgroundImage: `url(${aboutHero})` }}>
        <div className={styles.overlay}>
          <div className={styles.container}>
            <h1>BEYOND THE <br /><span>MACHINES</span></h1>
            <p>We don't just use machines; we build them.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PHILOSOPHY */}
      <section className={styles.philosophy}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.textContent}>
              <span className={styles.tag}>#THEMULTIFITWAY</span>
              <h2>EXPERIENCE THE SCIENCE OF FITNESS</h2>
              <p>
                MultiFit is India's largest Functional Fitness & MMA studio brand. 
                We believe that fitness should be fun, engaging, and above all, 
                effective. Our approach moves away from traditional boring 
                treadmills and focuses on natural human movement.
              </p>
              <p>
                Founded on the pillars of <strong>Movement, Mobility, and Community</strong>, 
                we provide a platform where athletes and beginners alike can 
                push their boundaries in an environment that feels like home.
              </p>
            </div>
            <div className={styles.statBox}>
              <div className={styles.stat}>
                <h3>15+</h3>
                <p>Centers Across India</p>
              </div>
              <div className={styles.stat}>
                <h3>5000+</h3>
                <p>Happy Members</p>
              </div>
              <div className={styles.stat}>
                <h3>100+</h3>
                <p>Expert Coaches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE PILLARS */}
      <section className={styles.pillars}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>OUR <span>CORE</span> PILLARS</h2>
          <div className={styles.pillarGrid}>
            <div className={styles.pillarCard}>
              <FaFlask className={styles.pillarIcon} />
              <h4>SCIENCE BASED</h4>
              <p>Every workout is backed by sports science to ensure maximum results and zero injuries.</p>
            </div>
            <div className={styles.pillarCard}>
              <FaUserFriends className={styles.pillarIcon} />
              <h4>COMMUNITY FIRST</h4>
              <p>You’re not just a member; you’re part of a tribe that motivates and supports you.</p>
            </div>
            <div className={styles.pillarCard}>
              <FaDumbbell className={styles.pillarIcon} />
              <h4>FUNCTIONAL FLOW</h4>
              <p>Workouts designed to help you move better in real-life situations, not just the gym.</p>
            </div>
            <div className={styles.pillarCard}>
              <FaHeartbeat className={styles.pillarIcon} />
              <h4>HOLISTIC HEALTH</h4>
              <p>We focus on mental grit, nutritional balance, and physical strength simultaneously.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;