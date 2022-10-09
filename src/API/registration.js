import axios from "axios";
import Notiflix from "notiflix";

export default async function registration(userName, userEmail, userPwd) {
  try {
    const register = await axios.post("/createx/auth/register", {
      name: userName,
      email: userEmail,
      password: userPwd,
    });
    return register.data;
  } catch (error) {
    Notiflix.Notify.failure(error.response.data);
  }
}
