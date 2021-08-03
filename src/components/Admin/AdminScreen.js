import React, { useState } from "react";
import { Link } from "react-router-dom";
import SimpleModal from "../Modal/SimpleModal";

const AdminScreen = ({
  allOrders,
  initialValues,
  handleSubmit,
  addProduct,
  handleDelete,
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
                  <div>
                    <button
                      style={{ padding: 5, margin: "5px 0" }}
                      onClick={() => setOpenModal(true)}
                    >
                      Add Product
                    </button>
                  </div>
                  <div class="show_product">
                    <table id="table-id">
                      <tr>
                        <th>Product Name</th>
                        <th>Renter Name</th>
                        <th>City</th>
                        <th>Product Price</th>
                        <th>Delete History</th>
                      </tr>
                      <tbody>
                        {allOrders.data &&
                          allOrders.data.rentalHistories.map((prod) => (
                            <tr key={prod._id}>
                              <td>{prod.productId.productName}</td>
                              <td>{prod.firstName + " " + prod.lastName}</td>
                              <td>{prod.city}</td>
                              <td>${prod.price}</td>
                              <td>
                                <Link>
                                  <i
                                    class="fas fa-trash-alt"
                                    onClick={() => handleDelete(prod._id)}
                                  ></i>
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
