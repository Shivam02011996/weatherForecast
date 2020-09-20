import React from 'react';
import EnvironmentCondition from './../environment-property/EnvironmentProperty';
import sunriseIcon from '@iconify/icons-wi/sunrise';


export default function SunRise(props){
  return (
    <EnvironmentCondition heading={"Sunrise"} value={props.date} icon={sunriseIcon} measure=""/>  
  );
}
