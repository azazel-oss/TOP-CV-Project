import { Component } from "react";
import Education from "./Education";
import EducationForm from "./EducationForm";
import Experience from "./Experience";
import ExperienceForm from "./ExperienceForm";
import General from "./General";
import "../styles/form.css";

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
        <ol>
          {this.props.formData.education.map((data) => (
            <li key={data.id}>
              <Education
                id={data.id}
                data={data}
                removeEducationHandler={this.props.removeEducationHandler}
              />
            </li>
          ))}
        </ol>
        <h3>Job Experience</h3>
        <ExperienceForm addHandler={this.props.experienceChangeHandler} />
        <ol>
          {this.props.formData.experience.map((data) => (
            <li key={data.id}>
              <Experience
                id={data.id}
                data={data}
                removeExperienceHandler={this.props.removeExperienceHandler}
              />
            </li>
          ))}
        </ol>
      </>
    );
  }
}

export default Edit;
