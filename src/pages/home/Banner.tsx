import { Col, Row } from "react-bootstrap";
import "./home.css";

export default function Banner() {
  return (
    <div>
      <Row className="hero g-5">
        <Col md={5} className="order-md-2">
          <div className="hero_img">
            <img src="images/image5.webp" className="img-fluid" alt="main-camera" />
          </div>
        </Col>
        <Col md={7} className="order-md-1">
          <div className="hero_text">
            <h1 className="fw-bold">Start your Journey with OVI</h1>
            <p className="my-3">
              Make your day memorable and capture in a frame with our FUJFFILM camera. You will find may kinds of camera
              hare.
            </p>
            <div>
              <a href="#products" className="primary_btn">
                <span> Buy Products</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <section className="d-flex align-items-center justify-content-between my-5">
        <img src="images/logos/Alibaba.svg" alt="Alibaba" />
        <img src="images/logos/Amazon.svg" alt="Amazon" />
        <img src="images/logos/Daraz.svg" alt="Daraz" />
        <img src="images/logos/Ebay.svg" alt="Ebay" />
        <img src="images/logos/Rakuten.svg" alt="Rakuten" />
        <img src="images/logos/Target.svg" alt="Target" />
        <img src="images/logos/Walmart.svg" alt="Walmart" />
      </section>
    </div>
  );
}
