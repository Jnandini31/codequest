import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import Auth from './Pages/Auth/Auth'
import Question from './Pages/Question/Question'
import Displayquestion from './Pages/Question/Displayquestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import Userprofile from './Pages/Userprofile/Userprofile'


function Allroutes({slidein,handleslidein}) {
  return (
   <Routes>
     <Route path="/"  element={<Home slidein={slidein} handleslidein={handleslidein} />}/>
     <Route path="/AskQuestion"  element={<AskQuestion />}/> 
     <Route path="/Auth"  element={<Auth />}/> 
     <Route path="/Question"  element={<Question slidein={slidein} handleslidein={handleslidein} />}/>
     <Route path="/Question/:id"  element={<Displayquestion slidein={slidein} handleslidein={handleslidein} />}/>
     <Route path="/Tags"  element={<Tags slidein={slidein} handleslidein={handleslidein} />}/>
     <Route path="/Users"  element={<Users slidein={slidein} handleslidein={handleslidein} />}/>
     <Route path="/Users/:id"  element={<Users slidein={slidein} handleslidein={handleslidein} />}/>
     
   </Routes>
  )
}

export default Allroutes