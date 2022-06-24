import React from "react";
import "../card.css";
import "./singlevideo.css";
import { PlaylistModal } from "../../PlaylistModal/PlaylistModal";
import { useParams } from "react-router-dom";
import { CardHorizontal } from "../CardHorizontal";
import {
  MdOutlineWatchLater,
  MdWatchLater,
  MdPlaylistAdd,
  MdPlaylistAddCheck,
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "../../../Assets/Icons";
import {
  usePlaylistContext,
  useVideoListing,
  useLikeVideoContext,
  useWatchLaterContext,
} from "../../../context/";

function SingleVideoCard() {
  const { videoId } = useParams();

  const { videoList } = useVideoListing();
  const { toggleModal, inPlaylist, setInPlaylist } = usePlaylistContext();
  const {
    isLike,
    setIsLike,
    addToLikeVideo,
    setLikeVideo,
    removeFromLikeVideo,
  } = useLikeVideoContext();
  const {
    addToWatchLater,
    removeFromWatchLater,
    setWatchLater,
    inWatchLater,
    setInWatchLater,
  } = useWatchLaterContext();

  const filteredVideo = videoList.filter((video) => video._id === videoId);

  const {
    _id,
    old,
    views,
    title,
    creator,
    duration,
    video_id,
    creater_img,
    category,
    description,
    thumbnailUrl,
  } = filteredVideo[0];

  console.log("category", category);

  const videourl = `https://www.youtube.com/embed/${video_id}`;

  const filteredVideoByCategory = videoList.filter(
    (video) => video.category === category
  );
  const suffleFilteredVideos = filteredVideoByCategory.sort(
    () => Math.random() - 0.5
  );

  console.log(filteredVideoByCategory);

  return (
    <div>
      <div className="body-section">
        {/* <AsideBar /> */}
        <div className="card--single-video">
          <div className="card--image--single-video">
            <iframe
              className="iframe"
              // width="1100"
              // height="620"
              src={videourl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <span className="duration-label">{duration}</span>
          </div>

          <div className="card--body--single-video">
            <div className="card--details--singlevideo">
              <h4 className="card--title">{title}</h4>
              <div className="card-views">
                {views} . {old}
              </div>
              <div className="actions-buttons">
                <span>
                  {!isLike ? (
                    <AiOutlineLike
                      onClick={() =>
                        addToLikeVideo(
                          filteredVideo[0],
                          setLikeVideo,
                          setIsLike
                        )
                      }
                    />
                  ) : (
                    <AiFillLike
                      onClick={() =>
                        removeFromLikeVideo(_id, setLikeVideo, setIsLike)
                      }
                    />
                  )}
                </span>

                <span>
                  {!inPlaylist ? (
                    <MdPlaylistAdd onClick={toggleModal} />
                  ) : (
                    <MdPlaylistAddCheck onClick={toggleModal} />
                  )}
                </span>

                <PlaylistModal video={filteredVideo[0]} />
                <span>
                  {!inWatchLater ? (
                    <MdOutlineWatchLater
                      onClick={() =>
                        addToWatchLater(
                          filteredVideo[0],
                          setWatchLater,
                          setInWatchLater
                        )
                      }
                    />
                  ) : (
                    <MdWatchLater
                      onClick={() =>
                        removeFromWatchLater(
                          _id,
                          setWatchLater,
                          setInWatchLater
                        )
                      }
                    />
                  )}
                </span>
              </div>
            </div>
            <hr />
            <div className="card--footer">
              <div className="channel-looogo">
                <img className="logo-img" src={creater_img} alt="logo" />
              </div>

              <div className="card-footer-singlevideo">
                <div className="card-channel">{creator}</div>
                <div className="card-channel-subscribers">10M Subscribers</div>
                <div className="card-channel-desc">{description}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="explore--section">
          <h2>Related videos</h2>
          <div className="card-container">
            {suffleFilteredVideos?.map((video) => (
              <CardHorizontal key={video._id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { SingleVideoCard };
