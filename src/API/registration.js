import axios from "axios";

export default async function registration(userName, userEmail, userPwd) {
  try {
    const register = await axios.post(
      "https://createx1.herokuapp.com/createx/auth/register",
      { name: userName, email: userEmail, password: userPwd }
    );
    return register.data;
  } catch (error) {
    console.log(error);
  }
}
