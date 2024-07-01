"use client";
import Image from "next/image";
import "./Dashboards.css";
import { users } from "./DummyUsers";
import MainTitle from "@/Components/MainTitle/MainTitle";
import { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

function Dashboards() {
  const [Search, SetSearch] = useState("");
  const data = [
    { id: 1, value: 38.6, label: "United States", color: "#1C1C1C" },
    { id: 2, value: 22.5, label: "Canada", color: "#A1E3CB" },
    { id: 3, value: 30.8, label: "Mexico", color: "#B1E3FF" },
    { id: 4, value: 8.1, label: "Other", color: "#A8C5DA" },
  ];

  const operatingSystems = [
    "Linux",
    "Mac",
    "iOS",
    "Windows",
    "Android",
    "Other",
  ];

  const OSData = [18034, 24567, 12789, 21904, 15234, 17546];

  return (
    <div className="Dashboards">
      <div className="right">
        <div className="boxOffer1">
          <div className="overlay">
            <h1>Offer 55%</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>
        <div className="boxOffer2">
          <div className="overlay">
            <h1>Offer 40%</h1>
          </div>
        </div>
        <div className="box"></div>
      </div>
      <div className="left">
        <div className="box-users">
          <div className="head-box">
            <div className="left">
              <MainTitle>Players</MainTitle>
              <div className="serch-box">
                <label htmlFor="SearchUsers">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </label>
                <input
                  type="search"
                  placeholder="Search"
                  value={Search}
                  onChange={(e) => SetSearch(e.target.value)}
                  id="SearchUsers"
                />
              </div>
            </div>
            <div className="right">
              <h1>117</h1>
              <span>Player</span>
            </div>
          </div>
          <table className="PlayersTable">
            <tr className="TableHead">
              <th>Player ID</th>
              <th>Full Name</th>
              <th>User Name</th>
              <th>Level</th>
            </tr>
            {users
              .filter((user) =>
                Search === ""
                  ? user
                  : user.FullName.toLowerCase().includes(Search.toLowerCase())
              )
              .map((user, index) => (
                <tr key={index}>
                  <td data-label="Player ID">
                    <div className="user_Id_Data">
                      <Image
                        src={user.UserImage}
                        width={35}
                        height={35}
                        alt={user.FullName}
                      />
                      {user.PlayerID}
                    </div>
                  </td>
                  <td data-label="Full Name" className="FullName">
                    <span>{user.FullName}</span>
                  </td>
                  <td className="UserName" data-label="User Name">
                    {user.UserName}
                  </td>
                  <td className="Level" data-label="Level">
                    <span>{user.Level}</span>
                  </td>
                </tr>
              ))}
          </table>
        </div>
        <div className="status-container">
          <div className="box"></div>
          <div className="box">
            <h3>Traffic by Location</h3>
            <PieChart
              width={400}
              height={400}
              series={[
                {
                  data: data,
                  innerRadius: 46,
                  outerRadius: 87,
                  paddingAngle: 2,
                  cornerRadius: 6,
                  startAngle: 180,
                  endAngle: -180,
                  cx: 150,
                  cy: 150,
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "gray",
                  },
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboards;
