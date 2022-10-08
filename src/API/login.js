import axios from "axios";

export default async function login(userEmail, userPwd) {
  try {
    const log = await axios.post(
      "https://createx1.herokuapp.com/createx/auth/login",
      {
        email: userEmail,
        password: userPwd,
      }
    );
    // if (log.data.code === 404) {
    //   console.log(log);
    //   return;
    // }
    console.log(log);
    return log.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
