import React, { Component } from 'react'
import VideoListItem from '../video_list_item/index'

class VideoList extends Component {

  render(props) {
    return (
      <ul>
        {this.props.videos.map(video => <VideoListItem 
        key={video.id.videoId} 
        video={ video } 
        onSelectVideo={ this.props.onSelectVideo } /> )}
      </ul>
    )
  }

}

export default VideoList
