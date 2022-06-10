function Experience(props) {
  function handleRemoveExperience(event) {
    const id = event.target.dataset.id;
    props.removeExperienceHandler(id);
  }
  return (
    <div>
      <div className="added-item">{props.data.companyName}</div>

      <button data-id={props.id} onClick={handleRemoveExperience}>
        Remove
      </button>
    </div>
  );
}

export default Experience;
