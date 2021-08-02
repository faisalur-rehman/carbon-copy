import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as CarbonApi from "../../apis/api";
import useApi from "../../hooks/useApi";
import "./Admin.css";

const Admin = () => {
  const allOrders = useApi(CarbonApi.getAllOrders);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = allOrders.request();
        console.log("all orders", data);
      } catch (error) {
        console.log(error.console);
      }
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <section class="dashboard">
        <section class="content">
          <div class="body">
            <div class="container">
              <div class="dashboard_window">
                <div class="dashboard_form">
                  <div class="back_to_dashboard">
                    <strong>All Product:</strong>
                  </div>
                  <div class="list_selecter">
                    <select class="form-control" name="state" id="maxRows">
                      <option value="5000">Show ALL Rows</option>
                    </select>
                  </div>
                  <div class="show_product">
                    <table id="table-id">
                      <tr>
                        <th>Product Name</th>
                        <th>View Product</th>
                        <th>Edit Detail</th>
                        <th>Delete Product</th>
                      </tr>
                      <tbody>
                        {allOrders.data &&
                          allOrders.data.rentalHistories.map((prod) => (
                            <tr key={prod._id}>
                              <td>{prod.productTitle}</td>
                              <td>
                                <Link onclick="view_product_detail()">
                                  <i class="fas fa-eye"></i>
                                </Link>
                              </td>
                              <td>
                                <Link onclick="edit_product()">
                                  <i
                                    class="fa fa-edit"
                                    // onClick={() => handleModal(prod._id)}
                                  ></i>
                                </Link>
                              </td>
                              <td>
                                <Link>
                                  <i class="fas fa-trash-alt"></i>
                                </Link>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Admin;
