import {useState, useRef} from 'react';
import './style/app.scss';

import Song from './components/song';
import Player from './components/player';
import Library from './components/library'
import Nav from './components/Nav'

import data from './data';

function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false)
  
  const audioRef = useRef(null);

  

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`} >
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player 
        audioRef={audioRef}
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong} 
        setCurrentSong={setCurrentSong}  
        songs={songs} 
        setSongs={setSongs} />

      <Library 
        audioRef={audioRef} 
        songs={songs} 
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus} />
    </div>
  );
}

export default App;




/*
chjnjel
,
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }

*/