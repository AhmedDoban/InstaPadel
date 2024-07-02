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
    { id: 1, value: 18034, label: "Linux", color: "#95A4FC" },
    { id: 2, value: 24567, label: "Mac", color: "#BAEDBD" },
    { id: 3, value: 12789, label: "iOS", color: "#1C1C1C" },
    { id: 4, value: 21904, label: "Windows", color: "#B1E3FF" },
    { id: 5, value: 15234, label: "Android", color: "#A8C5DA" },
    { id: 6, value: 17546, label: "Other", color: "#A1E3CB" },
  ];

  return (
    <div className="Dashboards">
      <div className="Dashboardsright">
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
      </div>
      <div className="Dashboardsleft">
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
          <div className="box">
            <h3>Traffic by Device</h3>
            <div className="Bar-chart">
              <div className="Y-ax">
                <span className="Empty"></span>
                <span>0</span>
                <span>10K</span>
                <span>20K</span>
                <span>30K</span>
              </div>
              <div className="X-ax">
                {operatingSystems.map((OS, index) => (
                  <div className="X-Data" key={index}>
                    <p>
                      <span
                        className="progress"
                        style={{
                          height: `${(OS.value / 30000) * 100}%`,
                          backgroundColor: OS.color,
                        }}
                      ></span>
                    </p>
                    <span>{OS.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="box">
            <h3>Traffic by Location</h3>
            <div className="Chart-container">
              <div className="Pie-Chart">
                <PieChart
                  width={150}
                  height={150}
                  series={[
                    {
                      data: data,
                      innerRadius: 30,
                      outerRadius: 65,
                      paddingAngle: 2,
                      cornerRadius: 5,
                      startAngle: 180,
                      endAngle: -180,
                      cx: 75,
                      cy: 75,
                      highlightScope: { faded: "global", highlighted: "item" },
                      faded: {
                        innerRadius: 30,
                        additionalRadius: -10,
                      },
                    },
                  ]}
                />
              </div>
              <div className="Pie-Chart-content">
                {data.map((Sta, index) => (
                  <div className="Pie-Chart-box" key={index}>
                    <div className="info">
                      <div
                        className="over-Color"
                        style={{ backgroundColor: Sta.color }}
                      ></div>
                      <h2>{Sta.label}</h2>
                    </div>

                    <span>{Sta.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboards;
