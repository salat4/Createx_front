import Slider from "react-slick";
import  { Component } from "react";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      pauseOnHover: true
    };
    return (
      <div>
        <h2>Pause On Hover</h2>
        <Slider {...settings}>
          <div className="hero-section">
            <h3>1</h3>
            <p>guigiugiug</p>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}