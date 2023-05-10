const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST-TEXT";
let store = {
  _state: {
    ProfilePage: {
      PostData: [
        { id: 0, post: "text!!", countlike: "29" },
        { id: 1, post: "daaaa", countlike: "10" },
        { id: 2, post: "Pzfa", countlike: "30" },
        { id: 3, post: "yep", countlike: "100" },
      ],
      newPostText: "",
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
    },
    MessagePage: {
      UsersData: [
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
          id: 2,
          name: "Denni",
          url__ava__user:
            "https://cdn2.iconfinder.com/data/icons/metaverse-12/512/metaverse_vr_virtual_reality_avatar_headset_male-256.png",
        },
        {
          id: 3,
          name: "Jean",
          url__ava__user:
            "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_female_young_people_woman_teenager_avatar-256.png",
        },
      ],
      MessageData: [
        { id: 0, mes: "HI?WHO?" },
        { id: 1, mes: "ohhh,wtf?!" },
      ],
    },
    NewsPage: {
      NewsData: [
        {
          id: 0,
          avauser:
            "https://cdn2.iconfinder.com/data/icons/metaverse-12/512/metaverse_vr_virtual_reality_avatar_headset_male-256.png",
          urluser: "0",
          username: "Denni",
          newstext: "Овеччкаааааа!",
          newsimg:
            "https://thumbs.dreamstime.com/b/%D0%BC%D0%B0-%D0%B5%D0%BD%D1%8C%D0%BA%D0%B0%D1%8F-%D0%BE%D0%B2%D0%B5%D1%87%D0%BA%D0%B0-%D0%BE%D1%82-%D1%8B%D1%85%D0%B0%D1%8F-%D0%BD%D0%B0-%D1%82%D1%80%D0%B0%D0%B2%D0%B5-43188349.jpg",
        },
        {
          id: 0,
          avauser:
            "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_female_young_people_woman_teenager_avatar-256.png",
          urluser: "0",
          username: "Jean",
          newstext: "Капибарааа!",
          newsimg:
            "https://avatars.dzeninfra.ru/get-zen_doc/9367095/pub_640f91104fb6cf7413a8a55a_640f92e32a64080b56781588/scale_1200",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callsubscride() {
    console.log("r");
  },

  subscribe(observer) {
    this._callsubscride = observer; //обсервер паттерн
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        post: this._state.ProfilePage.newPostText,
        countlike: 0,
      };
      this._state.ProfilePage.PostData.push(newPost);
      this._state.ProfilePage.newPostText = "";
      this._callsubscride(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.ProfilePage.newPostText = action.newText;
      this._callsubscride(this._state);
    }
  },
};

export const addPostactionCreator = () => ({
  type: ADD_POST,
});

export const updatenewpostCreater = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});

export default store;
