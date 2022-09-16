import Svg from "../../images/symbol-defs.svg";
import getBlogs from "../../API/getBlogs";
import { useEffect, useState } from "react";

export const Blog = () => {
  const [blogs, setBlogs] = useState(null);
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function FetchBlogs() {
      const blog = await getBlogs();
      setBlogs(blog);
    }
    FetchBlogs();
  }, []);

  useEffect(() => {
    if (blogs !== null) {
      const blogsToRender = blogs.slice(0, 3);
      setItems(blogsToRender);
    }
  }, [blogs]);

  return (
    <div className="blog-section">
      <div className=" container">
        <div className="blog-title__wrap">
          <h2 className="text ">
            Our blog <br />
            <span className="title">Latest posts</span>
          </h2>
          <button className="gradient blog__btn btn-hover">Go to blog</button>
        </div>

        <ul className="blog-list">
          {items &&
            items.map((item) => (
              <li key={item._id} className="blog-list__item">
                <img src={item.image} alt="podcast" />
                <div className="blog-list__type__wrap">
                  <svg width="16" height="16" fill="#424551">
                    <use href={`${Svg}#icon-mic`} />
                  </svg>
                  <p className="blog-list__item__type">
                    {item.typeofBlog}
                  </p>
                </div>
                <div className="blog-list__item__box">
                  <ul className="blog-list__item__box__top">
                    <li className="box-top__text">{item.category}</li>
                    <li className="box-top__text">
                      <span className="box-top__text__span"> | </span>
                      {item.date}
                    </li>
                    {item.duration && (
                      <li className="box-top__text">
                        <span className="box-top__text__span"> | </span>
                        {item.duration} min
                      </li>
                    )}
                  </ul>
                  <p className="blog-list__item__box__title">
                    {item.title}
                  </p>
                  <p className="blog-list__item__box__text">
                    {item.text}
                  </p>
                  <button className="blog-btn__more">
                    Enjoy
                    <svg width="20" height="20" className="more-btn__svg">
                      <use href={`${Svg}#icon-Right`} />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
