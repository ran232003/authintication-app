import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './landing-page/pages/LandingPage';
import SignUp from './auth/pages/SignUp';
import Login from './auth/pages/Login';
import HomePage from './homepage/pages/HomePage';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Routes>
      <Route path = "/" element = {<LandingPage/>}>

      </Route>
      <Route exact path = "/sign-up" element = {<SignUp/>}>

      </Route>
        <Route exact path = "/login" element = {<Login/>}>

        </Route>
        <Route exact path = "/homepage" element = {<HomePage/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
