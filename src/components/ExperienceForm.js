import { useState } from "react";
import uniqid from "uniqid";

function ExperienceForm(props) {
  const [experience, setExperiece] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    jobTasks: "",
  });
  function handleChange(event) {
    setExperiece((prevExperience) => {
      return {
        ...prevExperience,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handleAddButtonClick(event) {
    event.preventDefault();
    props.addHandler({ ...experience, id: uniqid() });
    setExperiece({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      jobTasks: "",
    });
  }
  return (
    <form onSubmit={handleAddButtonClick}>
      <label htmlFor="companyName">Company name:</label>
      <input
        type="text"
        id="companyName"
        name="companyName"
        value={experience.companyName}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="positionTitle">Job position:</label>
      <input
        type="text"
        id="positionTitle"
        name="positionTitle"
        value={experience.positionTitle}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="jobTasks">Job tasks(separated by commas):</label>
      <input
        type="text"
        id="jobTasks"
        name="jobTasks"
        value={experience.jobTasks}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="startDate">Start date:</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={experience.startDate}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="endDate">End date:</label>
      <input
        type="date"
        id="endDate"
        name="endDate"
        value={experience.endDate}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
}

export default ExperienceForm;
