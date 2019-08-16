import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class MeetupItem extends Component {
  render() {
    return (
      <li className="collection-item" key={this.props.item.id}>
        <NavLink to={`/meetups/${this.props.item.id}`}> {this.props.item.name}</NavLink>
      </li>
    );
  }
}

export default MeetupItem;
