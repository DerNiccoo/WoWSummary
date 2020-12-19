import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Pageheader from '../Pageheader/Pageheader.js';
import NewsfeedTable from './NewsfeedTable.js';


class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      last_updated: 0,
      items: [{ date: 'Date', player: 'Broxger', event: 'Mount: 0' }],
    };
  }

  updateData() {
    let elements = this.state.items.slice();
    elements.push({ date: 'Date', player: 'Broxger', event: 'Mount: ' + elements.length });
    this.setState({ items: elements });
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
  }

  componentDidMount() {
    /*fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            last_updated: result.last_modified
          });
        }
      );*/

    this.updateData();

    this.timerLastUpdated = setInterval(
      () => this.updateData(),
      1000
    ); //getLastUpdated()

  }

  render() {
    return (
      <div>
        <Pageheader last_updated={this.state.last_updated} />
        <Row>
          <Col>
            <div className="newsfeed-wrapper">
              <NewsfeedTable newsElements={this.state.items} />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Newsfeed;