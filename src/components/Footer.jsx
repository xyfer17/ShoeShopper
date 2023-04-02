import React from "react";
import "../styles/footer.css";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6" className="footer_col">
            <h6 className="footer_title">FIND A STORE</h6>
            <h6 className="footer_title">BECOME A MEMBER</h6>
            <h6 className="footer_title">SIGN UP FOR EMAIL</h6>
            <h6 className="footer_title">Send Us Feedback</h6>
            <h6 className="footer_title">STUDENT DISCOUNTS</h6>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h6 className="footer_title">GET HELP</h6>
            <div className="footer_content">
              <span>Order Status</span>
            </div>
            <div className="footer_content">
              <span>Delivery</span>
            </div>
            <div className="footer_content">
              <span>Returns</span>
            </div>
            <div className="footer_content">
              <span>Payment Options</span>
            </div>
            <div className="footer_content">
              <span>Contact Us On Nike.com Inquires</span>
            </div>
            <div className="footer_content">
              <span>Contact Us On All Other Inquiries</span>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h6 className="footer_title">ABOUT NIKE</h6>
            <div className="footer_content">
              <span>News</span>
            </div>
            <div className="footer_content">
              <span>Careers</span>
            </div>
            <div className="footer_content">
              <span>Investors</span>
            </div>
            <div className="footer_content">
              <span>Sustainability</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
