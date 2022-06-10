import { useState } from "react";
import uniqid from "uniqid";

function EducationForm(props) {
  const [education, setEducation] = useState({
    schoolName: "",
    studyTitle: "",
    studyDate: "",
  });

  function handleChange(event) {
    setEducation((prevEducation) => {
      return {
        ...prevEducation,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handleAddButtonClick(event) {
    event.preventDefault();
    props.addHandler({ ...education, id: uniqid() });
    setEducation({
      schoolName: "",
      studyTitle: "",
      studyDate: "",
    });
  }
  return (
    <form onSubmit={handleAddButtonClick}>
      <label htmlFor="schoolName">School name:</label>
      <input
        type="text"
        id="schoolName"
        name="schoolName"
        value={education.schoolName}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="studyTitle">Title of the course:</label>
      <input
        type="text"
        id="studyTitle"
        name="studyTitle"
        value={education.studyTitle}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="studyDate">Date of the course:</label>
      <input
        type="date"
        id="studyDate"
        name="studyDate"
        value={education.studyDate}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
}

export default EducationForm;
