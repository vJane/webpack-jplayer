import React, { Component } from "react";
import Progress from "../components/progress";
import "./player.less";

let duration = null;
class Player extends Component {
  constructor(props) {
    super();
    this.state = {
      progress: "-"
    };
    this.progressChangeHandler = this.progressChangeHandler.bind(this);
  }
  componentDidMount() {
    $("#player").bind($.jPlayer.event.timeupdate, e => {
      duration = e.jPlayer.status.duration;
      this.setState({
        progress: e.jPlayer.status.currentPercentAbsolute
      });
    });
  }
  componentWillUnMount() {
    $("#player").unbind($.jPlayer.event.timeupdate);
  }
  progressChangeHandler(progress) {
    $("#player").jPlayer("play", duration * progress);
    this.setState({
      progress: progress * 100
    });
  }
  render() {
    return (
      <div>
        <Progress
          progress={this.state.progress}
          onProgressChange={this.progressChangeHandler}
        />
      </div>
    );
  }
}

export default Player;
