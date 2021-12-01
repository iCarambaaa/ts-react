import {useParams} from 'react-router'
import { useEffect, useState } from 'react'
import {Song} from "../interfaces/songs" 


const SongDetailPage = () => {

    const [track, setTrack] = useState<Song>()

const {id} = useParams()
//console.log(id)
const endpoint = `https://striveschool-api.herokuapp.com/api/deezer/track/${id}`
// console.log(endpoint) 
const getDetails = async() => {
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
}
useEffect(() => {
    getDetails()
  }, [])

return (
    <div>{track?.title}</div>
)

}

export default SongDetailPage