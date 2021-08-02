import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/image/thumb01.jpg";
import img2 from "../../assets/image/thumb02.jpg";
import img3 from "../../assets/image/thumb03.jpg";

const MainScreen = ({ data }) => {
  console.log("data", data);
  return (
    <div>
      <section className="products_list">
        <div className="container">
          <div className="list">
            {data.products.map((product, index) => (
              <div className="single_product">
                <h2>
                  <Link to={`/product/${product._id}`}>
                    {product.productName}
                  </Link>
                </h2>
                <div className="img">
                  <Link to={`/product/${product._id}`}>
                    <img src={img1} alt="" />
                  </Link>
                </div>
                <div className="price">
                  <span>
                    price:<strong>${product.productPrice}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainScreen;
