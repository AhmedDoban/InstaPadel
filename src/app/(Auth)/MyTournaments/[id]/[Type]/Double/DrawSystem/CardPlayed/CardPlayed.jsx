import Image from "next/image";
import "./CardPlayed.css";
import Link from "next/link";
import Swal from "sweetalert2";
import { DeleteKnockoutDoubleWatingUser } from "@/Toolkit/Slices/TournamentsSlice";
import { useDispatch } from "react-redux";
import UsersDoubleBox from "../../UsersDoubleBox/UsersDoubleBox";

function CardPlayed({
  Isplayed = false,
  Winner = false,
  SetUserDetailsModel,
  SetSummaryResultModel,
  SetSummaryDetailsModel,
  SetTimerModel,
  SetLocationModel,
  Player1GroupNumber,
  Player2GroupNumber,
  Player1Index,
  Player2Index,
  WhoWinner,
  DataBase,
  SetUserDetails,
  KnockoutStatus,
}) {
  const Dispatch = useDispatch();
  const UserDetailsModelPopuphandelarr = (data) => {
    SetUserDetails(data);
    SetUserDetailsModel(true);
  };
  const DeleteUser = (PlayerGroupNumber, index) => {
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
          DeleteKnockoutDoubleWatingUser({
            GroupId: PlayerGroupNumber,
            Index: index,
          })
        );
        Swal.fire(
          "Removed!",
          "Players has been re-added to waiting list",
          "success"
        );
      }
    });
  };

  return (
    <div className="DoubleCardPlayed">
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
        {DataBase[Player1GroupNumber - 1].Players[Player1Index - 1] ? (
          <div className={WhoWinner != 1 ? "user-box loser" : "user-box"}>
            <div className="info">
              <span>T4</span>
              <UsersDoubleBox
                user={
                  DataBase[Player1GroupNumber - 1].Players[Player1Index - 1]
                }
                UserDetailsModelPopuphandelarr={UserDetailsModelPopuphandelarr}
              />
            </div>
            {!KnockoutStatus && (
              <div
                className="actions"
                onClick={() =>
                  DeleteUser(Player1GroupNumber - 1, Player1Index - 1)
                }
              >
                <Image
                  src="/MyTournaments/delete.svg"
                  width={10}
                  height={10}
                  alt="Delete"
                />
              </div>
            )}
          </div>
        ) : (
          <p className="NoPlayerSelected">There is no Player Selected</p>
        )}

        <div className={Isplayed ? "vs Isplayed" : "vs"}>
          <Image src="/Draw/VS.svg" width={20} height={20} alt="VS" />
        </div>
        {DataBase[Player2GroupNumber - 1].Players[Player2Index - 1] ? (
          <div className={WhoWinner != 2 ? "user-box loser" : "user-box"}>
            <div className="info">
              <span>T4</span>

              <UsersDoubleBox
                user={
                  DataBase[Player2GroupNumber - 1].Players[Player2Index - 1]
                }
                UserDetailsModelPopuphandelarr={UserDetailsModelPopuphandelarr}
              />
            </div>
            {!KnockoutStatus && (
              <div
                className="actions"
                onClick={() =>
                  DeleteUser(Player1GroupNumber - 1, Player1Index - 1)
                }
              >
                <Image
                  src="/MyTournaments/delete.svg"
                  width={10}
                  height={10}
                  alt="Delete"
                />
              </div>
            )}
          </div>
        ) : (
          <p className="NoPlayerSelected">There is no Player Selected</p>
        )}
      </div>
    </div>
  );
}
export default CardPlayed;
