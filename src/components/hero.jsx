import PlaySvg from "../images/small.png";

export const Hero = () => {
  return (
    <div>
      <div className="hero-content">
        <button className="button-play">
          <img src={PlaySvg} alt="zx" className="button-play__image" />
          Play showreel
        </button>
        <h1 className="hero-title">
          Enjoy studying with Createx Online Courses
        </h1>

        <ul className="hero-button__list">
          <li className="hero-button__list-item">
            <button className="button-outlined">About us</button>
          </li>
          <li>
            <button className="header-button gradient">Explore courses</button>
          </li>
        </ul>
      </div>

      <div className="hero-benefit">
        <ul className="hero-benefit-list">
          <li className="hero-benefit-list__item">
            <span className="hero-benefit__span">1200</span>
            <p className="hero-benefit__text">Students graduated</p>
          </li>
          <li className="hero-benefit-list__item">
            <span className="hero-benefit__span">84</span>
            <p className="hero-benefit__text">Completed courses</p>
          </li>

          <li className="hero-benefit-list__item">
            <span className="hero-benefit__span">16</span>
            <p className="hero-benefit__text">Qualified tutors</p>
          </li>
          <li className="hero-benefit-list__item">
            <span className="hero-benefit__span">5</span>
            <p className="hero-benefit__text">Years of experience</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
