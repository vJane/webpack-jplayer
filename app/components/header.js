import React, { Component } from "react";
import "./header.less";

class Header extends Component {
  render() {
    return (
      <div className="components-header">
        <img src="/static/images/logo.jpg" width="40" />
        <h1 className="caption">React music player</h1>
      </div>
    );
  }
}

export default Header;
