import React, { useState } from 'react'
import './Search.css'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {DateRangePicker} from "react-date-range"
import { useNavigate } from 'react-router-dom';

//date pick
function Search() {
  var [city,setData] = useState(1);
  var [price,setData] = useState(1);
  var [Type,setData] = useState(1);
  function getData(val){
    let num = setData(val.target.value);
    console.log(val.target.value);
    return(
      num
    )
  }
    const navigate = useNavigate();
     let [startDate, setStartDate] = useState(new Date());
     let [endDate, setEndDate] = useState(new Date());
     let selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      }
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
  return (
    <div className='search'>
        <DateRangePicker ranges={
            [selectionRange]} onChange = {handleSelect} />
             <h3>Price / night (maximum is $24,999) $
            <input min={0}
            type='text' onChange={getData}/></h3>
            <h3>City
            <select name=""onChange={getData}>
            <option value = 'Ashe'>Asheville</option>
            <option value = 'Austin'>Austin</option>
            <option value = 'Boston'>Boston</option>
            <option value = 'Broward County'>Broward County</option>
            <option value = 'Cambridge'>Cambridge</option>
            <option value = 'Clark County'>Clark County</option>
            <option value = 'Columbus'>Columbus</option>
            <option value = 'Denver'>Denver</option>
            <option value = 'Hawaii'>Hawaii</option>
            <option value = 'Jersey City'>Jersey City</option>
            <option value = 'Los Angeles'>Los Angeles</option>
            <option value = 'Nashville'>Nashville</option>
            <option value = 'New Orleans'>New Orleans</option>
            <option value = 'New York City'>New York City</option>
            <option value = 'Oakland'>Oakland</option>
            <option value = 'Pacific Grove'>Pacific Grove</option>
            <option value = 'Portland'>Portland</option>
            <option value = 'Rhode Island'>Rhode Island</option>
            <option value = 'Salem'>Salem</option>
            <option value = 'San Clara Country'>San Clara Country</option>
            <option value = 'San Diego'>San Diego</option>
            <option value = 'San Francisco'>San Francisco</option>
            <option value = 'San Mateo County'>San Mateo County</option>
            <option value = 'Santa Cruz County'>Santa Cruz County</option>
            <option value = 'Seattle'>Seattle</option>
            <option value = 'Twin Cities MSA'>Twin Cities MSA</option>
            <option value = 'Washington D.C.'>Washington D.C.</option>
            </select></h3>
            <h3>Room type
            <select name=""onChange={getData}>
            <option value = 'priv'>Private Room</option>
            <option value = 'whole'>Entire house/apartment</option>
            </select></h3>
            
            <button onClick={()=>navigate('/search')}>Search</button>
    </div>
  )
}

export default Search