import "../LandingPage/landingpage.css";
import { AsideBar, SmallCard } from "../../components/";
import { useHistoryContext } from "../../context";
import { AiOutlineHistory } from "react-icons/ai";
import { Link } from "react-router-dom";

function HistoryPage() {
  const { history, clearHistory, removeFromHistory } = useHistoryContext();

  return (
    <div>
      <div className="body-section">
        <AsideBar />
        <section className="cards">
          <h3 className="main-section-heading">
            <div className="main-section-heading-center">
              <AiOutlineHistory />
              Watch History {history.length}
            </div>
            <div>
              <button onClick={clearHistory} className="btn btn-primary">
                Clear All
              </button>
            </div>
          </h3>

          {history.length > 0 ? (
            <div className="card--container">
              {history?.map((video) => (
                <SmallCard
                  key={video._id}
                  video={video}
                  removeFunction={() => removeFromHistory(video._id)}
                />
              ))}
            </div>
          ) : (
            <section className="error-section">
              <div className="error-text">
                <p className="error-details">
                  You don't have any videos in history.
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

export { HistoryPage };
