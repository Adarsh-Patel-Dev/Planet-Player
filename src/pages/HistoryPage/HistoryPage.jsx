import "../LandingPage/landingpage.css";
import { AsideBar, CardHorizontal } from "../../components/";
import { useHistoryContext } from "../../context/history-context";
// import { SmallCard} from "../../components/Card/SmallCard/SmallCard"
import { AiOutlineHistory } from "react-icons/ai";

function HistoryPage() {
  const { history,clearHistory } = useHistoryContext();

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
              <button 
              onClick={clearHistory}
              className="btn btn-primary">Clear All</button>
            </div>
          </h3>
          <div className="card--container">
            {history?.map((video) => (
              <CardHorizontal key={video._id} video={video} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export { HistoryPage };
