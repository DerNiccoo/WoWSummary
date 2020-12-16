import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GuildTable from './GuildTable.js'

class Guildview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      last_updated: 0,
      show_last_updated: "",
      guild: [],
      gear: [],
      dungeon: [],
      mount: []
    };
  }

  updateData() {
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
          console.log({ new_gear: result })
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

  getLastUpdated() {
    if (this.state.last_updated === 0) {
      return;
    }
    fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave")
      .then(res => res.json())
      .then(
        (result) => {
          if (result.last_modified > this.state.last_updated) {
            this.setState({
              last_updated: result.last_modified
            });
            this.updateData();
          }
        }
      );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.timerLastUpdated);
  }

  componentDidMount() {
    fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            last_updated: result.last_modified
          });
        }
      );

    this.updateData();

    this.timerID = setInterval(
      () => this.getLastUpdated(),
      60000
    );


    this.timerLastUpdated = setInterval(
      () => this.calculateLastRefreshTime(),
      1000
    );

  }

  calculateLastRefreshTime() {
    const currentSec = new Date().getTime() / 1000;
    const last_update = this.state.last_updated;

    let diff = currentSec - last_update;
    let result = '';
    if (diff < 60) {
      result = diff.toFixed() + ' Sekunden';
    } else {
      diff = diff / 60;
      result = 'einer Minute';
      if (diff > 2) {
        result = Math.floor(diff) + ' Minuten';
      }
    }
    this.setState({
      show_last_updated: result,
    });
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
        <Row>
          <Col>
            <a>Zuletzt aktualisiert vor {this.state.show_last_updated}</a>
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