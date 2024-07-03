"use client";
import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";
import "./CreateTournament.css";
import MainTitle from "@/Components/MainTitle/MainTitle";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Page() {
  const [TourState, SetTourState] = useState(true);
  return (
    <AuthWrapper>
      <div className="CreateTournament">
        <div className="leftContent">
          <div className="Create-Head">
            <MainTitle Weight={600} FontSize="20px">
              Privacy
            </MainTitle>
            <div className="input-toggle">
              <input
                type="checkbox"
                id="ChangeTourState"
                checked={TourState}
                hidden
                onChange={() => SetTourState(!TourState)}
              />
              <label htmlFor="ChangeTourState"></label>
              <p> {TourState ? "Private" : "Public"}</p>
            </div>
          </div>
          <div className="Create-box">
            <Link className="box" href="/CreateTournament/Multi-Round">
              <h2>Multi-Round</h2>
              <p>Format</p>
              <Image
                className="Cre-Tour-OverLay1"
                width={200}
                height={200}
                src="/CreateTournament/Gear.svg"
              />
            </Link>
            <Link className="box" href="/CreateTournament/League">
              <h2>League</h2>
              <p>Format</p>
              <Image
                className="Cre-Tour-OverLay2"
                width={200}
                height={200}
                src="/CreateTournament/Stadium.svg"
              />
            </Link>
          </div>
        </div>
        <div className={`rightStatus  ${TourState ? "Private" : "Public"}`}>
          <span>{TourState ? "Private" : "Public"}</span>
        </div>
      </div>
    </AuthWrapper>
  );
}
export default Page;
