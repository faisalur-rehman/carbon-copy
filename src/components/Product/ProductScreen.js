import { Field } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import AppForm from "../app-form/AppForm";

export default function ProductScreen({
  handleSubmit,
  initialValues,
  setImagePicture,
  setImageSignature,
}) {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <FormFields
        setImagePicture={setImagePicture}
        setImageSignature={setImageSignature}
      />
    </AppForm>
  );
}

function FormFields({ setImageSignature, setImagePicture }) {
  function handleImageSignature({ target }) {
    setImageSignature(target.files[0]);
  }
  function handleImagePicture({ target }) {
    setImagePicture(target.files[0]);
  }
  return (
    <section class="product_section">
      <div class="container">
        <h2>Order product 1</h2>

        <div class="product_detail">
          <div class="single_product">
            <h3>
              ID Name <span>*</span>
            </h3>
            <div class="name_fields">
              <p>
                Name as you'D like it to appear on your ID,If no middle name,
                please enter a space or write n/a.
              </p>
            </div>
            <div class="name_fields">
              <label>First Name</label>
              <Field name="firstName" type="text" />
            </div>
            <div class="name_fields">
              <label>Middle Name</label>
              <Field name="middleName" type="text" />
            </div>
            <div class="name_fields">
              <label>Last Name</label>
              <Field name="lastName" type="text" />
            </div>
            <h3>
              ID Address <span>*</span>
            </h3>
            <p>
              Not Sure About the address,city,zip?use the
              <Link>zilow.com</Link>
            </p>
            <div class="name_fields">
              <label>Street</label>
              <Field name="street" type="text" />
            </div>
            <div class="name_fields">
              <label>city</label>
              <Field name="city" type="text" />
            </div>
            <div class="name_fields">
              <label>Zip Code</label>
              <Field name="zipCode" type="number" />
            </div>
          </div>

          <div class="single_product">
            <div class="name_fields">
              <label>
                ID DOB-Month <span>*</span>
              </label>
              <Field as="select" name="dobMonth">
                <option selected>select option</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </Field>
            </div>

            <div class="name_fields">
              <label>
                ID DOB-Day <span>*</span>
              </label>
              <Field as="select" name="dobDate">
                <option selected>select option</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </Field>
            </div>
            <div class="name_fields">
              <label>
                ID DOB-Year <span>*</span>
              </label>
              <Field as="select" name="dobYear">
                <option selected>select option</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
              </Field>
            </div>
            <div class="name_fields">
              <label>
                Height(Feet) <span>*</span>
              </label>
              <Field as="select" name="heightFeet">
                <option selected>select option</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Field>
            </div>
            <div class="name_fields">
              <label>
                Height(inches) <span>*</span>
              </label>
              <Field as="select" name="heightInches">
                <option selected>select option</option>
                <option value="32">32</option>
                <option value="36">36</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">50</option>
                <option value="55">55</option>
              </Field>
            </div>
            <div class="name_fields">
              <label>
                {" "}
                Weight(lbs) <span>*</span>
              </label>
              <Field as="select" name="weight">
                <option selected>select option</option>
                <option value="200">200</option>
                <option value="250">250</option>
                <option value="300">300</option>
              </Field>
            </div>
          </div>

          <div class="single_product">
            <h3>
              Hair Color <span>*</span>
            </h3>
            <div class="name_fields">
              <p>
                Yes We automatically format proper hair/eye color abbreviations
                per your state/provience.
              </p>
              <label>
                Hair Color <span>*</span>
              </label>
              <Field as="select" name="hairColor">
                <option disabled selected>
                  select option
                </option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Gray">Gray</option>
              </Field>
            </div>

            <div class="name_fields">
              <label>
                Eye Color <span>*</span>
              </label>
              <Field as="select" name="eyeColor">
                <option selected>select option</option>
                <option value="Brown">Brown</option>
                <option value="Blue">Blue</option>
                <option value="Black">Black</option>
              </Field>
            </div>
            <div class="name_fields">
              <label>
                Gender <span>*</span>
              </label>
              <div class="select_gender">
                <div class="gender">
                  <Field type="radio" name="gender" value="Male" />
                  <label>Male</label>
                </div>
                <div class="gender">
                  <Field type="radio" name="gender" value="Female" />
                  <label>female</label>
                </div>
              </div>
            </div>
            <h3>ID Picture</h3>
            <div class="name_fields">
              <label>ID Picture</label>
              <input type="file" onChange={handleImagePicture} />
              <label>(Max file size 256 MB)</label>
            </div>
            <h3>ID Signature</h3>
            <p>If none uploaded we will provide one.</p>
            <div class="name_fields">
              <label>ID signature</label>
              <input type="file" onChange={handleImageSignature} />
              <label>(Max file size 256 MB)</label>
            </div>
          </div>
        </div>
        <div class="cart_btn">
          <button type="submit">Add to cart</button>
        </div>
      </div>
    </section>
  );
}
