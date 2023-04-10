import './App.css';
import Header from './components/Header/Header';
import Navi from './components/Nav/Navi';
import Profile from './components/Profile/Profile';


const App = () => {
  return(
    <div className='app-wrapper'>
      <Header />
      <Navi />
      <Profile />
    </div>
  );
}



export default App;

