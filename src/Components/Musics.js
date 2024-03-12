import NewMusic from "./NewMusic";
import MusicDetail from "./MusicDetail";

export default function Musics({
  musicList,
  onDeleteMusic,
  sortedData,
  sortedMusic,
}) {
  return (
    <main className="main_container">
      <NewMusic
        musicList={musicList}
        onDeleteMusic={onDeleteMusic}
        sortedMusic={sortedMusic}
      />
      <MusicDetail musicList={musicList} sortedData={sortedData} />
    </main>
  );
}
