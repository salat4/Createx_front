import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export const Backdrop = ({ children, onClick }) => {
  useEffect(() => {
    const toggleBackdropKeyboard = (e) => {
      if (e.key === "Escape") {
        onClick();
      }

      return;
    };
    window.addEventListener("keydown", toggleBackdropKeyboard);

    return () => {
      window.removeEventListener("keydown", toggleBackdropKeyboard);
    };
  }, [onClick]);

  const toggleBackdrop = (e) => {
    if (e.target.className === "backdrop") {
      onClick();
    }
    
  };

  return createPortal(
    <div onClick={toggleBackdrop} className="backdrop">
      {children}
    </div>,
    modalRoot
  );
};
