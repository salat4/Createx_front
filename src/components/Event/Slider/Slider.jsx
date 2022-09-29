import sliderArrow from "../../../images/right.png";

export const Slider = ({ state }) => {
  return (
    <section className="slider_section">
      <div className="container">
        <div className="slider_head-container">
          <div className="slider_title-container">
            <p>Check other online events</p>
            <p>You may be interested in</p>
          </div>
          <div>
            <button></button>
            <button className="slider_button-right">
              <img src={sliderArrow} alt="arrow right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
