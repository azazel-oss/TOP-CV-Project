import { useState } from "react";
import Edit from "./components/Edit";
import Preview from "./components/Preview";
import "./styles/App.css";
import "./styles/checkbox.css";

function App() {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperiece] = useState([]);
  const [isPreviewEnabled, setIsPreviewEnable] = useState(false);
  function handleGeneralChange(changedData) {
    setGeneral(changedData.general);
  }
  function handleEducationAdd(newEducation) {
    setEducation((prevState) => {
      return [...prevState, newEducation];
    });
  }
  function handleExperienceAdd(newExperience) {
    setExperiece((prevState) => {
      return [...prevState, newExperience];
    });
  }
  function handleEducationRemove(id) {
    setEducation((prevState) => {
      return prevState.filter((element) => element.id !== id);
    });
  }
  function handleExperienceRemove(id) {
    setExperiece((prevState) => {
      return prevState.filter((element) => element.id !== id);
    });
  }
  function toggleViewMode() {
    setIsPreviewEnable((prevState) => !prevState);
  }
  return (
    <div className="container">
      <header>
        <h1>CV Maker</h1>
        <p>Fill up the details and make a cv just by a click</p>
      </header>
      <main>
        <div className="flex">
          <span>Editing Mode</span>
          <label className="switch" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              name="mode"
              onClick={toggleViewMode}
            />
            <div className="slider round"></div>
          </label>
          <span>Preview Mode</span>
        </div>
        {isPreviewEnabled ? (
          <Preview previewData={{ general, education, experience }} />
        ) : (
          <Edit
            formData={{ general, education, experience }}
            generalChangeHandler={handleGeneralChange}
            educationChangeHandler={handleEducationAdd}
            experienceChangeHandler={handleExperienceAdd}
            removeEducationHandler={handleEducationRemove}
            removeExperienceHandler={handleExperienceRemove}
          />
        )}
      </main>
      <footer>
        <a href="https://www.github.com/azazel-oss">
          Copyright &copy; Asad Mahmood
        </a>
      </footer>
    </div>
  );
}

export default App;
