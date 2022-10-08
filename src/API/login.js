import axios from "axios";
import Notiflix from "notiflix";

export default async function login(userEmail, userPwd) {
  try {
    const log = await axios.post(
      "https://createx1.herokuapp.com/createx/auth/login",
      {
        email: userEmail,
        password: userPwd,
      }
    );
    return log.data;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure(error.response.data);
  }
}
