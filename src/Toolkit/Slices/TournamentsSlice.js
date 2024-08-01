const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import Toast_Handelar from "@/Components/Toast_Handelar";

const TournamentsSlice = createSlice({
  name: "TournamentsSlice",
  initialState: {
    TourType: "single",
    leaderboardSingle: [
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
    WaitingListleaderboardSingle: [
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
    KnockoutDrawSystem: [
      {
        GroupId: 1,
        GroupName: "Match 1",
        Players: [],
      },
      {
        GroupId: 2,
        GroupName: "Match 2",
        Players: [],
      },
      {
        GroupId: 3,
        GroupName: "Match 3",
        Players: [],
      },
      {
        GroupId: 4,
        GroupName: "Match 4",
        Players: [],
      },
    ],
    KnockoutWating: [
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
      {
        PlayerID: 405,
        FullName: "George Mikhaiel",
        UserName: "George 456",
        Level: "A",
        UserImage: "/user.png",
      },
      {
        PlayerID: 406,
        FullName: "Aymen Mohamed",
        UserName: "Aymen 456",
        Level: "B",
        UserImage: "/User/User1.jpeg",
      },
      {
        PlayerID: 407,
        FullName: "Khaled Sameh",
        UserName: "Khaled 456",
        Level: "C",
        UserImage: "/User/User2.jpeg",
      },
      {
        PlayerID: 408,
        FullName: "George Mikhaiel",
        UserName: "George 456",
        Level: "A",
        UserImage: "/User/User3.jpeg",
      },
    ],

    leaderboardDouble: [
      {
        GroupId: 1,
        GroupName: "Group 1",
        Players: [
          {
            Team: [
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
            ],
          },

          {
            Team: [
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
            ],
          },
          {
            Team: [
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
            ],
          },
        ],
      },
      {
        GroupId: 2,
        GroupName: "Group 2",
        Players: [
          {
            Team: [
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
            ],
          },

          {
            Team: [
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
            ],
          },
          {
            Team: [
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
            ],
          },
        ],
      },
      {
        GroupId: 3,
        GroupName: "Group 3",
        Players: [
          {
            Team: [
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
            ],
          },

          {
            Team: [
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
            ],
          },
          {
            Team: [
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
            ],
          },
        ],
      },
      {
        GroupId: 4,
        GroupName: "Group 4",
        Players: [
          {
            Team: [
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
            ],
          },

          {
            Team: [
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
            ],
          },
          {
            Team: [
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
            ],
          },
        ],
      },
    ],
    WaitingListleaderboardDouble: [
      {
        Team: [
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
        ],
      },
      {
        Team: [
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
        ],
      },
      {
        Team: [
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
        ],
      },
      {
        Team: [
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
        ],
      },
    ],
  },
  reducers: {
    DeleteLeadBoardUser: (State, Action) => {
      let Newleaderboard = [...State.leaderboardSingle];
      const Player =
        Newleaderboard[Action.payload.GroupId].Players[Action.payload.Index];
      Newleaderboard[Action.payload.GroupId].Players.splice(
        Action.payload.Index,
        1
      );
      State.leaderboard = Newleaderboard;
      let NewWaitingList = [...State.WaitingListleaderboardSingle];
      NewWaitingList.push(Player);
      State.WaitingListleaderboardSingle = NewWaitingList;
    },
    AddLeadBoardUser: (State, Action) => {
      let Newleaderboard = [...State.leaderboardSingle];
      const Player = Action.payload.Player;
      if (Newleaderboard[Action.payload.GroupId - 1].Players.length > 3) {
        Toast_Handelar("error", "Group is already compleated !");
        return;
      } else {
        Newleaderboard[Action.payload.GroupId - 1].Players.push(Player);
        State.leaderboard = Newleaderboard;

        let NewWaitingList = [...State.WaitingListleaderboardSingle];
        NewWaitingList.splice(Action.payload.Inded, 1);
        State.WaitingListleaderboardSingle = NewWaitingList;
      }
    },

    DeleteKnockoutWatingUser: (State, Action) => {
      let KnockoutDrawSystem = [...State.KnockoutDrawSystem];
      const Player =
        KnockoutDrawSystem[Action.payload.GroupId].Players[
          Action.payload.Index
        ];
      KnockoutDrawSystem[Action.payload.GroupId].Players.splice(
        Action.payload.Index,
        1
      );
      State.KnockoutDrawSystem = KnockoutDrawSystem;
      let NewKnockoutWating = [...State.KnockoutWating];
      NewKnockoutWating.push(Player);
      State.KnockoutWating = NewKnockoutWating;
    },

    AddKnockoutWatingUser: (State, Action) => {
      let NewKnockoutDrawSystem = [...State.KnockoutDrawSystem];
      const Player = Action.payload.Player;
      if (
        NewKnockoutDrawSystem[Action.payload.GroupId - 1].Players.length > 1
      ) {
        Toast_Handelar("error", "Match is already compleated !");
        return;
      } else {
        NewKnockoutDrawSystem[Action.payload.GroupId - 1].Players.push(Player);
        State.KnockoutDrawSystem = NewKnockoutDrawSystem;
        let NewWaitingList = [...State.KnockoutWating];
        NewWaitingList.splice(Action.payload.Index, 1);
        State.KnockoutWating = NewWaitingList;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const {
  DeleteLeadBoardUser,
  AddLeadBoardUser,
  DeleteKnockoutWatingUser,
  AddKnockoutWatingUser,
} = TournamentsSlice.actions;
export default TournamentsSlice.reducer;
