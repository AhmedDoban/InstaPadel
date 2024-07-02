"use client";
import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";
import MainTitle from "@/Components/MainTitle/MainTitle";
import Image from "next/image";
import { useState } from "react";
import "./MyTournaments.css";

function Page() {
  const [Tournaments, SetTournaments] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  return (
    <AuthWrapper>
      <div className="MyTournaments">
        <MainTitle Weight={600} FontSize="28px">
          My Tournaments
        </MainTitle>
        <div className="MyTournaments-container">
          {Tournaments.map((tour, index) => (
            <div className="Tournament-Card" key={index}>
              <div className="Head">
                <h1>Tournament {index + 1}</h1>
                <div className="counter">
                  <p>Players Left</p>
                  <span>0/12</span>
                </div>
              </div>
              <div className="TourBody">
                <div className="box">
                  <Image
                    src="/MyTournaments/level.svg"
                    width={35}
                    height={35}
                    alt="level"
                  />
                  <p>Level A</p>
                </div>
                <div className="box">
                  <Image
                    src="/MyTournaments/location.svg"
                    width={35}
                    height={35}
                    alt="location"
                  />
                  <p>New Cairo</p>
                </div>
                <div className="box">
                  <Image
                    src="/MyTournaments/date.svg"
                    width={35}
                    height={35}
                    alt="level"
                  />
                  <p>2024/2/5</p>
                </div>
                <div className="box">
                  <Image
                    src="/MyTournaments/Ball.svg"
                    width={35}
                    height={35}
                    alt="level"
                  />
                  <p>Multi Round</p>
                </div>
              </div>
              <div className="TourStatus">
                <span>Public</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AuthWrapper>
  );
}
export default Page;
