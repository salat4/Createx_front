import Logo1 from "../../../images/logo-min.png";
import Logo2 from "../../../images/logo1-min.png";
import Logo3 from "../../../images/logo2-min.png";
import Logo4 from "../../../images/logo3-min.png";
import Logo5 from "../../../images/logo4-min.png";
import Logo6 from "../../../images/logo5-min.png";
import Logo7 from "../../../images/logo6-min.png";
import Logo8 from "../../../images/logo7-min.png";
import Logo9 from "../../../images/logo8-min.png";
import Logo10 from "../../../images/logo9-min.png";
import Logo11 from "../../../images/logo10-min.png";
import Logo12 from "../../../images/logo11-min.png";

export const Companies = () => {
  return (
    <section>
      <div className="container">
        <div className="companies-sections_container companies-title">
          <p className="title">Best jobs for you</p>
          <p className="sub-title">Our students work here</p>
          <div className="companies_logo-container">
            <ul className="companies_logo-list">
              <li>
                <img src={Logo1} alt="Logo1" />
              </li>
              <li>
                <img src={Logo2} alt="Logo2" />
              </li>
              <li>
                <img src={Logo3} alt="Logo3" />
              </li>
              <li>
                <img src={Logo4} alt="Logo4" />
              </li>
              <li>
                <img src={Logo5} alt="Logo5" />
              </li>
              <li>
                <img src={Logo6} alt="Logo6" />
              </li>
              <li>
                <img src={Logo7} alt="Logo7" />
              </li>
              <li>
                <img src={Logo8} alt="Logo8" />
              </li>
              <li>
                <img src={Logo9} alt="Logo9" />
              </li>
              <li>
                <img src={Logo10} alt="Logo10" />
              </li>
              <li>
                <img src={Logo11} alt="Logo11" />
              </li>
              <li>
                <img src={Logo12} alt="Logo12" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
