import axios from "axios";

const api = axios.create({
  baseURL: "https://signup-mern-restapi.herokuapp.com/",
});

// const config = {
//   headers: {
//     Authorization: localStorage.getItem("token"),
//   },
// };

export function getBlock() {
  return api.get(`/block`);
}
export function loginUser(data) {
  return api.post(`/user/login`, { ...data });
}
export function getAffiliate() {
  return api.get(`/affiliate/get-all`, {
    headers: {
      Authorization: localStorage.getItem("adminToken"),
    },
  });
}
export function registerUser(data) {
  return api.post(
    `/user/register`,
    { ...data },
    {
      headers: {
        Authorization: localStorage.getItem("adminToken"),
      },
    }
  );
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
