import styles from "./OfferSection.module.css";
import Image from "next/image";

export const OfferSection = () => {
  return (
    <section className={styles.offersSection} aria-labelledby="events-title">
      <div className={`container ${styles.offersContainer}`}>
        <header>
          <h2 className={styles.title} id="offers-title">
            <span
              className={`color-accent ${styles.preTitle}`}
              data-aos="fade-up"
            >
              
            </span>
            <span
              className={`color-heading ${styles.mainTitle}`}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Our Mission, Vision And Values
            </span>
          </h2>
        </header>

        <ul className={styles.offers}>
          <li
            className={`${styles.offer} ${styles.offer01}`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className={styles.offerIcon}>
              <Image src="/about/offer-01.png" alt="" height={40} width={40} />
            </div>
            <h3 className={styles.offerTitle}>Mission</h3>
            <p>
To empower individuals worldwide by providing safe, reliable, and lucrative overseas employment opportunities, enabling them to achieve their career aspirations and secure a better future for themselves and their families.
            </p>
          </li>

          <li
            className={`${styles.offer} ${styles.offer02}`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className={styles.offerIcon}>
              <Image src="/about/offer-02.png" alt="" height={40} width={40} />
            </div>
            <h3 className={styles.offerTitle}>Vision</h3>
            <p>
            To be the leading global provider of manpower and recruitment services, renowned for our unwavering commitment to safety, integrity, and excellence in facilitating rewarding international careers for our clients.
            </p>
          </li>

          <li
            className={`${styles.offer} ${styles.offer03}`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className={styles.offerIcon}>
              <Image src="/about/offer-03.png" alt="" height={40} width={40} />
            </div>
            <h3 className={styles.offerTitle}>Values</h3>
            <p>
            Safety is our foremost priority, ensuring the well-being of our clients at all times. We are committed to unwavering reliability, providing trustworthy and dependable services consistently.
            </p>
          </li>

         
        </ul>
      </div>
    </section>
  );
};
