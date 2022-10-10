export const HeroCourse = ({ state }) => {
  return (
    <div className="container hero-course__container">
      <p className="course-hero__text">course</p>
      <h2 className="course-hero__title">{state.course.about}</h2>
    </div>
  );
};
