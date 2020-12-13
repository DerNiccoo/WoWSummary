import React, { useState, useRef } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { mock_gear, mock_guild } from './Mockdata.js'

import GuildTable from './GuildTable.js'

class Guildview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      guild: []
    };
  }

  componentDidMount() {
    fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave/roster")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            guild: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, guild } = this.state;

    let content;
    if (error) {
      content = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      content = <div>Loading...</div>;
    } else {
      content = <GuildTable guildMembers={guild} />;
    }


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
            {content}
          </Col>
        </Row>
      </div>
    )
  }
}

export default Guildview;