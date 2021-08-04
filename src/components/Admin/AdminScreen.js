import React, { useState } from "react";
import { Link } from "react-router-dom";
import SimpleModal from "../Modal/SimpleModal";

const AdminScreen = ({
  allOrders,
  initialValues,
  handleSubmit,
  addProduct,
  handleDelete,
  downloadFile,
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
                    <button
                      style={{ padding: 5, margin: "5px 5px" }}
                      onClick={downloadFile}
                    >
                      Download All Orders (.txt)
                    </button>
                  </div>
                  <div class="show_product">
                    <table id="table-id">
                      <tr>
                        <th>Product Name</th>
                        <th>Renter Name</th>
                        <th>City</th>
                        <th>Product Price</th>
                        <th>
                          <i className="fas fa-eye"></i>
                        </th>
                        <th>Delete Product</th>
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
                                <Link to={`/history/${prod._id}`}>
                                  View History
                                </Link>
                              </td>
                              <td>
                                <i
                                  className="fas fa-trash-alt"
                                  onClick={() => handleDelete(prod._id)}
                                ></i>
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
