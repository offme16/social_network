const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const USERS = "USERS";

let initialState = {
  PeopleData: [
    {
      id: 0,
      followed: true,
      avauser:
        "https://cdn2.iconfinder.com/data/icons/metaverse-12/512/metaverse_vr_virtual_reality_avatar_headset_male-256.png",
      name: "Denni",
      status: "О heh eye",
      location: { sity: "Kazan", country: "Russia" },
    },
    {
      id: 1,
      followed: false,
      avauser:
        "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_female_young_people_woman_teenager_avatar-256.png",
      name: "Jean",
      status: "I like capybara",
      location: { sity: "Kazan", country: "Russia" },
    },
  ],
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
