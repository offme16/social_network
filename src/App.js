import './App.css';
import Header from './components/Header';
import Navi from './components/Navi';
import Profile from './components/Profile';


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

