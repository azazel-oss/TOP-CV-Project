function Preview(props) {
  return (
    <>
      <h2>Resume</h2>
      <section>
        <h3>Personal Information</h3>
        <div>{props.previewData.general.name}</div>
        <div>{props.previewData.general.email}</div>
        <div>{props.previewData.general.phone}</div>
      </section>
      <section>
        <h3>Educational Information</h3>
        <div>
          {props.previewData.education.map((element, index) => {
            return (
              <div key={index}>
                <div>{element.schoolName}</div>
                <div>{element.studyTitle}</div>
                <div>{element.studyDate}</div>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h3>Job Experience Information</h3>
        <div>
          {props.previewData.experience.map((element) => {
            return (
              <div>
                <div>{element.companyName}</div>
                <div>{element.positionTitle}</div>
                <div>{element.startDate}</div>
                <div>{element.endDate}</div>
                <div>
                  {element.jobTasks.split(",").map((task) => (
                    <li>{task.trim()}</li>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Preview;
