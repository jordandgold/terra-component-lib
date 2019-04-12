import React, { Component } from "react";
import Checkbox from "../src/lib/Checkbox/Checkbox";
import MultipleSearchSelect from "../src/lib/MultipleSearchSelect/MultipleSearchSelect";
import Radio from "../src/lib/Radios/Radios";
import SearchSelect from "../src/lib/SearchSelect/SearchSelect";
import Select from "../src/lib/Select/Select";
import TextArea from "../src/lib/TextArea/TextArea";
import TextInput from "../src/lib/TextInput/TextInput";

export class CheckboxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      [props.name]: false
    };
  }

  handleChange = name => {
    this.setState({
      [name]: !this.state[name]
    });
  };

  render() {
    return (
      <form>
        <Checkbox
          checked={this.state.checked}
          label={this.props.label}
          name={this.props.name}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

export class TextInputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      [props.name]: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form>
        <TextInput
          placeholder={this.props.placeholder}
          value={this.state[this.props.name].value}
          inputChange={this.handleChange}
          status={this.props.status}
          name={this.props.name}
        />
      </form>
    );
  }
}

export class TextAreaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      [props.name]: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form>
        <TextArea
          value={this.state[this.props.name].value}
          inputChange={this.handleChange}
          name={this.props.name}
          label={this.props.label}
        />
      </form>
    );
  }
}

export class SelectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      [this.props.name]: undefined
    };
  }

  handleSelection = (selection, name) => {
    this.setState({
      [name]: selection
    });
  };

  render() {
    return (
      <form>
        <Select
          name={this.props.name}
          options={this.props.options}
          handleSelection={this.handleSelection}
          defaultText="This is a Select component"
          selection={this.state[this.props.name]}
        />
      </form>
    );
  }
}
