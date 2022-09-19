import Hero from "../components/AboutUs/Hero";
import Statistics from "../components/AboutUs/Statistics";
import Values from "../components/AboutUs/Values";
import Directions from "../components/AboutUs/Directions";
import StudyingProcess from "../components/AboutUs/Studying";
import TeamAbout from "../components/AboutUs/Team";
import Companies from "../components/AboutUs/Companies";
import { Blog } from "../components/Home/blog";
import { Subscribe } from "../components/Home/subscribe";

export default function AboutUsPages() {
  return (
    <>
      <Hero />
      <Statistics />
      <Values />
      <Directions />
      <StudyingProcess />
      <TeamAbout />
      <Companies />
      <Blog />
      <Subscribe />
    </>
  );
}
