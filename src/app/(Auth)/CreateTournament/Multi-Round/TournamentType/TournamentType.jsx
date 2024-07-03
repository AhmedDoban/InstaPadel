import Link from "next/link";
import MainTitle from "@/Components/MainTitle/MainTitle";
import "./TournamentType.css";

function TournamentType() {
  return (
    <div className="TournamentType">
      <div className="NaviGation">
        <Link href="/CreateTournament">Privacy</Link>
        <span>/</span>
        <Link href="/CreateTournament/Multi-Round">Multi-Round</Link>
        <span>/</span>
        <Link
          className="Active"
          href="/CreateTournament/Multi-Round/TournamentType"
        >
          Tournament Type
        </Link>
      </div>
      <MainTitle Weight="600" FontSize="24px">
        Multi-Round
      </MainTitle>
      <div className="TournamentType-box"></div>
    </div>
  );
}
export default TournamentType;
