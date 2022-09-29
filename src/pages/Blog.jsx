import { useLocation } from "react-router-dom"
import UserSvg from "../images/symbol-defs.svg";

export default function Blog () {
   const location =  useLocation()
   const {blog} = location.state
    return(
        <div className = "container">
            <div className="blog__main">
                    <ul>
                        <li>
                            <span>
                            {blog.typeofBlog === "Podcast" && 
                            <svg width="16" height = "16" className="blogs__hero__menu__list__icon">
                                <use href={`${UserSvg}#icon-mic`}></use>
                            </svg>}
                            {blog.typeofBlog === "Article" && 
                            <svg width="16" height = "16" className="blogs__hero__menu__list__icon">
                                <use href={`${UserSvg}#icon-play`}></use>
                            </svg>
                            }
                            {blog.typeofBlog === "Video" && 
                            <svg width="16" height = "16" className="blogs__hero__menu__list__icon">
                                <use href={`${UserSvg}#icon-files`}></use>
                            </svg>
                            }
                            <p>{blog.typeofBlog}</p>
                            </span>
                        </li>
                        <li>
                            <p>{blog.category}</p>
                        </li>
                    </ul>
                    <h1>{blog.title}</h1>
                    <div>
                        <div>
                            <svg width="16"height = "16"  >
                                <use href={`${UserSvg}#icon-calendar`}></use>
                            </svg>
                            <p>{blog.date}</p>
                            {blog.duration && 
                                <div>
                                    <svg width="16"height = "16"  >
                                        <use href={`${UserSvg}#icon-clock`}></use>
                                    </svg>
                                    <p>{blog.duration} min</p>
                                </div>
                            }
                        </div>
                        <ul>
                            <li>
                                <p>Share:</p>   
                            </li>
                            <li>
                                <svg width="20" height="20" >
                                    <use href={`${UserSvg}#icon-facebook `}  />
                                </svg>
                            </li>
                            <li>
                                <svg width="20" height="20">
                                    <use href={`${UserSvg}#icon-Twitter`} />
                                </svg>
                            </li>
                            <li>
                                <svg width="20" height="20"  >
                                    <use href={`${UserSvg}#icon-linked-in`} />
                                </svg>
                            </li>
                        </ul>
                </div>
            </div>
            <div>
                <ul>

                </ul>
            </div>


        </div>
        
    )
}