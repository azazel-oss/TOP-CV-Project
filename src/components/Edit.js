import { Component } from "react";
import General from "./General";

class Edit extends Component {
  render() {
    return (
      <General
        data={this.props.formData.general}
        changeHandler={this.props.changeHandler}
      />
    );
  }
}

export default Edit;
