import React from "react";
import AppForm from "../app-form/AppForm";
import "./Signup.css";
import { Field } from "formik";

export default function SignupForm({
  allAffiliate,
  initialValues,
  handleSubmit,
  response,
}) {
  return (
    <div>
      <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
        <FormFields allAffiliate={allAffiliate} response={response} />
      </AppForm>
    </div>
  );
}

function FormFields({ allAffiliate, response }) {
  return (
    <section className="signup_section">
      <div className="signup_container">
        <div className="signup_form">
          <h3>Sign up</h3>
          <div className="signup_fields">
            <div className="input_field">
              <label>Email address</label>
              <Field name="email" type="email" placeholder="Email" />
            </div>
            <div className="input_field">
              <label>Name</label>
              <Field name="name" placeholder="Name" />
            </div>
            <div className="input_field">
              <label>Password</label>
              <Field name="password" placeholder="Password" />
            </div>
            <div className="submit_btn">
              <button type="submit">Sign Up</button>
            </div>
            <p style={{ color: "red" }}>{response}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
