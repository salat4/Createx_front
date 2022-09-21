export const Form = () => {
  return (
    <div className="contact-form__section">
      <div className="container contact-container">
        <form className="contact-form">
          <h2 className="text сontact-title">
            Any questions?
            <br />
            <span className="title">Drop us a line</span>
          </h2>
          <label className="contact-form__label" htmlFor="name">
            First Name*
            <input
              className="contact-form__input"
              name="name"
              type="text"
              placeholder="Your first name"
            />
          </label>

          <label className="contact-form__label" htmlFor="lastName">
            Last Name*
            <input
              className="contact-form__input"
              name="lastName"
              type="text"
              placeholder="Your last name"
            />
          </label>

          <label className="contact-form__label" htmlFor="email">
            Email*
            <input
              className="contact-form__input"
              name="email"
              type="email"
              placeholder="Your working email"
            />
          </label>

          <label className="contact-form__label" htmlFor="email">
            Phone
            <input
              className="contact-form__input"
              name="phone"
              type="number"
              placeholder="Your phone number"
            />
          </label>
          <label className="contact-form__label" htmlFor="email">
            Message*
            <textarea
              className="contact-form__textarea"
              id="message"
              name="message"
              maxLength="550"
              placeholder="Your message"
            />
          </label>

          <div className="contact-checkbox__section">
            <label className="contact-form__checkbox_label" htmlFor="keepData">
              <input
                className="auth-form__checkbox "
                type="checkbox"
                id="keepData"
                name="keepData"
              />
              I agree to receive communications from Createx Online School
              <span className="checkmark"></span>
            </label>

            <button type="submit" className="contact-form__btn gradient">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
