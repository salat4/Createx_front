import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import pathToSvg from "../../images/symbol-defs.svg";
import { getEvents } from "../../API";
import { Subscribe } from "../Home/subscribe";

export const Events = ({ eventId }) => {
  const [category, setCategory] = useState("All themes");
  const [sort, setSort] = useState("newest");
  const [amount, setAmount] = useState(9);
  const [baseEvents, setBaseEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [listCategory, setListCategory] = useState(false);
  const [listData, setListData] = useState(false);
  const [listAmount, setListAmount] = useState(false);
  const [view, setView] = useState("flex");
  const [idE, setIdE] = useState(null);

  useEffect(() => {
    try {
      getAllEvents();
      async function getAllEvents() {
        const allEvents = await getEvents();
        setBaseEvents(allEvents);
        if (category !== "All themes") {
          const filterCategory = allEvents.filter(
            (c) => c.category === category
          );
          setEvents(filterCategory.slice(0, amount));
        } else {
          setEvents(allEvents.slice(0, amount));
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [amount, category]);

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
    setListCategory(false);
  };

  const changeSortDate = (e) => {
    const { id } = e.target;
    setSort(id);
    const date = events.map(({ dates }) => {
      const qwe = Date.parse(new Date(dates.date));
      return qwe;
    });
    if (id === "newest") {
      date.sort((a, b) => {
        return b - a;
      });
    } else {
      date.sort((a, b) => {
        return a - b;
      });
    }

    const da = date.map((item) => {
      const asd = new Date(item);
      return asd.toString(item).slice(4, 10);
    });
    const arr2 = [];
    for (let i of da) {
      const arr = events.filter((a) => a.dates.date === i);
      arr2.push(...arr);
    }
    setEvents(arr2);
    setListData(false);
  };

  const changeAmount = (e) => {
    const { textContent } = e.target;
    setAmount(textContent);
    setListAmount(false);
  };

  const searchValue = (e) => {
    const { value } = e.target;
    const res = [];
    for (let event of events) {
      for (let a of value) {
        for (let i of event.category) {
          if (a === i && !res.includes(event)) {
            res.push(event);
          }
        }
      }
    }
    if (res.length === 0) {
      setEvents(baseEvents);
      return;
    }
    setEvents(res);
  };

  const changeView = (e) => {
    const { id } = e.target;
    setView(id);
  };

  const More = (e) => {
    const { id } = e.target;
    if (idE === id || idE === "") {
      return;
    }
    setIdE(id);
    eventId(id);
  };

  return (
    <>
      <section className="events_container">
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
                    <ul
                      onClick={changeCategory}
                      className="filter_category-list"
                    >
                      <li id="All themes">All themes</li>
                      {baseEvents.map(({ category }) => {
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
              <input placeholder="Search event..." onChange={searchValue} />
              <button className="search-button">
                <svg width="14" height="14">
                  <use href={`${pathToSvg}#icon-search`} />
                </svg>
              </button>
            </div>
            <div onClick={changeView} className="button-view_container">
              <button
                id="flex"
                className={view === "flex" && "button-view_flex--active"}
              >
                <svg id="flex" width="18" height="18">
                  <use id="flex" href={`${pathToSvg}#icon-menu-column`} />
                </svg>
              </button>
              <button
                id="grid"
                className={view === "grid" && "button-view_grid--active"}
              >
                <svg id="grid" width="18" height="18">
                  <use id="grid" href={`${pathToSvg}#icon-menu-row`} />
                </svg>
              </button>
            </div>
          </div>
          <div>
            {events && view === "flex" && (
              <ul>
                {events.map((i) => {
                  return (
                    <li
                      onMouseMove={More}
                      id={i._id}
                      className="info_item"
                      key={uuidv4()}
                    >
                      <p>{i.dates.date.slice(-2)}</p>
                      <div className="info_date-container">
                        <p>{i.dates.date.slice(0, 3)}</p>
                        <p>{i.dates.time}</p>
                      </div>
                      <div className="info_text-container">
                        <p>{i.eventInfo}</p>
                        <p>{i.category}</p>
                      </div>
                      <Link
                        id={i._id}
                        to="/events/event"
                        className="info_button"
                      >
                        View more
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
            {events && view === "grid" && (
              <ul className="info_list--grid">
                {events.map((i) => {
                  return (
                    <li
                      className="info_item--grid"
                      onMouseMove={More}
                      id={i._id}
                      key={uuidv4()}
                    >
                      <p className="info_date--grid">
                        {i.dates.date.slice(-2)} {i.dates.date.slice(0, 3)}
                      </p>
                      <p className="info_time--grid">{i.dates.time}</p>
                      <p className="info_text--grid">{i.eventInfo}</p>
                      <p className="info_category--grid">{i.category}</p>
                      <Link id={i._id} className="info_button--grid">
                        View more
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};
