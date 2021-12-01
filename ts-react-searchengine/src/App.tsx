import "bootstrap/dist/css/bootstrap.css";
import {useState} from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Home from "./components/Home";
import {Song} from "./interfaces/songs"



function App() {

  let [songs, setSongs] = useState<Song[]>([])

  return (
    <BrowserRouter>
    <Container fluid>
      <Row>
        <Col sm={12} className="text-center background-div App App-header">
          <Link to="/">
            <h1 className="App-link">Tracks Search-Engine </h1>
          </Link>
        </Col>
      
      </Row>
      <Routes>
        <Route path='/' element={<Home songs={songs} setSongs={setSongs}/>} />
        {/* <Route path='/favourites' element={<Favourites />} />
        <Route path='/:companyName' element={<SingleJobOffer />} /> */}
        <Route path='*' element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Container>
  </BrowserRouter>
  );
}

export default App;
