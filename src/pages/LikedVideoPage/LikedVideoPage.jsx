import "../LandingPage/landingpage.css";
import { AsideBar, CardHorizontal } from "../../components/";
import { useLikeVideoContext } from "../../context/liked-video-context";
// import { SmallCard} from "../../components/Card/SmallCard/SmallCard"
import { BiLike } from "react-icons/bi";

function LikedVideoPage() {
  const { likedVideo,clearLikedVideos } = useLikeVideoContext();

  return (
    <div>
      <div className="body-section">
        <AsideBar />
        <section className="cards">
          <h3 className="main-section-heading">
          <div className="main-section-heading-center">
            <BiLike />
            Liked Videos {likedVideo.length}
          </div>
            <div>
              <button 
              onClick={clearLikedVideos}
              className="btn btn-primary">Clear All</button>
            </div>
          </h3>
          <div className="card--container">
            {likedVideo?.map((video) => (
              <CardHorizontal key={video._id} video={video} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export { LikedVideoPage };
