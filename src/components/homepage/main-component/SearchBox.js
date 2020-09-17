import React from 'react'
import './SearchBox.css' 
import SearchIcon from '@material-ui/icons/Search';



export default function SearchBox(props){
  console.log("error"+props.error.message);
  return (<div className="search-wrapper">

    
    <form 
     onSubmit={props.onSubmit}
     className="search-box">

       <div className="search-icon"><SearchIcon /></div>
    <input 
    className="input-box"
    type="text"
    placeholder="Search by location..."
    />
    <button
    className="submit-button"
    > show weather</button>

    </form>
    {props.error.message}
    
    </div>
    );
}
