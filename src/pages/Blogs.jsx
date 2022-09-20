import getBlogs from "../API/getBlogs"
import { useEffect,useState } from "react";
import UserSvg from "../images/symbol-defs.svg";

export default function Blogs()  {

    const [blogs, setBlog] = useState(null)

    useEffect(() => {
        async function FetchBlogs() {
            const blog = await getBlogs()
            setBlog(blog)
        }
        FetchBlogs()
    },[])


    return (
        <>
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
                                <img src={blog.image} alt={blog.image} ></img>
                                <div className="blog__hero__list__item__type">
                                    
                                   
                                    { blog.typeofBlog === "Podcast" && 
                                        <svg width="16" height = "16" >
                                            <use href={`${UserSvg}#icon-mic`}></use>
                                        </svg>}
                                       
                                    {blog.typeofBlog === "Video" &&
                                    <svg width="16" height = "16" >
                                        <use href={`${UserSvg}#icon-play`}></use>
                                    </svg>}
                                    {blog.typeofBlog === "Article" &&
                                    <svg width="16" height = "16" >
                                        <use href={`${UserSvg}#icon-files`}></use>
                                    </svg>}    
                                    <p className = "blog__hero__list__item__type__text" >{blog.typeofBlog}</p>
                                </div>
                                
                                <div className="blog__hero__list__item__box">
                                    <ul className="blog__hero__list__item__box__top">
                                        <li className = "blog__hero__list__box__item">{blog.category}</li>
                                        <li className = "blog__hero__list__box__item">
                                            <svg width="16"height = "16"  >
                                                <use href={`${UserSvg}#icon-calendar`}></use>
                                            </svg>
                                            {blog.date}
                                        </li>
                                        {blog.duration && <li className = "blog__hero__list__box__item">
                                        <svg width="16"height = "16"  >
                                                <use href={`${UserSvg}#icon-clock`}></use>
                                            </svg>
                                            { blog.duration} min</li>} 
                                    </ul>
                                    <p className="blog__hero__list__item__box__title">{blog.title}</p>
                                    <p className="blog__hero__list__item__box__text">{blog.text}</p>
                                    { blog.typeofBlog === "Podcast" && 
                                    <div className = "blog__hero__list__item__box__button">
                                        <p>Listen</p> 
                                        <svg width="24" height = "24" className="blog__hero__list__item__box__button--red">
                                            <use href={`${UserSvg}#icon-Right`}></use>
                                        </svg>
                                        </div> }
                                       
                                    {blog.typeofBlog === "Video" &&
                                    <div className = "blog__hero__list__item__box__button"><p>Read</p><svg width="24" height = "24" className="blog__hero__list__item__box__button--red" >
                                    <use href={`${UserSvg}#icon-Right`}></use>
                                </svg></div>}
                                    {blog.typeofBlog === "Article" &&
                                    <div className = "blog__hero__list__item__box__button"><p>Watch</p><svg width="24" height = "24"  className="blog__hero__list__item__box__button--red">
                                    <use href={`${UserSvg}#icon-Right`}></use>
                                </svg></div>}  
                                </div>
                                
                                
                            </li>
                    ))}
                </ul>
            </div>
            <div className="blogs__pages">
                <ul className = "blogs__pages__list">
                    <li className = "blogs__pages__item active__pages" >
                        1
                    </li>
                    <li className = "blogs__pages__item">
                        2
                    </li>
                    <li className = "blogs__pages__item">
                        3
                    </li>
                    <li className = "blogs__pages__item">
                        4
                    </li>
                    <li className = "blogs__pages__item">
                    <svg width="24" height = "24" className="">
                                            <use href={`${UserSvg}#icon-Right`}></use>
                                        </svg>
                    </li>

                </ul>
            </div>
        </div>
        <div className="blogs__subscribe">
            <div className = "blogs__container container">
                <ul className="blogs__subscribe__list">
                    <li className="blogs__subscribe__text">
                        <p>
                            Want to get the best articles weekly?<br/>
                            Subscribe to our newsletter!
                        </p>
                    </li>
                    <li className="blogs__subscribe__form">
                        <form className="blogs__subscribe__form__item">
                            <input placeholder="Your working email" className = "blogs__subscribe__input"></input>
                        </form>
                        <button className = "blogs__subscribe__button" type= "submit">Subscribe</button>
                    </li>   
                    <li className="blogs__subscribe__check">
                        <input type = "checkbox" className="blogs__subscribe__checkbox__input"></input>
                        <p className = " blogs__subscribe__checkbox__text">I agree to receive communications from Createx Online School</p>
                    </li>
                </ul>
            </div>
            
    </div>
    </>
    )
} 