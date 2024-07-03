import Link from "next/link";
import MainTitle from "@/Components/MainTitle/MainTitle";
import "./TournamentType.css";

function TournamentType({ SetPageLoaded }) {
  return (
    <div className="TournamentType">
      <div className="NaviGation">
        <Link href="/CreateTournament">Privacy</Link>
        <span>/</span>
        <Link
          href="/CreateTournament/Multi-Round"
          onClick={() => SetPageLoaded(1)}
        >
          Multi-Round
        </Link>
        <span>/</span>
        <Link className="Active" href="/CreateTournament/Multi-Round">
          Tournament Type
        </Link>
      </div>
      <MainTitle Weight="600" FontSize="24px">
        Tournament Type
      </MainTitle>
      <div className="TournamentType-box"></div>
    </div>
  );
}
export default TournamentType;
