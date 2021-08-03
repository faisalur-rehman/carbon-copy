import React from "react";

const CartScreen = ({ data }) => {
  const product = JSON.parse(localStorage.getItem("product"));
  return (
    <div>
      <section class="cart_section">
        <div class="container">
          <div class="cart_start">
            <h2>cart:</h2>
            <table>
              <tr>
                <th>Product Name</th>
                <th>Product Weight(lbs)</th>
                <th>Product price</th>
                <th>Product Quantity</th>
              </tr>
              <tr>
                <td>{product.product && data.product.productName}</td>
                <td>{product.weight}</td>
                <td>{product.price}</td>
                <td>2</td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <section class="cart_total">
        <div class="container">
          <div class="cart_box">
            <div class="center">
              <h2>Cart Total:</h2>
              <div class="price_box">
                <div class="sub_total">
                  <div class="calculation">
                    <span>Subtotal :</span>
                    <strong>${product.price}</strong>
                  </div>
                </div>

                <div class="shipping">
                  <div class="calculation">
                    <span>Shipping charges :</span>
                    <strong>$20</strong>
                  </div>
                </div>
                <div class="total_price">
                  <div class="calculation">
                    <span>Total :</span>
                    <strong>${product.price + 20}</strong>
                  </div>
                </div>
                <div class="checkout">
                  <a href="https://www.blockonomics.co/pay-url/43e335e76b0949cb">
                    Proceed to check out
                  </a>
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
