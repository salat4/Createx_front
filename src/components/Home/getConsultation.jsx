import Svg from "../../images/symbol-defs.svg";

export const ConsultationModal = ({ onClick }) => {
  return (
    <div className="modal-container">
      <div className="modal-form__wraper">
        <h2 className="text consultatin-modal__title">
          Need more information? <br />
          Leave your details!
        </h2>

        <button onClick={onClick} className="btn-close">
          <svg width="24" height="24">
            <use href={`${Svg}#icon-close `} />
          </svg>
        </button>
        <form>
          <label className="auth-form__label" htmlFor="name">
            Full Name
            <input
              className="auth-form__input"
              name="name"
              type="text"
              placeholder="Your full name"
            />
          </label>
          <label className="auth-form__label" htmlFor="email">
            Email
            <input
              className="auth-form__input"
              name="email"
              type="email"
              placeholder="Your working email"
            />
          </label>
          <label className="auth-form__label" htmlFor="email">
            Phone number
            <input
              className="auth-form__input"
              name="phone"
              type="phone"
              placeholder="Your working email"
            />
          </label>

          <p className="consultatin-modal__radio_title">
            Please select your preferred contact method:
          </p>
          <div className="consultatin-modal__radio_wrap">
            <label
              className="consultatin-modal__radio_label"
              htmlFor="contactChoice1"
            >
              Email
              <input
                className="consultatin-modal__radio"
                type="radio"
                id="contactChoice1"
                name="contact"
                value="email"
              />
            </label>
            <label
              className="consultatin-modal__radio_label"
              htmlFor="contactChoice2"
            >
              Phone
              <input
                className="consultatin-modal__radio"
                type="radio"
                id="contactChoice2"
                name="contact"
                value="phone"
              />
            </label>
          </div>

          <textarea
            className="consultatin-modal__textarea"
            id="question"
            name="question"
            maxLength="250"
            placeholder="Leave your question... "
          />
          <button className="gradient consultatin-modal__btn" type="submit">
            Send!
          </button>
        </form>
      </div>
    </div>
  );
};
