"use client";
import Image from "next/image";
import Head from "../HeadMyTournaments/HeadMyTournaments";
import "./DrawSystem.css";
import CardPlayed from "./CardPlayed/CardPlayed";
import Link from "next/link";

function DrawSystem({ ShwonPage, SetShownPage }) {
  return (
    <div className="DrawSystem">
      <Head Title={ShwonPage} SetShownPage={SetShownPage}>
        <button>
          <Image
            width={18}
            height={18}
            alt="Download"
            src="/MyTournaments/download.svg"
          />
          Download excel
        </button>
      </Head>
      <div className="DrawContainer-chart">
        <div className="left">
          <div className="card-played-box">
            <div className="left-played">
              <CardPlayed />
              <CardPlayed />
            </div>
            <Image
              src="/Draw/LeftArrowSmall.svg"
              width={80}
              height={230}
              alt="LeftArrowSmall"
            />
            <CardPlayed />
          </div>
          <div className="card-played-box">
            <div className="left-played">
              <CardPlayed />
              <CardPlayed />
            </div>
            <Image
              src="/Draw/LeftArrowSmall.svg"
              width={80}
              height={230}
              alt="LeftArrowSmall"
            />
            <CardPlayed />
          </div>
        </div>
        <Image
          src="/Draw/LeftArrowLarg.svg"
          width={200}
          height={400}
          alt="LeftArrowSmall"
        />
        <Link href="/Winner" className="winner">
          <CardPlayed />
        </Link>
        <Image
          src="/Draw/RightArrowLarg.svg"
          width={200}
          height={400}
          alt="RightArrowLarg"
        />
        <div className="right">
          <div className="card-played-box">
            <div className="right-played">
              <CardPlayed />
              <CardPlayed />
            </div>
            <Image
              src="/Draw/RightArrowSmall.svg"
              width={80}
              height={230}
              alt="LeftArrowSmall"
            />
            <CardPlayed />
          </div>
          <div className="card-played-box">
            <div className="right-played">
              <CardPlayed />
              <CardPlayed />
            </div>
            <Image
              src="/Draw/RightArrowSmall.svg"
              width={80}
              height={230}
              alt="LeftArrowSmall"
            />
            <CardPlayed />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DrawSystem;
