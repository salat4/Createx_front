import getBlogs from "../API/getBlogs"
import { useEffect,useState } from "react";
import UserSvg from "../images/symbol-defs.svg";

export const Blogs = () => {

    const [blogs, setBlog] = useState(null)

    useEffect(() => {
        async function FetchBlogs() {
            const blog = await getBlogs()
            setBlog(blog)
        }
        FetchBlogs()
    },[])


    return (
        <div className="blogs container">
            <div className="blogs__header">
                <p className="blogs__header__text">Our blog</p>
                <h3 className="blogs__header__title">Createx School Journal</h3>
            </div>
            <div>
                <div className="blogs__hero__menu">
                    <ul className="blogs__hero__menu__list">
                        <li className="blogs__hero__menu__list__item active">
                            All
                        </li>
                        <li className="blogs__hero__menu__list__item">
                            <svg width="16" height = "16" className="blogs__hero__menu__list__icon">
                                <use href={`${UserSvg}#icon-files`}></use>
                            </svg>
                            Articles
                        </li>
                        <li className="blogs__hero__menu__list__item">
                             <svg width="16" height = "16" className="blogs__hero__menu__list__icon">
                                <use href={`${UserSvg}#icon-play`}></use>
                            </svg>
                            Videos
                        </li>
                        <li className="blogs__hero__menu__list__item">
                             <svg width="16" height = "16" className="blogs__hero__menu__list__icon">
                                <use href={`${UserSvg}#icon-mic`}></use>
                            </svg>
                            Podcasts
                        </li>
                    </ul>
                    <div className="blogs__hero__menu__category">
                        <p className="blogs__hero__menu__category__text">Blog category</p>
                        <select className="blogs__hero__menu__category__select">
                            <option value="">all themes</option>
                            <option value="1">Marketing</option>
                            <option value="2">Development</option>
                            <option value="3">Design</option>
                            <option value="4">HR & Recruting</option>
                            <option value="5">Management</option>
                        </select>
                        <form className="blogs__hero__menu__category__form" >
                            <input placeholder="Search blog..." className="blogs__hero__menu__category__search"></input>
                            <svg width="16" height="16" className="blogs__hero__menu__category__search__icon">
                                <use href = {`${UserSvg}#icon-search`}>

                                </use>
                            </svg>

                        </form>
                    </div>
                </div>
                <ul className="blog__hero__list">
                    {blogs &&
                        blogs.map((blog) => (
                            <li  key = {blog._id} className="blog__hero__list__item">
                                <img src={blog.image} alt={blog.image}></img>
                                <p className="blog__hero__list__item__type">{blog.typeofBlog}</p>
                                <div className="blog__hero__list__item__box">
                                    <ul className="blog__hero__list__item__b ox__top">
                                        <li>{blog.category}</li>
                                        <li>{blog.date}</li>
                                        {blog.duration && <li>{ blog.duration} min</li>} 
                                    </ul>
                                    <p className="blog__hero__list__item__box__title">{blog.title}</p>
                                    <p className="blog__hero__list__item__box__text">{blog.text}</p>
                                </div>
                                
                                
                            </li>
                    ))}
                </ul>
            </div>
        </div>
    )
} 