import React, { Component } from 'react'
import './style.css'

class VideoListItem extends Component {

  render(props) {
    return (
      <li onClick={() => this.props.onSelectVideo(this.props.video)} >
        <div className="row">
          <div className="col-img left">
            <img src={this.props.video.snippet.thumbnails.default.url} alt="" />
          </div>
          <div className="col s7 m9 l7 left">
            <h6 className="title" >{this.props.video.snippet.title}</h6>
            <p>{this.props.video.snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    )
  }

}

export default VideoListItem
