import axios from "axios";
const baseUrl = "https://notes-api-fullstackopen.herokuapp.com/api/login";

export const login = async (user) => {
  console.log(user);
  const res = await axios.post(baseUrl, user);
  console.log(res);
  return res.data;
};
