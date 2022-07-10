import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
// import Product1 from './Product1';
import Homepage from './Homepage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import {useStateValue} from "./StateProvider";
import {useEffect} from "react";
import {auth} from "./firebase";

function App() {
  
  const [{user} , dispatch] = useStateValue();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return ()=>{
      unsubscribe();
    }
  },[]);

  console.log("User is>>>", user);

  return (
    <div>
      <Router>
      <div className="app">
        <Routes>
          <Route path = "/" element={[<Home/>]}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Movies' element={<Homepage/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App
