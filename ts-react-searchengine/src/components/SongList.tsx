import React from "react";
import SingleListElement from "./SingleListElement";
import {Song} from "../interfaces/songs"

interface SongListProps {     //interface for incoming props
  songs: Song[];
}


const SongList = ({songs}: SongListProps) => {
  

  return (
    <div>
      <ul>
        {songs.map((song) => (
          <SingleListElement song={song} />
        ))}
      </ul>
    </div>
  );
};

export default SongList;
