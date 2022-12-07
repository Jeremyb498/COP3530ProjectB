import React,{useState} from 'react'
import './Banner.css'
import Search from './Search';
import {useNavigate} from 'react-router-dom'
function  Banner() {
    const navigate = useNavigate();
    const [showSearch,setShowSearch] = useState(false);
  return (
    <div className='banner'>
        <div className = 'banner__search'>
           
            <button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton'>{showSearch ? 'Hide' :'Search Dates'}</button>
         {showSearch && <Search />}
         </div>
        <div className='banner__info'>
          <h1 >AirBnB for Gators, by Gators</h1>
          <h5>Plan a trip and go have some fun this winter, or go somewhere and relax</h5>
          <button onClick={()=>navigate('/search')}>Explore</button>
        </div>
    </div>
  )
}

export default Banner