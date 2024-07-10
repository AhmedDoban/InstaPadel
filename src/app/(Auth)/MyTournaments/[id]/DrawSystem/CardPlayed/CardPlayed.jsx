import Image from "next/image";
import "./CardPlayed.css";
import Link from "next/link";

function CardPlayed({
  Isplayed = true,
  loser = false,
  Winner = false,
  SetUserDetailsModel,
  SetSummaryResultModel,
  SetSummaryDetailsModel,
  SetTimerModel,
  SetLocationModel,
}) {
  return (
    <div className="CardPlayed">
      <div className={Isplayed ? "left Isplayed" : "left"}>
        <Image
          src="/Draw/location.svg"
          width={20}
          height={20}
          alt="location"
          onClick={() => SetLocationModel(true)}
        />
        <Image
          src="/Draw/goal.svg"
          width={20}
          height={20}
          alt="goal"
          onClick={
            Winner
              ? () => SetSummaryDetailsModel(true)
              : () => SetSummaryResultModel(true)
          }
        />
        <Image
          src="/Draw/clock.svg"
          width={20}
          height={20}
          alt="clock"
          onClick={() => SetTimerModel(true)}
        />
      </div>
      <div className="competition-box">
        <div className={loser ? "user-box loser" : "user-box"}>
          <span>T4</span>
          <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
          <h4>
            {Winner ? (
              <Link href="/Winner">Ali Ahmad</Link>
            ) : (
              <span onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</span>
            )}
          </h4>
        </div>
        <div className={Isplayed ? "vs Isplayed" : "vs"}>
          <Image src="/Draw/VS.svg" width={20} height={20} alt="VS" />
        </div>
        <div className={!loser ? "user-box loser" : "user-box"}>
          <span>T4</span>
          <Image src="/User/User1.jpeg" width={20} height={20} alt="User" />
          <h4>
            {Winner ? (
              <Link href="/Winner">Ali Ahmad</Link>
            ) : (
              <span onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</span>
            )}
          </h4>
        </div>
      </div>
    </div>
  );
}
export default CardPlayed;
