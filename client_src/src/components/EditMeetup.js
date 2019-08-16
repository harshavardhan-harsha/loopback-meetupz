import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class EditMeetup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      city: "",
      address: ""
    };
  }

  componentWillMount() {
    this.getMeetupDetails();
  }
  getMeetupDetails() {
    let meetupid = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/api/meetups/${meetupid}`)
      .then(res => {
        this.setState({ id: res.data.id, name: res.data.name, city: res.data.city, address: res.data.address }, () => {
          console.log(this.state);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  editMeetup(newMeetup) {
    axios
      .request({
        method: "put",
        url: `http://localhost:3000/api/meetups/${this.state.id}`,
        data: newMeetup
      })
      .then(response => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  }
  onSubmit(e) {
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    };
    this.editMeetup(newMeetup);
    //console.log(this.refs.name.value);
    e.preventDefault();
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }
  render() {
    return (
      <div>
        <br />
        <NavLink to="/" className="btn grey">
          Back
        </NavLink>
        <h1>Edit Meetup</h1>
        <form action="" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange.bind(this)} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="city" ref="city" value={this.state.city} onChange={this.handleInputChange.bind(this)} />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field">
            <input type="text" name="address" ref="address" value={this.state.address} onChange={this.handleInputChange.bind(this)} />
            <label htmlFor="address">Address</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    );
  }
}

export default EditMeetup;
