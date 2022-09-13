import { useState, useEffect } from "react";
import { getAbout } from "../../../API";
import pathToSvg from "../../../images/symbol-defs.svg";

export const Directions = () => {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    try {
      getCoursesAbout();
      async function getCoursesAbout() {
        const aboutCourses = await getAbout();
        setCourse(aboutCourses);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section>
      <div className="container">
        <div className="values-section_container">
          <p className="title">Our main directions</p>
          <p className="sub-title">What do we teach</p>
          <div className="card-container">
            {courses &&
              courses.map(({ image, text, category }) => {
                return (
                  <div key={image} className="card">
                    <div>
                      <img src={image} alt=" link course about section" />
                    </div>
                    <div className="card-info">
                      <span className="card-category">{category}</span>
                      <p className="card-text">{text}</p>
                      <button className="card-button">
                        Check courses
                        <svg width="32" height="21">
                          <use href={`${pathToSvg}#icon-Right`} />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};
