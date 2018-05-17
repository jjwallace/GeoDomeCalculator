import React, { Component } from 'react';


export class CalcCard extends Component{
  render(){
    return (
      <div className="card calc-card">
        <div className="content">
          <div className="row">
            <div className="col-xs-5">
              <div className="icon-big text-center icon-warning">
                {this.props.bigIcon}
              </div>
            </div>
            <div className="col-xs-7">
              <div className="numbers">
                {this.props.cardValue}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcCard;