/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React from "react";

class Menu extends React.Component {
  /**
   * Main constructor for the Menu Class
   * @memberof Menu
   */
  constructor() {
    super();
    this.state = {
      showingSearch: false,
      searchQuery: "",
    };
  }

  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  showSearchContainer(e) {
    e.preventDefault();
    if (this.state.showingSearch) {
      this.props.onSearchChange("");
      this.setState({ searchQuery: "" });
    }
    this.setState({
      showingSearch: !this.state.showingSearch,
    });
  }

  /**
   * Calls upon search change
   * @memberof Menu
   * @param e [Object] - the event from a text change handler
   */
  onSearch(e) {
    // Start Here
    // ...
    const searchQuery = e.target.value;

    this.props.onSearchChange(searchQuery);
    this.setState({ searchQuery });
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  render() {
    return (
      <header className="menu">
        <div className="menu-container">
          <div className="menu-holder">
            <h1>ELC</h1>
            <nav>
              <a href="#" className="nav-item">
                HOLIDAY
              </a>
              <a href="#" className="nav-item">
                WHAT'S NEW
              </a>
              <a href="#" className="nav-item">
                PRODUCTS
              </a>
              <a href="#" className="nav-item">
                BESTSELLERS
              </a>
              <a href="#" className="nav-item">
                GOODBYES
              </a>
              <a href="#" className="nav-item">
                STORES
              </a>
              <a href="#" className="nav-item">
                INSPIRATION
              </a>

              <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                <i className="material-icons search">search</i>
              </a>
            </nav>
          </div>
        </div>
        <div
          className={
            (this.state.showingSearch ? "showing " : "") + "search-container"
          }
        >
          <input
            type="text"
            value={this.state.searchQuery}
            onChange={(e) => this.onSearch(e)}
          />
          <a href="#" onClick={(e) => this.showSearchContainer(e)}>
            <i className="material-icons close">close</i>
          </a>
        </div>
      </header>
    );
  }
}

// Export out the React Component
export default Menu;
