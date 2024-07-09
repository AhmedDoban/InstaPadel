"use client";
import "./GroupBox.css";
import Image from "next/image";

function GroupBox({ group, index, users }) {
  return (
    <div className="group-box">
      <div className="group-title">
        <h1>Group {index + 1}</h1>
        <div className="actions">
          <button>
            <Image
              src="/MyTournaments/add.svg"
              width={25}
              height={25}
              alt="add users"
            />
          </button>
          <button>
            <Image
              src="/MyTournaments/more.svg"
              width={25}
              height={25}
              alt="more options"
            />
          </button>
        </div>
      </div>
      <table className="PlayersTable">
        <thead className="TableHead">
          <tr>
            <th>N</th>
            <th colSpan={5}>Name</th>
            <th>GP</th>
            <th>w</th>
            <th>l</th>
            <th>S</th>
            <th>+/-</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody className="TableBody">
          {users.slice(0, 4).map((user, index) => (
            <tr key={index}>
              <td data-label="N">T{index + 1}</td>
              <td data-label="Name" colSpan={5}>
                <div className="user_Id_Data">
                  <Image
                    src={user.UserImage}
                    width={35}
                    height={35}
                    alt={user.FullName}
                  />
                  <span>{user.FullName}</span>
                </div>
              </td>
              <td data-label="GP">
                <span>0</span>
              </td>
              <td data-label="W">
                <span>0</span>
              </td>
              <td data-label="l">
                <span>0</span>
              </td>
              <td data-label="S">
                <span>0</span>
              </td>
              <td data-label="+/-">
                <span>0</span>
              </td>
              <td data-label="actions" colSpan={2}>
                <div className="actions">
                  <button>
                    <Image
                      src="/MyTournaments/player-repeat.svg"
                      width={18}
                      height={18}
                      alt="player-repeat"
                    />
                  </button>
                  <button>
                    <Image
                      src="/MyTournaments/delete.svg"
                      width={18}
                      height={18}
                      alt="delete user"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GroupBox;
