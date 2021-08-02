import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/image/thumb01.jpg";
import img2 from "../../assets/image/thumb02.jpg";
import img3 from "../../assets/image/thumb03.jpg";

const Main = () => {
  return (
    <div>
      <section className="products_list">
        <div className="container">
          <div className="list">
            <div className="single_product">
              <h2>
                <Link to="">product 1</Link>
              </h2>
              <div className="img">
                <Link to="">
                  <img src={img1} alt="" />
                </Link>
              </div>
              <div className="price">
                <span>
                  price:<strong>$85</strong>
                </span>
              </div>
            </div>
            <div className="single_product">
              <h2>
                <Link to="">product 2</Link>
              </h2>
              <div className="img">
                <Link to="">
                  <img src={img2} alt="" />
                </Link>
              </div>
              <div className="price">
                <span>
                  price:<strong>$85</strong>
                </span>
              </div>
            </div>
            <div className="single_product">
              <h2>
                <Link to="">product 3</Link>
              </h2>
              <div className="img">
                <Link to="">
                  <img src={img3} alt="" />
                </Link>
              </div>
              <div className="price">
                <span>
                  price:<strong>$85</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
