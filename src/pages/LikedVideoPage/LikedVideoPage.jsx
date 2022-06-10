import "../LandingPage/landingpage.css";
import { AsideBar, SmallCard } from "../../components/";
import { useLikeVideoContext } from "../../context/";
import { BiLike } from "react-icons/bi";

function LikedVideoPage() {
  const { likedVideo, clearLikedVideos, setLikeVideo, removeFromLikeVideo, setIsLike  } =
    useLikeVideoContext();

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
              <button onClick={clearLikedVideos} className="btn btn-primary">
                Clear All
              </button>
            </div>
          </h3>
          <div className="card--container">
            {likedVideo?.map((video) => (
              <SmallCard
                key={video._id}
                video={video}
                removeFunction={() =>
                  removeFromLikeVideo(video._id, setLikeVideo, setIsLike )
                }
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export { LikedVideoPage };
