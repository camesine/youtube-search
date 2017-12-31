import React, { Component } from 'react'
import './style.css'

class VideoListItem extends Component {

  render(props) {
    return (
      <li onClick={() => this.props.onSelectVideo(this.props.video)} >
        <div className="hide-on-small-only row">
          <div className="col m12 l5">
            <img className="right" src={this.props.video.snippet.thumbnails.default.url} alt="" />
          </div>
          <div className="col m12 l7 right">
            <h6 className="title" >{this.props.video.snippet.title}</h6>
            <p>{this.props.video.snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    )
  }

}

export default VideoListItem
