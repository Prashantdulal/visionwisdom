import styles from "./CourseContent.module.css";
import { Jobs } from "@/models/Job";
import { TypographyStylesProvider } from "@mantine/core";

export const CourseContent = (props: { course: Jobs }) => {
  return (
    <section>
      <header>
        <h1 className={`color-heading ${styles.courseTitle}`}>
          {props.course.title}
        </h1>
      </header>

      <TypographyStylesProvider>
        <article
          className={styles.article}
          dangerouslySetInnerHTML={{ __html: props.course.content }}
        ></article>
      </TypographyStylesProvider>
    </section>
  );
};
