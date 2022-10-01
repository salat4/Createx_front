export const DiscountForm = () => {
  return (
    <div className="discount-form__section">
      <div className="container discount-form__container">
        <div className="discount-form__wrap">
          <h2 className="about-title">
            Leave a request now and get 20% off! <br />
            <span className="about-title__span">Register for the course</span>
          </h2>

          <form className="course-discount__form" autoComplete="off">
            <label className="course-form__label" htmlFor="name">
              Full Name
              <input
                className="course-discount-form__input"
                name="name"
                type="text"
                placeholder="Your full name"
              />
            </label>
            <label className="course-form__label" htmlFor="email">
              Email
              <input
                className="course-discount-form__input"
                name="email"
                type="email"
                placeholder="Your working email"
              />
            </label>
            <label className="course-form__label" htmlFor="email">
              Phone number
              <input
                className="course-discount-form__input"
                name="phone"
                type="phone"
                placeholder="Your phone number"
              />
            </label>
            <button className="course-discount-form__btn gradient">
            Join the course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
