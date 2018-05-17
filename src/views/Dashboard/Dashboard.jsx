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
    Geographies,
    Geography,
} from "react-simple-maps";

import Card from 'components/Card/Card.jsx';
import StatsCard from 'components/Card/StatsCard.jsx';
import Tasks from 'components/Tasks/Tasks.jsx';
  
  import ReactPlayer from 'react-player'

import {
    dataPie,
    dataSales,
    optionsSales,
    responsiveSales,
    dataBar,
    optionsBar,
    responsiveBar,
    table_data
} from 'variables/Variables.jsx';

const colorScale = scaleLinear()
.domain([0, 1, 6820])
.range(["#E5E5E5", "#B2B2B2", "#000000"]);

class Dashboard extends Component{
    createTableData(){
        var tableRows = [];
        for(var i = 0; i < table_data.length; i++){
            tableRows.push(
                <tr key={i}>
                    <td>
                        <div className="flag">
                            <img src={table_data[i].flag} alt="us_flag"/>
                        </div>
                    </td>
                    <td>{table_data[i].country}</td>
                    <td className="text-right">{table_data[i].count}</td>
                    <td className="text-right">{table_data[i].percentage}</td>
                </tr>
            );
        }
        return tableRows;
    }
    render(){
      return (
        <div className="main-content">
          <Grid fluid>
            <Row>
              <Col md={12}>
                <Card
                    title="Welcome To OpenDome.org"
                    category="OpenSource GeoDecisc Domes Structures & Homes"
                    content={
                      <div>
                      
                      </div>
                    }
                />
              </Col>
              <Row>
              </Row>
                <Col lg={3} sm={6}>
                  <Card
                    title="Construction Kit"
                    category="Geo-Dome Kit"
                    content={
                      <div>
                        <ReactPlayer url='https://youtu.be/fHWBa8pfmFQ' playing={false} controls width='100%'
                          height='230px'/>
                      </div>
                    }
                    />
                </Col>
                <Col lg={3} sm={6}>
                  <Card
                    title="Geo-Dome Kit Kickstarter"
                    category="Geo-Dome Kit"
                    content={
                      <div>
                        <ReactPlayer url='https://www.youtube.com/embed/voobIkuwLrI' playing={false} controls width='100%'
                          height='230px'/>
                      </div>
                    }
                    />
                </Col>
            </Row>
          </Grid>
      </div>
      );
    }
}

export default Dashboard;
