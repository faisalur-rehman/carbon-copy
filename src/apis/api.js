import axios from "axios";

const api = axios.create({
  baseURL: "https://carbon-copies-restapi.herokuapp.com/",
});

const config = {
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTAwZTBiOWQ3NjM0MjFiYTg4NWI1YzYiLCJuYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNzk2OTYwOH0.UKme5W1Hn72wVgzER8HERTygB1KaH9nC8I8KzROjTS4",
  },
};

export function loginUser(data) {
  return api.post(`/user/login`, { ...data });
}
export function getAllProduct() {
  return api.get(`/product/get-all`, config);
}
export function getSingleProduct(data) {
  return api.post(`/product/get-single`, { ...data }, config);
}

export function registerUser(data) {
  return api.post(`/user/register`, data);
}
export function addRentalHistory(data) {
  return api.post(`/rental-history/add`, data);
}
export function getAllOrders() {
  return api.get(`/rental-history/get-all`, config);
}
export function addProduct(data) {
  return api.post(`/product/add`, data, config);
}
export function deleteRentalHistory(data) {
  return api.delete("/rental-history/delete", {
    data: { rentalHistoryId: data },
    headers: { Authorization: localStorage.getItem("token") },
  });
}
