import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import UserSvg from "../images/symbol-defs.svg";
import TeamSlider from "../components/Home/teamSlider";
import { Header } from "../components/header.jsx";
import { getBlogs } from "API";
import PageNotFound from "./NotFound";
export default function Blog() {
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(false);

  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      getAllBlogs();
      async function getAllBlogs() {
        try {
          const allBlogs = await getBlogs(params.blog_id);
          const oneBlog = allBlogs.find((el) => el._id === params.blog_id);
          setBlog(oneBlog);
          setBlogs(allBlogs);
          setError(false);
        } catch (error) {
          setError(true);
        }
      }
    } else {
      setBlog(location.state[0]);
      setBlogs(location.state[1]);
      setError(false);
    }
  }, [location.state, params.blog_id]);

  return (
    <>
      {blog && blogs && !error && (
        <>
          <Header></Header>
          <div className="container blog__container">
            <div className="blog__main">
              <ul className="blog__main__theme">
                <li className="blog__main__theme__item svg__single_blog">
                  {blog && blog.typeofBlog === "Podcast" && (
                    <svg width="16" height="16">
                      <use href={`${UserSvg}#icon-mic`}></use>
                    </svg>
                  )}
                  {blog && blog.typeofBlog === "Article" && (
                    <svg width="16" height="16">
                      <use href={`${UserSvg}#icon-play`}></use>
                    </svg>
                  )}
                  {blog && blog.typeofBlog === "Video" && (
                    <svg width="16" height="16">
                      <use href={`${UserSvg}#icon-files`}></use>
                    </svg>
                  )}
                </li>
                <li className="blog__main__theme__item after__single_post">
                  <p>{blog && blog.typeofBlog}</p>
                </li>

                <li className="blog__main__theme__item category__single_post">
                  <p>{blog && blog.category}</p>
                </li>
              </ul>
              <h1 className="blog__main__title">{blog && blog.title}</h1>
              <div className="blog__main__info">
                <div className="blog__main__info__left__box">
                  <svg width="16" height="16">
                    <use href={`${UserSvg}#icon-calendar`}></use>
                  </svg>
                  <p className="blog__main__info__left__box__data">
                    {blog && blog.date}
                  </p>
                  {blog && blog.duration && (
                    <>
                      <svg width="16" height="16">
                        <use href={`${UserSvg}#icon-clock`}></use>
                      </svg>
                      <p className="blog__main__info__left__box__duration">
                        {blog && blog.duration} min
                      </p>
                    </>
                  )}
                </div>
                <ul className="blog__main__info__right__box">
                  <li>
                    <p className="blog__main__info__right__box__share">
                      Share:
                    </p>
                  </li>
                  <li className="blog__main__info__right__box__svg">
                    <svg width="20" height="20">
                      <use href={`${UserSvg}#icon-facebook `} />
                    </svg>
                  </li>
                  <li className="blog__main__info__right__box__svg">
                    <svg width="20" height="20">
                      <use href={`${UserSvg}#icon-Twitter`} />
                    </svg>
                  </li>
                  <li className="blog__main__info__right__box__svg">
                    <svg width="20" height="20">
                      <use href={`${UserSvg}#icon-linked-in`} />
                    </svg>
                  </li>
                </ul>
              </div>
              {blog && (
                <div>
                  <img
                    className="blog__main__image"
                    src={blog.image}
                    alt={blog.image}
                  />
                  <ul>
                    {blog.link.map((single) => (
                      <li key={single} className="blog__main__text">
                        {single}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="blog__left__container">
              <input
                className="blog__left__input"
                placeholder="Search blog..."
              ></input>
              <div>
                <p className="blog__left__author__title">Author</p>
                <div className="blog__left__author">
                  <img
                    src={blog && blog.authorImage}
                    alt={blog && blog.authorImage}
                    width="100"
                    height="100"
                    className="blog__left__author__img"
                  ></img>
                  <ul className="blog__left__author__info">
                    <li className="blog__left__author__item__name">
                      Kristin Watson
                    </li>
                    <li className=" blog__left__author__item__course">
                      Curator of Marketing Course
                    </li>
                    <li>
                      <ul className="blog__left__author__link">
                        <li>
                          <svg
                            width="20"
                            height="20"
                            className="blog__left__author__link__svg"
                          >
                            <use href={`${UserSvg}#icon-facebook `} />
                          </svg>
                        </li>
                        <li>
                          <svg
                            width="20"
                            height="20"
                            className="blog__left__author__link__svg"
                          >
                            <use href={`${UserSvg}#icon-Twitter`} />
                          </svg>
                        </li>
                        <li>
                          <svg
                            width="20"
                            height="20"
                            className="blog__left__author__link__svg"
                          >
                            <use href={`${UserSvg}#icon-linked-in`} />
                          </svg>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="blog__left__trending__title">
                  {" "}
                  Trending Articles
                </p>
                <ul className="blog__left__trending">
                  <li className="blog__left__trending__item">
                    <img
                      src={blogs && blogs[0].image}
                      alt={blogs && blogs[0].image}
                      width="100"
                      height="100"
                    ></img>
                    <div className="blog__left__trending__box">
                      <ul className="blog__left__trending__info">
                        <li className="blog__left__trending__info__item">
                          <svg width="16" height="16">
                            <use href={`${UserSvg}#icon-calendar`}></use>
                          </svg>
                        </li>
                        <li className="blog__left__trending__info__item">
                          <p>{blogs && blogs[0].date}</p>
                        </li>
                      </ul>
                      <Link
                        to={{ pathname: `/blogs/${blogs && blogs[0]._id}` }}
                        state={blogs && [blogs[0], blogs]}
                        onClick={() => {
                          window.scrollTo({ top: 0 });
                        }}
                      >
                        {blogs && blogs[0].title}
                      </Link>
                    </div>
                  </li>
                  <li className="blog__left__trending__item">
                    <img
                      src={blogs && blogs[1].image}
                      alt={blogs && blogs[1].image}
                      width="100"
                      height="100"
                    ></img>
                    <div className="blog__left__trending__box">
                      <ul className="blog__left__trending__info">
                        <li className="blog__left__trending__info__item">
                          <svg width="16" height="16">
                            <use href={`${UserSvg}#icon-calendar`}></use>
                          </svg>
                        </li>
                        <li className="blog__left__trending__info__item">
                          <p>{blogs && blogs[1].date}</p>
                        </li>
                      </ul>
                      <Link
                        to={{ pathname: `/blogs/${blogs && blogs[1]._id}` }}
                        state={blogs && [blogs[1], blogs]}
                        onClick={() => {
                          window.scrollTo({ top: 0 });
                        }}
                      >
                        {blogs && blogs[1].title}
                      </Link>
                    </div>
                  </li>
                  <li className="blog__left__trending__item">
                    <img
                      src={blogs && blogs[2].image}
                      alt={blogs && blogs[2].image}
                      width="100"
                      height="100"
                    ></img>
                    <div className="blog__left__trending__box">
                      <ul className="blog__left__trending__info">
                        <li className="blog__left__trending__info__item">
                          <svg width="16" height="16">
                            <use href={`${UserSvg}#icon-calendar`}></use>
                          </svg>
                        </li>
                        <li className="blog__left__trending__info__item">
                          <p>{blogs && blogs[2].date}</p>
                        </li>
                      </ul>
                      <Link
                        to={{ pathname: `/blogs/${blogs && blogs[2]._id}` }}
                        state={blogs && [blogs[2], blogs]}
                        onClick={() => {
                          window.scrollTo({ top: 0 });
                        }}
                      >
                        {blogs && blogs[2].title}
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="blogs__subscribe">
            <div className="blogs__container container">
              <ul className="blogs__subscribe__list">
                <li className="blogs__subscribe__text">
                  <p>
                    Want to get the best articles weekly?
                    <br />
                    Subscribe to our newsletter!
                  </p>
                </li>
                <li className="blogs__subscribe__form">
                  <form className="blogs__subscribe__form__item">
                    <input
                      placeholder="Your working email"
                      className="blogs__subscribe__input"
                    ></input>
                  </form>
                  <button className="blogs__subscribe__button" type="submit">
                    Subscribe
                  </button>
                </li>
                <li className="blogs__subscribe__check">
                  <input
                    type="checkbox"
                    className="blogs__subscribe__checkbox__input"
                  ></input>
                  <p className=" blogs__subscribe__checkbox__text">
                    I agree to receive communications from Createx Online School
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="container slider blog__slider">
            <h2 className="text team-title">
              Our blog <br />
              <span className="title">You may also like</span>
            </h2>
            {blogs && (
              <TeamSlider props={blogs} count={3} page={"blogs"}></TeamSlider>
            )}

            <div className="blog__slider__box">
              <h3 className="blog__slider__text">
                Do you want more articles, podcasts and videos?
              </h3>
              <button
                className="blog__slider__button"
                onClick={() => {
                  navigate("/blogs");
                }}
              >
                Go to blog
              </button>
            </div>
          </div>
        </>
      )}

      {error && <PageNotFound title="Blog is not found" />}
    </>
  );
}
