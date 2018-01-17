import React, { Component } from "react";
import "./progress.less";

class Progress extends Component {
  changeProgress(e) {
    let progressBar = this.refs.progressBar;
    let progress =
      (e.clientX - progressBar.getBoundingClientRect().left) /
      progressBar.clientWidth;
    this.props.onProgressChange && this.props.onProgressChange(progress);
  }
  render() {
    return (
      <div
        className="components-progress"
        onClick={e => this.changeProgress(e)}
        ref="progressBar"
      >
        <div id="player" />
        <div
          className="progress"
          style={{ width: `${this.props.progress}%` }}
        />
      </div>
    );
  }
}

export default Progress;
