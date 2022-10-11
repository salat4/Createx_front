import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getCourses } from "../API";
import { HeroHeader } from "../components/Course/heroHeader";
import { AboutCourse } from "../components/Course/about";
import { Curator } from "../components/Course/curator";
import { CourseInfo } from "../components/Course/info";
import { ReviewSider } from "../components/Courses/reviewSlider";
import { DiscountForm } from "../components/Course/discounfForm";
import { CourseSlider } from "../components/Course/otherCourses";
import PageNotFound from "./NotFound";

export const CoursesProps = React.createContext(null);

export default function Course() {
  const [aboutCourse, setAboutCourse] = useState(null);
  const location = useLocation();
  const { state } = location;
  const params = useParams();

  useEffect(() => {
    if (!state) {
      getAllCourses();
      async function getAllCourses() {
        try {
          const allCourses = await getCourses(params.id);
          const course = allCourses.find((el) => el._id === params.id);
          setAboutCourse({
            allCourses,
            course,
            error: false,
          });
        } catch (error) {
          setAboutCourse({
            error: true,
          });
        }
      }
    } else {
      setAboutCourse({
        course: state[0],
        allCourses: state[1],
      });
    }
  }, [state, params.id]);

  return (
    <CoursesProps.Provider value={aboutCourse}>
      {aboutCourse && !aboutCourse.error && (
        <>
          <HeroHeader />
          <AboutCourse />
          <Curator />
          <CourseInfo />
          <ReviewSider />
          <DiscountForm />
          <CourseSlider />
        </>
      )}
      {aboutCourse && aboutCourse.error && (
        <PageNotFound title="Course is not found" />
      )}
    </CoursesProps.Provider>
  );
}
