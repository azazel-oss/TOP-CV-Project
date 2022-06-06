import { Component } from "react";
import Edit from "./components/Edit";
import Preview from "./components/Preview";

class App extends Component {
  constructor() {
    super();
    this.state = {
      general: {
        name: "",
        email: "",
        phone: "",
      },
      isPreviewEnabled: false,
    };
    this.toggleViewMode = this.toggleViewMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(changedData) {
    console.log(changedData);
    this.setState({ ...changedData });
  }
  toggleViewMode() {
    this.setState((prevState) => {
      return {
        isPreviewEnabled: !prevState.isPreviewEnabled,
      };
    });
  }
  render() {
    return (
      <div>
        <input type="checkbox" name="mode" onClick={this.toggleViewMode} />
        {this.state.isPreviewEnabled ? (
          <Preview />
        ) : (
          <Edit formData={this.state} changeHandler={this.handleChange} />
        )}
      </div>
    );
  }
}

export default App;
