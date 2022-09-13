import axios from "axios";

export default async function Registration(userName, userEmail, userPwd) {
  try {
    const registration = await axios.post(
      "https://createx1.herokuapp.com/createx/auth/register",
      { name: userName, email: userEmail, password: userPwd }
    );
    return registration.data;
  } catch (error) {
    console.log(error);
  }
}