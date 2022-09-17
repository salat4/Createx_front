import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import pathToSvg from "../../images/symbol-defs.svg";
import { getEvents } from "../../API";

export const Events = () => {
  const [category, setCategory] = useState("All themes");
  const [sort, setSort] = useState("newest");
  const [amount, setAmount] = useState(9);
  const [events, setEvents] = useState([]);
  const [listCategory, setListCategory] = useState(false);
  const [listData, setListData] = useState(false);
  const [listAmount, setListAmount] = useState(false);

  useEffect(() => {
    try {
      getAllEvents();
      async function getAllEvents() {
        const allEvents = await getEvents();
        setEvents(allEvents);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const showList = (e) => {
    const { id } = e.target;
    switch (id) {
      case "category":
        setListCategory(!listCategory);
        setListData(false);
        setListAmount(false);
        break;
      case "sort":
        setListData(!listData);
        setListCategory(false);
        setListAmount(false);
        break;
      case "show":
        setListAmount(!listAmount);
        setListData(false);
        setListCategory(false);
        break;

      default:
        break;
    }
  };

  const changeCategory = (e) => {
    const { id } = e.target;
    setCategory(id);
    setListAmount(false);
    setListData(false);
    setListCategory(false);
  };

  const changeSortDate = (e) => {
    const { id } = e.target;
    setSort(id);
    setListAmount(false);
    setListData(false);
    setListCategory(false);
  };

  const changeAmount = (e) => {
    const { textContent } = e.target;
    setAmount(textContent);
    setListAmount(false);
    setListData(false);
    setListCategory(false);
  };

  return (
    <section>
      <div className="container">
        <div className="events_title-container">
          <p className="title">Our events</p>
          <p className="sub-title">Lectures, workshops & master-classes</p>
        </div>
        <div className="filter_container">
          <div className="filter_change-category">
            <p>Event category</p>
            <div onClick={showList}>
              <p id="category">{category}</p>
              <svg width="16" height="16" id="category">
                <use href={`${pathToSvg}#icon-arrow-down-filter`} />
              </svg>
              {events && listCategory && (
                <div>
                  <ul onClick={changeCategory} className="filter_category-list">
                    {events.map(({ category }) => {
                      return (
                        <li key={uuidv4()} id={category}>
                          {category}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="filter_sort">
            <p>Sort by</p>
            <div onClick={showList}>
              <p id="sort">{sort}</p>
              <svg width="16" height="16" id="sort">
                <use href={`${pathToSvg}#icon-arrow-down-filter`} />
              </svg>
              {events && listData && (
                <div>
                  <ul onClick={changeSortDate} className="filter_sort-list">
                    <li key={uuidv4()} id={"newest"}>
                      newest
                    </li>
                    <li key={uuidv4()} id={"boldest"}>
                      boldest
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="show-amount">
            <p>Show</p>
            <div onClick={showList}>
              <p id="show">{amount}</p>
              <svg width="16" height="16" id="show">
                <use href={`${pathToSvg}#icon-arrow-down-filter`} />
              </svg>
              {listAmount && (
                <ul onClick={changeAmount} className="filter_show-list">
                  <li id="show">3</li>
                  <li id="show">6</li>
                  <li id="show">9</li>
                </ul>
              )}
            </div>
            <span>events per page</span>
          </div>
          <div className="search">
            <input placeholder="Search event..." />
            <button className="search-button">
              <svg width="14" height="14">
                <use href={`${pathToSvg}#icon-search`} />
              </svg>
            </button>
          </div>
          <div className="button-view_container">
            <button className="button-view_flex">
              <svg width="18" height="18">
                <use href={`${pathToSvg}#icon-menu-column`} />
              </svg>
            </button>
            <button className="button-view_grid">
              <svg width="18" height="18">
                <use href={`${pathToSvg}#icon-menu-row`} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
