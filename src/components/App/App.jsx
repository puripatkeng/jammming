//import App.css
import "./App.css";

//import 3 components
import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../Utils/Spotify.js";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playListName, setPlayListName] = useState("My Playlist");
  const [playListTracks, setPlayListTracks] = useState([]);

  useEffect(() => {
    Spotify.getAccessToken();
  });

  const updatePlayListName = (name) => {
    setPlayListName(name);
  };

  const addTrack = (track) => {
    let prevListTracks = playListTracks;
    if (prevListTracks.includes(track)) {
      return;
    }
    setPlayListTracks([...playListTracks, track]);
  };

  const removeTrack = (track) => {
    setPlayListTracks(
      playListTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  };

  const savePlayList = () => {
    const trackUris = playListTracks.map((track) => track.uri);
    Spotify.savePlaylist(playListName, trackUris);
    setPlayListName("New Playlist");
    setPlayListTracks([]);
  };

  const search = async (term) => {
    const search = await Spotify.search(term);
    setSearchResults(search);
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playListName={playListName}
            playListTracks={playListTracks}
            onRemove={removeTrack}
            onNameChange={updatePlayListName}
            onSave={savePlayList}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
