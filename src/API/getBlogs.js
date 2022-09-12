import axios from "axios";

export default async function getBlogs() {
  try {
    const blogs = await axios.get(
      "https://createx1.herokuapp.com/createx/blogs"
    );
    return blogs.data;
  } catch (error) {
    console.log(error);
  }
}
