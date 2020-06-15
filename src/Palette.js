import React, { Component } from "react";
import "./Palette.css";
import ColorBox from "./ColorBox";

export default class Palette extends Component {
  render() {
    const ColorBoxes = this.props.colors.map((color) => (
      <ColorBox name={color.name} color={color.color} />
    ));
    return (
      <div className="Palette">
        <div className="Palette-colors">{ColorBoxes}</div>;
      </div>
    );
  }
}
