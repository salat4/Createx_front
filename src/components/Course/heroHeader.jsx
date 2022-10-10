import { CoursesProps } from "pages/Course";
import { useContext } from "react";
import { Header } from "../header";
import { HeroCourse } from "./hero";

export const HeroHeader = () => {
  const state = useContext(CoursesProps);
  return (
    <div className="hero-heder__course__section">
      <Header />
      <HeroCourse state={state} />
    </div>
  );
};
