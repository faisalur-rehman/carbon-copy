import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../apis/api";
import "./Login.css";
import LoginForm from "./LoginForm";
import * as CarbonApi from "../../apis/api";
import useApi from "../../hooks/useApi";

const Login = () => {
  const history = useHistory();
  const login = useApi(CarbonApi.loginUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await login.request({ email, password });
      console.log("data", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("isAdmin", data.isAdmin);
      // localStorage.setItem("userType", data.userType);

      // history.push("/landing");
    } catch (error) {
      console.log(error.response);
      setResponse(error.response.data.message);
    }
  }
  return (
    <div>
      <LoginForm
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        response={response}
      />
    </div>
  );
};

export default Login;
