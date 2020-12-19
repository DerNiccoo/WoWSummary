import React from "react";

import Table from "react-bootstrap/Table";


function NewsfeedTable(props) {
  return (
    <div className="newsfeed-wrapper">
      <Table striped bordered hover className="newsfeed-table">
        <thead>
          <tr>
            <th>Datum</th>
            <th>Spieler</th>
            <th>Ereignis</th>
          </tr>
        </thead>
        <tbody className="newsfeed-tbody">
          {props.newsElements.slice(0).reverse().map((item, index) => <tr key={index}><td>{item.date}</td><td>{item.player}</td><td>{item.event}</td></tr>)}
        </tbody>
      </Table>
    </div>
  );
}

export default NewsfeedTable;