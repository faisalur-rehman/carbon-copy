import React, { useState } from "react";
import { registerUser } from "../../apis/api";
import useApi from "../../hooks/useApi";
import SignupForm from "./SignupForm";
import * as CarbonApi from "../../apis/api";

const initialValues = {
  name: "",
  email: "",
  userType: "",
  affiliateId: "",
};

const Signup = () => {
  const register = useApi(CarbonApi.registerUser);
  const [response, setResponse] = useState("");

  async function handleSubmit({ formValues }) {
    console.log("formvalues", formValues);
    try {
      const { data } = await register.request(formValues);
      console.log("register", data);
      setResponse(data.message);
    } catch (error) {
      console.log(error.response);
      setResponse(error.response.data.message);
    }
  }

  return (
    <div>
      <SignupForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        response={response}
      />
    </div>
  );
};

export default Signup;
