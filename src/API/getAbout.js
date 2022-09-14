import axios from "axios";

export default async function getAbout() {
  try {
    const about = await axios.get(
      "https://createx1.herokuapp.com/createx/about"
    );
    return about.data;
  } catch (error) {
    console.log(error);
  }
}
