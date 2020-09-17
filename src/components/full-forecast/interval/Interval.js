import React from 'react';
import './Interval.css'

import Card from 'react-bootstrap/Card'

export default function Interval(props){
  return (
        <Card border="primary" className="pollen">
    <Card.Header className="pollen-heading">{props.heading}</Card.Header>
    <Card.Body>
  <Card.Title><div>Temperature: {props.interval.main.temp}&#8457;</div></Card.Title>
      <Card.Text>
        <div>humidity:{props.interval.main.humidity} (mph)</div>
      </Card.Text>
    </Card.Body>
  </Card>

  );
}
