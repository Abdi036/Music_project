// the currently existing musics from The json data
export default function MusicDetail({ sortedData }) {
  return sortedData.map((data, id) => (
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
      <div>
        <h4 className="Music">musicTitle:{data.musicTitle}</h4>
        <h4 className="Music">Artist:{data.artist}</h4>
        <h4 className="Music">Duration:{data.duration}</h4>
        <h4 className="Music">gener:{data.genre}</h4>
      </div>
    </div>
  ));
}
