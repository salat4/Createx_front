import Notiflix from "notiflix";
import { useState } from "react";
import imageMailing from "../../../images/illustration (3).png";

export const Mailing = () => {
  const [checked, setChecked] = useState(true);
  const [subscribeEmail, setSubscribeEmail] = useState("");

  const SubscribeSubmit = (e) => {
    e.preventDefault();
    // if (subscribeEmail === "") {
    //   ref.current.focus();
    //   Notiflix.Notify.warning("Fill in the email field to subscribe");
    //   return;
    // }

    Notiflix.Notify.success(`${subscribeEmail} subscription successful!`);
    setSubscribeEmail("");
  };

  const SubscribeFormEmail = (e) => {
    const { value } = e.target;
    setSubscribeEmail(value);
  };

  return (
    <section className="mailing-section">
      <div className="container">
        <div className="mailing_section-container">
          <div>
            <img src={imageMailing} alt="illustration" width="308" />
          </div>
          <div className="mailing_form-container">
            <p>
              Don’t want to miss the best events? Subscribe to our newsletter!
            </p>
            <form onSubmit={SubscribeSubmit} className="mailing_form">
              <input
                placeholder="Your working email"
                onChange={SubscribeFormEmail}
                value={subscribeEmail}
                type="email"
                required={true}
              />
              <button type="submit" disabled={checked}>
                Subscribe
              </button>
              <label
                className="contact-form__checkbox_label"
                htmlFor="keepData"
              >
                <input
                  className="auth-form__checkbox "
                  type="checkbox"
                  id="keepData"
                  name="keepData"
                  onClick={() => setChecked(!checked)}
                />
                I agree to receive communications from Createx Online School
                <span className="checkmark"></span>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
