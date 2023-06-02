import "./App.css";
import Navi from "./components/Nav/Navi";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import Video from "./components/Video/Video";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import PeopleContainer from "./components/People/PeopleContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navi />
        <div className="app-wrapper__content">
          <Routes>
            <Route path="/dialods" element={<DialogsContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path="/news" element={<NewsContainer />} />
            <Route path="/people" element={<PeopleContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/video" element={<Video />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
