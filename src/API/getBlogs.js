import axios from "axios";

export default async function getBlogs() {
  try {
    const blogs = await axios.get("/createx/blogs");
    return blogs.data;
  } catch (error) {
    console.log(error);
  }
}
