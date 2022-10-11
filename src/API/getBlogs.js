import axios from "axios";

export default async function getBlogs(id) {
  try {
    const blogs = await axios.get("/createx/blogs");
    const search = blogs.data.find((el) => el._id === id);

    if (search || !id) {
      return blogs.data;
    } else {
      throw new Error("Blog not found");
    }
  } catch (error) {
    return error;
  }
}
