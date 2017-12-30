import React, { Component } from 'react'
import VideoListItem from '../video_list_item/index'

class VideoList extends Component {

  render(props) {
    return (
      <ul>
        {this.props.videos.map(video => {
          console.log(video.snippet)
          return <VideoListItem key={video.id.videoId} video={ video } />
        } )}
      </ul>
    )
  }

}

export default VideoList
