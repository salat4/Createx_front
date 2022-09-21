import Backdrop from "../Backdrop";
import LoginPage from "./login";

export const ShowLoginModal = ({
  modalLogin,
  showLoginForm,
  showRegistrationForm,
  modalRegistration,
  onClick,
}) => {
  return (
    <>
      <button className="header-button__auth" onClick={showLoginForm}>
        Log in
      </button>
      {modalLogin && (
        <Backdrop onClick={showLoginForm}>
          <LoginPage
            onClick={onClick}
            showRegistrationForm={showRegistrationForm}
            modalRegistration={modalRegistration}
          />
        </Backdrop>
      )}
    </>
  );
};
