import styles from "./FeaturesSection.module.css";
import { Idea, Journey, Money, Resources } from "@/assets/icons";
import Image from "next/image";

export const FeaturesSection = () => {
  return (
    <section
      className={styles.featuresSection}
      aria-labelledby="features-title"
    >
      <div className={`container ${styles.featuresContainer} even-columns`}>
        <div className={styles.image} data-aos="fade-right">
          <Image
            src="/home/features-image.jpg"
            alt="Features"
            width={450}
            height={590}
          />
        </div>
        <div>
          <header data-aos="fade-left">
            <span className={`color-accent ${styles.preTitle}`}>
              Who we are
            </span>
            <h2 className={styles.title} id="features-title">
            Offering the Best Career Opportunities
            </h2>
          </header>

          <ul className={styles.services}>
            <li
              className={styles.service}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={styles.serviceIcon}>
                <Idea />
              </div>
              <div>
                <h3 className={styles.serviceTitle}>
                Safe and Reliable Overseas Employment
                </h3>
                <p>
                Your safety and security are our top priorities. We meticulously screen and vet all job opportunities and employers to ensure compliance with international labor standards and regulations. Rest assured, with VisionWisdom Recruitment, your overseas employment experience is safe and reliable.
                </p>
              </div>
            </li>

            <li
              className={styles.service}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={styles.serviceIcon}>
                <Money />
              </div>
              <div>
                <h3 className={styles.serviceTitle}>Secure Lucrative Income Abroad</h3>
                <p>
                Unlock the potential for a prosperous career with our premium overseas job placements. We specialize in connecting skilled professionals with high-paying positions in reputable companies worldwide.
                </p>
              </div>
            </li>

            <li
              className={styles.service}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className={styles.serviceIcon}>
                <Journey />
              </div>
              <div>
                <h3 className={styles.serviceTitle}>
                Trusted Partner for Global Opportunities
                </h3>
                <p>
                With Vision Wisdom Recruitment by your side, access a world of career possibilities. We collaborate with a vast network of esteemed employers across diverse industries and geographies, providing you with exclusive access to international job opportunities tailored to your skills and expertise.
                </p>
              </div>
            </li>

            <li
              className={styles.service}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className={styles.serviceIcon}>
                <Resources />
              </div>
              <div>
                <h3 className={styles.serviceTitle}>
                Personalized Support Every Step of the Way
                </h3>
                <p>
                From initial consultation to post-placement assistance, our dedicated team is here to support you throughout your overseas employment journey. Whether it&apos;s visa processing, relocation logistics, or cultural adaptation, count on us to provide personalized guidance and support to ensure a smooth and successful transition.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
