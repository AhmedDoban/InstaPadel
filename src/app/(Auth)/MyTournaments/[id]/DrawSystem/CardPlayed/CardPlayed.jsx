import Image from "next/image";
import "./CardPlayed.css";

function CardPlayed({ Isplayed = true, loser = false }) {
  return (
    <div className="CardPlayed">
      <div className={Isplayed ? "left Isplayed" : "left"}>
        <Image src="/Draw/location.svg" width={20} height={20} alt="location" />
        <Image src="/Draw/goal.svg" width={20} height={20} alt="location" />
        <Image src="/Draw/clock.svg" width={20} height={20} alt="location" />
      </div>
      <div className="competition-box">
        <div className={loser ? "user-box loser" : "user-box"}>
          <span>T4</span>
          <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
          <h4>Ali Ahmad</h4>
        </div>
        <div className={Isplayed ? "vs Isplayed" : "vs"}>
          <Image src="/Draw/VS.svg" width={20} height={20} alt="VS" />
        </div>
        <div className={!loser ? "user-box loser" : "user-box"}>
          <span>T4</span>
          <Image src="/User/User1.jpeg" width={20} height={20} alt="User" />
          <h4>Ali Ahmad</h4>
        </div>
      </div>
    </div>
  );
}
export default CardPlayed;
