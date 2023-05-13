const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying, songs, setSongs}) => {
  
  const songSelectHandler = async () => {
    const selectedSong = songs.filter( (state) => state.id === song.id);
    await setCurrentSong(selectedSong[0])
    //setCurrentSong(song);

    const newSongs = songs.map((s) => {
      if(s.id === song.id) {
        return{
          ...s, 
          active: true,
        }; 
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    if(isPlaying) audioRef.current.play();
  }

  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
      <img alt = {song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3> 
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
    
export default LibrarySong;
    