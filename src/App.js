import React, {useState, useCallback, Component} from 'react';
import {BrowserRouter,Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import NewPage from './places/pages/NewPlace';
import UpdatePlace from './places/pages/updatePlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Auth from './user/pages/Auth'
import { AuthContext } from './shared/context/auth-context';
import User from './user/pages/Users';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login= useCallback(()=>{
    setIsLoggedIn(true);
  },[])
  const logout= useCallback(()=>{
    setIsLoggedIn(false);
  },[])

  let routes;

  if(isLoggedIn){
    routes= (
      <React.Fragment>
        <Route path='/' element={<User/>} />
        <Route path='/:userId/places' exact element={<UserPlaces/>} />
        <Route path='/places/new' element={<NewPage/>}/>
        <Route path='/places/:placeId' element={<UpdatePlace/>}></Route>
        {/* <Navigate to="/" /> */}
      </React.Fragment>
    )
  }else{
    routes = (
      <React.Fragment>
        <Route path='/' element={<User/>} />
        <Route path='/auths' element={<Auth/>}></Route>
        <Route path='/auths' element={<Navigate to="/" />} />
        {/* <Navigate to="/" /> */}
      </React.Fragment>
    )
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      login: login,
      logout: logout
    }}>
      <BrowserRouter>
        <MainNavigation/>
        <main>
          <Routes>
            {routes}
          </Routes>
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
  
}

export default App;
