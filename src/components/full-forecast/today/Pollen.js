import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PollenCard from './PollenCard'
import './Pollen.css'

export default function Pollen(){

  let pollen = {
    title: "Precipitation",
    status : "good",
    value: 10,
  }
  return (
<div>
<div class="pollen-group">
<PollenCard pollen={pollen}/>
<PollenCard pollen={pollen}/>
<PollenCard pollen={pollen}/>
<PollenCard pollen={pollen}/>


</div>
  </div>

  );
}