import { Link } from "react-router-dom";
import HeroImg from "../../../images/illustration3.png";

export const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="about-hero_container">
          <div className="about-hero_container_left">
            <p className="about-us_hero">About us</p>
            <h1 className="about-hero_title">Createx Online School</h1>
            <h2 className="about-hero_sub_title">
              Createx Online School is a leader in online studying. We have lots
              of courses and programs from the main market experts.
            </h2>
            <p className="about-hero_description">
              We provide relevant approaches to online learning, internships and
              employment in the largest companies in the country. Our
              educational programs help you get a new specialty from scratch.
              During your studies, we will help you find a job. Check the
              courses and online events that we organise.
            </p>
            <div className="about-hero_container_button">
              <Link to="/events">Explore events</Link>
              <Link to="/courses">Browse courses</Link>
            </div>
          </div>
          <div className="about-hero_container_image">
            <img src={HeroImg} alt="Hero about us" />
          </div>
        </div>
      </div>
    </section>
  );
};
