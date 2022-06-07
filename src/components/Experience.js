import { Component } from "react";

class Experience extends Component {
  constructor() {
    super();

    this.handleRemoveExperience = this.handleRemoveExperience.bind(this);
  }
  handleRemoveExperience(event) {
    const id = event.target.dataset.id;
    this.props.removeExperienceHandler(id);
  }
  render() {
    return (
      <div>
        {this.props.data.companyName}

        <button data-id={this.props.id} onClick={this.handleRemoveExperience}>
          Remove
        </button>
      </div>
    );
  }
}

export default Experience;