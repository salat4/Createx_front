import imageMailing from "../../../images/illustration (3).png";

export const Mailing = () => {
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
            <form className="mailing_form">
              <input placeholder="Your working email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
