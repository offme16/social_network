import "./App.css";
import Header from "./components/Header/Header";
import Navi from "./components/Nav/Navi";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import Video from "./components/Video/Video";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import PeopleContainer from "./components/People/PeopleContainer";
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navi />
        <div className="app-wrapper__content">
          <Routes>
            <Route path="/dialods" element={<DialogsContainer />} />
            <Route path="/profile" element={<Profile />} />
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
