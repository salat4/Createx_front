import { useState } from "react";
import Backdrop from "../Backdrop";
import RegisterPage from "./registration";

export const ShowRegModal = () => {
  const [modalRegistration, setModalRegistration] = useState(false);

  const showRegistrationForm = () => {
    setModalRegistration(!modalRegistration);
    const log = document.querySelector('#login')
    log.classList.add('none')
  };



  return (
    <>
      <button
        type="button"
        className="header-button__auth"
        onClick={showRegistrationForm}
      >
        Register
      </button>
      {modalRegistration && (
        <Backdrop id='log' onClick={showRegistrationForm}>
          <RegisterPage />
        </Backdrop>
      )}
    </>
  );
};
