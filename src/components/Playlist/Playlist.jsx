//import Playlist.css

import "./Playlist.css";
import TrackList from "../TrackList/TrackList";
import React from "react";

const Playlist = (props) => {
  const {playListName, playListTracks, onRemove, onSave, onNameChange} = props;

  const handleNameChange = (event) =>{
    onNameChange(event.target.value);
  }
  return (
      <div className="Playlist">
          <input defaultValue={playListName} onChange={handleNameChange} />
          <TrackList 
          tracks = {playListTracks}
          onRemove={onRemove}
          isRemoval ={true}
          />
          <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
      </div>
  )
}



export default Playlist;