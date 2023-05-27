const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const USERS = "USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
  PeopleData: [],
  pageSize: 5,
  totalusersCount: 30,
  currentPage: 1,
  isFetching: false,
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
      return { ...state, PeopleData: [...action.users] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalusersсount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const followAC = (userid) => ({ type: FOLLOW, userid });

export const unfollowAC = (userid) => ({ type: UNFOLLOW, userid });

export const setusersAC = (users) => ({ type: USERS, users });

export const setcurrentAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const settotalAC = (totalUsersCount) => ({
  type: SET_TOTAL_COUNT,
  count: totalUsersCount,
});

export const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export default peoplereduce;
