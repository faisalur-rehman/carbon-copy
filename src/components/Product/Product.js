import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import ProductScreen from "./ProductScreen";
import axios from "axios";
import useApi from "../../hooks/useApi";
import * as CarbonApi from "../../apis/api";

const initialValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  street: "",
  city: "",
  zipCode: "",
  dobMonth: "",
  dobDate: "",
  dobYear: "",
  heightFeet: "",
  heightInches: "",
  weight: "",
  hairColor: "",
  eyeColor: "",
  gender: "",
};

const Product = () => {
  const { id } = useParams();
  const singleProduct = useApi(CarbonApi.getSingleProduct);
  const [imagePicture, setImagePicture] = useState();
  const [imageSignature, setImageSignature] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        await singleProduct.request({ productId: id });
      } catch (_) {}
    }
    fetchData();
    //eslint-disable-next-line
  }, []);

  async function handleSubmit({ formValues }) {
    console.log("form values", formValues);
    let formData = new FormData();
    formData.append("image", imagePicture);
    formData.append("firstName", formValues.firstName);
    formData.append("middleName", formValues.middleName);
    formData.append("lastName", formValues.lastName);
    formData.append("street", formValues.street);
    formData.append("city", formValues.city);
    formData.append("zipCode", formValues.zipCode);
    formData.append("dobMonth", formValues.dobMonth);
    formData.append("dobDate", formValues.dobDate);
    formData.append("dobYear", formValues.dobYear);
    formData.append("heightFeet", formValues.heightFeet);
    formData.append("heightInches", formValues.heightInches);
    formData.append("weight", formValues.weight);
    formData.append("hairColor", formValues.hairColor);
    formData.append("eyeColor", formValues.eyeColor);
    formData.append("gender", formValues.gender);
    formData.append("productId", id);
    try {
      const { data } = await axios.post(
        `https://carbon-copies-restapi.herokuapp.com/rental-history/add`,
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": `multipart/form-data`,
          },
        }
      );
      console.log(data);
      //   setResponse(data.message);
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <div>
      <ProductScreen
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        setImagePicture={setImagePicture}
        setImageSignature={setImageSignature}
      />
    </div>
  );
};

export default Product;
