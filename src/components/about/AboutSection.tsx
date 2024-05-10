import styles from "./AboutSection.module.css";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className={styles.aboutSection} aria-labelledby="about-title">
      <div className={`container even-columns ${styles.aboutContainer}`}>
        <div
          className={styles.images}
          data-aos-delay="50"
          data-aos="fade-right"
        >
          <div className={styles.sessionStats}>
            <strong className={`color-accent ${styles.statTitle}`}>100+</strong>
            <p className={`color-heading ${styles.statDetails}`}>
              Clients
            </p>
          </div>
          <div className={styles.upimage}>
          <Image src="/about/aboutimage.jpeg" className={styles.main2} alt="About" height={460} width={460} />
          </div>
          <div className={styles.aboutBottomImage}>
            <Image
              src="/about/aboutimagebottom.jpeg"
              className={styles.main}
              alt=""
              height={265.5}
              width={265.5}
            />
            <div className={styles.circleImage} />
          </div>
        </div>
        <div className={styles.aboutDescription}>
          <header>
            <span
              className={`color-accent ${styles.preTitle}`}
              data-aos="fade-up"
            >
              About us
            </span>
            <h2
              className={styles.title}
              id="about-title"
              data-aos="fade-up"
              data-aos-delay="150"
            >
               Building Futures, One Opportunity at a Time.
            </h2>
          </header>

          <p className={styles.caption} data-aos="fade-up" data-aos-delay="300">
            We specialize in providing top-tier staffing services tailored to meet the diverse needs of businesses across various industries.

            With a commitment to excellence and a deep understanding of the evolving workforce landscape, we offer comprehensive staffing solutions that encompass recruitment, training, and deployment of skilled professionals.
          </p>

          <h3
            className={`color-heading ${styles.featuresTitle}`}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            People Love To Work With us
          </h3>

          <div
            className={`even-columns ${styles.features}`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div>
              <h4 className={styles.featureStat}>100%</h4>
              <div>
                <p>Efficient, Safe and Relaible </p>
              </div>
            </div>

            <div>
              <h4 className={styles.featureStat} data-aos="fade-up">
                9/10
              </h4>
              <div>
                <p>9/10 clients reported positive reviews.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
