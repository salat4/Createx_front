import Notiflix from "notiflix";
import { useState } from "react";
import imageMailing from "../../../images/illustration (3).png";

export const Mailing = () => {
  const [checked, setChecked] = useState(true);

  const SubscribeSubmit = (e) => {
    e.preventDefault();
    Notiflix.Notify.success("Subscription successful!");
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
              <input placeholder="Your working email" />
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
