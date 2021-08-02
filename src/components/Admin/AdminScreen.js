import React, { useState } from "react";
import { Link } from "react-router-dom";
import SimpleModal from "../Modal/SimpleModal";

const AdminScreen = ({
  allOrders,
  initialValues,
  handleSubmit,
  addProduct,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <section class="dashboard">
        <section class="content">
          <div class="body">
            <div class="container">
              <div class="dashboard_window">
                <div class="dashboard_form">
                  <div class="back_to_dashboard">
                    <strong>All Rental Histories:</strong>
                  </div>
                  <div onClick={() => setOpenModal(true)}>
                    <button style={{ padding: 5, margin: "5px 0" }}>
                      Add Product
                    </button>
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
      <SimpleModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        response={addProduct}
      />
    </div>
  );
};

export default AdminScreen;
