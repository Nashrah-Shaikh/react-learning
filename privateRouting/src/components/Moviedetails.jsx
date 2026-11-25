import {useParams} from 'react-router'
import  { useContext } from 'react'
import {CastDetails} from '../context/MovieContext'

const Moviedetails = () => {
   const{id}= useParams()
   const {cast} = useContext(CastDetails)
   console.log("cast",cast)
   
  return (
    <div style={{display:"flex",justifyConten:"center", flexWrap:"wrap", gap:"50px", margin:"100px"}}>
      {cast?.map((result)=>(
        <div style={{border:"1px solid black",borderRadius:"15px",padding:"10px", width:"500px", }}>
            <img src={result?.profile_path} style={{width:"100%", marginLeft:"auto", marginRight:"auto", height:"500px"}}/>
        <h3>Character:{result?.character}</h3>
        <h3>Movie id:{result?.movie_id}</h3>
        <h3>Real Name:{result?.original_name}</h3>
        <h3>Popularity:{result?.popularity}</h3>
        </div>
      ))}
    </div>
  )
}

export default Moviedetails

