import getBlogs from "../API/getBlogs"
import { useEffect,useState } from "react";
import UserSvg from "../images/symbol-defs.svg";
import { Link } from "react-router-dom";
import {Header} from '../components/header.jsx'

export default function Blogs()  {

    const [blogs, setBlog] = useState(null)
    const [typeBlogs, setTypeBlogs] = useState(null)
    const [active, setActive] = useState("All")
    const [category, setCategory] = useState("All themes")
    const [list,setList] = useState(false)
    const [search,setSearch] = useState("")


    useEffect(() => {
        async function FetchBlogs() {
            const blog = await getBlogs()
            setBlog(blog)
            setTypeBlogs(blog)
            
        }
        
        FetchBlogs()
    },[])
    const filter = (condition, data) =>{ 
        return data.filter(item =>{
            return Object.keys(condition).every(key =>{
                return String(item[ key ]).toLowerCase().includes(
                    String( condition[ key ]).trim().toLowerCase()
                )
            })
        })
    }


    useEffect(()=>{
        
    let condition = {}

        if (active === "All" && category !== "All themes"){
             condition = { title: search, category: category}
        }
        else if (category === "All themes" && active !== "All"){
            condition = { typeofBlog: active,title: search}
        }
        else if (category === "All themes" && active === "All"){
            condition = { title: search}
        }
        else if (category !== "All themes" && active !== "All"){
            condition = {typeofBlog: active, title: search, category: category}
        }
        
        if(blogs){
            setTypeBlogs(filter(condition, blogs))
        }        
         
    },[blogs, category, search, active])

    function filterType(e) {
        setActive(e.target.innerText);
        
    }

    const showList = () =>{
        setList(!list)
    }
    const handleCategory = (e)=>{
        setCategory(e.target.id)
    }
    const handleSearch = (e)=>{
        setSearch(e.target.value);
    }

   

    return (
        <>
                <Header></Header>

        <div className="blogs container">
            <div className="blogs__header">
                <p className="blogs__header__text">Our blog</p>
                <h3 className="blogs__header__title">Createx School Journal</h3>
            </div>
            <div>
                <div className="blogs__hero__menu">
                    <ul className="blogs__hero__menu__list">
                        <li  className={`blogs__hero__menu__list__item ${"All" === active && "active"}`} onClick={filterType}>
                           <p>All</p> 
                        </li>
                        <li className={`blogs__hero__menu__list__item  ${"Article" === active && "active"}`} onClick={filterType}>
                            <svg width="16" height = "16" className="blogs__hero__menu__list__icon">
                                <use href={`${UserSvg}#icon-files`}></use>
                            </svg>
                            <p>Article</p>
                        </li>
                        <li className={`blogs__hero__menu__list__item  ${"Video" === active && "active"}`} onClick={filterType}>
                             <svg width="16" height = "16" className="blogs__hero__menu__list__icon">
                                <use href={`${UserSvg}#icon-play`}></use>
                            </svg>
                            <p>Video</p>
                        </li>
                        <li className={`blogs__hero__menu__list__item  ${"Podcast" === active && "active"}`} onClick={filterType}>
                             <svg width="16" height = "16" className="blogs__hero__menu__list__icon">
                                <use href={`${UserSvg}#icon-mic`}></use>
                            </svg>
                            <p>Podcast</p>
                        </li>
                    </ul>
                    <div className="blogs__hero__menu__category">
                        <p className="blogs__hero__menu__category__text">Blog category</p>
                        <div onClick={showList}>
                            <p>{category}</p>
                            <svg width="16" height="16" id="sort">
                                <use href={`${UserSvg}#icon-arrow-down-filter`} />
                            </svg>
                            {list && 
                            <div>
                                <ul className = "blogs__hero__menu__category__select" onClick={handleCategory}>
                                    <li id = "All themes">All themes</li>
                                    <li id="Marketing">Marketing</li>
                                    <li id="Development">Development</li>
                                    <li id="Design">Design</li>
                                    <li id="HR & Recruting">HR & Recruting</li>
                                    <li id="Management">Management</li>
                                </ul>
                            </div>}
                        </div>
                        <form className="blogs__hero__menu__category__form" >
                            <input placeholder="Search blog..." className="blogs__hero__menu__category__search" onChange={handleSearch}></input>
                            <svg width="16" height="16" className="blogs__hero__menu__category__search__icon">
                                <use href = {`${UserSvg}#icon-search`}>

                                </use>
                            </svg>

                        </form>
                    </div>
                </div>
                <ul className="blog__hero__list">
                    {typeBlogs &&
                        typeBlogs.map((blog) => (
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
                                    <Link className = "blog__hero__list__item__box__button" to = {{pathname:`/blogs/${blog._id}`}} state= {{blog, blogs}}>
                                        <p>Listen</p> 
                                        <svg width="24" height = "24" className="blog__hero__list__item__box__button--red">
                                            <use href={`${UserSvg}#icon-Right`}></use>
                                        </svg>
                                        </Link> }
                                       
                                    {blog.typeofBlog === "Video" &&
                                    <Link to = {{pathname:`/blogs/${blog._id}`}} state= {{blog, blogs}} className = "blog__hero__list__item__box__button"><p>Watch</p><svg width="24" height = "24" className="blog__hero__list__item__box__button--red" >
                                    <use href={`${UserSvg}#icon-Right`}></use>
                                </svg></Link>}
                                    {blog.typeofBlog === "Article" &&
                                    <Link to = {{pathname:`/blogs/${blog._id}`}} state= {{blog, blogs}} className = "blog__hero__list__item__box__button"><p>Read</p><svg width="24" height = "24"  className="blog__hero__list__item__box__button--red">
                                    <use href={`${UserSvg}#icon-Right`}></use>
                                </svg></Link>}  
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