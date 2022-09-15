import { useState } from "react";
import Backdrop from "../Backdrop";
import RegisterPage from "./registration";

export const ShowRegModal = () => {
  const [modalRegistration, setModalRegistration] = useState(false);

  const showRegistrationForm = () => {
    setModalRegistration(!modalRegistration);
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
        <Backdrop onClick={showRegistrationForm}>
          <RegisterPage />
        </Backdrop>
      )}
    </>
  );
};
