import { Component } from "react";
import Edit from "./components/Edit";
import Preview from "./components/Preview";

class App extends Component {
  constructor() {
    super();
    this.state = {
      general: {
        name: "",
        email: "",
        phone: "",
      },
      education: [],
      experience: [],
      isPreviewEnabled: false,
    };
    this.toggleViewMode = this.toggleViewMode.bind(this);
    this.handleGeneralChange = this.handleGeneralChange.bind(this);
    this.handleEducationAdd = this.handleEducationAdd.bind(this);
    this.handleExperienceAdd = this.handleExperienceAdd.bind(this);
    this.handleExperienceRemove = this.handleExperienceRemove.bind(this);
    this.handleEducationRemove = this.handleEducationRemove.bind(this);
  }
  handleGeneralChange(changedData) {
    this.setState({ ...changedData });
  }
  handleEducationAdd(newEducation) {
    this.setState((prevState) => {
      return {
        education: [...prevState.education, newEducation],
      };
    });
  }
  handleExperienceAdd(newExperience) {
    this.setState((prevState) => {
      return {
        experience: [...prevState.experience, newExperience],
      };
    });
  }
  handleEducationRemove(id) {
    this.setState((prevState) => {
      return {
        education: prevState.education.filter((element) => element.id !== id),
      };
    });
  }
  handleExperienceRemove(id) {
    this.setState((prevState) => {
      return {
        experience: prevState.experience.filter((element) => element.id !== id),
      };
    });
  }
  toggleViewMode() {
    this.setState((prevState) => {
      return {
        isPreviewEnabled: !prevState.isPreviewEnabled,
      };
    });
  }
  render() {
    return (
      <div>
        <input type="checkbox" name="mode" onClick={this.toggleViewMode} />
        {this.state.isPreviewEnabled ? (
          <Preview previewData={this.state} />
        ) : (
          <Edit
            formData={this.state}
            generalChangeHandler={this.handleGeneralChange}
            educationChangeHandler={this.handleEducationAdd}
            experienceChangeHandler={this.handleExperienceAdd}
            removeEducationHandler={this.handleEducationRemove}
            removeExperienceHandler={this.handleExperienceRemove}
          />
        )}
      </div>
    );
  }
}

export default App;
