import React, { useEffect, useRef, useState } from "react";
import Helmet from "../components/Helmet";
import { Col, Row } from "reactstrap";
import "../styles/home.css";
import ProductCard from "../components/UI/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderRef = React.useRef(); // <-- (1) create Ref

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Helmet title="Nike. Just do It. Nike">
      <div className="home_container">
        <Row>
          <Col lg="12">
            <div className="home_tagline">
              <p className="subtitle">Just In</p>
              <h3>
                Nike Air
                <br />
                Max pulse
              </h3>
              <p>
                Inspired by the energy of London’s music scene comes the Air Max{" "}
                <br />
                Pulse. A tough silhouette infused with an unreal sensation of
                Air.
              </p>
              <div className="shop_button">
                <button>Shop Now</button>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="sale_tagline d-flex align-items-center justify-content-between">
              <span>The Latest & Greatest</span>

              <div className="slider_button d-flex align-items-center gap-3">
                <span>Shop</span>

                <button
                  onClick={() => {
                    sliderRef.current.slickPrev();
                  }}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    role="img"
                    width="24px"
                    height="24px"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M15.525 18.966L8.558 12l6.967-6.967"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={() => {
                    sliderRef.current.slickNext();
                  }}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    role="img"
                    width="24px"
                    height="24px"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M8.474 18.966L15.44 12 8.474 5.033"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </Col>
          <Slider className="product_scroll" ref={sliderRef} {...settings}>
            <Col lg="4">
              <ProductCard />
            </Col>
            <Col lg="4">
              <ProductCard />
            </Col>
            <Col lg="4">
              <ProductCard />
            </Col>
            <Col lg="4">
              <ProductCard />
            </Col>
          </Slider>
        </Row>
      </div>
    </Helmet>
  );
};

export default Home;
