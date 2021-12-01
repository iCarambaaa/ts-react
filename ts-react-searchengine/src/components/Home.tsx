
import { Container } from "react-bootstrap";
import Searchbar from "./Searchbar";
import SongList from "./SongList";
import {Song} from "../interfaces/songs"

interface HomeProps {     //interface for incoming props
  songs: Song[];
  setSongs: (value: Song[]) => void; //this is the way 
}


// type Dispatcher<S> = Dispatch<SetStateAction<S>>

const Home = ({songs, setSongs}: HomeProps) => {

  

  return (
    <Container fluid>
      <Searchbar songs={songs} setSongs={setSongs}/>
      <hr />
      <SongList songs={songs}/>
    </Container>
  );
};

export default Home;
