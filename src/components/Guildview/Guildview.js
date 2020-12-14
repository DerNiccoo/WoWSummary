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
      guild: [],
      gear: [],
      dungeon: [],
      mount: []
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
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    // Just as an example, we try to see if this actually works as i intended, later outsource to own method
    fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave/gear/overview")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            gear: result
          });
        }
      );
    fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave/dungeons/overview")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            dungeon: result
          });
        }
      );
    fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave/collection/mounts/overview")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            mount: result
          });
        }
      );
  }

  render() {
    const { error, isLoaded, guild, gear, dungeon, mount } = this.state;

    let content;
    if (error) {
      content = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      content = <div>Loading...</div>;
    } else {
      content = <GuildTable guildMembers={guild} gear={gear} dungeon={dungeon} mount={mount} />;
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