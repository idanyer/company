import React, { Component } from "react";

export default class section1 extends Component {
  render() {
    return (
      <div className="section" id="section1">
        <video id="myVideo" loop muted data-autoplay>
          <source
            src="http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/gongquhunjian_1080.min.mp4"
            type="video/mp4"
          />
        </video>
        <div className="overlay">
          <div className="overlay-content">
            <div className="slogan">
              <div className="slogan-title">和优秀的人&nbsp;做有挑战的事</div>
              <div className="slogan-subtitle">JOIN BYTEDANCE</div>
            </div>
            <div className="search">
              <input
                className="atsx-input"
                type="text"
                placeholder="请输入关键字搜索"
              />
              <button className="atsx-button" type="button">
                <svg
                  className="search_svg__icon"
                  viewBox="0 0 1024 1024"
                  width="1em"
                  height="1em"
                >
                  <defs>
                    <style></style>
                  </defs>
                  <path d="M769.13 673.493l144.683 144.683a21.333 21.333 0 0 1 0 30.165l-36.202 36.203a21.333 21.333 0 0 1-30.166 0L706.56 743.68A361.259 361.259 0 0 1 469.333 832c-200.298 0-362.666-162.368-362.666-362.667s162.368-362.666 362.666-362.666S832 269.035 832 469.333c0 75.712-23.19 146.006-62.87 204.16zM469.334 742.4C620.16 742.4 742.4 620.16 742.4 469.333S620.16 196.267 469.333 196.267s-273.066 122.24-273.066 273.066S318.507 742.4 469.333 742.4z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
