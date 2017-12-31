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
          <iframe title={video.snippet.title} src={url} frameBorder="0"></iframe>
          <h3>{video.snippet.title}</h3>
        </div>
      </div>
    )
  }

}

export default VideoDetail

