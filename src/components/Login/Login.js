import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../apis/api";
import "./Login.css";
import LoginForm from "./LoginForm";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password });
      console.log("data", data);
      localStorage.setItem("email", data.email);
      localStorage.setItem("name", data.name);
      localStorage.setItem("userType", data.userType);
      if (data.userType === "admin") {
        localStorage.setItem("adminToken", data.token);
      } else {
        localStorage.setItem("token", data.token);
      }
      history.push("/landing");
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
