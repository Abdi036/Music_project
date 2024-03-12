// New Music Adding Component
export default function NewMusic({ sortedMusic, onDeleteMusic }) {
  console.log(sortedMusic);
  return sortedMusic.map((data) => (
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
