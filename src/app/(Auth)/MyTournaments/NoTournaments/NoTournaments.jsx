import Image from "next/image";
import "./NoTournaments.css";
import Link from "next/link";

function NoTournaments() {
  return (
    <div className="NoTournaments">
      <div className="Image-Animation">
        <Image src="/user.png" width={150} height={150} alt="User" />
      </div>
      <h1>Ali Ahmed</h1>
      <p>There is no Tournaments</p>
      <div className="actions">
        <Link className="Create" href="/CreateTournament">
          Create Tournament
        </Link>
      </div>
    </div>
  );
}
export default NoTournaments;
