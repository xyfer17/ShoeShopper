import React from "react";
import Helmet from "../components/Helmet";
import { Col, Row } from "reactstrap";
import "../styles/home.css";

const Home = () => {
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
        </Row>
      </div>
    </Helmet>
  );
};

export default Home;
