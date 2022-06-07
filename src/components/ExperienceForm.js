import { Component } from "react";
import uniqid from "uniqid";

class ExperienceForm extends Component {
  constructor() {
    super();
    this.state = {
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      jobTasks: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleAddButtonClick(event) {
    event.preventDefault();
    this.props.addHandler({ ...this.state, id: uniqid() });
    this.setState({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      jobTasks: "",
    });
  }
  render() {
    return (
      <form onSubmit={this.handleAddButtonClick}>
        <label htmlFor="companyName">Enter company name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={this.state.companyName}
          onChange={this.handleChange}
          required
        />
        <br />
        <label htmlFor="positionTitle">Enter job position:</label>
        <input
          type="text"
          id="positionTitle"
          name="positionTitle"
          value={this.state.positionTitle}
          onChange={this.handleChange}
          required
        />
        <br />
        <label htmlFor="jobTasks">Enter job tasks(separated by commas):</label>
        <input
          type="text"
          id="jobTasks"
          name="jobTasks"
          value={this.state.jobTasks}
          onChange={this.handleChange}
          required
        />
        <br />
        <label htmlFor="startDate">Enter start date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={this.state.startDate}
          onChange={this.handleChange}
          required
        />
        <br />
        <label htmlFor="endDate">Enter end date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={this.state.endDate}
          onChange={this.handleChange}
          required
        />
        <br />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default ExperienceForm;
