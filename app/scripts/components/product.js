/**
 * This file will hold the Product content that lives in the ProductsList component of the site
 *
 */
import React from "react";

class Product extends React.Component {
  /**
   * Main constructor for the Product Class
   * @memberof Product
   */
  constructor() {
    super();
  }

  render() {
    const { picture, name, price, about, tags } = this.props.product;

    return (
      <section className="product">
        <div className="product-content-box">
          <div className="product-img">
            <img src={picture} alt={name} />
          </div>
          <div className="product-name">{name}</div>
          <hr />
          <div className="product-price">${price}</div>
          <hr />
          <div className="product-about">{about}</div>
          <div className="product-tags">{tags.join(", ")}</div>
        </div>
      </section>
    );
  }
}

// Export out the React Component
export default Product;
