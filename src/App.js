import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import FoodManagement from './Components/admin/FoodManagement'
import Food from './Components/users/Food'
import Login from './Components/users/Login'
import Signup from './Components/users/SignUp'
import React from 'react';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/food-management' element={<FoodManagement/>}/>
        <Route path='/' element={<Food/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<Navigate to='/login'/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
