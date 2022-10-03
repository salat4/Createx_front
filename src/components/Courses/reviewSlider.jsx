import SimpleSlider from "../Home/reviewSlider";

export const ReviewSider = () => {
  return (
    <div className="review-section">
      <div className="container">
        <h2 className="text courses-section-title">
          TESTIMONIALS
          <br />
          <span className="title">What our students say</span>
        </h2>
        <SimpleSlider />
      </div>
    </div>
  );
};
