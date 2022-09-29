import Notiflix from "notiflix";
import { useState } from "react";
import requestMan from "../../../images/illustration (4).png";

export const RequestForm = () => {
  const [valueFullName, setValueFullName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valuePhone, setValuePhone] = useState("");

  const SubmitForm = (e) => {
    e.preventDefault();
    Notiflix.Notify.success(
      "Thank you! We will let you know when the event is available."
    );
    setValueFullName("");
    setValueEmail("");
    setValuePhone("");
  };

  const changeFalueForm = (e) => {
    const { id } = e.target;
    const { value } = e.target;
    switch (id) {
      case "fullName":
        setValueFullName(value);
        break;
      case "email":
        setValueEmail(value);
        break;
      case "phone":
        setValuePhone(value);
        break;

      default:
        break;
    }
  };

  return (
    <section>
      <div className="container">
        <div className="request_container">
          <div className="request_form-container">
            <p>Don’t miss the event</p>
            <p>Leave a request</p>
            <form onSubmit={SubmitForm} className="request_form">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="name"
                id="fullName"
                placeholder="Your full name"
                onChange={changeFalueForm}
                value={valueFullName}
                required={true}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your working email"
                onChange={changeFalueForm}
                value={valueEmail}
                required={true}
              />

              <label htmlFor="phone">Phone</label>
              <input
                type="phone"
                id="phone"
                placeholder="Your phone number"
                onChange={changeFalueForm}
                value={valuePhone}
                required={true}
              />

              <button onSubmit={SubmitForm} type="submit">
                Join the event
              </button>
            </form>
            <p>
              * You will receive a link to the online lecture in an email after
              registration.
            </p>
          </div>
          <div>
            <img src={requestMan} alt="man at the computer" width="600" />
          </div>
        </div>
      </div>
    </section>
  );
};
