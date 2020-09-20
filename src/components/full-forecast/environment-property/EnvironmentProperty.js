import React from 'react'
import './EnvironmentProperty.css'
import { Icon } from '@iconify/react';

export default function EnvironmentCondition(props){
  return (<div className="environment-card">
    <div className="environment-heading"><strong>{props.heading}</strong></div>
    <div className="environment-icon"><Icon icon={props.icon} /></div>
    <div className="environment-value">{props.value}{props.measure}</div>
  </div>);
}