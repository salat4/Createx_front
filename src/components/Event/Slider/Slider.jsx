import TeamSlider from "../../Home/teamSlider";

export const Slider = ({ state }) => {
  console.log(state.baseEvents);
  return (
    <section className="slider_section">
      <div className="container">
        {/* <div className="slider_head-container"> */}
        <div className="slider_title-container">
          <p>Check other online events</p>
          <p>You may be interested in</p>
        </div>
        {/* </div> */}
        <TeamSlider props={state.baseEvents} count={3} page={"event"} />
      </div>
    </section>
  );
};
