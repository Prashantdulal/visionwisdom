import { PageHeader } from "@/components/layout/PageHeader";
import Head from "next/head";
import { CourseCard } from "@/components/courses/CourseCard";
import styles from "./courses.module.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { connectDatabase } from "@/utils/db";
import Course, { Jobs } from "@/models/Job";

const CoursesPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <>
      <Head>
        <title>
          Jobs | Vision Wisdom Recruitment
        </title>
      </Head>

      <Navbar />
      <PageHeader title="Jobs" />

      <section className={`container ${styles.courses}`}>
        <div className={`even-columns ${styles.coursesCards}`}>
          {props.courses.map((course: Jobs) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  await connectDatabase();

  const courses = (await Course.find()) as Jobs[];

  return {
    props: {
      courses: JSON.parse(JSON.stringify(courses)),
    },
  };
};

export default CoursesPage;
