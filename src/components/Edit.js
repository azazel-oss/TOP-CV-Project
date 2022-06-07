import { Component } from "react";
import Education from "./Education";
import EducationForm from "./EducationForm";
import Experience from "./Experience";
import ExperienceForm from "./ExperienceForm";
import General from "./General";

class Edit extends Component {
  render() {
    return (
      <>
        <General
          data={this.props.formData.general}
          changeHandler={this.props.generalChangeHandler}
        />
        <h3>Education Details</h3>
        <EducationForm addHandler={this.props.educationChangeHandler} />
        {this.props.formData.education.map((data) => (
          <Education
            key={data.id}
            id={data.id}
            data={data}
            removeEducationHandler={this.props.removeEducationHandler}
          />
        ))}
        <h3>Job Experience</h3>
        <ExperienceForm addHandler={this.props.experienceChangeHandler} />
        {this.props.formData.experience.map((data) => (
          <Experience
            key={data.id}
            id={data.id}
            data={data}
            removeExperienceHandler={this.props.removeExperienceHandler}
          />
        ))}
      </>
    );
  }
}

export default Edit;
