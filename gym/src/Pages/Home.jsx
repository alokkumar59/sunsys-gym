import React from "react";
import styles from "./Home.module.css";
import heroImg from "../../src/assets/images/hero.png"; 
import whyImg from "../../src/assets/images/why.png";

const services = [
  { name: "Functional Training", img: "../../src/assets/images/functional.png" },
  { name: "Strength Conditioning", img: "../../src/assets/images/strength.png" },
  { name: "MMA Training", img: "../../src/assets/images/mma.png" },
  { name: "Calisthenics", img: "../../src/assets/images/calisthenics.png" },
  { name: "Boxing", img: "../../src/assets/images/boxing.png" },
  { name: "Yoga", img: "../../src/assets/images/yoga.png" },
  { name: "Dance Fitness", img: "../../src/assets/images/dance.png" },
  { name: "Weekend Masterclass", img: "../../src/assets/images/masterclass.png" },
  { name: "Group Training (HIIT)", img: "../../src/assets/images/hiit.png" },
];

const Home = () => {
  return (
    <main className={styles.home}>
      {/* HERO */}
      <section className={styles.hero} style={{ backgroundImage: `url(${heroImg})` }}>
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <h1 className={styles.mainTitle}>
              INDIA'S <br />
              <span>HAPPIEST</span> <br />
              FITNESS COMMUNITY
            </h1>
            <button className={styles.mainCta}>JOIN THE TRIBE</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutTag}>#IamGymFit</div>
          <h2>EXPERIENCE THE SCIENCE OF FITNESS</h2>
          <p>
            At GymFit, we don't just use machines; we build them. Our 
            Functional Training philosophy focuses on movement, 
            mobility, and community spirit.
          </p>
        </div>
      </section>

    {/* SERVICES SECTION */}
    <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>OUR <span>SERVICES</span></h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.cardImageWrapper}>
                  <img src={service.img} alt={service.name} className={styles.serviceImg} />
                  <div className={styles.cardIndex}>0{index + 1}</div>
                </div>
                <div className={styles.serviceInfo}>
                  <h3>{service.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyWrapper}>
            <div className={styles.whyImageSide}>
              <img src={whyImg} alt="Why GymFit" />
            </div>
            <div className={styles.whyTextSide}>
              <h3>WHY MULTIFIT?</h3>
              <h2>SMALL STEPS, <br /> BIG CHANGES</h2>
              <p>
                We believe in the power of 'The MultiFit Way'. Our approach 
                combines high-intensity training with functional movements.
              </p>
              <button className={styles.outlineBtn}>EXPLORE MORE</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;