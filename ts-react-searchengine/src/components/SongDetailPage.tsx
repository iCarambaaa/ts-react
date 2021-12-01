import {useParams} from 'react-router'
import { useCallback, useEffect, useState } from 'react'
import {Song} from "../interfaces/songs" 


const SongDetailPage = () => {

    const [track, setTrack] = useState<Song>()

const {id} = useParams()
//console.log(id)
const endpoint = `https://striveschool-api.herokuapp.com/api/deezer/track/${id}`
// console.log(endpoint) 
const getDetails = useCallback(
    async() => {
        try {
            let response = await fetch(endpoint)
            if (response.ok) {
                let data: Song = await response.json()
                console.log(data) 
                setTrack(data)
            } else {
            console.log("ERR")
            }
        } catch (error) {
            console.log(error)
        }
    
}, [endpoint])
useEffect(() => {
    getDetails()
  }, [getDetails])

return (
    <div>
        <h2>{track?.title}</h2>
        <img src={track?.album.cover_big} alt={track?.album.title}></img>
        </div>

)

}

export default SongDetailPage