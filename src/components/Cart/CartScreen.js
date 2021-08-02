import React from "react";

const CartScreen = () => {
  return (
    <div>
      <section class="cart_section">
        <div class="container">
          <div class="cart_start">
            <h2>cart:</h2>
            <table>
              <tr>
                <th>Product Name</th>
                <th>Product quantity</th>
                <th>Product price</th>
              </tr>
              <tr>
                <td>Product Name</td>
                <td>Product Name</td>
                <td>Product Name</td>
              </tr>
              <tr>
                <td>Product Name</td>
                <td>Product Name</td>
                <td>Product Name</td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <section class="cart_total">
        <div class="container">
          <div class="cart_box">
            <div class="center">
              <h2>cart Total:</h2>
              <div class="price_box">
                <div class="sub_total">
                  <div class="calculation">
                    <span>subtotal :</span>
                    <strong>$36</strong>
                  </div>
                </div>

                <div class="shipping">
                  <div class="calculation">
                    <span>shipping charges :</span>
                    <strong>$36</strong>
                  </div>
                </div>
                <div class="total_price">
                  <div class="calculation">
                    <span>Total :</span>
                    <strong>$36</strong>
                  </div>
                </div>
                <div class="checkout">
                  <a href="checkout.html">proceed to check out</a>
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
