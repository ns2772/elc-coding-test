/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from "react";
import ProductsList from "./productsList";

class Home extends React.Component {
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Home
   */
  constructor() {
    super();
  }

  render() {
    return (
      <section id="home">
        <div className="content">
          <p>ELC Coding Test...</p>
          <ProductsList list={this.props.searchResults} />
        </div>
      </section>
    );
  }
}

// Export out the React Component
export default Home;
