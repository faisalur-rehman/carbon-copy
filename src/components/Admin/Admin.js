import React, { useEffect } from "react";
import * as CarbonApi from "../../apis/api";
import useApi from "../../hooks/useApi";
import Layout from "../Layout/Layout";
import "./Admin.css";
import AdminScreen from "./AdminScreen";
var fileDownload = require("react-file-download");

const initialValues = {
  productName: "",
  productDescription: "",
  productPrice: "",
  paymentLink: "",
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
    fileDownload(
      JSON.stringify(allOrders.data.rentalHistories),
      "allOrders.txt"
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
