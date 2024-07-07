import Image from "next/image";
import "./NoTournaments.css";
import Link from "next/link";

function NoTournaments() {
  return (
    <div className="NoTournaments">
      <div className="Image-Animation">
        <Image src="/user.png" width={150} height={150} alt="User" />
      </div>
      <h1>Ali Ahmad</h1>
      <p>
        You have won the tournament qualifiers and the agreed-upon prize will be
        sent
      </p>
      <div className="actions">
        <Link className="Create" href="/CreateTournament">
          Create Tournament
        </Link>
        <button className="Share">
          <Image
            src="/MyTournaments/share.svg"
            width={100}
            height={100}
            alt="share"
          />
        </button>
      </div>
    </div>
  );
}
export default NoTournaments;
