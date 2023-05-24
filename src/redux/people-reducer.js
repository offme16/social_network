const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const USERS = "USERS";

let initialState = {
  PeopleData: [],
};

const peoplereduce = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        PeopleData: state.PeopleData.map((u) => {
          if (u.id === action.userid) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        PeopleData: state.PeopleData.map((u) => {
          if (u.id === action.userid) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case USERS:
      return { ...state, PeopleData: [...state.PeopleData, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userid) => ({ type: FOLLOW, userid });

export const unfollowAC = (userid) => ({ type: UNFOLLOW, userid });

export const setusersAC = (users) => ({ type: USERS, users });

export default peoplereduce;
