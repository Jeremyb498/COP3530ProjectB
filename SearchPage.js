import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'


function displayResults(result){
  let results;
  const container = document.querySelector('demo');
    for(let i = 0; i < result.length -3 ;i+=3){
       results = results  +
              <SearchResult
       img = 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'
        city = {result[i+2]}
        roomType = {result[i+1]} 
        price = {result[i]}  />;
        const newDiv = document.createElement(results);
        console.log('adddddd');
        console.log(results);
        container.appendChild(newDiv);
        
    }
    
}
function SearchPage() {
  const arr = ["$100","Single","Willy","$100","Single","Willy"];
  let result = displayResults(arr);
  return (
    <div className='searchPage' >
        <div className='searchPage__info'>
            <h1>Matches</h1>
            {/*<button>Cancellation Flexibility</button>
            <button>Type</button>
            <button>Price</button>
            <button>Rooms and beds</button>
            <button>More filters</button>*/}
  </div>
  <div id = 'demo'>

  </div>
        
    </div>
    
  )
}

export default SearchPage