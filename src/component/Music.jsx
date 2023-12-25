// BackgroundMusic.js

import React, { useEffect } from 'react';

const BackgroundMusic = ({ src, volume, loop }) => {
  useEffect(() => {
    const audio = new Audio(src);
    audio.volume = volume || 0.5; // Set the volume (0.0 to 1.0)
    audio.loop = loop || true; // Set to true for continuous looping
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [src, volume, loop]);

  return null; // This component doesn't render anything
};

export default BackgroundMusic;
