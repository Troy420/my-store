import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log("you clicked me")}
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("added to the cart");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  {" "}
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
          {/* Card Footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0 font-size-12">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">¥</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.2s linear;
  }

  .card-footer {
    background: transparent;
    transition: all 0.2s linear;
  }
  &:hover {
    .card {
      border: 0.1rem solid var(--richBlack);
      box-shadow: 2px 2px 5px 0px var(--richBlack);
    }
    .card-footer {
      border-top: 0.1rem solid var(--richBlack);
      background: rgb(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.2s linear;
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--richBlack);
    border: none;
    color: var(--cream);
    border-radius: 0.2rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.2s linear;
  }

  //.img-container:hover
  &:hover {
    .cart-btn {
      transform: translate(0, 0);
    }
    .card-img-top {
      transform: scale(1.2);
    }
  }

  .cart-btn:hover {
    color: var(--cream);
    background-color: var(--otterBrown);
    cursor: pointer;
  }
`;
