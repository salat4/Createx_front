import axios from "axios";

export default async function getAbout() {
  try {
    const about = await axios.get("/createx/about");
    return about.data;
  } catch (error) {
    return error;
  }
}
