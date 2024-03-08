import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Musics />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header_container">
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Music List</h1>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          pariatur magni sunt eveniet alias debitis ipsum vitae velit molestias
          quibusdam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Deleniti pariatur magni sunt eveniet alias debitis ipsum vitae velit
          molestias quibusdam. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Deleniti pariatur magni sunt eveniet alias debitis
          ipsum vitae velit molestias quibusdam.
        </p>
      </div>
    </header>
  );
}

function Musics() {
  return (
    <main className="main_container">
      <button className=" Add_song btn">Add Song</button>
      <MusicInfo />
      <MusicInfo />
      <MusicInfo />
      <MusicInfo />
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
