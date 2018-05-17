
import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
// react component used to create charts
import ChartistGraph from 'react-chartist';
// function that returns a color based on an interval of numbers
import { scaleLinear } from "d3-scale";
// react components used to create a SVG / Vector map
import {
  ComposableMap,
  ZoomableGroup,
} from "react-simple-maps";

import Card from 'components/Card/Card.jsx';
import StatsCard from 'components/Card/StatsCard.jsx';
import Tasks from 'components/Tasks/Tasks.jsx';
  
import DomeCalcInput from 'components/FormInputs/DomeCalcInput.jsx';
  
import {
    dataPie,
    dataSales,
    optionsSales,
    table_data
} from 'variables/Variables.jsx';

import{
  FormGroup, ControlLabel, FormControl, HelpBlock, Form, InputGroup
} from 'react-bootstrap';

import domeDiagram from "assets/img/calc/dome.png";
import domeBoth from "assets/img/calc/both.png";



const colorScale = scaleLinear()
.domain([0, 1, 6820])
.range(["#E5E5E5", "#B2B2B2", "#000000"]);

class DomeCalculator extends Component{
    constructor(props) {
      super(props)
      this.state = {
        value: 7,
        value80: 4.95,
        value55: 4.84,
        value30: 1.02,
        valueD: 24,
        valueR: 12.00,
        valueA: 401.21,
        valueC: 75.40,
        valueH: 14.06,
        total: 0,
      };

      this.handleChange80 = this.handleChange80.bind(this);
      this.handleChange55 = this.handleChange55.bind(this);
      this.handleChange30 = this.handleChange30.bind(this);
      this.handleChangeD = this.handleChangeD.bind(this);
      this.handleChangeR = this.handleChangeR.bind(this);
      this.handleChangeA = this.handleChangeA.bind(this);
      this.handleChangeC = this.handleChangeC.bind(this);
      this.handleChangeH = this.handleChangeH.bind(this);
    }
  
    handleFocus(event) {
      event.target.select();
    }
    
    handleChange80(event) {
      this.setState({value80: event.target.value});
      this.calculateGeoDome('80',(event.target.value / .41241) * 2);
    }
    handleChange55(event) {
      this.setState({value55: event.target.value});
      this.calculateGeoDome('55',((event.target.value / .40355)*2));
    }
    handleChange30(event) {
      this.setState({value30: event.target.value});
      this.calculateGeoDome('30',(event.target.value / .34862));
    }
    handleChangeD(event) {
      this.setState({valueD: event.target.value});
      this.calculateGeoDome('D',(event.target.value));
    }
    handleChangeR(event) {
      this.setState({valueR: event.target.value});
      this.calculateGeoDome('R',(event.target.value/2));
    }
    handleChangeA(event) {
      this.setState({valueA: event.target.value});
      this.calculateGeoDome('A',(Math.sqrt(event.target.value / 2.7862)*2));
    }
    handleChangeC(event) {
      this.setState({valueC: event.target.value});
      this.calculateGeoDome('C',(event.target.value / Math.PI));
    }                  
    handleChangeH(event) {
      this.setState({valueH: event.target.value});
      this.calculateGeoDome('H',(event.target.value / 1.172)*2);
    } 
    
  calculateGeoDome(exclude, myDiameter){
      var diameter = myDiameter;
      var radius = (diameter / 2);
      var area = 2.7862 * (diameter / 2) * (diameter / 2);
      var strut30 = radius * .34862;
      var strut55 = radius * .40355;
      var strut80 = radius * .41241;
      var total = 30 * strut30 +  55 * strut55 +  80 * strut80 ;
      var circumference = Math.PI * diameter;
      var height = radius * 1.172; 
      
      console.log(
        ' diamter: ' + diameter + ' radius: ' + radius + ' area: ' + area
        + ' strut30: ' + strut30 + ' strut55: ' + strut55 + ' strut80: ' + strut80
        + ' total: ' + total + ' circumference: ' + circumference + ' height: ' + height
      );
      if(exclude != 'D'){diameter = (diameter).toFixed(2);};
      radius = (radius).toFixed(2);
      area = (area).toFixed(2);
      strut30 = (strut30).toFixed(2);
      strut55 = (strut55).toFixed(2);
      strut80 = (strut80).toFixed(2);
      total = (total).toFixed(2);
      circumference = (circumference).toFixed(2);
      height = (height).toFixed(2);
      
      if(exclude != '80'){this.setState({value80: strut80});};
      if(exclude != '55'){this.setState({value55: strut55});};
      if(exclude != '30'){this.setState({value30: strut30});};

      if(exclude != 'D'){this.setState({valueD: diameter});};
      if(exclude != 'R'){this.setState({valueR: radius});};
      if(exclude != 'A'){this.setState({valueA: area});};
      if(exclude != 'C'){this.setState({valueC: circumference});};
      if(exclude != 'H'){this.setState({valueH: height});};
    }
  
    render(){
        return (
            <div className="main-content">
            
                <Grid fluid>
                    <Row>
                      <Col lg={4} sm={6}>
                        <StatsCard className="calcCard"
                          bigIcon={<img src={domeDiagram} />}
                          cardValue={                     
                            <form>
                              <div className="lblCalsA lblCalAll">80 x &nbsp;
                              <input type="text" 
                                value={this.state.value80} 
                                onChange={this.handleChange80} 
                                onFocus={this.handleFocus}
                                className="customInputText customInput80" />
                              </div>
                              <div className="lblCalsB lblCalAll">55 x &nbsp;
                              <input type="text" 
                                value={this.state.value55} 
                                onChange={this.handleChange55} 
                                onFocus={this.handleFocus}
                                className="customInputText customInput55" />
                              </div>
                              <div className="lblCalsC lblCalAll">30 x &nbsp;
                              <input type="text" 
                                value={this.state.value30} 
                                onChange={this.handleChange30} 
                                onFocus={this.handleFocus}
                                name="customInput30"
                                className="customInputText customInput30" />
                            </div>
                            </form>
                          } />
                      </Col>
                        <Col lg={4} sm={6}>
                          <StatsCard className="calcCard"
                              bigIcon={<img src={domeBoth} />}
                                cardValue={
                              <form>
                                <div className="lblCalD lblCalAll">D &nbsp;
                                <input type="text" 
                                  value={this.state.valueD} 
                                  onChange={this.handleChangeD}
                                  onFocus={this.handleFocus}
                                  className="customInputText customInputDiameter"/>
                                </div>
                                <div className="lblCalR lblCalAll">R &nbsp;
                                <input type="text" 
                                  value={this.state.valueR} 
                                  onChange={this.handleChangeR} 
                                  onFocus={this.handleFocus}
                                  className="customInputText customInputRadius"/>
                                </div>
                                <div className="lblCalA lblCalAll">A &nbsp;
                                <input type="text" 
                                  value={this.state.valueA} 
                                  onChange={this.handleChangeA} 
                                  onFocus={this.handleFocus}
                                  className="customInputText customInputArea"/>
                                </div>
                                <div className="lblCalC lblCalAll">C &nbsp;
                                <input type="text" 
                                  value={this.state.valueC} 
                                  onChange={this.handleChangeC} 
                                  onFocus={this.handleFocus}
                                  className="customInputText customInputCir"/>
                                </div>
                                <div className="lblCalH lblCalAll">H &nbsp;
                                <input type="text" 
                                  value={this.state.valueH} 
                                  onChange={this.handleChangeH} 
                                  onFocus={this.handleFocus}
                                  className="customInputText customInputHeight"/>
                                </div>
                              </form>
                            } />
                        </Col>
                    </Row>

                
                </Grid>
            </div>
        );
    }
}

export default DomeCalculator;
