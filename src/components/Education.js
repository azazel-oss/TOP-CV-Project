function Education(props) {
  function handleRemoveEducation(event) {
    const id = event.target.dataset.id;
    props.removeEducationHandler(id);
  }
  return (
    <div>
      <div className="added-item">{props.data.studyTitle}</div>

      <button data-id={props.id} onClick={handleRemoveEducation}>
        Remove
      </button>
    </div>
  );
}

export default Education;
