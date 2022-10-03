import { useEffect, useState } from "react";
import TeamSlider from "../Home/teamSlider";
import getCourses from "../../API/getCourses";
import { Link } from "react-router-dom";

export const CourseSlider = () => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function FetchAbout() {
      const course = await getCourses();
      setCourse(course);
    }
    FetchAbout();
  }, []);

  return (
    <div className="course-slider__section">
      <div className="container">
        <h2 className="about-title">
          Check other courses <br />
          <span className="about-title__span">You may also like</span>
        </h2>
        <div className="a">
          <TeamSlider props={course} count={2} page={"/courses/:id"} />
        </div>
        <div className="all-courses__wrap">
          <p className="all-courses__text">Do you want more courses?</p>
          <Link to="/courses" className="all-courses__btn gradient">View all courses</Link>
        </div>
      </div>
    </div>
  );
};
