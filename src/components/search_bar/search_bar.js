import React, { Component } from 'react';
import './style.css'

class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = { term: '' }

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col l6 no-float">
            <input type="text" id="search" placeholder="Search" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar
