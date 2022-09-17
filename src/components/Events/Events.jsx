import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import pathToSvg from "../../images/symbol-defs.svg";
import { getEvents } from "../../API";

export const Events = () => {
  const [category, setCategory] = useState("All themes");
  const [sort, setSort] = useState("newest");
  const [amount, setAmount] = useState(9);
  const [baseEvents, setBaseEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [listCategory, setListCategory] = useState(false);
  const [listData, setListData] = useState(false);
  const [listAmount, setListAmount] = useState(false);

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
        <div>
          <ul>
            {events &&
              events.map((i) => {
                return <li>{i.category}</li>;
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};
