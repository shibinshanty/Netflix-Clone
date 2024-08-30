import React, { useEffect,useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import axios from '../../Axios'
import './Banner.css'
import YouTube from 'react-youtube';

function Banner() {
   const[urlId,setUrlId]=useState('')
   const[movie,setMovie]=useState()
  useEffect(() => {
    axios(`trending/movie/week?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
         setMovie(response.data.results[2]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const handlePlayClick=(id)=>{
        console.log(id);

        axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
          if (response.data.results.length !== 0) {
            console.log(response.data.results[0]);
            const videoKey = response.data.results[0].key; 
            setUrlId(videoKey);
        }else{
           console.log("Trailer is not Avaialble");
         }
      })



  }

  const opts = {
    height: '220',
    width: '640',
    playerVars: {
      
      autoplay: 0,
    },
  };

  return (
    <div 
     style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
         <h1 className='title'>{movie ? movie.title :''}</h1> 
        <div onClick={()=>{handlePlayClick(movie.id)}} className='banner_buttons'>
           <button className='button'
           
           >Play</button>
           <button  className='button'>My List</button> 
        </div>
         <h1 className='description'>{movie ? movie.overview :''}</h1> 
         {urlId && <YouTube  videoId={urlId}  opts={opts} />}
        </div>
         

         <div className='fade_bottom'></div>

    </div>
  )
}

export default Banner