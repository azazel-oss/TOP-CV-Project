import { Component } from "react";

class Education extends Component {
  constructor() {
    super();
    this.handleRemoveEducation = this.handleRemoveEducation.bind(this);
  }
  handleRemoveEducation(event) {
    const id = event.target.dataset.id;
    this.props.removeEducationHandler(id);
  }
  render() {
    return (
      <div>
        {this.props.data.studyTitle}

        <button data-id={this.props.id} onClick={this.handleRemoveEducation}>
          Remove
        </button>
      </div>
    );
  }
}

export default Education;
