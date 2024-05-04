import banner from "../../assets/banner.webp";
import { Col, Row } from "react-bootstrap";

const HomeBanner = () => {
  return (
    <div className="homeBanner" style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Row className="align-items-center">
          <Col md={6} className='order-2 order-md-1'>
            <div className="text-white">
              <h2 className="mb-4"> Wrap Dispenser with Cutter and Labels for Kitchen Drawer </h2>
              <p>
                Our Bamboo Wall Wrap Dispenser, crafted from high-quality material, is both lightweight and durable.
                This four-in-one foil and plastic wrap dispenser with cutter provides stability on any counter and can
                easily fit into your kitchen drawer.
              </p>
            </div>
          </Col>
          <Col md={6} className='order-1 order-md-2'>
            <div className="p-4">
              <img src="/images/image5.webp" alt="" style={{ transform: "rotateY(180deg)" }} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeBanner;
