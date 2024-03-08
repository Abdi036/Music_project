import musicData from "./data.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <Musics />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header_container">
      <div>
        <h1>
          Music is the universal language that transcends boundaries, speaks to
          the soul, and paints emotions on the canvas of our existence.
        </h1>
      </div>
    </header>
  );
}

function List() {
  return (
    <div className="music_list">
      <h2>Music list</h2>
    </div>
  );
}

function Musics() {
  return (
    <main className="main_container">
      <button className=" Add_song btn">Add Music</button>
      <MusicInfo />
    </main>
  );
}

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
      <div className="btn_container">
        <button className="btn">Delete</button>
        <button className="btn">Update</button>
      </div>
    </div>
  ));
}

function Footer() {
  return <div className="footer">@music_page All rights reserved &copy;</div>;
}

export default App;
