import ImageGallery from "react-image-gallery";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { TProduct } from "../../interface/productInterface";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import RatingStars from "../../components/RatingStar";

const initialState: TProduct = {
  _id: "",
  description: "",
  images: [],
  name: "",
  price: 0,
  ratings: 0,
  thumbnail: "",
};

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<TProduct>(initialState);
  // const [loading, setLoading] = useState<boolean>(false);

  const getProducts = async () => {
    try {
      const { data } = await axios.get("/json/products.json");
      if (data.length) {
        const result = data.find((p: TProduct) => p._id.toString() === productId?.toString());
        setProduct(result || initialState);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     const { name, email, message } = e.target as any;
  //     console.log({
  //       name: name.value,
  //       email: email.value,
  //       message: message.value,
  //       product: product.name,
  //       price: product.price,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <Layout>
      <div className="container">
        <Row className="my-4">
          <Col md={6}>
            {!!product?.images?.length && (
              <ImageGallery items={product?.images?.map((i) => ({ original: i, thumbnail: i }))} showNav={false} />
            )}
          </Col>
          <Col md={6}>
            <h1> {product.name} </h1>
            <p> {product.description} </p>
            <h4> Price: ${product.price} </h4>
            <div>
              Ratings: <RatingStars rating={product.ratings} /> ( {product.ratings || 0}/5)
            </div>
            {/* <hr /> */}
            {/* <div className="mt-4">
              <h5 className="text-center"> Buy Your Products </h5>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control required type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control required type="email" placeholder="Enter Your Email Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control required as="textarea" rows={4} placeholder="Enter Your Message" />
                </Form.Group>
                <div className="d-flex ">
                  <div className="ms-auto">
                    <Button type="submit" disabled={loading} variant="primary">
                      {loading ? "Loading..." : "Buy Now"}
                    </Button>
                  </div>
                </div>
              </Form>
            </div> */}
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default ProductDetails;
