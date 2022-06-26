import "../LandingPage/landingpage.css";
import { AsideBar, SmallCard } from "../../components/";
import { useLikeVideoContext } from "../../context/";
import { BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";

function LikedVideoPage() {
  const {
    likedVideo,
    clearLikedVideos,
    setLikeVideo,
    removeFromLikeVideo,
    setIsLike,
  } = useLikeVideoContext();

  return (
    <div>
      <div className="body-section">
        <AsideBar />
        <section className="cards">
          <h3 className="main-section-heading">
            <div className="main-section-heading-center">
              <BiLike />
              Favourite Videos {likedVideo.length}
            </div>
            <div>
              <button onClick={clearLikedVideos} className="btn btn-primary">
                Clear All
              </button>
            </div>
          </h3>

          {likedVideo.length > 0 ? (
            <div className="card--container">
              {likedVideo?.map((video) => (
                <SmallCard
                  key={video._id}
                  video={video}
                  removeFunction={() =>
                    removeFromLikeVideo(video._id, setLikeVideo, setIsLike)
                  }
                />
              ))}
            </div>
          ) : (
            <section className="error-section">
              <div className="error-text">
                <p className="error-details">
                  You don't have any videos in Favourites.
                </p>
                <Link to="/videolisting">
                  <button className="btn-solid nav--link">
                    Explore videos{" "}
                  </button>
                </Link>
              </div>
            </section>
          )}
        </section>
      </div>
    </div>
  );
}

export { LikedVideoPage };
