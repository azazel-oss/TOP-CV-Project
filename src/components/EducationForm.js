import { Component } from "react";
import uniqid from "uniqid";

class EducationForm extends Component {
  constructor() {
    super();
    this.state = {
      schoolName: "",
      studyTitle: "",
      studyDate: "",
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
      schoolName: "",
      studyTitle: "",
      studyDate: "",
    });
  }
  render() {
    return (
      <form onSubmit={this.handleAddButtonClick}>
        <label htmlFor="schoolName">Enter school name:</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={this.state.schoolName}
          onChange={this.handleChange}
          required
        />
        <br />
        <label htmlFor="studyTitle">Enter title of the course:</label>
        <input
          type="text"
          id="studyTitle"
          name="studyTitle"
          value={this.state.studyTitle}
          onChange={this.handleChange}
          required
        />
        <br />
        <label htmlFor="studyDate">Enter date of the course:</label>
        <input
          type="date"
          id="studyDate"
          name="studyDate"
          value={this.state.studyDate}
          onChange={this.handleChange}
          required
        />
        <br />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default EducationForm;
