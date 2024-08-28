import { fetchAllUsers } from './action/users';
import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Navbar from './Component/Navbar/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Allroutes from './Allroutes'
import { useDispatch } from 'react-redux';
function App() {
  const [slidein, setslidein]=useState(true)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchAllUsers());
  },[dispatch])

  useEffect(()=>{
    if(window.innerWidth<= 768){
      setslidein(false)
    }
  },[])
  const handleslidein=()=>{
    if(window.innerWidth<= 768){
      setslidein((state)=> !state);
    }
  };
  return (
    <div className="App">
      <Router> 
      <Navbar handleslidein={handleslidein}/>
      <Allroutes slidein={slidein} handleslidein={handleslidein}/>
      </Router>
     
    </div>
  );
}

export default App;