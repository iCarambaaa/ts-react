import { Form, Container } from "react-bootstrap";
import { FormEvent, useState } from "react";
import {Song} from "../interfaces/songs"

interface SearchbarProps {     //interface for incoming props
  songs: Song[];
  setSongs: (value: Song[]) => void; // this is the way 
}


const Searchbar = ({songs, setSongs}: SearchbarProps) => {
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

  const [query, setQuery] = useState("");
  
  

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {

      const response = await fetch(baseEndpoint + query + "&limit=15");
      if (!response.ok) {
        alert("Error fetching results");
        return;
      }
      const { data } = await response.json();
      
      console.log(data);

      setSongs(data)
      
    } catch (error) {
      console.log(error);
    }

    
  };

  return (
    <Container className="d-flex justify-content-center my-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          {/* <Form.Label>Search & Find</Form.Label> */}
          <Form.Text className="text-muted">
            Search & Find Your Favourite Tracks 
          </Form.Text>
          <Form.Control
            type="search"
            placeholder="type here => press enter"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Searchbar;
