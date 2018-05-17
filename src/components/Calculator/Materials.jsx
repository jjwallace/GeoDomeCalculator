import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import materialBolt from "assets/img/calc/bolt.png";

import{
  FormGroup, ControlLabel, FormControl, HelpBlock, Form, InputGroup
} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import CalcCard from 'components/Card/CalcCard.jsx';

import materialPipe from "assets/img/calc/pipe.png";
import materialWood from "assets/img/calc/wood.png";

const dataTable = {
  headerRow: [ 'Material', 'Cost', 'Cost', 'More'],
  footerRow: [ 'Material', 'Cost', 'Cost', 'More'],
  dataRows: [
    ['2x2', '25 $'],
    ['2x4', '25 $'],
    ['4x4', '25 $'],
    ['1/2 EMT','25 $'],
    ['3/4 EMT', '25 $'],
    ['1 EMT','25 $'],
  ]
};

class Materials extends Component {
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
          title="Material Prices and Sizes: "
          category="Costs may vary depending on Location "
          content={
            <div className="material-container">

              
            <Grid fluid>
              <Col lg={4} sm={6}>
                  
              <div className="material-table-wood">
                <center><img src={materialWood} /></center>
                <table id="datatables" ref="main" className="matTable table-striped table-no-bordered table-hover" cellSpacing="0" width="100%" style={{width:"100%"}}>
                  <thead>
                    <tr>
                      <th>{ dataTable.headerRow[0] }{this.props.totalLength}</th>
                      <th>{ dataTable.headerRow[1] }</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>{ dataTable.footerRow[0] }</th>
                      <th>{ dataTable.footerRow[1] }</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {
                      dataTable.dataRows.map((prop,key) => {
                        return (
                          <tr key={key}>
                            {
                              prop.map((prop,key)=> {
                                return (
                                  <td  key={key}>{prop}</td>
                                );
                              })
                            }

                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
                
              </Col>
              <Col lg={4} sm={6}>
                
              <div className="material-table-pipe">
                <center><img src={materialWood} /></center>
                <table id="datatables" ref="main" className="matTable table-striped table-no-bordered table-hover" cellSpacing="0" width="100%" style={{width:"100%"}}>
                  <thead>
                    <tr>
                      <th>{ dataTable.headerRow[0] }{this.props.totalLength}</th>
                      <th>{ dataTable.headerRow[1] }</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>{ dataTable.footerRow[0] }</th>
                      <th>{ dataTable.footerRow[1] }</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {
                      dataTable.dataRows.map((prop,key) => {
                        return (
                          <tr key={key}>
                            {
                              prop.map((prop,key)=> {
                                return (
                                  <td  key={key}>{prop}</td>
                                );
                              })
                            }

                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
              
              </Col>
              </Grid>
              
            </div>
          } />
      </Col>
    );
  }
}

export default Materials;
