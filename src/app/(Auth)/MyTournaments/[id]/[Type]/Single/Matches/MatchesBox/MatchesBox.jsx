"use client";
import Image from "next/image";
import "./MatchesBox.css";
import { useState } from "react";

function MatchesBox({
  SetUserDetails,
  SetUserDetailsModel,
  SetSummaryDetailsModel,
  SetTimerModel,
  Match,
}) {
  const [DetailsOpen, SetDetailsOpen] = useState(false);

  return (
    <div
      className={
        DetailsOpen ? "match-box-container" : "match-box-container open"
      }
    >
      <div className="General-Info">
        <h3>Group {Match.id}</h3>
        <div className="actions">
          <div className="time" onClick={() => SetTimerModel(true)}>
            <span>12:14 - 14/3</span>
            <Image src="/Matches/Time.svg" width={30} height={30} alt="Time" />
          </div>

          <div className="Expand" onClick={() => SetDetailsOpen(!DetailsOpen)}>
            <Image
              src={
                DetailsOpen
                  ? "/Matches/arrow-down.svg"
                  : "/Matches/arrow-up.svg"
              }
              width={20}
              height={20}
              alt="Summary"
            />
          </div>
        </div>
      </div>
      <div
        className={
          DetailsOpen ? "DetailsCotainer-box open" : "DetailsCotainer-box"
        }
      >
        <div className="More-Matches-details">
          <div className="match-box">
            <div className="user-box">
              <span>P1</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
          <div className="vs">
            <Image src="/Matches/VS.svg" width={30} height={30} alt="VS" />
          </div>
          <div className="match-box">
            <div className="user-box">
              <span>P2</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
          <div className="summary" onClick={() => SetSummaryDetailsModel(true)}>
            <Image
              src="/Matches/Summary.svg"
              width={20}
              height={20}
              alt="Summary"
            />
          </div>
        </div>
        <div className="More-Matches-details">
          <div className="match-box">
            <div className="user-box">
              <span>P3</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
          <div className="vs">
            <Image src="/Matches/VS.svg" width={50} height={50} alt="VS" />
          </div>
          <div className="match-box">
            <div className="user-box">
              <span>P4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
          <div className="summary" onClick={() => SetSummaryDetailsModel(true)}>
            <Image
              src="/Matches/Summary.svg"
              width={20}
              height={20}
              alt="Summary"
            />
          </div>
        </div>
        <div className="More-Matches-details">
          <div className="match-box">
            <div className="user-box">
              <span>P5</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
          <div className="vs">
            <Image src="/Matches/VS.svg" width={50} height={50} alt="VS" />
          </div>
          <div className="match-box">
            <div className="user-box">
              <span>P6</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
          <div className="summary" onClick={() => SetSummaryDetailsModel(true)}>
            <Image
              src="/Matches/Summary.svg"
              width={20}
              height={20}
              alt="Summary"
            />
          </div>
        </div>
        <div className="More-Matches-details">
          <div className="match-box">
            <div className="user-box">
              <span>P7</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
          <div className="vs">
            <Image src="/Matches/VS.svg" width={50} height={50} alt="VS" />
          </div>
          <div className="match-box">
            <div className="user-box">
              <span>P8</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
          <div className="summary" onClick={() => SetSummaryDetailsModel(true)}>
            <Image
              src="/Matches/Summary.svg"
              width={20}
              height={20}
              alt="Summary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchesBox;
