import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Routes>
      <Route path = "/" element = {<LandingPage/>}>

      </Route>
      </Routes>
    </div>
  );
}

export default App;
