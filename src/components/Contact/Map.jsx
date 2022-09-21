import Svg from "../../images/symbol-defs.svg";

export const Map = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="contact-left__section">
          <div className="contact-text__wrap">
            <h2 className="text">
            Contact info
              <br />
              <span className="title">Get in touch</span>
            </h2>

            <ul className="contact-list">
              <li className="contact-list__item">
                <svg
                  width="20"
                  height="20"
                  fill="#FF3F3A"
                  className="contact-item__svg"
                >
                  <use href={`${Svg}#icon-chat `} />
                </svg>
                <div className="contact-list__item__wrap">
                  <p className="contact-list__item__text">Talk to us:</p>
                  <a className="contact-list__item__address" href="mailto:hello@createx.com">hello@createx.com</a>
                </div>
              </li>
              <li className="contact-list__item">
                <svg
                  width="20"
                  height="20"
                  fill="#FF3F3A"
                  className="contact-item__svg"
                >
                  <use href={`${Svg}#icon-iPhone`} />
                </svg>
                <div className="contact-list__item__wrap">
                  <p className="contact-list__item__text">Call us:</p>
                  <a className="contact-list__item__address" href="tel:+4055550128">(405) 555-0128</a>
                </div>
              </li>
              <li className="contact-list__item">
                <svg
                  width="20"
                  height="20"
                  fill="#FF3F3A"
                  className="contact-item__svg"
                >
                  <use href={`${Svg}#icon-outline `} />
                </svg>
                <div className="contact-list__item__wrap">
                  <p className="contact-list__item__text">Address:</p>
                  <p className="contact-list__item__address">2464 Royal Ln. Mesa, New Jersey 45463, USA</p>
                </div>
              </li>
            </ul>

            <p className="contact-social__list">Follow us:</p>
            <ul className="contact-social__list">
              <li className="contact-social__list__item">
                <svg fill="#787A80" width="20" height="20">
                  <use href={`${Svg}#icon-facebook `} />
                </svg>
              </li>
              <li className="contact-social__list__item">
                <svg fill="#787A80" width="20" height="20">
                  <use href={`${Svg}#icon-Twitter`} />
                </svg>
              </li>
              <li className="contact-social__list__item">
                <svg fill="#787A80" width="20" height="20">
                  <use href={`${Svg}#icon-youtube`} />
                </svg>
              </li>
              <li className="contact-social__list__item">
                <svg fill="#787A80" width="20" height="20">
                  <use href={`${Svg}#icon-telegram`} />
                </svg>
              </li>
              <li className="contact-social__list__item">
                <svg fill="#787A80" width="20" height="20">
                  <use href={`${Svg}#icon-instagram`} />
                </svg>
              </li>
              <li className="contact-social__list__item">
                <svg fill="#787A80" width="20" height="20">
                  <use href={`${Svg}#icon-linked-in`} />
                </svg>
              </li>
            </ul>
          </div>
          <div>
            <iframe
              title="Campus"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6103.938294607758!2d-74.23079022389726!3d40.09840081761352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c178a380d7effd%3A0x151bbae2ec9fbe04!2zOTAwIExha2V3b29kIEF2ZSwgTGFrZXdvb2QsIE5KIDA4NzAxLCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1663759734805!5m2!1suk!2sua"
              width="705"
              height="412"
              loading="lazy"
              allowFullScreen={false}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
