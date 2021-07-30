import React, { useState, useEffect } from "react";
import { getAffiliate, registerUser } from "../../apis/api";
import SignupForm from "./SignupForm";

const initialValues = {
  name: "",
  email: "",
  userType: "",
  affiliateId: "",
};

const Signup = () => {
  const [allAffiliate, setAllAffiliate] = useState();
  const [response, setResponse] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getAffiliate();
        console.log("affiliate", data);
        setAllAffiliate(data.affliate);
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
  }, []);

  async function handleSubmit({ formValues }) {
    console.log("formvalues", formValues);
    try {
      const { data } = await registerUser(formValues);
      console.log("register", data);
      setResponse(data.message);
    } catch (error) {
      console.log(error.response);
      setResponse(error.response.data.message);
    }
  }

  return (
    <div>
      {allAffiliate && (
        <SignupForm
          allAffiliate={allAffiliate}
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          response={response}
        />
      )}
    </div>
  );
};

export default Signup;
