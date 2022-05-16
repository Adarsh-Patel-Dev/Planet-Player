import "../LandingPage/landingpage.css";
import { useParams } from "react-router-dom";
import { AsideBar, SmallCard } from "../../components/";
import { MdPlaylistPlay } from "react-icons/md";
import { usePlaylistContext } from "../../context/";

function SinglePlaylistPage() {
  const { playlistId } = useParams();
  const { playlist, setPlaylist, removeFromPlaylist, removePlaylist } =
    usePlaylistContext();

  const filteredPlaylist = playlist.filter(
    (playlist) => playlist._id === playlistId
  );

  console.log(filteredPlaylist);
  console.log(filteredPlaylist[0].videos);

  const videosInPlaylist = filteredPlaylist[0].videos;
  console.log("videoinplaylist", videosInPlaylist);

  const {
    title: { playlistName },
    _id,
    videos,
  } = filteredPlaylist[0];
  console.log(playlistId, "playlistidddd");

  return (
    <div>
      <div className="body-section">
        <AsideBar />
        <section className="cards">
          <h3 className="main-section-heading">
            <div className="main-section-heading-center">
              <MdPlaylistPlay />
              {playlistName} ({videosInPlaylist.length})
            </div>
            <div>
              {/* <button onClick={()=>removePlaylist(_id, setPlaylist )} className="btn btn-primary"> */}
            </div>
          </h3>
          <div className="card--container">
            {videosInPlaylist?.map((video) => (
              <SmallCard
                key={video._id}
                video={video}
                removeFunction={() =>
                  removeFromPlaylist(_id, video._id, setPlaylist)
                }
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export { SinglePlaylistPage };
