import { combineReducers, legacy_createStore as createStore } from "redux";
import profilereduce from "./profile-reducer";
import newsreduce from "./news-reducer";
import messagereduce from "./message-reducer";

let reducers = combineReducers({
  ProfilePage: profilereduce,
  NewsPage: newsreduce,
  MessagePage: messagereduce,
});
let store = createStore(reducers);
export default store;
