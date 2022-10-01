import { useLocation } from "react-router-dom";
import Svg from "../../images/symbol-defs.svg";

export const AboutCourse = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div className="about-course__section">
      <div className="container about-course__container">
        <div className="about-course__text__wrap">
          <h3 className="about-course__title">About the course</h3>
          <p className="about-course__text">
            Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo
            aenean congue in sagittis, felis maecenas amet varius at.
            Pellentesque euismod in faucibus at elementum. Tellus maecenas
            libero est tempus sit cras at malesuada diam. Consequat senectus
            dictumst non hac dignissim montes, pretium, egestas molestie. Sed
            magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus
            nunc tincidunt tortor, mi nulla pellentesque
          </p>
          <h3 className="about-course__learn__title">You will learn:</h3>
          <ul className="course-about-list">
            {state.learn.map((text, indx) => 
              <li key={indx} className="about-list__item">
                <svg width="20" height="20">
                  <use href={`${Svg}#icon-checked`} />
                </svg>
                <p className="about-list__item-text">{text} </p>
              </li>
            )}
          </ul>
        </div>
        <div className="course-inf__wrap">
          <p className="course-info__title">Dates</p>
          <p className="course-info__date">{state.dates}</p>
          <p className="course-info__description">
            Metus turpis sit lorem lacus, in elit tellus lacus.
          </p>

          <p className="course-info__title">Duration</p>
          <p className="course-info__date">{state.duration}</p>
          <p className="course-info__description">
            Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.{" "}
          </p>

          <p className="course-info__title">Price</p>
          <p className="course-info__date">{state.price} per month</p>
          <p className="course-info__description">
            Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris
            quam ac elit tristique dis.
          </p>

          <button className="course-info__btn gradient">Join the course</button>
        </div>
      </div>
    </div>
  );
};
