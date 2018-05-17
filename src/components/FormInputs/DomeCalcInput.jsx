import React, { Component } from 'react';

import{
  FormGroup, ControlLabel, FormControl, HelpBlock, Form, InputGroup
} from 'react-bootstrap';

class DomeCalcInput extends React.Component {
  constructor(props, context) {
    super();

    //this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '999999999999'
    };
  }

//  getValidationState() {
  
//  controlId="formBasicText"
//  validationState={this.getValidationState()}
  
//    const length = this.state.value.length;
//    if (length > 10) return 'success';
//    else if (length > 5) return 'warning';
//    else if (length > 0) return 'error';
//    return null;
//  }

//  handleChange(e) {
//    if(e.target.value != null){
//      this.setState({ value: e.target.value });
//    }
//  }
  
  onFieldChange(event) {
    // for a regular input field, read field name and value from the event
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.props.handler(fieldName, fieldValue);
  }

  render() {
    return (
      <form>
        80 x
        <input type="text" name="jobNumber" value={this.props.value} onChange={this.onFieldChange.bind(this)} />
        
      </form>
    );
  }
  //render(<DomeCalcInput />);
}

export default DomeCalcInput;
