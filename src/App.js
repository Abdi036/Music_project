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
      <MusicInfo />
      <MusicInfo />
      <MusicInfo />
    </main>
  );
}
function MusicInfo() {
  return (
    <div className="image_container">
      <a href>
        <img src="imgs/Wall-e.jpg" alt="Wall-E" />
      </a>
      <h4 className="Music_title">musicTitle:shape of you</h4>
      <div className="btn_container">
        <button className="btn">Delete</button>
        <button className="btn">Update</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <footer>@music All rights reserved &copy;</footer>
    </div>
  );
}

export default App;
