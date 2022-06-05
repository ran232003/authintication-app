import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './landing-page/pages/LandingPage';
import SignUp from './auth/pages/SignUp';
import Login from './auth/pages/Login';
import HomePage from './homepage/pages/HomePage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userAction } from './store/userSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch(userAction.setUser(user))
      dispatch(userAction.loogedIn(true))
    }
  },[])
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
