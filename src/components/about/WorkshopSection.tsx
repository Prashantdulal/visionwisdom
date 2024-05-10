import styles from "./WorkshopSection.module.css";
import { Button, ButtonComponentType } from "@/components/ui/Button";
import style from "@/components/ui/Button.module.css"
import Image from "next/image";


export const WorkshopSection = () => {
  return (
    <section
      className={styles.workshopSection}
      aria-labelledby="workshop-title"
    >
      <div className={`even-columns container ${styles.workshopContainer}`}>
        <div>
          <header data-aos="fade-right">
            <span className={styles.preTitle}>Apply Fast</span>
            <h2 className={styles.title} id="workshop-title">
              Wide Range of Jobs Overseas
            </h2>
          </header>
          <p className={styles.workshopDetail} data-aos="fade-right">
          We provide safe, lucrative job opportunities across multiple countries. Join us for global career prospects with security and competitive salaries
          </p>

          <div data-aos="fade-right">
          <Button as={ButtonComponentType.LINK} href="/jobs" variant="lightSecondary">
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

        <div className={styles.workshopImage} data-aos="fade-left">
          <Image
            src="/about/workshop.jpg"
            alt="workshop"
            width={531}
            height={348.172}
          />
        </div>
      </div>
    </section>
  );
};
