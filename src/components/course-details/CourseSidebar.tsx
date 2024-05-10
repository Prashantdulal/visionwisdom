import styles from "./CourseSidebar.module.css";
import { Button } from "@/components/ui/Button";
import { Jobs } from "@/models/Job";
import { Icon, Icon24Hours,IconMoodSmile,IconMoneybag,IconHammer,IconMapPinHeart,IconClock,IconGenderDemiboy,IconGenderDemigirl } from "@tabler/icons-react";

export const CourseSidebar = (props: { course: Jobs }) => {
  return (
    <aside className={styles.courseSidebar}>
      <ul>


        <li>
          <span className={styles.statTitle}>
            <span className={styles.icon}>
            <IconMoodSmile/>
            </span>
           Job Title
          </span>
          <span>{props.course.title}</span>
        </li>
        <li>
          <span className={styles.statTitle}>
            <span className={styles.icon}>
            <IconHammer/>
            </span>
            Skill Sets
          </span>
          <span>{props.course.skillset}</span>
        </li>
        <li>
          <span className={styles.statTitle}>
            <span className={styles.icon}>
            <IconMapPinHeart/>
            </span>
            Country 
          </span>
          <span>{props.course.country}</span>
        </li>
        <li>
          <span className={styles.statTitle}>
            <span className={styles.icon}>
            <IconClock/>
            </span>
            Working Hours
          </span>
          <span>{props.course.time}</span>
        </li>
        <li>
          <span className={styles.statTitle}>
            <span className={styles.icon}>
            <IconGenderDemiboy/>
           <IconGenderDemigirl/>
            </span>
            Gender
          </span>
          <span>{props.course.gender}</span>
        </li>
        <li>
          <span className={styles.statTitle}>
            <span className={styles.icon}>
            <IconMoneybag/>
            </span>
            Salary
          </span>
          <span>{props.course.salary}</span>
        </li>
      </ul>

      {/*<li>*/}
      {/*  <span className={styles.statTitle}>*/}
      {/*    <span className={styles.icon}>*/}
      {/*      <svg*/}
      {/*        xmlns="http://www.w3.org/2000/svg"*/}
      {/*        className="icon icon-tabler icon-tabler-world"*/}
      {/*        width="14"*/}
      {/*        height="14"*/}
      {/*        viewBox="0 0 24 24"*/}
      {/*        strokeWidth="2"*/}
      {/*        stroke="currentColor"*/}
      {/*        fill="none"*/}
      {/*        strokeLinecap="round"*/}
      {/*        strokeLinejoin="round"*/}
      {/*      >*/}
      {/*        <path stroke="none" d="M0 0h24v24H0z" fill="none" />*/}
      {/*        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />*/}
      {/*        <path d="M3.6 9l16.8 0" />*/}
      {/*        <path d="M3.6 15l16.8 0" />*/}
      {/*        <path d="M11.5 3a17 17 0 0 0 0 18" />*/}
      {/*        <path d="M12.5 3a17 17 0 0 1 0 18" />*/}
      {/*      </svg>*/}
      {/*    </span>*/}
      {/*    Language*/}
      {/*  </span>*/}
      {/*  <span>English</span>*/}
      {/*</li>*/}






      <Button size="large" href="https://forms.google.com" target="_blank">
        Register
        <svg
          className="icon-tabler icon-tabler-arrow-right s-xcnQQNRdRv-M"
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
          <path
            d="M0 0h24v24H0z"
            fill="none"
            stroke="none"
            className="s-xcnQQNRdRv-M"
          />
          <line x1="5" x2="19" y1="12" y2="12" className="s-xcnQQNRdRv-M" />
          <line x1="13" x2="19" y1="18" y2="12" className="s-xcnQQNRdRv-M" />
          <line x1="13" x2="19" y1="6" y2="12" className="s-xcnQQNRdRv-M" />
        </svg>
      </Button>
    </aside>
  );
};
