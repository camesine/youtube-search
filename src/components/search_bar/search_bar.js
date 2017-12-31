import React, { Component } from 'react';
import './style.css'

class SearchBar extends Component {
  render(props) {
    return (
      <div>
        <div className="row">
          <div className="col l6 no-float">
            <input onChange={event => {
              console.log(event.target.value)
              this.props.onSearchVideo(event.target.value)
            }} type="text" id="search" placeholder="Search" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar
