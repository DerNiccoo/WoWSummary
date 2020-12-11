import React, { useState, useRef } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { mock_gear, mock_guild } from '../Guildview/Mockdata.js'

import GearTable from './GearTable.js'

class Gearview extends React.Component {
  constructor(props) {
    super(props);

    let names = ['Broxger', 'Catas', 'Rollmalfix', 'Ulrog'];
    let gear_mock = [];

    names.forEach(name => {
      gear_mock.push(mock_gear(name));
    });

    this.state = {
      gear: gear_mock
    }
  }

  render() {
    console.log(this.state.gear);
    return (
      <div>
        <Row>
          <Col>
            <h2>Schmockwave</h2>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <GearTable data={this.state.gear} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Gearview;