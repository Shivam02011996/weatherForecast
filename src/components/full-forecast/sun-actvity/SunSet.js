import React from 'react';
import EnvironmentProperty from './../environment-property/EnvironmentProperty';
import sunsetIcon from '@iconify/icons-wi/sunset';


export default function SunRise(props){
  return (
    <EnvironmentProperty heading={"Sunset"} value={props.date} icon={sunsetIcon} measure=""/>  
  );
}
