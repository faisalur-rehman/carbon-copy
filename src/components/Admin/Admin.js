import React, { useEffect } from "react";
import * as CarbonApi from "../../apis/api";
import useApi from "../../hooks/useApi";
import Layout from "../Layout/Layout";
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
        allOrders.request();
      } catch (error) {
        console.log(error.console);
      }
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  async function handleDelete(id) {
    try {
      await deleteProduct.request(id);
      window.location.reload();
    } catch (_) {}
  }

  async function handleSubmit({ formValues }) {
    try {
      await addProduct.request({ ...formValues });
    } catch (_) {}
  }
  const downloadFile = () => {
    fetch("https://carbon-copies-restapi.herokuapp.com/download").then(
      (response) => {
        response.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = "orders.txt";
          a.click();
        });
        //window.location.href = response.url;
      }
    );
  };

  return (
    <Layout>
      <AdminScreen
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        addProduct={addProduct}
        allOrders={allOrders}
        handleDelete={handleDelete}
        downloadFile={downloadFile}
      />
    </Layout>
  );
};

export default Admin;
