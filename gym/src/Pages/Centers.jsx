import React, { useState } from "react";
import styles from "./Centers.module.css";
import { FaMapMarkerAlt, FaDumbbell, FaParking, FaShower } from "react-icons/fa";

const centersData = [
  {
    id: 1,
    name: "Wadgaon Sheri",
    city: "Pune",
    address: "Besides LSBI, Badminton Court, near Nyati Enchante Society, Pune 411014",
    phone: "+91 84210 77717",
    image: "../../src/assets/images/pune-center.jpg",
    amenities: ["MMA", "Parking", "Showers", "Steam"]
  },
  {
    id: 2,
    name: "Indiranagar",
    city: "Bangalore",
    address: "100 Feet Rd, near Doopanahalli, Indiranagar, Bengaluru 560038",
    phone: "+91 90000 11111",
    image: "../../src/assets/images/blr-center.jpg",
    amenities: ["Crossfit", "Cafe", "Showers", "Valet"]
  },
  {
    id: 3,
    name: "Andheri West",
    city: "Mumbai",
    address: "Link Road, Near Infinity Mall, Andheri West, Mumbai 400053",
    phone: "+91 90000 22222",
    image: "../../src/assets/images/mumbai-center.jpg",
    amenities: ["Boxing Ring", "Parking", "Showers", "DJ"]
  }
];

const Centers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCenters = centersData.filter(center =>
    center.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.centersPage}>
      {/* HEADER SECTION */}
      <section className={styles.header}>
        <div className={styles.container}>
          <h1>OUR <span>LOCATIONS</span></h1>
          <div className={styles.searchBar}>
            <input 
              type="text" 
              placeholder="Search by city or center name..." 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* CENTERS GRID */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.centersGrid}>
            {filteredCenters.map((center) => (
              <div key={center.id} className={styles.centerCard}>
                <div className={styles.imageWrapper}>
                  <img src={center.image} alt={center.name} />
                  <div className={styles.cityBadge}>{center.city}</div>
                </div>
                <div className={styles.details}>
                  <h3>{center.name}</h3>
                  <p className={styles.address}><FaMapMarkerAlt /> {center.address}</p>
                  
                  <div className={styles.amenities}>
                    {center.amenities.map((item, index) => (
                      <span key={index} className={styles.amenityTag}>{item}</span>
                    ))}
                  </div>

                  <div className={styles.actions}>
                    <a href={`tel:${center.phone.replace(/\s/g, '')}`} className={styles.callBtn}>CALL NOW</a>
                    <button className={styles.mapBtn}>VIEW ON MAP</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredCenters.length === 0 && (
            <p className={styles.noResults}>No centers found. Try searching for another city!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Centers;