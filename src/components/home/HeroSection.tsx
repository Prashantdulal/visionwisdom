import styles from "./HeroSection.module.css";
import { Button } from "@/components/ui/Button";


import { ButtonComponentType } from "@/components/ui/Button"

import Image from "next/image";

export const HeroSection = () => {
  return (
    <section aria-labelledby="hero-title" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer} even-columns`}>
        <div>
          <header>
            <span
              className={` color-accent ${styles.preTitle}`}
              data-aos="fade-up"
            >
              Your Confidence, Our Foundation.
            </span>
            <h1
              className={styles.title}
              data-aos="fade-up"
              data-aos-delay="150"
              id="hero-title"
            >
            Wisdom in Recruitment, Vision in Results: Choose Vision Wisdom
            </h1>
          </header>
          <p className={styles.caption} data-aos="fade-up" data-aos-delay="300">
          We&apos;re the go-to choice for manpower needs, trusted and respected throughout the industry
          </p>

          <div data-aos="fade-up" data-aos-delay="450">
            <Button as={ButtonComponentType.LINK} href="/jobs">
              <span> Apply Now</span>
              <svg
                className="icon icon-tabler icon-tabler-arrow-right"
                fill="none"
                height="18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                <line x1="5" x2="19" y1="12" y2="12" />
                <line x1="13" x2="19" y1="18" y2="12" />
                <line x1="13" x2="19" y1="6" y2="12" />
              </svg>
            </Button>
          </div>
        </div>
        <div className={styles.rightImages}>
          <Image
            alt="Girl thumbchecking"
            className={styles.girlImage}
            data-aos="fade-left"
            data-aos-delay="450"
            width={536.047}
            height={651.188}
            src="/home/hero2.jpeg"
          />
    
        </div>
        <div className={styles.rightImages}>
          <Image
            alt="Girl thumbchecking"
            className={styles.girlImage2}
            data-aos="fade-left"
            data-aos-delay="450"
            width={536.047}
            height={651.188}
            src="/home/hero.jpeg"
          />
    
        </div>
      </div>

      <div>
     
   
      </div>
    </section>
  );
};
