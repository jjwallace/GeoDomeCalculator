import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import materialBolt from "assets/img/calc/bolt.png";
import Switch from 'react-bootstrap-switch';

import{
  FormGroup, ControlLabel, FormControl, HelpBlock, Form, InputGroup
} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import CalcCard from 'components/Card/CalcCard.jsx';

class Measurement extends Component {
  constructor(props, context) {
    super();

    this.state = {
      value: '999999999999'
    };
  }
  
  handleChange(){
    console.log('CLICKED');
  }

  render() {
    return (
      <div>
        <Switch
          onText="ft"
          offText="m"
          defaultValue={true}
          onChange={this.handleChange}
          />{" "}
      </div>
    );
  }
}

export default Measurement;


