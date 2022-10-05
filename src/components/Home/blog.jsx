import Svg from "../../images/symbol-defs.svg";
import getBlogs from "../../API/getBlogs";
import { useEffect, useState } from "react";
import { Link  } from "react-router-dom";

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
          <button className="gradient blog__btn btn-hover">
            <Link to="/blogs" className="link">
              Go to blog
            </Link>
          </button>
        </div>

        <ul className="blog-list">
          {items &&
            items.map((item) => (
              <li key={item._id} className="blog-list__item">
                <img src={item.image} alt="podcast" />
                <div className="blog-list__type__wrap">
                  <svg fill="#424551" width="16" height="16">
                    {item.typeofBlog === "Podcast" && (
                      <use href={`${Svg}#icon-mic`}></use>
                    )}
                    {item.typeofBlog === "Video" && (
                      <use href={`${Svg}#icon-play`}></use>
                    )}
                    {item.typeofBlog === "Article" && (
                      <use href={`${Svg}#icon-files`}></use>
                    )}
                  </svg>
                  <p className="blog-list__item__type">{item.typeofBlog}</p>
                </div>
                <div className="blog-list__item__box">
                  <ul className="blog-list__item__box__top">
                    <li className="box-top__text">{item.category}</li>
                    <li className="box-top__text">
                      <span className="box-top__text__span"> | </span>
                      <svg className="box-top__svg" width="16" height="16">
                        <use href={`${Svg}#icon-calendar`}></use>
                      </svg>
                      {item.date}
                    </li>
                    {item.duration && (
                      <li className="box-top__text">
                        <span className="box-top__text__span"> | </span>
                        <svg className="box-top__svg" width="16" height="16">
                          <use href={`${Svg}#icon-clock`}></use>
                        </svg>
                        {item.duration} min
                      </li>
                    )}
                  </ul>
                  <p className="blog-list__item__box__title">{item.title}</p>
                  <p className="blog-list__item__box__text">{item.text}</p>
                  <Link className="blog-btn__more" to = {{pathname:`/blogs/${item._id}`}} state= {[item, blogs]} onClick = {(() => {window.scrollTo({top:0})})}>
                    Enjoy
                    <svg width="20" height="20" className="more-btn__svg">
                      <use href={`${Svg}#icon-Right`} />
                    </svg>
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
