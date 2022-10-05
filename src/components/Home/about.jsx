import checkedSvg from "../../images/symbol-defs.svg";
import AboutImg from "../../images/image2.jpg";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about-section">
      <div className="container about-container">
        <img width="705" height="560" src={AboutImg} alt="women and laptop" />
        <div className="about-info">
          <h2 className="about-title">
            Who we are
            <br />
            <span className="about-title__span">Why Createx?</span>
          </h2>

          <ul className="about-list">
            <li className="about-list__item">
              <svg width="20" height="20">
                <use href={`${checkedSvg}#icon-checked`} />
              </svg>
              <p className="about-list__item-text">
                A fermentum in morbi pretium aliquam adipiscing donec tempus.
              </p>
            </li>
            <li className="about-list__item">
              <svg width="16" height="20">
                <use href={`${checkedSvg}#icon-checked`} />
              </svg>
              <p className="about-list__item-text">
                Vulputate placerat amet pulvinar lorem nisl.
              </p>
            </li>
            <li className="about-list__item">
              <svg width="24" height="20">
                <use href={`${checkedSvg}#icon-checked`} />
              </svg>
              <p className="about-list__item-text">
                Consequat feugiat habitant gravida quisque elit bibendum id
                adipiscing sed.
              </p>
            </li>
            <li className="about-list__item">
              <svg width="17" height="20">
                <use href={`${checkedSvg}#icon-checked`} />
              </svg>
              <p className="about-list__item-text">
                Etiam duis lobortis in fames ultrices commodo nibh.
              </p>
            </li>
            <li className="about-list__item">
              <svg width="17" height="20">
                <use href={`${checkedSvg}#icon-checked`} />
              </svg>
              <p className="about-list__item-text">
                Tincidunt sagittis neque sem ac eget.
              </p>
            </li>
            <li className="about-list__item">
              <svg width="20" height="16">
                <use href={`${checkedSvg}#icon-checked`} />
              </svg>
              <p className="about-list__item-text">
                Ultricies amet justo et eget quisque purus vulputate dapibus
                tortor.
              </p>
            </li>
          </ul>
            <Link to="/about" className="link about-button gradient btn-hover">
              More about us
            </Link>
        </div>
      </div>
    </div>
  );
};
