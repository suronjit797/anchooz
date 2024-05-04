import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { TProduct } from "../../interface/productInterface";
// import { Link } from "react-router-dom";
import RatingStars from "../../components/RatingStar";
import ImageGallery from "react-image-gallery";

const HomeProduct = () => {
  // const [products, setProducts] = useState<TProduct[]>([]);
  const [product, setProduct] = useState<TProduct>({
    _id: "",
    description: "",
    images: [],
    name: "",
    price: 0,
    ratings: 0,
    thumbnail: "",
  });

  const getProducts = async () => {
    try {
      const { data } = await axios.get("/json/products.json");
      if (data) {
        // setProducts(data);
        setProduct(data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="collection">
      <div className="section-header">
        <h2 className="text-center my-5"> Products </h2>
      </div>
      <div className="container">
        <Row className="my-4 g-4">
          <Col md={6}>
            {!!product?.images?.length && (
              <ImageGallery items={product?.images?.map((i) => ({ original: i, thumbnail: i }))} showNav={false} />
            )}
          </Col>
          <Col md={6}>
            <h5> {product.name} </h5>
            <small className="text-primary"> Brand: {product.brand} </small>
            <hr />
            <div style={{ fontSize: "14px" }}>
              <div className="d-flex">
                <div style={{ width: "150px" }}>
                  <b>Color</b>
                </div>
                <div> {product.color} </div>
              </div>
              <div className="d-flex">
                <div style={{ width: "150px" }}>
                  <b>Material</b>
                </div>
                <div> {product.material} </div>
              </div>
              <div className="d-flex">
                <div style={{ width: "150px" }}>
                  <b>Brand</b>
                </div>
                <div> {product.brand} </div>
              </div>
              <div className="d-flex">
                <div style={{ width: "150px" }}>
                  <b>Item Weight</b>
                </div>
                <div> {product.weight} </div>
              </div>

              <div className="d-flex">
                <div style={{ width: "150px" }}>
                  <b>Ratings</b>
                </div>
                <div>
                  <RatingStars rating={product.ratings} /> ( {product.ratings || 0}/5)
                </div>
              </div>
              <div className="d-flex">
                <div style={{ width: "150px" }}>
                  <b>Price</b>
                </div>
                <div className="fw-bold"> $ {product.price} </div>
              </div>
            </div>
            <hr />

            <p>
              {product.description?.split("\n")?.map((item) => (
                <p>{item}</p>
              ))}
            </p>

            <a href={product.amazon} target="_blank">
              <Button variant="primary"> Buy now</Button>
            </a>
          </Col>
        </Row>
      </div>
      {/* <Row lg={3} md={2} sm={1}>
        {products.map((product) => (
          <Col key={product._id}>
            <Link to={`product/${product._id}`} className="card">
              <div className="card_img">
                <img className="img-fluid" src={product.thumbnail} alt={product.name} />
              </div>
              <h2 className="card-title my-1">{product.name}</h2>
              <h2 className="card-price my-1">${product.price}</h2>
              <div className="card_star my-1">
                <span>
                  <RatingStars rating={product.ratings} />
                </span>
                <span className="card-rating">{product.ratings.toFixed(2)} </span>
              </div>
              <p className="card-description">
                {product.description.length > 150 ? product.description.slice(0, 150) + "..." : product.description}
              </p>
            </Link>
          </Col>
        ))}
      </Row> */}
    </section>
  );
};

export default HomeProduct;
