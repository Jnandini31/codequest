import React from 'react'
import './Users.css'
import User  from './User'
import {useSelector} from 'react-redux'
const Userslist = () => {
  const Users=useSelector((state)=>state.userReducer)
  console.log(Users)
  return (
    <div className="user-list-container">
      {Users.map((user)=>
      <User user={user} key={user?._id}/>
      )}
    </div>
  )
}

export default Userslist