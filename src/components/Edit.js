import Education from "./Education";
import EducationForm from "./EducationForm";
import Experience from "./Experience";
import ExperienceForm from "./ExperienceForm";
import General from "./General";
import "../styles/form.css";

function Edit(props) {
  return (
    <>
      <General
        data={props.formData.general}
        changeHandler={props.generalChangeHandler}
      />
      <h3>Education Details</h3>
      <EducationForm addHandler={props.educationChangeHandler} />
      <ol>
        {props.formData.education.map((data) => (
          <li key={data.id}>
            <Education
              id={data.id}
              data={data}
              removeEducationHandler={props.removeEducationHandler}
            />
          </li>
        ))}
      </ol>
      <h3>Job Experience</h3>
      <ExperienceForm addHandler={props.experienceChangeHandler} />
      <ol>
        {props.formData.experience.map((data) => (
          <li key={data.id}>
            <Experience
              id={data.id}
              data={data}
              removeExperienceHandler={props.removeExperienceHandler}
            />
          </li>
        ))}
      </ol>
    </>
  );
}

export default Edit;
