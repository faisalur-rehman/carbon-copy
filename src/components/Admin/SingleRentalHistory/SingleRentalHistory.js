import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as CarbonApi from "../../../apis/api";
import useApi from "../../../hooks/useApi";
import Layout from "../../Layout/Layout";

var FileSaver = require("file-saver");

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
  function downloadImageIdSignature(img) {
    FileSaver.saveAs(
      `https://carbon-copies-restapi.herokuapp.com/${img}`,
      "histories.jpg"
    );
  }
  const downloadImages = (img) => {
    FileSaver.saveAs(
      `https://carbon-copies-restapi.herokuapp.com/${img}`,
      "histories.jpg"
    );
  };
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
                        onClick={() =>
                          downloadImages(
                            singleHistory.data.rentalHistory.idPicture
                          )
                        }
                      >
                        Download ID Picture
                      </button>
                      <button
                        style={{ padding: 5, margin: "5px 5px" }}
                        onClick={() =>
                          downloadImageIdSignature(
                            singleHistory.data.rentalHistory.idSignature
                          )
                        }
                      >
                        Download ID Signature
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
