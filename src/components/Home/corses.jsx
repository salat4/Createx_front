import PlaySvg from "../../images/image.jpg";

export const Corses = () => {
  return (
    <div className="corses-section">
      <div className="container">
        <div className="info-course-section">
          <h2 className="text">
            Ready to learn?
            <br />
            <span className="title">Featured Courses</span>
          </h2>
          <button className="button-outlined btn-courses btn-hover" type="button">
            View all courses
          </button>
        </div>

        <ul className="couses-list">
          <li className="couses-list__item">
            <img src={PlaySvg} alt="ff" width="214" height="214" className="coach-img" />
            <div>
              <p className="course-item__name">marketim</p>
              <h3 className="course-item__text">The Ultimate Google Ads Training Course </h3>
              <p className="courses-detail">
                <span className="price">$100</span>
                <span color=' var(--light-gray)'>|</span>
                by Jerome Bell
              </p>
            </div>
          </li>

          <li className="couses-list__item">
            <img src={PlaySvg} alt="ff" width="214" height="214" className="coach-img" />
            <div>
              <p className="course-item__name">marketim</p>
              <h3 className="course-item__text">The Ultimate Google Ads Training Course </h3>
              <p className="courses-detail">
                <span className="price">$100</span>
                <span color=' var(--light-gray)'>| </span>
                by Jerome Bell
              </p>
            </div>
          </li>

          <li className="couses-list__item">
            <img src={PlaySvg} alt="ff" width="214" height="214" className="coach-img" />
            <div>
              <p className="course-item__name">marketim</p>
              <h3 className="course-item__text">The Ultimate Google Ads Training Course </h3>
              <p className="courses-detail">
                <span className="price">$100</span>
                <span color=' var(--light-gray)'>|</span>
                by Jerome Bell
              </p>
            </div>
          </li>

          <li className="couses-list__item">
            <img src={PlaySvg} alt="ff" width="214" height="214" className="coach-img" />
            <div>
              <p className="course-item__name">marketim</p>
              <h3 className="course-item__text">The Ultimate Google Ads Training Course </h3>
              <p className="courses-detail">
                <span className="price">$100</span>
                <span color=' var(--light-gray)'>|</span>
                by Jerome Bell
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
