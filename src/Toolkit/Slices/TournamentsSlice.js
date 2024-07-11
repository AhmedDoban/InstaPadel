const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import Toast_Handelar from "@/Components/Toast_Handelar";

const TournamentsSlice = createSlice({
  name: "TournamentsSlice",
  initialState: {
    leaderboard: [
      {
        GroupId: 1,
        GroupName: "Group 1",
        Players: [
          {
            PlayerID: 401,
            FullName: "George Mikhaiel",
            UserName: "George 456",
            Level: "A",
            UserImage: "/user.png",
          },
          {
            PlayerID: 402,
            FullName: "Aymen Mohamed",
            UserName: "Aymen 456",
            Level: "B",
            UserImage: "/User/User1.jpeg",
          },
          {
            PlayerID: 403,
            FullName: "Khaled Sameh",
            UserName: "Khaled 456",
            Level: "C",
            UserImage: "/User/User2.jpeg",
          },
        ],
      },
      {
        GroupId: 2,
        GroupName: "Group 2",
        Players: [
          {
            PlayerID: 401,
            FullName: "George Mikhaiel",
            UserName: "George 456",
            Level: "A",
            UserImage: "/user.png",
          },
          {
            PlayerID: 402,
            FullName: "Aymen Mohamed",
            UserName: "Aymen 456",
            Level: "B",
            UserImage: "/User/User1.jpeg",
          },
          {
            PlayerID: 403,
            FullName: "Khaled Sameh",
            UserName: "Khaled 456",
            Level: "C",
            UserImage: "/User/User2.jpeg",
          },
        ],
      },
      {
        GroupId: 3,
        GroupName: "Group 3",
        Players: [
          {
            PlayerID: 401,
            FullName: "George Mikhaiel",
            UserName: "George 456",
            Level: "A",
            UserImage: "/user.png",
          },
          {
            PlayerID: 402,
            FullName: "Aymen Mohamed",
            UserName: "Aymen 456",
            Level: "B",
            UserImage: "/User/User1.jpeg",
          },
          {
            PlayerID: 403,
            FullName: "Khaled Sameh",
            UserName: "Khaled 456",
            Level: "C",
            UserImage: "/User/User2.jpeg",
          },
        ],
      },
      {
        GroupId: 4,
        GroupName: "Group 4",
        Players: [
          {
            PlayerID: 401,
            FullName: "George Mikhaiel",
            UserName: "George 456",
            Level: "A",
            UserImage: "/user.png",
          },
          {
            PlayerID: 402,
            FullName: "Aymen Mohamed",
            UserName: "Aymen 456",
            Level: "B",
            UserImage: "/User/User1.jpeg",
          },
          {
            PlayerID: 403,
            FullName: "Khaled Sameh",
            UserName: "Khaled 456",
            Level: "C",
            UserImage: "/User/User2.jpeg",
          },
        ],
      },
    ],
    WaitingListleaderboard: [
      {
        PlayerID: 401,
        FullName: "George Mikhaiel",
        UserName: "George 456",
        Level: "A",
        UserImage: "/user.png",
      },
      {
        PlayerID: 402,
        FullName: "Aymen Mohamed",
        UserName: "Aymen 456",
        Level: "B",
        UserImage: "/User/User1.jpeg",
      },
      {
        PlayerID: 403,
        FullName: "Khaled Sameh",
        UserName: "Khaled 456",
        Level: "C",
        UserImage: "/User/User2.jpeg",
      },
      {
        PlayerID: 404,
        FullName: "George Mikhaiel",
        UserName: "George 456",
        Level: "A",
        UserImage: "/User/User3.jpeg",
      },
    ],
  },
  reducers: {
    DeleteLeadBoardUser: (State, Action) => {
      let Newleaderboard = [...State.leaderboard];
      const Player =
        Newleaderboard[Action.payload.GroupId].Players[Action.payload.Index];
      Newleaderboard[Action.payload.GroupId].Players.splice(
        Action.payload.Index,
        1
      );
      State.leaderboard = Newleaderboard;
      let NewWaitingList = [...State.WaitingListleaderboard];
      NewWaitingList.push(Player);
      State.WaitingListleaderboard = NewWaitingList;
    },
    AddLeadBoardUser: (State, Action) => {
      let Newleaderboard = [...State.leaderboard];
      const Player = Action.payload.Player;
      if (Newleaderboard[Action.payload.GroupId - 1].Players.length > 3) {
        Toast_Handelar("error", "Group is already compleated !");
        return;
      } else {
        Newleaderboard[Action.payload.GroupId - 1].Players.push(Player);
        State.leaderboard = Newleaderboard;

        let NewWaitingList = [...State.WaitingListleaderboard];
        NewWaitingList.splice(Action.payload.Inded, 1);
        State.WaitingListleaderboard = NewWaitingList;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { DeleteLeadBoardUser, AddLeadBoardUser } =
  TournamentsSlice.actions;
export default TournamentsSlice.reducer;
