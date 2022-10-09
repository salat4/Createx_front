import axios from "axios";
import Notiflix from "notiflix";

export default async function login(userEmail, userPwd) {
  try {
    const log = await axios.post("/createx/auth/login", {
      email: userEmail,
      password: userPwd,
    });
    return log;
  } catch (error) {
    Notiflix.Notify.failure(error.response.data);
    return error;
  }
}
