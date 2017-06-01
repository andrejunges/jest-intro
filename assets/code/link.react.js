import React from "react";

export default class Link extends React.Component {
  constructor(props) {
    super(props);
    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this.state = { class: "normal" };
  }
  _onMouseEnter() {
    this.setState({ class: "hovered" });
  }
  _onMouseLeave() {
    this.setState({ class: "normal" });
  }
  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || "#"}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}
