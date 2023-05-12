const ADD_NEWS = "ADD-NEWS";
const ADD_NEWS_TEXT = "ADD-NEWS-TEXT";
const newsreduce = (state, action) => {
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
      state.NewsData.push(NewNews);
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
