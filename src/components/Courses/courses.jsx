import { useEffect, useState } from "react";
import Svg from "../../images/symbol-defs.svg";
import getCourses from "../../API/getCourses";

export const Courses = () => {
  const [courses, setCourses] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function FetchCourses() {
      const course = await getCourses();
      setCourses(course);
    }
    FetchCourses();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="courses-section">
      <div className="container">
        <h2 className="text courses-section-title">
          Enjoy your studying!
          <br />
          <span className="title">Our online courses</span>
        </h2>

        <div>
          <ul>
            <li>
              <button>
                All
                <span></span>
              </button>
            </li>
            <li>
              <button>
                Marketing
                <span></span>
              </button>
            </li>
            <li>
              <button>
                Management
                <span></span>
              </button>
            </li>
            <li>
              <button>
                HR & Recruting
                <span></span>
              </button>
            </li>
            <li>
              <button>
                Design
                <span></span>
              </button>
            </li>
            <li>
              <button>
                Development
                <span></span>
              </button>
            </li>
          </ul>

          <form className="blogs__hero__menu__category__form">
            <input
              placeholder="Search blog..."
              className="blogs__hero__menu__category__search"
              onChange={handleSearch}
            ></input>
            <svg
              width="16"
              height="16"
              className="blogs__hero__menu__category__search__icon"
            >
              <use href={`${Svg}#icon-search`}></use>
            </svg>
          </form>
        </div>
        <ul className="courses-list">
          {courses &&
            courses.map((course) => {
              return (
                <li key={course._id} className="courses-list__item">
                  <img
                    src={course.profilePicture}
                    alt="ff"
                    width="390"
                    className="coach-img"
                  />
                  <div className="courses-list__item__text-wrap">
                    {course.typeOfCourse === "Management" && (
                      <p className="course-item__name blue">
                        {course.typeOfCourse}
                      </p>
                    )}
                    {course.typeOfCourse === "HR & Recruting" && (
                      <p className="course-item__name yellow">
                        {course.typeOfCourse}
                      </p>
                    )}
                    {course.typeOfCourse === "Design" && (
                      <p className="course-item__name pink">
                        {course.typeOfCourse}
                      </p>
                    )}
                    {course.typeOfCourse === "Marketing" && (
                      <p className="course-item__name turquoise">
                        {course.typeOfCourse}
                      </p>
                    )}
                    {course.typeOfCourse === "Development" && (
                      <p className="course-item__name purple">
                        {course.typeOfCourse}
                      </p>
                    )}

                    <h3 className="course-item__text">{course.about}</h3>
                    <p className="courses-detail">
                      <span className="price">{course.price}</span>
                      <span color="$ight-gray">|</span>
                      {course.name}
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
        <div></div>
      </div>
    </div>
  );
};
