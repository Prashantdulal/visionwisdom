import { PageHeader } from "@/components/layout/PageHeader";
import Head from "next/head";
import { AboutSection } from "@/components/home/AboutSection";
import { OfferSection } from "@/components/about/OfferSection";
import { WorkshopSection } from "@/components/about/WorkshopSection";
import { TeamSection } from "@/components/about/TeamSection";
import { UpcomingEventSection } from "@/components/about/UpcomingEventSection";
import { AwardSection } from "@/components/about/AwardSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FeaturesSection } from "@/components/home/FeaturesSection";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Vision Wisdom Recruitment</title>
      </Head>

      <Navbar />

      <PageHeader title="About" />
      <AboutSection />
      <OfferSection />
      {/* <WorkshopSection /> */}
      <FeaturesSection/>
      {/* <TeamSection /> */}
      {/* <UpcomingEventSection /> */}
      {/* <AwardSection /> */}

      <Footer />
    </>
  );
};

export default About;
