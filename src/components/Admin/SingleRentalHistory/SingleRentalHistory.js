import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as CarbonApi from "../../../apis/api";
import useApi from "../../../hooks/useApi";
import Layout from "../../Layout/Layout";

const SingleRentalHistory = () => {
  const { id } = useParams();
  const singleHistory = useApi(CarbonApi.getSingleRentalHistory);
  useEffect(() => {
    async function fetchData() {
      await singleHistory.request(id);
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  const downloadImages = () => {
    fetch("https://carbon-copies-restapi.herokuapp.com/download").then(
      (response) => {
        response.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = "images";
          a.click();
        });
        //window.location.href = response.url;
      }
    );
  };
  console.log("history", singleHistory.data);
  return (
    <Layout>
      {singleHistory.data && (
        <section class="dashboard">
          <section class="content">
            <div class="body">
              <div class="container">
                <div class="dashboard_window">
                  <div class="dashboard_form">
                    <div class="back_to_dashboard">
                      <strong>Single Rental History:</strong>
                    </div>
                    <div>
                      <button
                        style={{ padding: 5, margin: "5px 5px" }}
                        onClick={downloadImages}
                      >
                        Download User Images
                      </button>
                    </div>
                    <div class="show_product">
                      <table id="table-id">
                        <tr>
                          <th>Product Name</th>
                          <th>Renter Name</th>
                          <th>City</th>
                          <th>Product Price</th>
                        </tr>
                        <tbody>
                          <tr key={singleHistory.data.rentalHistory._id}>
                            <td>
                              {singleHistory.data.rentalHistory.productId &&
                                singleHistory.data.rentalHistory.productId
                                  .productName}
                            </td>
                            <td>
                              {singleHistory.data.rentalHistory.firstName +
                                " " +
                                singleHistory.data.rentalHistory.lastName}
                            </td>
                            <td>{singleHistory.data.rentalHistory.city}</td>
                            <td>${singleHistory.data.rentalHistory.price}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      )}
    </Layout>
  );
};

export default SingleRentalHistory;
