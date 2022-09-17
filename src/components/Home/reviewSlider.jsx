import Slider from "react-slick";
import { Component } from "react";
import Client from "../../images/client_rev.png";
import Client1 from "../../images/client_rev1.png";
import Client2 from "../../images/client_rev2.png";
import Client3 from "../../images/client_rev3.png";

import Svg from "../../images/symbol-defs.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow/>
    };

    return (
      
      <div className="container">
        <Slider {...settings}>
          <div>
            <div className="slider-wrap">
              <svg className="slider-svg" width="28" height="20">
                <use href={`${Svg}#icon-review`} />
              </svg>
              <p className="slider-review__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
                amet lectus quam viverra mus lobortis fermentum amet, eu.
                Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare
                turpis quis non. Congue tortor in euismod vulputate etiam eros.
                Pulvinar neque pharetra arcu diam maecenas diam integer in.
              </p>
              <div className="slider-client__card">
                <img src={Client} alt="client" />
                <div className="slider-client__card-text">
                  <p className="slider-client__name">Eleanor Pena</p>
                  <p className="slider-client__position ">Position, Course</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slider-wrap">
              <svg className="slider-svg" width="28" height="20">
                <use href={`${Svg}#icon-review`} />
              </svg>
              <p className="slider-review__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
                amet lectus quam viverra mus lobortis fermentum amet, eu.
                Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare
                turpis quis non. Congue tortor in euismod vulputate etiam eros.
                Pulvinar neque pharetra arcu diam maecenas diam integer in.
              </p>
              <div className="slider-client__card">
                <img src={Client2} alt="client" />
                <div className="slider-client__card-text">
                  <p className="slider-client__name">Eleanor Pena</p>
                  <p className="slider-client__position ">Position, Course</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slider-wrap">
              <svg className="slider-svg" width="28" height="20">
                <use href={`${Svg}#icon-review`} />
              </svg>
              <p className="slider-review__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
                amet lectus quam viverra mus lobortis fermentum amet, eu.
                Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare
                turpis quis non. Congue tortor in euismod vulputate etiam eros.
                Pulvinar neque pharetra arcu diam maecenas diam integer in.
              </p>
              <div className="slider-client__card">
                <img src={Client1} alt="client" />
                <div className="slider-client__card-text">
                  <p className="slider-client__name">Eleanor Pena</p>
                  <p className="slider-client__position ">Position, Course</p>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="slider-wrap">
              <svg className="slider-svg" width="28" height="20">
                <use href={`${Svg}#icon-review`} />
              </svg>
              <p className="slider-review__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
                amet lectus quam viverra mus lobortis fermentum amet, eu.
                Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare
                turpis quis non. Congue tortor in euismod vulputate etiam eros.
                Pulvinar neque pharetra arcu diam maecenas diam integer in.
              </p>
              <div className="slider-client__card">
                <img src={Client} alt="client" />
                <div className="slider-client__card-text">
                  <p className="slider-client__name">Eleanor Pena</p>
                  <p className="slider-client__position ">Position, Course</p>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="slider-wrap">
              <svg className="slider-svg" width="28" height="20">
                <use href={`${Svg}#icon-review`} />
              </svg>
              <p className="slider-review__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
                amet lectus quam viverra mus lobortis fermentum amet, eu.
                Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare
                turpis quis non. Congue tortor in euismod vulputate etiam eros.
                Pulvinar neque pharetra arcu diam maecenas diam integer in.
              </p>
              <div className="slider-client__card">
                <img src={Client3} alt="client" />
                <div className="slider-client__card-text">
                  <p className="slider-client__name">Eleanor Pena</p>
                  <p className="slider-client__position ">Position, Course</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slider-wrap">
              <svg className="slider-svg" width="28" height="20">
                <use href={`${Svg}#icon-review`} />
              </svg>
              <p className="slider-review__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
                amet lectus quam viverra mus lobortis fermentum amet, eu.
                Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare
                turpis quis non. Congue tortor in euismod vulputate etiam eros.
                Pulvinar neque pharetra arcu diam maecenas diam integer in.
              </p>
              <div className="slider-client__card">
                <img src={Client1} alt="client" />
                <div className="slider-client__card-text">
                  <p className="slider-client__name">Eleanor Pena</p>
                  <p className="slider-client__position ">Position, Course</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
