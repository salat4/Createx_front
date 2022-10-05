import { useState, useEffect } from "react";
import { getAbout } from "../../../API";
import getColor from "../../getColor";
import pathToSvg from "../../../images/symbol-defs.svg";
import { useNavigate } from "react-router-dom";

export const Directions = () => {
  const [courses, setCourse] = useState([]);
 const navigate =  useNavigate()
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
        <div className="titles-for-sections direction-title">
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
                      <span
                        className="card-category"
                        style={{
                          backgroundColor: getColor(category),
                        }}
                      >
                        {category}
                      </span>
                      <p className="card-text">{text}</p>
                      <button className="card-button" id = {category} onClick={(e)=>{navigate("/courses",{state:e.target.id}) ;window.scrollTo({top:0})}}>
                        Check courses
                        <svg width="32" height="21">
                          <use href={`${pathToSvg}#icon-Right`} />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            {courses && courses.length < 6 && (
              <div className="plug_card">
                <p>New studying program coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
