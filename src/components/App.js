import React, { Component } from 'react';
import SearchBar from './search_bar/index'
import VideoList from './video_list/index'
import VideoDetail from './video_detail/index'
import YTSearch from 'youtube-api-search'

class App extends Component {

  constructor(props) {

    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch({
      key: 'AIzaSyAsBr4YU8NHyO3yXP9-Ga5WVfk6mF14hDE', term: 'chile'}, (videos) => {
        console.log(videos)
        this.setState({
          videos,
          selectedVideo: videos[0]
        })
    })

  }

  render() {
    return (
      <div>

        <SearchBar />

        <div className="row">
          
          <div className="col s12 m12 l8">
            <VideoDetail video={ this.state.selectedVideo } />
          </div>

          <div className="col s12 m12 l4">
            <VideoList onSelectVideo={video => this.setState({selectedVideo: video})} videos={ this.state.videos } />
          </div>
        </div>

      </div>

    );
  }
}

export default App
