import { UsersApi } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET-USERS-PROFILE";

let initialState = {
  PostData: [
    { id: 0, post: "text!!", countlike: "29" },
    { id: 1, post: "daaaa", countlike: "10" },
    { id: 2, post: "Pzfa", countlike: "30" },
    { id: 3, post: "yep", countlike: "100" },
  ],
  newPostText: [""],
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
        post: state.newPostText,
        countlike: 0,
      };
      return {
        ...state,
        PostData: [newPost, ...state.PostData],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const SetUserProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});

export const getUserProfile = (userId) => (dispatch) => {
  UsersApi.getProfile(userId).then((response) => {
    dispatch(SetUserProfile(response.data));
  });
};

export const addPost = () => ({
  type: ADD_POST,
});

export const raki = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});
export default profilereduce;
