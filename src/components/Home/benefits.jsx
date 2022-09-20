import Svg from "../../images/symbol-defs.svg";
import { useState } from "react";
import Backdrop from "../Backdrop";
import { ConsultationModal } from "./getConsultation";
export const Benefit = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };

  return (
    <div className="benefit-section">
      <div className="container benefit-container">
        <h2 className="text benefit-title">
          Our benefits
          <br />
          <span className="title">That’s how we do it</span>
        </h2>

        <ul className="benefit-list">
          <li className="benefit-list__item">
            <svg width="16" height="16" className="benefit-list__item_svg">
              <use href={`${Svg}#icon-Star`} />
            </svg>
            <p className="benefit-list__item_text">Experienced Tutors</p>
          </li>
          <li className="benefit-list__item">
            <button className="benefit-list__item_btn" onClick={showModal}>
              <svg width="16" height="16" className="benefit-list__item_svg">
                <use href={`${Svg}#icon-like`} />
              </svg>
              <p className="benefit-list__item_text">Feedback & Support</p>
            </button>
          </li>
          <li className="benefit-list__item library">
            <svg width="16" height="16" className="benefit-list__item_svg">
              <use href={`${Svg}#icon-layouts`} />
            </svg>
            <p className="benefit-list__item_text ">24/7 Online Library</p>
          </li>
          <li className="benefit-list__item">
            <svg width="16" height="16" className="benefit-list__item_svg">
              <use href={`${Svg}#icon-chat`} />
            </svg>
            <p className="benefit-list__item_text">Community</p>
          </li>
        </ul>
        {modal && (
          <Backdrop onClick={showModal}>
            <ConsultationModal />
          </Backdrop>
        )}
        <div className="benefit-info__container">
          <h3 className="benefit-info__title">Only practicing tutors</h3>
          <p className="benefit-info__text">
            Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames
            dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis
            mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum
            diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa
            ut amet. Amet enim, nisi tempus vehicula.
          </p>
        </div>
      </div>
    </div>
  );
};
