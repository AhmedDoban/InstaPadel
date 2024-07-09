"use client";
import Image from "next/image";
import "./MatchesBox.css";
import { useState } from "react";

function MatchesBox({
  SetUserDetails,
  SetUserDetailsModel,
  SetSummaryDetailsModel,
  SetTimerModel,
}) {
  const [DetailsOpen, SetDetailsOpen] = useState(false);

  return (
    <div
      className={
        DetailsOpen ? "match-box-container" : "match-box-container open"
      }
    >
      <div className="General-Info">
        <h3>Group 2</h3>
        <div className="actions">
          <div className="time" onClick={() => SetTimerModel(true)}>
            <span>12:14</span>
            <Image src="/Matches/Time.svg" width={30} height={30} alt="Time" />
          </div>
          <div className="summary" onClick={() => SetSummaryDetailsModel(true)}>
            <Image
              src="/Matches/Summary.svg"
              width={30}
              height={30}
              alt="Summary"
            />
          </div>
          <div className="Expand" onClick={() => SetDetailsOpen(!DetailsOpen)}>
            <Image
              src={
                DetailsOpen
                  ? "/Matches/arrow-down.svg"
                  : "/Matches/arrow-up.svg"
              }
              width={30}
              height={30}
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
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
            <div className="user-box">
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
          <div className="vs">
            <Image src="/Matches/VS.svg" width={50} height={50} alt="VS" />
          </div>
          <div className="match-box">
            <div className="user-box">
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
            <div className="user-box">
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
        </div>
        <div className="More-Matches-details">
          <div className="match-box">
            <div className="user-box">
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
            <div className="user-box">
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
          <div className="vs">
            <Image src="/Matches/VS.svg" width={50} height={50} alt="VS" />
          </div>
          <div className="match-box">
            <div className="user-box">
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
            <div className="user-box">
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
        </div>
        <div className="More-Matches-details">
          <div className="match-box">
            <div className="user-box">
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
            <div className="user-box">
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
          <div className="vs">
            <Image src="/Matches/VS.svg" width={50} height={50} alt="VS" />
          </div>
          <div className="match-box">
            <div className="user-box">
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
            <div className="user-box">
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
        </div>
        <div className="More-Matches-details">
          <div className="match-box">
            <div className="user-box">
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
            <div className="user-box">
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
          <div className="vs">
            <Image src="/Matches/VS.svg" width={50} height={50} alt="VS" />
          </div>
          <div className="match-box">
            <div className="user-box">
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
            <div className="user-box">
              <span>T4</span>
              <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
              <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchesBox;
