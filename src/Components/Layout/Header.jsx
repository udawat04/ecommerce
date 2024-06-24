import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../App.css";

const Header = () => {
  return (
    <>
      <div className="header d-none d-md-flex">
        <div className="header-section first">
          Environment Day Sale | Shop Now
        </div>
        <div className="header-section second">
          Free Shipping above ₹499 | All India Delivery
        </div>
        <div className="header-section third">
          Organic Fertilisers to Boost Plant Growth
        </div>
      </div>

      <div className="header-carousel d-md-none">
        <Carousel>
          <Carousel.Item>
            <div className="carousel-content">
              Environment Day Sale | Shop Now
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-content">
              Free Shipping above ₹499 | All India Delivery
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-content">
              Organic Fertilisers to Boost Plant Growth
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}





export default Header;



