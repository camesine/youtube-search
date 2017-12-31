import React, { Component } from 'react'
import './style.css'

class VideoDetail extends Component {

  render(props) {

    if (!this.props.video) {
      return <h1>Loading...</h1>
    }

    const video = this.props.video
    const url = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
      <div className="row">
        <div className="col l12">
          <div className="video-container" >
            <iframe width="853" height="480" title={video.snippet.title} src={url} frameBorder="0"></iframe>
          </div>
          <h5>{video.snippet.title}</h5>
          <p>{video.snippet.channelTitle}</p>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    )
  }

}

export default VideoDetail

