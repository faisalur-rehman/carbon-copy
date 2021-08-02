import axios from "axios";

const api = axios.create({
  baseURL: "https://carbon-copies-restapi.herokuapp.com/",
});

// const config = {
//   headers: {
//     Authorization: localStorage.getItem("token"),
//   },
// };

export function loginUser(data) {
  return api.post(`/user/login`, { ...data });
}
export function registerUser(data) {
  return api.post(`/user/register`, data);
}
export function createPassword(data) {
  return api.post(`/user/create-password`, { ...data });
}
export function addAffiliate(data) {
  return api.post(
    `/affiliate/add`,
    { ...data },
    {
      headers: {
        Authorization: localStorage.getItem("adminToken"),
      },
    }
  );
}
