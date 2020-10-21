import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { leafFrame } from "../img/leafframe.png";
import Rating from "../components/Rating";
import "./productstyle.css";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded product-item">
      <Link to={`/product/${product._id}`}>
        <div className="img-container">
          <Card.Img
            style={{
              height: "100%",
              width: "100%",
            }}
            src={product.image}
          />
        </div>
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">R{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
