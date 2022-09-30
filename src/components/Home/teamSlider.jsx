import Slider from "react-slick";
import { Component } from "react";
import Svg from "../../images/symbol-defs.svg";
import { Link } from "react-router-dom";

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
      </Slider>
    );
  }
}
