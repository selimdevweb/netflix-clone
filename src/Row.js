import React ,{useState, useEffect} from 'react'
import axios from './axios'
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer"
import './Row.css'

const base_url = 'https://image.tmdb.org/t/p/original/'

export default function Row({title, fetchUrl, isLargeRow /* on créee une varibale un prop isLargeRow pour faire des conditions avec */}) {
const [movies, setMovies] = useState([])
/* we use useSate hook and const variables are in the array 
and the hook useSate initialised at a empty array */
/* pour les vidéos youtubes */
const [trailerUrl, setTrailerUrl] = useState("")

/* we use useEffect   */
useEffect(()=>{
    async function fetchData() {
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results);
        return request
    }
    fetchData()
},[fetchUrl])

const opts = {
    height:"390",
    width:"100%",
    playerVars: {

        autoplay : 1,
    }
}

const handleClick = (movie) => {
if (trailerUrl) {
    setTrailerUrl("")
} else{
    
    movieTrailer(movie?.name || "")
    .then((url) =>{
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get("v"))
    }).catch(error => console.log(error))
}
}
    return (
        <div className="row">

                <h2>{title}</h2>

                <div className="row_posters">
                    
                    {/* to browse the movie table we use .map  */}
                    {movies.map(movie  => (
                        /* lorsqu'on parcours un tableau il est nécessaire d'attribuer des clés aux éléments */
                        /* console.table() pour parcourir des tableaux  */
                        /* console.table({movie}) */
                         <img 
                         onClick={() => handleClick(movie)}
                         key={movie.id}
                         className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                         /* on dit si il y'a le props isLarge row alors la classe sera ros_posterLarge sinon row_poster */
                        
                         src={`${base_url}${isLargeRow ?  movie.poster_path : (movie.backdrop_path != null ? movie.backdrop_path  : movie.poster_path  )}`}
                         /* on dit si le prop isLargeRow n'existe pas on utilise movie.poster_path sinon on utilise movie.backdrop_path  */
                         alt={movie.name}/> 
                    ))}
                    
                </div>
              {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}  
        </div>
    )
}
