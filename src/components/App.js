import React, { Component } from 'react';
import SearchBar from './search_bar/index'
import VideoList from './video_list/index'
import YTSearch from 'youtube-api-search'

class App extends Component {

  constructor(props) {

    super(props)

    this.state = { videos: [] }

    YTSearch({
      key: 'AIzaSyAsBr4YU8NHyO3yXP9-Ga5WVfk6mF14hDE', term: 'new year'}, (videos) => {
        this.setState({ videos })
    })

  }

  render() {
    return (
      <div>
        <SearchBar />

        <div className="row">
          <div className="col s4 m4 l4 right">
            <VideoList videos={ this.state.videos } />
          </div>
        </div>

      </div>

    );
  }
}

export default App
