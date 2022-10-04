import Slider from "react-slick";
import { Component } from "react";
import Svg from "../../images/symbol-defs.svg";
import { Link } from "react-router-dom";
import getColor from "../getColor";
import { scrollUp } from "../scroll";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, top: "-93px", left: "1180px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, top: "-110px", left: "1144px" }}
      onClick={onClick}
    />
  );
}

export default class MultipleItems extends Component {
  constructor(props) {
    super(props);
    this.state = { props };
  }

  render() {
    const { baseEvents, page } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.count,
      slidesToScroll: 1,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
    };
    return (
      <Slider {...settings}>
        {baseEvents &&
          page === "event" &&
          baseEvents.map((i) => {
            return (
              <div key={i._id} className="event_slider-card-container">
                <div>
                  <p>{i.dates.date}</p>
                  <p>{i.dates.time}</p>
                  <p>{i.eventInfo}</p>
                  <p>{i.category}</p>
                </div>
                <Link
                  className="slider_event--change"
                  to={`/events/${i._id}`}
                  state={{ i, baseEvents }}
                >
                  View more
                </Link>
              </div>
            );
          })}
        {this.props.props &&
          this.props.page === "blogs" &&
          this.props.props.map((blog) => {
            return (
              <div key={blog._id} className="blog__hero__list__item">
                <img src={blog.image} alt={blog.image}></img>
                <div className="blog__hero__list__item__type">
                  {blog.typeofBlog === "Podcast" && (
                    <svg width="16" height="16">
                      <use href={`${Svg}#icon-mic`}></use>
                    </svg>
                  )}

                  {blog.typeofBlog === "Video" && (
                    <svg width="16" height="16">
                      <use href={`${Svg}#icon-play`}></use>
                    </svg>
                  )}
                  {blog.typeofBlog === "Article" && (
                    <svg width="16" height="16">
                      <use href={`${Svg}#icon-files`}></use>
                    </svg>
                  )}
                  <p className="blog__hero__list__item__type__text">
                    {blog.typeofBlog}
                  </p>
                </div>

                <div className="blog__hero__list__item__box">
                  <ul className="blog__hero__list__item__box__top">
                    <li className="blog__hero__list__box__item">
                      {blog.category}
                    </li>
                    <li className="blog__hero__list__box__item">
                      <svg width="16" height="16">
                        <use href={`${Svg}#icon-calendar`}></use>
                      </svg>
                      {blog.date}
                    </li>
                    {blog.duration && (
                      <li className="blog__hero__list__box__item">
                        <svg width="16" height="16">
                          <use href={`${Svg}#icon-clock`}></use>
                        </svg>
                        {blog.duration} min
                      </li>
                    )}
                  </ul>
                  <p className="blog__hero__list__item__box__title">
                    {blog.title}
                  </p>
                  <p className="blog__hero__list__item__box__text">
                    {blog.text}
                  </p>
                  {blog.typeofBlog === "Podcast" && (
                    <Link
                      className="blog__hero__list__item__box__button"
                      to={{ pathname: `/blogs/${blog._id}` }}
                      state={blog}
                    >
                      <p>Listen</p>
                      <svg
                        width="24"
                        height="24"
                        className="blog__hero__list__item__box__button--red"
                      >
                        <use href={`${Svg}#icon-Right`}></use>
                      </svg>
                    </Link>
                  )}

                  {blog.typeofBlog === "Video" && (
                    <Link
                      to={{ pathname: `/blogs/${blog._id}` }}
                      state={{ blog }}
                      className="blog__hero__list__item__box__button"
                    >
                      <p>Watch</p>
                      <svg
                        width="24"
                        height="24"
                        className="blog__hero__list__item__box__button--red"
                      >
                        <use href={`${Svg}#icon-Right`}></use>
                      </svg>
                    </Link>
                  )}
                  {blog.typeofBlog === "Article" && (
                    <Link
                      to={{ pathname: `/blogs/${blog._id}` }}
                      state={ blog }
                      className="blog__hero__list__item__box__button"
                    >
                      <p>Read</p>
                      <svg
                        width="24"
                        height="24"
                        className="blog__hero__list__item__box__button--red"
                      >
                        <use href={`${Svg}#icon-Right`}></use>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        {this.props.props &&
          this.props.page === "home" &&
          this.props.props.map((team, indx) => {
            if (indx === 7) {
              return null;
            }
            return (
              <div key={team._id} className="team-list__item">
                <div className="team-img__container">
                  <img
                    src={team.profilePicture}
                    alt="teacher"
                    width="285"
                    height="340"
                    className="team-photo"
                  />
                </div>
                <ul className="team-social__list">
                  <li className="team-social-svg">
                    <svg className="social-svg" width="20" height="20">
                      <use href={`${Svg}#icon-facebook`} />
                    </svg>
                  </li>
                  <li className="team-social-svg">
                    <svg className="social-svg" width="20" height="20">
                      <use href={`${Svg}#icon-instagram`} />
                    </svg>
                  </li>
                  <li className="team-social-svg">
                    <svg className="social-svg" width="20" height="20">
                      <use href={`${Svg}#icon-linked-in`} />
                    </svg>
                  </li>
                </ul>
                <p className="team-name">{team.aboutName}</p>
                <p className="team-position">{team.aboutJobTitle}</p>
              </div>
            );
          })}
        {this.props.props &&
          this.props.page === "/courses/:id" &&
          this.props.props.map((course) => {
            return (
              <Link
              onClick={scrollUp}
                key={course._id}
                to={`/courses/${course._id}`}
                state={course}
                className="course-list__item"
              >
                <img
                  src={course.profilePicture}
                  alt="Coatch"
                  width="300"
                  className="coach-img"
                />
                <div>
                  <p
                    className="course-item__name"
                    style={{ backgroundColor: getColor(course.typeOfCourse) }}
                  >
                    {course.typeOfCourse}
                  </p>
                  <h3 className="course-item__text">{course.about}</h3>
                  <p className="courses-detail">
                    <span className="price">{course.price}</span>
                    <span color=" var(--light-gray)">|</span>
                    {course.name}
                  </p>
                </div>
              </Link>
            );
          })}
      </Slider>
    );
  }
}
