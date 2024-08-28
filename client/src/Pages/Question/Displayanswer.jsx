import React from 'react'
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
import Avatar from '../../Component/Avatar/Avatar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAnswer } from '../../action/question'

const Displayanswer = ({question,handleshare}) => {
  const user=useSelector((state) => state.currentuserReducer);
  const { id }= useParams();
  const dispatch = useDispatch()
  const handledelete=(answerid, noofanswers)=>{
    dispatch(deleteAnswer(id, answerid, noofanswers -1))
  }
  return (
    <div>
      {question.answer.mp((ans)=> (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answebody}</p>
          <div className="question-actions-user">
            <div>
              <button type='button' onClick={handleshare}> Share </button>
              {user?.result?._id === ans?.userid &&( 
                <button type='button' onClick={()=> handledelete(ans._id,question.noofanswer)}>Delete</button>
              )}
            </div>
            <p>answered {moment (ans.answeredon).fromNow()}</p>
            <Link to={`Users/${ans.userid}`} className="user-link" style={{ color: "#0086d8"}}>
              <Avatar backgroundColor="orange" px='8px' py="5px" borderRadius="4px">
                {ans.useranswered.charAt(0).toUpperCase()}
              </Avatar>
              <div>{ans.useranswered}</div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Displayanswer