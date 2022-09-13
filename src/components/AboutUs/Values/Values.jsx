import pathToSvg from "../../../images/symbol-defs.svg";

export const Values = () => {
  return (
    <section>
      <div className="container">
        <div className="titles-for-sections values-title">
          <p className="title">We always stand for</p>
          <p className="sub-title">Our core values</p>
          <div className="values-container">
            <div className="values-item-container">
              <div>
                <svg width="48" height="48">
                  <use href={`${pathToSvg}#icon-ic-structure`} />
                </svg>
              </div>
              <p className="values-item_title">Structured Approach</p>
              <p className="values-item_text">
                Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.{" "}
              </p>
            </div>
            <span className="separator"></span>
            <div className="values-item-container">
              <div>
                <svg width="48" height="48">
                  <use href={`${pathToSvg}#icon-ic-chat`} />
                </svg>
              </div>
              <p className="values-item_title">Professional Feedbacks</p>
              <p className="values-item_text">
                Culpa nostrud commodo ea consequat reprehenderit aliquip.{" "}
              </p>
            </div>
            <span className="separator"></span>
            <div className="values-item-container">
              <div>
                <svg width="48" height="48">
                  <use href={`${pathToSvg}#icon-ic-target`} />
                </svg>
              </div>
              <p className="values-item_title">Efficiency</p>
              <p className="values-item_text">
                Viverra scelerisque consequat net. Adipisicing esse consequat.{" "}
              </p>
            </div>
            <span className="separator"></span>
            <div className="values-item-container">
              <div>
                <svg width="48" height="48">
                  <use href={`${pathToSvg}#icon-ic-calendar`} />
                </svg>
              </div>
              <p className="values-item_title">Flexible Shedule</p>
              <p className="values-item_text">
                Aute eiusmod dolore dolore deserunt veniam ad deserunt.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
