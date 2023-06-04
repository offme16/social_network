import { UsersApi, profileApi } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET-USERS-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
  PostData: [
    { id: 0, post: "text!!", countlike: "29" },
    { id: 1, post: "daaaa", countlike: "10" },
    { id: 2, post: "Pzfa", countlike: "30" },
    { id: 3, post: "yep", countlike: "100" },
  ],
  FriendsData: [
    {
      id: 0,
      name: "Mikky",
      url__ava__user:
        "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/adult_people_avatar_man_male_employee_tie-256.png",
    },
    {
      id: 1,
      name: "Kate",
      url__ava__user:
        "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_long_hair_beautiful_people_woman_teenager_avatar-256.png",
    },

    {
      id: 3,
      name: "Jean",
      url__ava__user:
        "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_female_young_people_woman_teenager_avatar-256.png",
    },
  ],
  profile: null,
};

const profilereduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        post: action.AddPost,
        countlike: 0,
      };
      return {
        ...state,
        PostData: [newPost, ...state.PostData],
        newPostText: "",
      };
    }
    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const SetUserProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});
export const Setstatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (userId) => (dispatch) => {
  UsersApi.getProfile(userId).then((response) => {
    dispatch(SetUserProfile(response.data));
  });
};

export const getUserStatus = (userId) => (dispatch) => {
  profileApi.getStatus(userId).then((response) => {
    dispatch(Setstatus(response.data));
  });
};

export const updateUserStatus = (status) => (dispatch) => {
  profileApi.updateStatus(status).then((response) => {
    if (response.data.resaultCode === 0) {
      dispatch(Setstatus(status));
    }
  });
};

export const addPost = (AddPost) => ({
  type: ADD_POST,
  AddPost,
});

export default profilereduce;
