import "../LandingPage/landingpage.css";
import { AsideBar, CardHorizontal } from "../../components/";
// import { useHistoryContext } from "../../context/history-context";
// import { SmallCard} from "../../components/Card/SmallCard/SmallCard"
import { AiOutlineHistory } from "react-icons/ai";
import { usePlaylistContext } from "../../context/playlist-context";
import { PlaylistCard } from "../../components/Card/PlaylistCard/PlaylistCard";

function PlaylistPage() {
//   const { history } = useHistoryContext();
  const { playlist } = usePlaylistContext();

  return (
    <div>
      <div className="body-section">
        <AsideBar />
        <section className="cards">
          <h3 className="main-section-heading">
          <div className="main-section-heading-center">
            <AiOutlineHistory />
             Playlist {playlist.length}
             </div>
             <div>
             <button 
              onClick={()=>{}}
              className="btn btn-primary">Clear All</button>
             </div>
          </h3>
          <div className="card--container">
            {playlist?.map((video) => (
              <PlaylistCard key={video._id} 
            //   video={video}
               />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export { PlaylistPage };
