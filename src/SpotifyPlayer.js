import React from 'react';

const SpotifyPlayer = ({ trackUri }) => {
  if (!trackUri) {
    return null;
  }

  return (
    <div>
      <iframe
        src={`https://open.spotify.com/embed/track/${trackUri}`}
        width="300"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;