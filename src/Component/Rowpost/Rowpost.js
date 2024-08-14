import React, { useEffect,useState } from 'react'
import YouTube from 'react-youtube';
import './Rowpost.css'
import axios from'../../Axios'
import {imageUrl,API_KEY} from '../../Constants/Constants'
function Rowpost(props) {
  const[urlId,setUrlId]=useState('')
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    axios(props.url)
    .then((response)=>{
      setMovies(response.data.results)
    })
  })

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      
      autoplay: 0,
    },
  };
   const handleMovie=(id)=>{
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

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>{handleMovie(obj.id)}} className={props.isSmall ? 'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt='poster'/>
          )}
        </div>
        {urlId && <YouTube  videoId={urlId}  opts={opts} />}
    </div>
  )
}

export default Rowpost