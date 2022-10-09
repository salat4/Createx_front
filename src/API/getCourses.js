import axios from "axios";

export default async function getCourses() {
  try {
    const blogs = await axios.get("/createx/courses");
    return blogs.data;
  } catch (error) {
    return error;
  }
}
