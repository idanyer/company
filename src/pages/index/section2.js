import React, { Component } from "react";
import Tile from "../../components/tile";

export default class section2 extends Component {
  render() {
    return (
      <div className="section" id="section2">
        <div className="main">
          <div className="heading">
            <div className="heading-back">WHATS YOUR PASSION</div>
            <div className="heading-front">探索你感兴趣的职位</div>
          </div>
          <div className="imglist">
            <Tile
              url="http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/jobslight/rd2.png"
              name="研发"
            ></Tile>
          </div>
          <div className="imglist"></div>
        </div>
      </div>
    );
  }
}
