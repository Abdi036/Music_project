import { useState } from "react";

/////////// a component for adding(rendering) a music from the form //////////
export default function MusicForm({ onAddMusic, sortBy, setSortBy }) {
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
    setImage("");
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
          placeholder="Search the music You want..."
        />
        <button className="searchBtn">Search</button>
        <p style={{ fontSize: "20px" }} className="music_quote">
          Embark on a journey where words meet melody, and creativity knows no
          bounds. Welcome to a space where imagination takes center stage, and
          every click unfolds a symphony of possibilities. Explore, engage, and
          let the rhythm of inspiration guide you through our digital realm.
        </p>
        <div>
          <img
            className="header_image"
            src="imgs/pexels-victor-freitas-733767.jpg"
            alt="BG_image"
          />
        </div>
        <div>
          <select
            className="Select_box"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="input">Sort by input order</option>
            <option value="name">Sort by input name</option>
          </select>
        </div>
      </div>
    </div>
  );
}
