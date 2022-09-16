import { Field } from "formik";
import { useState } from "react";

import Svg from "../../images/symbol-defs.svg";

export const ButtonShowAndHide = ({userPwd, Password }) => {
  const [type, setType] = useState("password");

  const showHide = () => {
    let currentType = type === "input" ? "password" : "input";
    setType(currentType);
  };

  return (
    <>
      {type === "input" ? (
        <svg onClick={showHide} className="show-btn">
          <use href={`${Svg}#icon-eye-close  `} />
        </svg>
      ) : (
        <svg onClick={showHide} className="hide-btn">
          <use href={`${Svg}#icon-eye `} />
        </svg>
      )}
      <Field
        className="auth-form__input"
        id="password"
        onInput={Password}
        name="password"
        type={type}
        placeholder="•••••••••••"
        value={userPwd}
      />
    </>
  );
};
