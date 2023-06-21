/**
 * This file will hold the Products List content that lives in the home of the site
 *
 */
import React from "react";
import Product from "./product";

class ProductsList extends React.Component {
  /**
   * Main constructor for the ProductsList Class
   * @memberof ProductsList
   */
  constructor() {
    super();
  }

  render() {
    return (
      <section id="productsList">
        {this.props.list.map((product) => (
          <Product product={product} />
        ))}
      </section>
    );
  }
}

// Export out the React Component
export default ProductsList;
