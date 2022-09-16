export const Subscribe = () => {
  return (
    <div className="subscribe-section">
      <div className=" container subscribe-container">
        <div className="subscribe-title__wrap">
          <h2 className="text subscribe-text">
            Don’t miss anything <br />
            <span className="title">
              Subscribe to the Createx School announcements
            </span>
          </h2>
        </div>
        <form className="subscribe-form" autoComplete="off">
            <input className="subscribe-form__input" type="email" placeholder="Your working email" />
            <button  className="gradient btn-hover subscribe-form__btn" type="sublit">Subscribe</button>
        </form>

      </div>
    </div>
  );
};
