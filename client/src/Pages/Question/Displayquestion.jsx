import React from 'react'
import LeftSidebar from '../../Component/Leftsidebar/Leftsidebar'
import RightSidebar from '../../Component/Rightsidebar/Rightsidebar'
import Questiondetails from './Questiondetails'
const Displayquestion = ({slideIn}) => {
  return (
    <div className="home-container-1">
    <LeftSidebar slideIn={slideIn} />
    <div className="home-container-2">
      <Questiondetails />
      <RightSidebar />
    </div>
  </div>
  )
}

export default Displayquestion