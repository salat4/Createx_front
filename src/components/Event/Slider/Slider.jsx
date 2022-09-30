import TeamSlider from "../../Home/teamSlider";

export const Slider = ({ state }) => {
  return (
    <section className="slider_section">
      <div className="container">
        <div className="slider_title-container">
          <p>Check other online events</p>
          <p>You may be interested in</p>
        </div>
        <TeamSlider baseEvents={state.baseEvents} count={3} page={"event"} />
      </div>
    </section>
  );
};
