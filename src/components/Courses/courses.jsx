import { useEffect, useState } from "react";
import Svg from "../../images/symbol-defs.svg";
import getCourses from "../../API/getCourses";
import { Link } from "react-router-dom";

export const Courses = () => {
  const [courses, setCourses] = useState(null);
  const [typeCourses, setTypeCourses] = useState(null);
  const [sizeOb, setSizeOb] = useState();
  const [sizeMarketing, setSizeMarketing] = useState(0);
  const [sizeManagement, setSizeManagement] = useState(0);
  const [sizeHR, setSizeHR] = useState(0);
  const [sizeDesign, setSizeDesign] = useState(0);
  const [sizeDev, setSizeDev] = useState();

  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");

  useEffect(() => {
    const marketingArr = [];
    const managementArr = [];
    const hrArr = [];
    const designgArr = [];
    const developmentArr = [];

    if (courses) {
      const objSize = Object.keys(courses).length;
      setSizeOb(objSize)
      courses.map((c) => {
        if (c.typeOfCourse === "Marketing") {
          marketingArr.push(c);
          setSizeMarketing( marketingArr.length);
        }

        if (c.typeOfCourse === "Management") {
          managementArr.push(c);
          setSizeManagement(managementArr.length);
        }

        if (c.typeOfCourse === "HR & Recruting") {
          hrArr.push(c);
          setSizeHR(hrArr.length);
        }

        if (c.typeOfCourse === "Design") {
          designgArr.push(c);
          setSizeDesign(designgArr.length);
         
        }

        if (c.typeOfCourse === "Development") {
          developmentArr.push(c);
          setSizeDev(developmentArr.length);
        }
        return c;
    });
    
    }
  }, [courses]);

  useEffect(() => {
    async function FetchCourses() {
      const course = await getCourses();
      setCourses(course);
      setTypeCourses(course);
    }
    FetchCourses();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filter = (condition, data) => {
    return data.filter((item) => {
      return Object.keys(condition).every((key) => {
        return String(item[key])
          .toLowerCase()
          .includes(String(condition[key]).trim().toLowerCase());
      });
    });
  };

  useEffect(() => {
    let condition = {};

    if (active === "All") {
      condition = { about: search };
    } else if (active !== "All") {
      condition = { typeOfCourse: active, about: search };
    }

    if (courses) {
      setTypeCourses(filter(condition, courses));
    }
  }, [courses, search, active]);

  function filterType(e) {
    setActive(e.target.innerText);
  }

  return (
    <div className="courses-section">
      <div className="container">
        <h2 className="text courses-section-title">
          Enjoy your studying!
          <br />
          <span className="title">Our online courses</span>
        </h2>

        <div className="courses-navigation__wrap">
          <ul className="courses-navigation__list">
            <li className="pos courses-navigation__list__item">
              <button
                className={`courses-navigation__list__item__btn  ${
                  "All" === active && "active"
                }`}
                onClick={filterType}
              >
                All
              </button>
                <span>{sizeOb}</span>
            </li>
            <li className="pos courses-navigation__list__item">
              <button
                className={`courses-navigation__list__item__btn  ${
                  "Marketing" === active && "active"
                }`}
                onClick={filterType}
              >
                Marketing
              </button>
                <span>{sizeMarketing}</span>
            </li>
            <li className="pos courses-navigation__list__item">
              <button
                className={`courses-navigation__list__item__btn  ${
                  "Management" === active && "active"
                }`}
                onClick={filterType}
              >
                Management
              </button>
                <span>{sizeManagement}</span>
            </li>
            <li className="pos courses-navigation__list__item">
              <button
                className={`courses-navigation__list__item__btn  ${
                  "HR & Recruting" === active && "active"
                }`}
                onClick={filterType}
              >
                HR & Recruting
              </button>
                <span>{sizeHR}</span>
            </li>
            <li className="pos courses-navigation__list__item">
              <button
                className={`courses-navigation__list__item__btn  ${
                  "Design" === active && "active"
                }`}
                onClick={filterType}
              >
                Design
              </button>
                <span>{sizeDesign}</span>
            </li>
            <li className="pos courses-navigation__list__item">
              <button
                className={`courses-navigation__list__item__btn  ${
                  "Development" === active && "active"
                }`}
                onClick={filterType}
              >
                Development
              </button>
                <span>{sizeDev}</span>
            </li>
          </ul>

          <form className="blogs__hero__menu__category__form">
            <input
              placeholder="Search course..."
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
          {typeCourses &&
            typeCourses.map((course) => {
              return (
                <li key={course._id} className="courses-list__item">
                  <Link to={`${course._id}`} state={course}>
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
                  </Link>
                </li>
              );
            })}
        </ul>
        <div></div>
      </div>
    </div>
  );
};
