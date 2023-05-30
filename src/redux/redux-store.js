import { combineReducers, legacy_createStore as createStore } from "redux";
import profilereduce from "./profile-reducer";
import newsreduce from "./news-reducer";
import messagereduce from "./message-reducer";
import peoplereduce from "./people-reducer";
import authreduce from "./auth-reducer";
let reducers = combineReducers({
  ProfilePage: profilereduce,
  NewsPage: newsreduce,
  MessagePage: messagereduce,
  PeoplePage: peoplereduce,
  auth: authreduce,
});

let store = createStore(reducers);
export default store;
