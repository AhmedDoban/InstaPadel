import Head from "../HeadMyTournaments/HeadMyTournaments";
import "./Matches.css";

function Matches({ ShwonPage, SetShownPage }) {
  return (
    <div className="Matches">
      <Head Title={ShwonPage} SetShownPage={SetShownPage}>
        <button>Start next Stage</button>
      </Head>
    </div>
  );
}
export default Matches;
