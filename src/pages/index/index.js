import React, { Component } from "react";
import "./index.less";
import ReactFullpage from "@fullpage/react-fullpage";
import Section1 from "./section1";
import Section2 from "./section2";

const originalColors = [
  "#fff",
  "#fff",
  "#fc6c7c",
  "#435b71",
  "orange",
  "blue",
  "purple",
  "yellow",
];

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
    };
  }

  render() {
    return (
      <div className="App">
        <ReactFullpage
          debug /* Debug logging */
          // Required when using extensions
          // pluginWrapper={pluginWrapper}
          // fullpage options
          licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          anchors={["firstPage", "secondPage", "thirdPage", "fourthPage"]}
          // sectionSelector={SECTION_SEL}
          // onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          render={() => (
            <ReactFullpage.Wrapper>
              <Section1></Section1>
              <Section2></Section2>
              <div className="section" id="section3"></div>
              <div className="section" id="section4"></div>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}
