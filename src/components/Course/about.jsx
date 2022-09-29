import Svg from "../../images/symbol-defs.svg";

export const AboutCourse = () => {
  return (
    <div className="about-course__section">
      <div className="container">
        <div className="about-course__text__wrap">
          <h3 className="about-course__title">About the course</h3>
          <p className="about-course__text">
            Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo
            aenean congue in sagittis, felis maecenas amet varius at.
            Pellentesque euismod in faucibus at elementum. Tellus maecenas
            libero est tempus sit cras at malesuada diam. Consequat senectus
            dictumst non hac dignissim montes, pretium, egestas molestie. Sed
            magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus
            nunc tincidunt tortor, mi nulla pellentesque
          </p>
          <h3 className="about-course__learn__title">You will learn:</h3>
          <ul className="course-about-list">
            <li className="about-list__item">
              <svg width="20" height="20">
                <use href={`${Svg}#icon-checked`} />
              </svg>
              <p className="about-list__item-text">
                A fermentum in morbi pretium aliquam adipiscing donec tempus.
              </p>
            </li>
            <li className="about-list__item">
              <svg width="16" height="20">
                <use href={`${Svg}#icon-checked`} />
              </svg>
              <p className="about-list__item-text">
                Vulputate placerat amet pulvinar lorem nisl.
              </p>
            </li>
            <li className="about-list__item">
              <svg width="16" height="20">
                <use href={`${Svg}#icon-checked`} />
              </svg>
              <p className="about-list__item-text">
                Consequat feugiat habitant gravida quisque elit bibendum id
                adipiscing sed.
              </p>
            </li>
            <li className="about-list__item">
              <svg width="17" height="20">
                <use href={`${Svg}#icon-checked`} />
              </svg>
              <p className="about-list__item-text">
                Etiam duis lobortis in fames ultrices commodo nibh.
              </p>
            </li>
            <li className="about-list__item">
              <svg width="17" height="20">
                <use href={`${Svg}#icon-checked`} />
              </svg>
              <p className="about-list__item-text">
                Tincidunt sagittis neque sem ac eget.
              </p>
            </li>
            <li className="about-list__item">
              <svg width="20" height="16">
                <use href={`${Svg}#icon-checked`} />
              </svg>
              <p className="about-list__item-text">
                Ultricies amet justo et eget quisque purus vulputate dapibus
                tortor.
              </p>
            </li>
          </ul>
        </div>
        <div>df</div>
      </div>
    </div>
  );
};
