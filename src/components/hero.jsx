import PlaySvg from "../images/small.png";

export const Hero = () => {
  return (
    <div>
      <button className="">
       <img src={PlaySvg} alt="zx" />
        Play showreel
      </button>
      <h1>Enjoy studying with Createx Online Courses</h1>

      <ul>
        <li>
          <button>About us</button>
        </li>
        <li>
          <button>Explore courses</button>
        </li>
      </ul>

      <div className="benefit">
        <ul>
          <li>
            <span>1200</span>
            <p>Students graduated</p>
          </li>
          <li>
            <span>84</span>
            <p>Completed courses</p>
          </li>

          <li>
            <span>16</span>
            <p>Qualified tutors</p>
          </li>
          <li>
            <span>5</span>
            <p>Years of experience</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
