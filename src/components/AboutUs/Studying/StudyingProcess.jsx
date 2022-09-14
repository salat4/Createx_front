import StudyingImage from "../../../images/illustration (5).png";

export const StudyingProcess = () => {
  return (
    <section>
      <div className="container">
        <div className="titles-for-sections">
          <p className="title">Studying process</p>
          <p className="sub-title">That’s how we do it</p>
          <div className="process-container">
            <div className="process-container_left">
              <div className="steps-container">
                <div className="step-container">
                  <p>STEP 1</p>
                  <p>Watching online video lectures</p>
                  <p>
                    Aliquam turpis viverra quam sit interdum blandit posuere
                    pellentesque. Nisl, imperdiet gravida massa neque.
                  </p>
                </div>
                <div className="step-container">
                  <p>STEP 2</p>
                  <p>Passing test</p>
                  <p>
                    Facilisis pellentesque quis accumsan ultricies. Eu egestas
                    eget feugiat lacus, amet, sollicitudin egestas laoreet
                    etiam.
                  </p>
                </div>
                <div className="step-container">
                  <p>STEP 3</p>
                  <p>Curator’s feedback</p>
                  <p>
                    Eget amet, enim pharetra leo egestas nisi, odio imperdiet
                    facilisis. Aliquet orci varius volutpat egestas facilisi
                    lobortis.
                  </p>
                </div>
                <div className="step-container">
                  <p>STEP 4</p>
                  <p>Corrections if needed</p>
                  <p>
                    Non tempor pulvinar tincidunt aliquam. Placerat ultricies
                    malesuada dui auctor.
                  </p>
                </div>
              </div>
            </div>

            <div className="image-container">
              <img
                src={StudyingImage}
                alt="illustration for studying section"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
