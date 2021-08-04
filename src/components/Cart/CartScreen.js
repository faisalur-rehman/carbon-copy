import React from "react";

const CartScreen = ({ data }) => {
  const product = JSON.parse(localStorage.getItem("product"));
  const productDetail = JSON.parse(localStorage.getItem("productDetail"));
  console.log("product", product);
  return (
    <div>
      <section className="cart_section">
        <div className="container">
          <div className="cart_start">
            <h2>Cart:</h2>
            <table>
              <tr>
                <th>Product Name</th>
                <th>Product Weight(lbs)</th>
                <th>Product price</th>
                <th>Product Quantity</th>
              </tr>
              <tr>
                <td>{productDetail.productName}</td>
                <td>{product.weight}</td>
                <td>${product.price}</td>
                <td>1</td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <section className="cart_total">
        <div className="container">
          <div className="cart_box">
            <div className="center">
              <h2>Cart Total:</h2>
              <div className="price_box">
                <div className="sub_total">
                  <div className="calculation">
                    <span>Subtotal :</span>
                    <strong>${product.price}</strong>
                  </div>
                </div>

                <div className="total_price">
                  <div className="calculation">
                    <span>Total :</span>
                    <strong>${product.price}</strong>
                  </div>
                </div>
                <div className="checkout">
                  <a href={productDetail.paymentLink}>Proceed to check out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartScreen;
