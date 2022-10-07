import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getCourses from "../../API/getCourses";
import getColor from "../getColor";
import {scrollUp} from "../scroll" 


export const Corses = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    async function FetchCourses() {
      const course = await getCourses();
      setCourses(course);
    }
    FetchCourses();
  }, []);

  return (
    <div className="corses-section">
      <div className="container">
        <div className="info-course-section">
          <h2 className="text">
            Ready to learn?
            <br />
            <span className="title">Featured Courses</span>
          </h2>

          <Link
            to="/courses"
            className="button-outlined btn-courses btn-hover "
            onClick={scrollUp}
          >
            View all courses
          </Link>
        </div>

        <ul className="couses-list">
          {courses &&
            courses.map((course, indx) => {
              if (indx === 7) {
                return null;
              }
              return (
                <li key={course._id} className="couses-list__item">
                  <Link
                    className="couses-list__item__link"
                    to={`/courses/${course._id}`}
                    state={course}
                    onClick={scrollUp}
                  >
                    <img
                      src={course.profilePicture}
                      alt="Coatch"
                      width="300"
                      className="coach-img img_border"
                    />
                    <div>
                      <p
                        className="course-item__name"
                        style={{
                          backgroundColor: getColor(course.typeOfCourse),
                        }}
                      >
                        {course.typeOfCourse}
                      </p>

                      <h3 className="course-item__text">{course.about}</h3>
                      <p className="courses-detail">
                        <span className="price">{course.price}</span>
                        <span color=" var(--light-gray)">|</span>
                        {course.name}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
