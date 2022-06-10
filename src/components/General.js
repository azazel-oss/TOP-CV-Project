function General(props) {
  function handleChange(event) {
    const data = {
      general: {
        ...props.data,
      },
    };
    data.general[event.target.name] = event.target.value;
    props.changeHandler(data);
  }
  return (
    <div>
      <h3>General Information</h3>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={props.data.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={props.data.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={props.data.phone}
        onChange={handleChange}
      />
    </div>
  );
}

export default General;
