import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import profilereduce from "./profile-reducer";
import newsreduce from "./news-reducer";
import messagereduce from "./message-reducer";
import peoplereduce from "./people-reducer";
import authreduce from "./auth-reducer";
import appReducer from "./app-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
let reducers = combineReducers({
  ProfilePage: profilereduce,
  NewsPage: newsreduce,
  MessagePage: messagereduce,
  PeoplePage: peoplereduce,
  auth: authreduce,
  form: formReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
