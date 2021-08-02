import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);
  function handleLogout() {
    localStorage.getItem("token") && localStorage.removeItem("token");
    history.push("/");
  }
  return (
    <div>
      <header>
        <div class="container">
          <div class="header_section">
            <h2>Carbon Copies</h2>
            <div class="nav_bar">
              <ul>
                <li>
                  <Link to="/cart">
                    Cart<i class="fas fa-shopping-cart"></i>
                  </Link>
                </li>
                <li>
                  {localStorage.getItem("token") && (
                    <p
                      style={{
                        cursor: "pointer",
                        fontSize: "1.4rem",
                        fontWeight: "bolder",
                      }}
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  )}
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
