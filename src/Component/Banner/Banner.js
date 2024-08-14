import React, { useEffect,useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import axios from '../../Axios'
import './Banner.css'
function Banner() {
   const[movie,setMovie]=useState()
  useEffect(() => {
    axios(`trending/movie/week?api_key=${API_KEY}`)
      .then((response) => {
      
         setMovie(response.data.results[2]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div 
     style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
         <h1 className='title'>{movie ? movie.title :''}</h1> 
        <div className='banner_buttons'>
           <button className='button'>Play</button>
           <button className='button'>My List</button> 
        </div>
         <h1 className='description'>{movie ? movie.overview :''}</h1> 
        </div>
         <div className='fade_bottom'></div>

    </div>
  )
}

export default Banner