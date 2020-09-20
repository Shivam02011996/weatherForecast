import React from 'react';
import './AllEnvironmentProp.css'
import EnvironmentProperty from '../environment-property/EnvironmentProperty'
import { Icon } from '@iconify/react';
import dayRainMix from '@iconify/icons-wi/day-rain-mix';
import humidityIcon from '@iconify/icons-wi/humidity';
import cloudIcon from '@iconify/icons-wi/cloud';
import pressureIcon from '@iconify/icons-carbon/pressure';
import roundVisibility from '@iconify/icons-ic/round-visibility';
import windIcon from '@iconify/icons-whh/wind';
import temperatureIcon from '@iconify/icons-carbon/temperature';
import skillLevel from '@iconify/icons-carbon/skill-level';
import KelvinToFahrenheit from './../../homepage/utils/KelvinToFahrenheit'


import Card from 'react-bootstrap/Card'

export default function (props){
  let rain = (props.interval['rain'] === undefined ? 0 : props.interval['rain']['3h'])

  return (
        <Card border="primary" className="pollen">
    <Card.Header className="interval-heading"><strong>{props.heading}</strong>
    
      <Card.Title>
      <div className="temperature-heading"><Icon icon={temperatureIcon} />
       {KelvinToFahrenheit(props.interval.main.temp)}&#8457;</div>
      </Card.Title>

    </Card.Header>
    
    <Card.Body className="interval-body">
      <EnvironmentProperty heading={"humidity"} value={props.interval.main.humidity} icon={humidityIcon} measure="%"/>
      <EnvironmentProperty heading={"cloud"} value={props.interval.clouds.all} icon={cloudIcon} measure="%"/>
      <EnvironmentProperty heading={"rain"} value={rain} icon={dayRainMix} measure="mm"/>
      <EnvironmentProperty heading={"pressure"} value={props.interval.main.pressure} icon={pressureIcon} measure="mb"/>
      <EnvironmentProperty heading={"visibility"} value={props.interval.visibility} icon={roundVisibility} measure="m"/>
      <EnvironmentProperty heading={"wind speed"} value={props.interval.wind.speed} icon={windIcon} measure="mph"/>
      <EnvironmentProperty heading={"ground level"} value={props.interval.main.sea_level} icon={skillLevel} measure="m"/>
      <EnvironmentProperty heading={"sea level"} value={props.interval.main.grnd_level} icon={skillLevel} measure="m"/>
    </Card.Body>
  </Card>

  );
}
