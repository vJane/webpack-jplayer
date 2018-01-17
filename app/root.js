import React, { Component } from "react";
import Header from "./components/header";
import Player from "./pages/player";

class Root extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    $("#player").jPlayer({
      ready: function() {
        $(this)
          .jPlayer("setMedia", {
            mp3: "../static/images/diebian.mp3"
          })
          .jPlayer("play");
      },
      supplied: "mp3",
      wmode: "window"
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Player />
      </div>
    );
  }
}

export default Root;
