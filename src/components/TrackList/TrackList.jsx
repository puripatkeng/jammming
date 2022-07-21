//import TrackList.css
import "./TrackList.css";
import React from "react";
import Track from "../Track/Track";

const TrackList = (props) => {
  const { tracks, onAdd, onRemove, isRemoval } = props;

  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track
          track={track}
          key={track.id}
          onRemove={onRemove}
          onAdd={onAdd}
          isRemoval={isRemoval}
        />
      ))}
    </div>
  );
};

export default TrackList;
