import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import MusicForm from "./MusicForm";
import Musics from "./Musics";
import musicData from "../data.json";
import { useState } from "react";

export default function App() {
  const [musicList, setMusicList] = useState([]);
  const [nextId, setNextId] = useState(1); //state to keep track of the id for key as we map through the new music
  const [sortBy, setSortBy] = useState("input");

  // function for Adding music
  function addMusic(music) {
    const newMusic = { ...music, id: nextId };
    setMusicList([...musicList, newMusic]);
    setNextId(nextId + 1);
  }

  // function for deleting music
  function deleteMusic(id) {
    setMusicList(musicList.filter((music) => music.id !== id));
  }

  function handleSort(options) {
    setSortBy(options);
  }

  ////////////////////////// sort for current existing musics/////////////////////////
  let sortedData = musicData;

  if (sortBy === "input") sortedData = musicData;

  if (sortBy === "name")
    sortedData = musicData
      .slice()
      .sort((a, b) => a.artist.localeCompare(b.artist));

  ////////// sort for newly added musics //////////////////////////////////////////
  let sortedMusic = [...musicList];

  if (sortBy === "input") sortedMusic = [...musicList];

  if (sortBy === "name")
    sortedMusic = [...musicList]
      .slice()
      .sort((a, b) => a.artist.localeCompare(b.artist));

  return (
    <div className="App">
      <Header />
      <MusicForm onAddMusic={addMusic} sortBy={sortBy} setSortBy={handleSort} />
      <Musics
        musicList={musicList}
        onDeleteMusic={deleteMusic}
        sortedData={sortedData}
        sortedMusic={sortedMusic}
      />
      <Footer />
    </div>
  );
}
