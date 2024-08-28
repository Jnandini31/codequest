import React from 'react'
import LeftSidebar from '../../Component/Leftsidebar/Leftsidebar'
import RightSidebar from '../../Component/Rightsidebar/Rightsidebar'
import HomeMainbar from '../../Component/Homemainbar/Homemainbar'
const Question = ({slideIn}) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Question