import { useState } from "react";
import Backdrop from "../Backdrop";
import LoginPage from "./login";

export const ShowLoginModal = () => {
  const [modalLogin, setModalLogin] = useState(false);

  const showLoginForm = () => {
    setModalLogin(!modalLogin);
  };

  return (
    <>
      <button
        type="button"
        className="header-button__auth"
        onClick={showLoginForm}
      >
        Log in
      </button>
      {modalLogin && (
        <Backdrop onClick={showLoginForm}>
          <LoginPage />
        </Backdrop>
      )}
    </>
  );
};
