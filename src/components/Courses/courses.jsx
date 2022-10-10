import { useEffect, useState } from "react";
import Svg from "../../images/symbol-defs.svg";
import getCourses from "../../API/getCourses";
import { Link, useLocation } from "react-router-dom";
import gerColor from "../getColor";

export const Courses = () => {
  const [courses, setCourses] = useState(null);
  const [typeCourses, setTypeCourses] = useState(null);
  const [sizeOb, setSizeOb] = useState();
  const [sizeMarketing, setSizeMarketing] = useState(0);
  const [sizeManagement, setSizeManagement] = useState(0);
  const [sizeHR, setSizeHR] = useState(0);
  const [sizeDesign, setSizeDesign] = useState(0);
  const [sizeDev, setSizeDev] = useState();
  const location = useLocation();

  const [search, setSearch] = useState("");
  const [active, setActive] = useState(location.state ? location.state : "All");
  useEffect(() => {
    const marketingArr = [];
    const managementArr = [];
    const hrArr = [];
    const designgArr = [];
    const developmentArr = [];
    if (courses) {
      const objSize = Object.keys(courses).length;
      setSizeOb(objSize);
      courses.map((c) => {
        if (c.typeOfCourse === "Marketing") {
          marketingArr.push(c);
          setSizeMarketing(marketingArr.length);
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
    setActive(e.target.id);
    location.state = null;
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
            <li
              id="All"
              onClick={filterType}
              className={`pos blogs__hero__menu__list__item courses-navigation__list__item  ${
                "All" === active && "active"
              }`}
            >
              <p id="All" className={`courses-navigation__list__item__btn `}>
                All
              </p>
              <span id="All">{sizeOb}</span>
            </li>
            <li
              id="Marketing"
              onClick={filterType}
              className={`pos courses-navigation__list__item  ${
                "Marketing" === active && "active"
              }`}
            >
              <p id="Marketing" className="courses-navigation__list__item__btn">
                Marketing
              </p>
              <span id="Marketing">{sizeMarketing}</span>
            </li>
            <li
              id="Management"
              className={`pos courses-navigation__list__item  ${
                "Management" === active && "active"
              }`}
              onClick={filterType}
            >
              <p
                id="Management"
                className="courses-navigation__list__item__btn"
              >
                Management
              </p>
              <span id="Management">{sizeManagement}</span>
            </li>
            <li
              id="HR & Recruting"
              className={`pos courses-navigation__list__item ${
                "HR & Recruting" === active && "active"
              }`}
              onClick={filterType}
            >
              <p
                id="HR & Recruting"
                className="courses-navigation__list__item__btn"
              >
                HR & Recruting
              </p>
              <span id="HR & Recruting">{sizeHR}</span>
            </li>
            <li
              id="Design"
              className={`pos courses-navigation__list__item ${
                "Design" === active && "active"
              }`}
              onClick={filterType}
            >
              <p id="Design" className="courses-navigation__list__item__btn">
                Design
              </p>
              <span id="Design">{sizeDesign}</span>
            </li>
            <li
              id="Development"
              className={`pos courses-navigation__list__item ${
                "Development" === active && "active"
              }`}
              onClick={filterType}
            >
              <p
                id="Development"
                className="courses-navigation__list__item__btn"
              >
                Development
              </p>
              <span id="Development">{sizeDev}</span>
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
                  <Link to={`${course._id}`} state={[course, typeCourses]}>
                    <img
                      src={course.profilePicture}
                      alt="ff"
                      width="390"
                      className="coach-img img_border"
                    />
                    <div className="courses-list__item__text-wrap">
                      <p
                        className="course-item__name "
                        style={{
                          backgroundColor: gerColor(course.typeOfCourse),
                        }}
                      >
                        {course.typeOfCourse}
                      </p>

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
