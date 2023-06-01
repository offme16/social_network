import { UsersApi } from "../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const USERS = "USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

let initialState = {
  PeopleData: [],
  pageSize: 5,
  totalusersCount: 30,
  currentPage: 1,
  isFetching: true,
  followingProgress: [],
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
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userid]
          : [state.followingProgress.filter((id) => id !== action.userid)],
      };
    default:
      return state;
  }
};

export const followSucces = (userid) => ({ type: FOLLOW, userid });

export const unfollowSucces = (userid) => ({ type: UNFOLLOW, userid });

export const setusers = (users) => ({ type: USERS, users });

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_COUNT,
  count: totalUsersCount,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowProgress = (isFetching, userid) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userid,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    UsersApi.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));

      dispatch(setCurrentPage(currentPage));

      dispatch(setusers(data.items));

      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const follow = (userid) => {
  return (dispatch) => {
    dispatch(toggleFollowProgress(true, userid));

    UsersApi.follow(userid).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSucces(userid));
      }
      dispatch(toggleFollowProgress(false, userid));
    });
  };
};

export const unfollow = (userid) => {
  return (dispatch) => {
    dispatch(toggleFollowProgress(true, userid));

    UsersApi.unfollow(userid).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSucces(userid));
      }
      dispatch(toggleFollowProgress(false, userid));
    });
  };
};

export default peoplereduce;
