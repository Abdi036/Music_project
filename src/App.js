import "./App.css";
import musicData from "./data.json";
import { useState } from "react";

export default function App() {
  const [musicList, setMusicList] = useState([]);

  //state to keep track of the id for key as we map through the new music
  const [nextId, setNextId] = useState(1);

  // Add music function
  function addMusic(music) {
    const newMusic = { ...music, id: nextId };
    setMusicList([...musicList, newMusic]);
    setNextId(nextId + 1);
  }

  // delete music function
  function deleteMusic(id) {
    setMusicList(musicList.filter((music) => music.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <MusicForm onAddMusic={addMusic} />
      <Musics musicList={musicList} onDeleteMusic={deleteMusic} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <>
      <header className="header_container">
        <div>
          <h1>
            Music is the universal language that transcends boundaries, speaks
            to the soul, and paints emotions on the canvas of our existence.
          </h1>
        </div>
      </header>
      <div className="music_list">
        <h2>Music list</h2>
      </div>
    </>
  );
}

function Musics({ musicList, onDeleteMusic }) {
  return (
    <main className="main_container">
      <NewMusic musicList={musicList} onDeleteMusic={onDeleteMusic} />
      <MusicDetail />
    </main>
  );
}

/////////// a component for adding(rendering) a music from the form //////////

function MusicForm({ onAddMusic }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [duration, setDuration] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState(null);

  // inner function to handle the submit button
  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !artist || !duration || !genre) return;
    const music = { title, artist, duration, genre, image };
    onAddMusic(music);

    setTitle("");
    setArtist("");
    setDuration("");
    setGenre("");
    setImage(null);
  }
  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  }

  return (
    <div className="music_Form_Container">
      <form onSubmit={handleSubmit}>
        <label>Music Title:</label>
        <div>
          <input
            type="text"
            placeholder="insert music title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <label>Artist:</label>
        <div>
          <input
            type="text"
            placeholder="insert artist name..."
            value={artist}
            onChange={(e) => {
              setArtist(e.target.value);
            }}
          />
        </div>
        <label>Duration:</label>
        <div>
          <input
            type="text"
            placeholder="insert the duration"
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
            }}
          />
        </div>
        <label>Genre:</label>
        <div>
          <input
            type="text"
            placeholder="insert music genre.."
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <button type="submit" className="btn">
          Add Music
        </button>
      </form>
      <div className="search__container">
        <input
          className="searchInput"
          type="text"
          placeholder="Enter The music You want..."
        />
        <button className="searchBtn">Search</button>
        <p style={{fontSize:'20px'}} className="music_quote">
          Embark on a journey where words meet melody, and creativity knows no
          bounds. Welcome to a space where imagination takes center stage, and
          every click unfolds a symphony of possibilities. Explore, engage, and
          let the rhythm of inspiration guide you through our digital realm.
        </p>
      </div>
    </div>
  );
}

// the currently existing musics from The json data
function MusicDetail() {
  return musicData.map((data, id) => (
    <div key={id} className="image_container">
      <div>
        <img
          style={{ cursor: "pointer" }}
          width={"300px"}
          height={"200px"}
          src={`imgs/${data.image}`}
          alt={data.musicTitle}
        />
      </div>
      <h4 className="Music">musicTitle:{data.musicTitle}</h4>
      <h4 className="Music">Artist:{data.artist}</h4>
      <h4 className="Music">Duration:{data.duration}</h4>
      <h4 className="Music">gener:{data.genre}</h4>
    </div>
  ));
}

// New Music Adding Component
function NewMusic({ musicList, onDeleteMusic }) {
  return musicList.map((data) => (
    <div key={data.id} className="image_container">
      <div>
        <img
          style={{ cursor: "pointer" }}
          width={"300px"}
          height={"200px"}
          src={data.image}
          alt={data.title}
        />
      </div>
      <h4 className="Music">musicTitle: {data.title}</h4>
      <h4 className="Music">Artist: {data.artist}</h4>
      <h4 className="Music">Duration: {data.duration}</h4>
      <h4 className="Music">Genre: {data.genre}</h4>
      <div className="btn_container">
        <button className="btn" onClick={() => onDeleteMusic(data.id)}>
          Delete
        </button>
        <button className="btn">Update</button>
      </div>
    </div>
  ));
}

// /////////a component for Footer///////////

function Footer() {
  return <div className="footer">@music_page All rights reserved &copy;</div>;
}
