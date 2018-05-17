import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import materialBolt from "assets/img/calc/bolt.png";


import{
  FormGroup, ControlLabel, FormControl, HelpBlock, Form, InputGroup
} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import CalcCard from 'components/Card/CalcCard.jsx';

class Bolts extends Component {
  constructor(props, context) {
    super();

    this.state = {
      value: '999999999999'
    };
  }

  render() {
    return (
      <Col lg={4} sm={6}>
        <Card
          className="card"
          content={
            <div>
              <center>
                <span>
                  <img src={materialBolt} className="responsiveImage"/>
                </span>
              </center>
            </div>
          } />
      </Col>
    );
  }
}

export default Bolts;
