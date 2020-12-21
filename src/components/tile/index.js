import React, { Component } from "react";
import PropTypes from "prop-types";

export default class index extends Component {
  render() {
    return (
      <div className="tile">
        <a href="#">
          <div className="tile-content">
            <div className="img-wrapper">
              <img src={this.props.url} alt="" />
            </div>
            <div className="name">{this.props.name}</div>
          </div>
        </a>
      </div>
    );
  }
}
index.prototype = {
  url: PropTypes.string,
  name: PropTypes.string,
};
