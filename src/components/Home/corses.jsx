import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getCourses from "../../API/getCourses";

export const Corses = () => {
  const [courses, setCourses] = useState(null);
console.log(courses);
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
          <button
            className="button-outlined btn-courses btn-hover"
            type="button"
          >
            <Link to="/courses" className="link-orange">
              View all courses
            </Link>
          </button>
        </div>

        <ul className="couses-list">
        {courses &&
          courses.map((course, indx) => {
            if (indx === 7) {
              return null;
            }
            return (

          <li className="couses-list__item">
            <img
              src={course.profilePicture}
              alt="ff"
width='300'
              className="coach-img"
            />
            <div>
              <p className="course-item__name">{course.typeOfCourse}</p>
              <h3 className="course-item__text">
                {course.about}
              </h3>
              <p className="courses-detail">
                <span className="price">{course.price}</span>
                <span color=" var(--light-gray)">|</span>
                {course.name}
              </p>
            </div>
          </li>
      );
    })}
        </ul>
      </div>
    </div>
  );
};