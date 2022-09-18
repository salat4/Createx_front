import Slider from "react-slick";
import { Component } from "react";
import Svg from "../../images/symbol-defs.svg";

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
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
   
    };
    return (
      <Slider {...settings}>
        {this.props.props &&
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
