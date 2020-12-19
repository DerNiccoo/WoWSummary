import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GuildTable from './GuildTable.js'
import Pageheader from '../Pageheader/Pageheader.js'

class Guildview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      last_updated: 0,
      guild: [],
      gear: [],
      dungeon: [],
      mount: [],
      pvp: [],
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
    fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave/pvp/overview")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            pvp: result
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
              last_updated: result.last_modified,
              guild: [],
              gear: [],
              dungeon: [],
              mount: [],
              pvp: [],
            });
            this.updateData();
          }
        }
      );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
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

    this.timerLastUpdated = setInterval(
      () => this.getLastUpdated(),
      60000
    );

  }

  render() {
    const { error, isLoaded, guild, gear, dungeon, mount, pvp } = this.state;

    let content;
    if (error) {
      content = <div>Error: {error.message}</div>;
    } else if (guild.length > 0 && gear.length > 0 && dungeon.length > 0 && mount.length > 0 && pvp.length > 0) {
      content = <GuildTable guildMembers={guild} gear={gear} dungeon={dungeon} mount={mount} pvp={pvp} />;
    } else {
      content = <div>Loading...</div>;
    }

    return (
      <div>
        <Pageheader last_updated={this.state.last_updated} />
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