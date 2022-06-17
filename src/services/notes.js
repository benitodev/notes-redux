import axios from "axios";
const baseUrl = "https://notes-api-fullstackopen.herokuapp.com/api/notes";

let token = null;
export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const getAll = async () => {
  const res = await axios.get(baseUrl);
  console.log(res);
  return res.data.content;
};

export const create = async (content) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const note = { content, important: false };
  const res = await axios.post(baseUrl, note, config);
  console.log(res);
  return res.data.content;
};
