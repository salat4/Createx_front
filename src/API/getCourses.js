import axios from "axios";

export default async function getCourses(id) {
  try {
    const allCourses = await axios.get("/createx/courses");
    const search = allCourses.data.find((el) => el._id === id);

    if (search || !id) {
      return allCourses.data;
    } else {
      throw new Error("Course not found");
    }
  } catch (error) {
    return error;
  }
}
