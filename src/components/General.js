import { Component } from "react";

class General extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const data = {
      general: {
        ...this.props.data,
      },
    };
    data.general[event.target.name] = event.target.value;
    this.props.changeHandler(data);
  }
  render() {
    return (
      <div>
        <h3>General Information</h3>
        <label htmlFor="name">Enter name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.props.data.name}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="email">Enter email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={this.props.data.email}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="phone">Enter phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={this.props.data.phone}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default General;
