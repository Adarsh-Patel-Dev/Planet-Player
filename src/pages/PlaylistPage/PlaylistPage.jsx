import "../LandingPage/landingpage.css";
import { AsideBar, CardHorizontal } from "../../components/";
// import { useHistoryContext } from "../../context/history-context";
import {
  MdPlaylistPlay,
} from "react-icons/md";
import { usePlaylistContext } from "../../context/playlist-context";
import { PlaylistCard } from "../../components/Card/PlaylistCard/PlaylistCard";

function PlaylistPage() {
//   const { history } = useHistoryContext();
  const { playlist, setPlaylist } = usePlaylistContext();

  return (
    <div>
      <div className="body-section">
        <AsideBar />
        <section className="cards">
          <h3 className="main-section-heading">
          <div className="main-section-heading-center">
            <MdPlaylistPlay />
             All Playlists ({playlist.length})
             </div>
             <div>
             <button 
              onClick={()=>setPlaylist([])}
              className="btn btn-primary">Clear All</button>
             </div>
          </h3>
          <div className="card--container">
            {playlist?.map((video) => (
              <PlaylistCard key={video._id} 
              playlist={video} removeFunction={()=>{}}
               />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export { PlaylistPage };
