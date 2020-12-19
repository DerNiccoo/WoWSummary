import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Pageheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      last_updated: props.last_update,
      show_last_updated: 0
    };
  }

  calculateLastRefreshTime() {
    const currentSec = new Date().getTime() / 1000;
    const last_update = this.props.last_updated;

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

  componentWillUnmount() {
    clearInterval(this.timerLastUpdated);
  }

  componentDidMount() {
    this.timerLastUpdated = setInterval(
      () => this.calculateLastRefreshTime(),
      1000
    );
  }

  render() {
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
      </div>
    );
  }
}

export default Pageheader;