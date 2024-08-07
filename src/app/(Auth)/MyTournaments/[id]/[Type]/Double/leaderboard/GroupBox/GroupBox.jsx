"use client";
import "./GroupBox.css";
import Image from "next/image";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { DeleteLeadBoardDoubleUser } from "@/Toolkit/Slices/TournamentsSlice";
import UsersDoubleBox from "../../UsersDoubleBox/UsersDoubleBox";

function GroupBox({
  group,
  index,
  SetUserDetailsModel,
  SetUserDetails,
  TourStaus,
}) {
  const Dispatch = useDispatch();

  const UserDetailsModelPopuphandelarr = (data) => {
    SetUserDetails(data);
    SetUserDetailsModel(true);
  };

  const DeleteUser = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure you want to remove this team ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `<i class="fa-solid fa-check"></i>`,
      cancelButtonText: `<i class="fa-solid fa-xmark"></i>`,
    }).then((result) => {
      if (result.isConfirmed) {
        Dispatch(
          DeleteLeadBoardDoubleUser({
            GroupId: group.GroupId - 1,
            Index: index,
          })
        );
        Swal.fire(
          "Removed!",
          "Players has been re-added to waiting list.",
          "success"
        );
      }
    });
  };

  return (
    <div className="group-box">
      <div className="group-title">
        <h1>Group {index + 1}</h1>
        {TourStaus && (
          <div className="actions">
            <button>
              <Image
                src="/MyTournaments/add.svg"
                width={25}
                height={25}
                alt="add users"
              />
            </button>
          </div>
        )}
      </div>
      <table className="PlayersTable">
        <thead className="TableHead">
          <tr>
            <th>N</th>
            <th colSpan={5}>Name</th>
            <th>GP</th>
            <th>W</th>
            <th>L</th>
            <th>S</th>
            <th>+/-</th>
            {TourStaus && <th></th>}
          </tr>
        </thead>
        <tbody className="TableBody">
          {group.Players.map((user, index) => (
            <tr key={index}>
              <td data-label="N">T{index + 1}</td>
              <td data-label="Name" colSpan={5}>
                <UsersDoubleBox
                  user={user}
                  UserDetailsModelPopuphandelarr={
                    UserDetailsModelPopuphandelarr
                  }
                />
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
              {TourStaus && (
                <td data-label="actions">
                  <div className="actions">
                    <button onClick={() => DeleteUser(index)}>
                      <Image
                        src="/MyTournaments/delete.svg"
                        width={18}
                        height={18}
                        alt="delete user"
                      />
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GroupBox;
