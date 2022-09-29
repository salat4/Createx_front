import { useState } from "react";
import Svg from "../../images/symbol-defs.svg";

export const Courses = () => {

    const [search,setSearch] = useState("")

    const handleSearch = (e)=>{
        setSearch(e.target.value);
    }
  return (
    <div className="courses-section">
      <div className="container">
        <h2 className="text courses-section-title">
          Enjoy your studying!
          <br />
          <span className="title">Our online courses</span>
        </h2>

        <div>
          <ul>
            <li>
              <button>
                All
                <span></span>
              </button>
            </li>
            <li>
              <button>
                Marketing
                <span></span>
              </button>
            </li>
            <li>
              <button>
                Management
                <span></span>
              </button>
            </li>
            <li>
              <button>
                HR & Recruting
                <span></span>
              </button>
            </li>
            <li>
              <button>
                Design
                <span></span>
              </button>
            </li>
            <li>
              <button>
                Development
                <span></span>
              </button>
            </li>
          </ul>

          <form className="blogs__hero__menu__category__form">
            <input
              placeholder="Search blog..."
              className="blogs__hero__menu__category__search"
              onChange={handleSearch}
            ></input>
            <svg
              width="16"
              height="16"
              className="blogs__hero__menu__category__search__icon"
            >
              <use href={`${Svg}#icon-search`}></use>
            </svg>
          </form>
        </div>

        <div>
            
        </div>
      </div>
    </div>
  );
};
