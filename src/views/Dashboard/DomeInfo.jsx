import React, { Component } from 'react';
import {
  Grid, Row, Col,
  Accordion, PanelGroup, Panel,
  Nav, NavItem,
  Tab
} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';

import domeFrequency1 from "assets/img/info/geodome-frequency.png";
import domeFrequency2 from "assets/img/info/geodome-frequency2.png";
import domeAdvantages from "assets/img/info/diagram-advantages.jpg";

import domeDrawing1 from "assets/img/pictures/fuller1.jpg";
import domeDrawing2 from "assets/img/pictures/fuller2.jpg";

class DomeInfo extends Component{
  componentDidUpdate(e){
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      this._reactInternalInstance._currentElement._owner._instance._reactInternalInstance._currentElement._owner._instance.componentDidUpdate(e);
    }
  }
  isMac(){
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }
  render(){
    const defaultPanel = (
      <PanelGroup id="accordion" ref="panels" onClick={() => this.forceUpdate()}>
        <Panel
          collapsible
          header={
            <div>
              Dome Frequency
              <b className="caret"></b>
            </div>
          }
          eventKey="1">
          
          
          <img src={domeFrequency2} className="responsiveImage"/>
          <p>
            <center>
            The “base” triangle of a 3V Dome (Shown on the Left) has 3 subdivisions on all sides
            </center>
          </p>
          
          <p>
            The frequency of a geodesic dome indicates how many times each side of the base triangle is subdivided. For example frequency 3 means the base triangle is divided into 3 sections (or triangles) on each side.
          </p>
          
          <img src={domeFrequency1} className="responsiveImage"/>
          <p>
          
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </p>
          
          
        </Panel>
        <Panel
          collapsible
          header={
            <div>
              Collapse item 2
              <b className="caret"></b>
            </div>
          }
          eventKey="2">
    
          
          
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </Panel>
        <Panel
          collapsible
          header={
            <div>
              Advantages of Geodesic Dome Homes
              <b className="caret"></b>
            </div>
          }
          eventKey="3">
          <img src={domeAdvantages} className="responsiveImage"/>
          <p>
            Here is some information about the advantages of domes.
          </p>
          
        </Panel>
      </PanelGroup>
    );
    
    const moreInfo = (
      <PanelGroup id="accordion" ref="panels" onClick={() => this.forceUpdate()}>
        <Panel
          collapsible
          header={
            <div>
              Dome Frequency
              <b className="caret"></b>
            </div>
          }
          eventKey="1">


          <img src={domeDrawing1} className="responsiveImage"/>
          <p>
            <center>
              The “base” triangle of a 3V Dome (Shown on the Left) has 3 subdivisions on all sides
            </center>
          </p>

          <p>
            The frequency of a geodesic dome indicates how many times each side of the base triangle is subdivided. For example frequency 3 means the base triangle is divided into 3 sections (or triangles) on each side.
          </p>

          <img src={domeDrawing2} className="responsiveImage"/>
          <p>

            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </p>


        </Panel>
        <Panel
          collapsible
          header={
            <div>
              Collapse item 2
              <b className="caret"></b>
            </div>
          }
          eventKey="2">
          Buckminster Fuller Institute
          https://www.bfi.org/about-fuller
          
          https://en.wikipedia.org/wiki/Fullerene

          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </Panel>
        <Panel
          collapsible
          header={
            <div>
              Advantages of Geodesic Dome Homes
              <b className="caret"></b>
            </div>
          }
          eventKey="3">
          <img src={domeAdvantages} className="responsiveImage"/>
          <p>
            Here is some information about the advantages of domes.
          </p>

        </Panel>
      </PanelGroup>
    );
    
    const pageSubcategories = (
      <Tab.Container id="nav-with-icons" defaultActiveKey="description">
        <div>
          <div className="nav-container">
            <Nav bsStyle="tabs" bsClass="nav nav-icons">
              <NavItem eventKey="description">
                <i className="fa fa-info-circle"></i><br /> Description
              </NavItem>
              <NavItem eventKey="location">
                <i className="fa fa-map-marker"></i><br /> Location
              </NavItem>
              <NavItem eventKey="legal">
                <i className="fa fa-legal"></i><br /> Legal Info
              </NavItem>
              <NavItem eventKey="help">
                <i className="fa fa-life-ring"></i><br /> Help Center
              </NavItem>
            </Nav>
          </div>
          <Tab.Content>
            <Tab.Pane eventKey="description">
              <Card
                title="Description about product"
                category="More information here"
                content={
                  <div>
                    <p>Under Construction.</p>
                  </div>
                }
                />
            </Tab.Pane>
            <Tab.Pane eventKey="location">
              <Card
                title="Location of product"
                category="Here is some text"
                content={
                  <div>
                    <p>Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.</p>
                    <p>Larger, yet dramatically thinner.It’s one continuous form where hardware and software function in perfect unison, creating a new generation of phone that’s better by any measure.</p>
                  </div>
                }
                />
            </Tab.Pane>
            <Tab.Pane eventKey="legal">
              <Card
                title="Legal Info Regarding Geo-Domes"
                category="Links and more information"
                content={
                  <div>
                    <p>Building permits are different per Country, State, Region and County.  In some cases, particular types of Geo-Domes can be created without a permit. More information in this section soon.</p>
                  </div>
                }
                />
            </Tab.Pane>
            <Tab.Pane eventKey="help">
              <Card
                title="Help center"
                category="More information here"
                content={
                  <div>
                    <p>From the seamless transition of glass and metal to the streamlined profile, every detail was carefully considered to enhance your experience. So while its display is larger, the phone feels just right.</p>
                    <p>Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.</p>
                  </div>
                }
                />
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    );
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col lg={4} sm={6}>
              <Card
                title="Basic GeoDome Info"
                category="Information about building GeoDomes"
                content={defaultPanel}
                />
            </Col>
            <Col lg={4} sm={6}>
              <Card
                title="Geo-Desic Dome History"
                category="Architect R. Buckminster Fuller"
                content={moreInfo}
                />
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2}>
              <h4 className="title text-center">Info</h4>
              <br />
              {pageSubcategories}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default DomeInfo;
