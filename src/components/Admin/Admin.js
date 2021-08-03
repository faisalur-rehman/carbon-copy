import React, { useEffect } from "react";
import * as CarbonApi from "../../apis/api";
import useApi from "../../hooks/useApi";

import "./Admin.css";
import AdminScreen from "./AdminScreen";

const initialValues = {
  productName: "",
  productDescription: "",
  productPrice: "",
};

const Admin = () => {
  const allOrders = useApi(CarbonApi.getAllOrders);
  const addProduct = useApi(CarbonApi.addProduct);
  const deleteProduct = useApi(CarbonApi.deleteRentalHistory);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = allOrders.request();
        console.log("all orders", data);
      } catch (error) {
        console.log(error.console);
      }
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  async function handleDelete(id) {
    try {
      const { data } = await deleteProduct.request(id);
      console.log("delete product", data);
      window.location.reload();
    } catch (_) {}
  }

  async function handleSubmit({ formValues }) {
    console.log("form", formValues);
    try {
      const { data } = await addProduct.request({ ...formValues });
      console.log("add product", data);
    } catch (_) {}
  }

  return (
    <div>
      <AdminScreen
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        addProduct={addProduct}
        allOrders={allOrders}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Admin;
