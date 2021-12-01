import { Link } from "react-router-dom";
//import { Star, StarFill } from "react-bootstrap-icons";
import {Song} from "../interfaces/songs"

interface SingleListElementProps {
  song: Song
  
}

const SingleListElement = ({ song }:SingleListElementProps) => {
 
 // const isFav = favourites.includes(job.company_name);

  // const toggleFavourite = () => {
  //   isFav
  //     ? dispatch(removeFromFavouritesAction(job.company_name))
  //     : dispatch(addToFavouritesAction(job.company_name));
  // };
console.log(song.id)
  return (
    <li key={song.id}>
      <Link
        // onClick={() => dispatch(setSelectedJobAction(job))}
        to={`/track/${song.id}`}
      >
        {song.title}
      </Link>
      , {song.artist.name}{" "}
      {/* {isFav ? (
        <StarFill
          color="gold"
          size={16}
          className="me-4 my-auto"
          onClick={toggleFavourite}
        />
      ) : (
        <Star
          color="gold"
          size={16}
          className="me-4 my-auto"
          onClick={toggleFavourite}
        />
      )} */}
    </li>
  );
};

export default SingleListElement;
