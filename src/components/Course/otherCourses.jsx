import TeamSlider from "../Home/teamSlider";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CoursesProps } from "pages/Course";

export const CourseSlider = () => {
  const state = useContext(CoursesProps);
  return (
    <div className="course-slider__section">
      <div className="container">
        <h2 className="about-title">
          Check other courses <br />
          <span className="about-title__span">You may also like</span>
        </h2>
        <div className="a">
          <TeamSlider
            props={state.allCourses}
            count={2}
            page={"/courses/:id"}
          />
        </div>
        <div className="all-courses__wrap">
          <p className="all-courses__text">Do you want more courses?</p>
          <Link to="/courses" className="all-courses__btn gradient">
            View all courses
          </Link>
        </div>
      </div>
    </div>
  );
};
