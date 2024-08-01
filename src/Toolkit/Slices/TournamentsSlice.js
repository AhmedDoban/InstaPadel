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
    KnockoutDrawDoubleSystem: [
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
    KnockoutDoubleWating: [
      {
        TeamsName: "Team 1",
        Team: [
          {
            PlayerID: 401,
            FullName: "John Smith",
            UserName: "JohnS123",
            Level: "A",
            UserImage: "/user.png",
          },
          {
            PlayerID: 402,
            FullName: "Michael Johnson",
            UserName: "MikeJ456",
            Level: "B",
            UserImage: "/User/User1.jpeg",
          },
        ],
      },
      {
        TeamsName: "Team 2",
        Team: [
          {
            PlayerID: 403,
            FullName: "David Williams",
            UserName: "DaveW789",
            Level: "A",
            UserImage: "/User/User2.jpeg",
          },
          {
            PlayerID: 404,
            FullName: "James Brown",
            UserName: "JamesB234",
            Level: "B",
            UserImage: "/User/User3.jpeg",
          },
        ],
      },
      {
        TeamsName: "Team 3",
        Team: [
          {
            PlayerID: 405,
            FullName: "Robert Davis",
            UserName: "RobD567",
            Level: "A",
            UserImage: "/User/User4.jpeg",
          },
          {
            PlayerID: 406,
            FullName: "William Miller",
            UserName: "WillM890",
            Level: "B",
            UserImage: "/User/User1.jpeg",
          },
        ],
      },
      {
        TeamsName: "Team 4",
        Team: [
          {
            PlayerID: 407,
            FullName: "Charles Garcia",
            UserName: "CharlieG123",
            Level: "A",
            UserImage: "/user.png",
          },
          {
            PlayerID: 408,
            FullName: "Joseph Martinez",
            UserName: "JoeM456",
            Level: "B",
            UserImage: "/User/User1.jpeg",
          },
        ],
      },
      {
        TeamsName: "Team 5",
        Team: [
          {
            PlayerID: 401,
            FullName: "Thomas Wilson",
            UserName: "TomW789",
            Level: "A",
            UserImage: "/User/User2.jpeg",
          },
          {
            PlayerID: 402,
            FullName: "Christopher Anderson",
            UserName: "ChrisA234",
            Level: "B",
            UserImage: "/User/User4.jpeg",
          },
        ],
      },
      {
        TeamsName: "Team 6",
        Team: [
          {
            PlayerID: 401,
            FullName: "Daniel Taylor",
            UserName: "DanT567",
            Level: "A",
            UserImage: "/User/User3.jpeg",
          },
          {
            PlayerID: 402,
            FullName: "Matthew Moore",
            UserName: "MattM890",
            Level: "B",
            UserImage: "/User/User1.jpeg",
          },
        ],
      },
      {
        TeamsName: "Team 7",
        Team: [
          {
            PlayerID: 409,
            FullName: "Anthony White",
            UserName: "TonyW123",
            Level: "A",
            UserImage: "/User/User2.jpeg",
          },
          {
            PlayerID: 410,
            FullName: "Mark Harris",
            UserName: "MarkH456",
            Level: "B",
            UserImage: "/User/User3.jpeg",
          },
        ],
      },
      {
        TeamsName: "Team 8",
        Team: [
          {
            PlayerID: 407,
            FullName: "Paul Clark",
            UserName: "PaulC789",
            Level: "A",
            UserImage: "/user.png",
          },
          {
            PlayerID: 408,
            FullName: "Kevin Lewis",
            UserName: "KevL234",
            Level: "B",
            UserImage: "/User/User1.jpeg",
          },
        ],
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
            UserImage: "/User/User2.jpeg",
          },
          {
            PlayerID: 402,
            FullName: "Aymen Mohamed",
            UserName: "Aymen 456",
            Level: "B",
            UserImage: "/User/User3.jpeg",
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
            UserImage: "/User/User3.jpeg",
          },
          {
            PlayerID: 402,
            FullName: "Aymen Mohamed",
            UserName: "Aymen 456",
            Level: "B",
            UserImage: "/User/User4.jpeg",
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
            UserImage: "/User/User1.jpeg",
          },
          {
            PlayerID: 402,
            FullName: "Aymen Mohamed",
            UserName: "Aymen 456",
            Level: "B",
            UserImage: "/User/User3.jpeg",
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
      State.leaderboardSingle = Newleaderboard;
      let NewWaitingList = [...State.WaitingListleaderboardSingle];
      NewWaitingList.push(Player);
      State.WaitingListleaderboardSingle = NewWaitingList;
    },
    AddLeadBoardUser: (State, Action) => {
      const Newleaderboard = [...State.leaderboardSingle];
      const Player = Action.payload.Player;

      if (Newleaderboard[Action.payload.GroupId - 1].Players.length > 3) {
        Toast_Handelar("error", "Group full!");
        return;
      } else {
        Newleaderboard[Action.payload.GroupId - 1].Players.push(Player);
        State.leaderboardSingle = Newleaderboard;

        const NewWaitingList = [...State.WaitingListleaderboardSingle];
        NewWaitingList.splice(Action.payload.Index, 1);
        State.WaitingListleaderboardSingle = NewWaitingList;
      }
    },

    DeleteLeadBoardDoubleUser: (State, Action) => {
      let Newleaderboard = [...State.leaderboardDouble];
      const Player =
        Newleaderboard[Action.payload.GroupId].Players[Action.payload.Index];
      Newleaderboard[Action.payload.GroupId].Players.splice(
        Action.payload.Index,
        1
      );
      State.leaderboardDouble = Newleaderboard;
      let NewWaitingList = [...State.WaitingListleaderboardDouble];
      NewWaitingList.push(Player);
      State.WaitingListleaderboardDouble = NewWaitingList;
    },
    AddLeadBoardDoubleUser: (State, Action) => {
      const Newleaderboard = [...State.leaderboardDouble];
      const Player = Action.payload.Player;

      if (Newleaderboard[Action.payload.GroupId - 1].Players.length > 3) {
        Toast_Handelar("error", "Group full!");
        return;
      } else {
        Newleaderboard[Action.payload.GroupId - 1].Players.push(Player);
        State.leaderboardDouble = Newleaderboard;

        const NewWaitingList = [...State.WaitingListleaderboardDouble];
        NewWaitingList.splice(Action.payload.Index, 1);
        State.WaitingListleaderboardDouble = NewWaitingList;
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

    DeleteKnockoutDoubleWatingUser: (State, Action) => {
      let KnockoutDrawSystem = [...State.KnockoutDrawDoubleSystem];
      const Player =
        KnockoutDrawSystem[Action.payload.GroupId].Players[
          Action.payload.Index
        ];
      KnockoutDrawSystem[Action.payload.GroupId].Players.splice(
        Action.payload.Index,
        1
      );
      State.KnockoutDrawDoubleSystem = KnockoutDrawSystem;

      let NewKnockoutWating = [...State.KnockoutDoubleWating];
      NewKnockoutWating.push(Player);
      State.KnockoutDoubleWating = NewKnockoutWating;
    },

    AddKnockoutDoubleWatingUser: (State, Action) => {
      let NewKnockoutDrawSystem = [...State.KnockoutDrawDoubleSystem];
      const Player = Action.payload.Player;
      if (
        NewKnockoutDrawSystem[Action.payload.GroupId - 1].Players.length > 1
      ) {
        Toast_Handelar("error", "Match is already compleated !");
        return;
      } else {
        NewKnockoutDrawSystem[Action.payload.GroupId - 1].Players.push(Player);
        State.KnockoutDrawDoubleSystem = NewKnockoutDrawSystem;
        let NewWaitingList = [...State.KnockoutDoubleWating];
        NewWaitingList.splice(Action.payload.Index, 1);
        State.KnockoutDoubleWating = NewWaitingList;
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
  DeleteKnockoutDoubleWatingUser,
  AddKnockoutDoubleWatingUser,
  DeleteLeadBoardDoubleUser,
  AddLeadBoardDoubleUser,
} = TournamentsSlice.actions;
export default TournamentsSlice.reducer;
