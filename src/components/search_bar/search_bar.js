import React, { Component } from 'react';
import './style.css'

class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = { term: '' }

  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="input-field">
            <input onChange={event => this.setState({ term: event.target.value })} type="search" placeholder="Buscar... "/>
            <i className="material-icons">close</i>
          </div>
        </div>
      </nav>
    );
  }
}

export default SearchBar
