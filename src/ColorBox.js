import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };

    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, color } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ backgroundColor: color }}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ backgroundColor: color }}
          />

          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p>{color}</p>
          </div>

          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>

            <button className="copy-btn">Copy</button>
          </div>

          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}
