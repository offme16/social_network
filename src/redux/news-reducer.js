const ADD_NEWS = "ADD-NEWS";
const ADD_NEWS_TEXT = "ADD-NEWS-TEXT";

let initialState = {
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
  NewNewsText: "",
};

const newsreduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      let NewNews = {
        id: 10,
        avauser:
          "https://cdn2.iconfinder.com/data/icons/metaverse-12/512/metaverse_vr_virtual_reality_avatar_headset_male-256.png",
        urluser: "0",
        username: "Denni",
        newstext: state.NewNewsText,
        newsimg: "",
      };
      state.NewsData.unshift(NewNews);
      state.NewNewsText = "";
      return state;
    case ADD_NEWS_TEXT:
      state.NewNewsText = action.NewTextNews;
      return state;
    default:
      return state;
  }
};

export const addNewsactionCreator = () => ({
  type: ADD_NEWS,
});

export const updateNewNewsCreator = (Text) => ({
  type: ADD_NEWS_TEXT,
  NewTextNews: Text,
});

export default newsreduce;
