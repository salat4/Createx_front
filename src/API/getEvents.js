import axios from "axios";

export default async function getEvents() {
  try {
    const blogs = await axios.get(
      "https://createx1.herokuapp.com/createx/events"
    );
    return blogs.data;
  } catch (error) {
    console.log(error);
  }
}
