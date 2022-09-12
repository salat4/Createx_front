import axios from "axios";

export default async function getCourses() {
  try {
    const blogs = await axios.get(
      "https://createx1.herokuapp.com/createx/courses"
    );
    return blogs.data;
  } catch (error) {
    console.log(error);
  }
}
