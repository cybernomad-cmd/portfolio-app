import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var query = event.target.value;
    this.setState({ value: query });
    this.props.onSearch(query);
  }

  render() {
    return (
      <div className="search-wrapper">
        <span className="search-icon">&#9906;</span>
        <input
          className="search-input"
          type="text"
          placeholder="Search by title or keyword..."
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;