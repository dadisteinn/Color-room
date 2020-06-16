import React, { Component } from "react";
import "./Palette.css";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };

    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const ColorBoxes = colors[level].map((color) => (
      <ColorBox name={color.name} color={color.hex} />
    ));
    return (
      <div className="Palette">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
        <div className="Palette-colors">{ColorBoxes}</div>;
      </div>
    );
  }
}
