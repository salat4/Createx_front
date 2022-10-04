import { useLocation } from "react-router-dom";

export const HeroCourse = () => {
    const location = useLocation();
    const {state} = location;

    return (
    <div className="container hero-course__container">
      <p className="course-hero__text">course</p>
      <h2 className="course-hero__title">{state.about}</h2>
    </div>
  );
};
