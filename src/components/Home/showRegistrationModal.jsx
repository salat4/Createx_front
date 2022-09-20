import Backdrop from "../Backdrop";
import RegisterPage from "./registration";

export const ShowRegModal = ({
  modalLogin,
  showLoginForm,
  showRegistrationForm,
  modalRegistration,
  onClick,
}) => {
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
          <RegisterPage
            onClick={onClick}
            modalLogin={modalLogin}
            showLoginForm={showLoginForm}
          />
        </Backdrop>
      )}
    </>
  );
};
