import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import LoginForm from "./LoginForm";
import * as CarbonApi from "../../apis/api";
import useApi from "../../hooks/useApi";

const Login = () => {
  const history = useHistory();
  const { error, data, request } = useApi(CarbonApi.loginUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await request({ email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("isAdmin", data.isAdmin);

      data.isAdmin ? history.push("/admin") : history.push("/main");
    } catch (_) {}
  }
  data && console.log("data", data.token);
  return (
    <div>
      <LoginForm
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
      />
    </div>
  );
};

export default Login;
