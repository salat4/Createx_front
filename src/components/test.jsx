import { useState, useEffect } from "react";
import { getBlogs, getCourses, getEvents } from "../API";

export default function TestBack() {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    try {
      Blogs();
      async function Blogs() {
        const blogs = await getEvents();
        console.log(blogs);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {first &&
        first.map(({ about, name, category, image, profilePicture }) => {
          return (
            <div>
              <p>{about}</p>
              <p>{name}</p>
              <p>{category}</p>
              <img src={profilePicture} alt="qwe" />
            </div>
          );
        })}
    </div>
  );
}
