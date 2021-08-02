import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <div class="container">
          <div class="header_section">
            <h2>Carbon Copies</h2>
            <div class="nav_bar">
              <ul>
                <li>
                  <a href="cart.html">
                    Cart<i class="fas fa-shopping-cart"></i>
                  </a>
                </li>
                <li>
                  <a href="#1">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
