import musicData from "./data.json";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MusicForm />
      <Musics />
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

function Musics() {
  return (
    <main className="main_container">
      <MusicInfo />
    </main>
  );
}

/////////// a component for adding(rendering) a music from the form //////////

function MusicForm() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [duration, setDuration] = useState("");
  const [genre, setGenre] = useState("");

    // inner function to handle the submit button
  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !artist || !duration || !genre) return;
    const elements = { title, artist, duration, genre };
    console.log(elements);

    setTitle("");
    setArtist("");
    setDuration("");
    setGenre("");
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
        <button type="submit" className="btn">
          Add Music
        </button>
      </form>
      <div>
        <p>
          Music is the universal language that transcends boundaries, speaks to
          the soul, and paints emotions on the canvas of our existence. Music is
          the universal language that transcends boundaries, speaks to the soul,
          and paints emotions on the canvas of our existence. Music is the
        </p>
      </div>
    </div>
  );
}

// ////// a component for musicInformation/////////////

function MusicInfo() {
  return musicData.map((data) => (
    <div key={data.id} className="image_container">
      <a href="#">
        <img
          width={"300px"}
          height={"200px"}
          src={`imgs/${data.image}`}
          alt={data.musicTitle}
        />
      </a>
      <h4 className="Music">musicTitle:{data.musicTitle}</h4>
      <h4 className="Music">Artist:{data.artist}</h4>
      <h4 className="Music">Duration:{data.duration}</h4>
      <h4 className="Music">gener:{data.genre}</h4>
      {/* <div className="btn_container">
        <button className="btn">Delete</button>
        <button className="btn">Update</button>
      </div> */}
    </div>
  ));
}

// /////////a component for Footer///////////

function Footer() {
  return <div className="footer">@music_page All rights reserved &copy;</div>;
}
