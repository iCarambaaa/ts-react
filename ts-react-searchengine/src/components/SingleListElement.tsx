import { Link } from "react-router-dom";
//import { Star, StarFill } from "react-bootstrap-icons";
import {Song} from "../interfaces/songs"

interface SingleListElementProps {
  song: Song
  key: number
}

const SingleListElement = ({ song, key }:SingleListElementProps) => {
 
 // const isFav = favourites.includes(job.company_name);

  // const toggleFavourite = () => {
  //   isFav
  //     ? dispatch(removeFromFavouritesAction(job.company_name))
  //     : dispatch(addToFavouritesAction(job.company_name));
  // };

  return (
    <li key={key}>
      <Link
        // onClick={() => dispatch(setSelectedJobAction(job))}
        to={`/}`}
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
