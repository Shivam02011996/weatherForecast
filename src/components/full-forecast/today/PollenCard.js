import React from 'react'
import Card from 'react-bootstrap/Card'
import './PollenCard.css'

export default function PollenCard(props){
  return (
        <Card border="primary" className="pollen">
    <Card.Header className="pollen-heading">{props.pollen.title}</Card.Header>
    <Card.Body>
  <Card.Title>{props.pollen.status}</Card.Title>
      <Card.Text>
        {props.pollen.value}%
      </Card.Text>
    </Card.Body>
  </Card>

  );
}