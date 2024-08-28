import React, {useState} from 'react'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import upvote from "../../Assets/sort-up.svg"
import downvote from "../../Assets/sort-down.svg"
import './Question.css'
import Avatar from '../../Component/Avatar/Avatar'
import Diaplayanswer from './Displayanswer'
import { Link ,useNavigate, useLocation,useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { deleteQuestion, voteQuestion, postanswer} from '../../action/question'
const Questiondetails = () => {
  const [answer, setanswer]=useState("")
  const dispatch=useDispatch()
  const user=useSelector((state) => state.currentuserReducer);
  const Questionlist=useSelector((state) => state.questionsReducer);
  const { id }= useParams();
  const location = useLocation()
  const navigate=useNavigate
  const url= "http://localhost:3000/"
  const handlepostans =(e,answerlength)=>{
    e.preventDefault();
    if (user ===null){
      alert("Login or Signup to answer a question");
      navigate("/Auth")
    }else{
      if(answer===""){
        alert("Enter an answer before submitting")
      }else{
        dispatch(postanswer({id,
          noofanswers:answerlength+1,
          answerBody:answer,
          userAnswered:user.result.name}));
        setanswer("")
      }
    }
  }
  const handleshare=()=>{
    copy(url + location.pathname);
    alert("Copied url :" + url + location.pathname)
  }
  const handledelete = () => {
    dispatch(deleteQuestion(id,navigate))
  }
   const handleupvote = () => {
    if (user === null) {
      alert("Login or Signup to up vote a question");
      navigate("/Auth");
    } else {
      dispatch(voteQuestion(id,"upVote"))
    }
  }
  const handledownvote = () => {
    if (user === null) {
      alert("Login or Signup to down vote a question");
      navigate("/Auth");
    } else {
      dispatch(voteQuestion(id,"downVote"))
    }
  }

  return (
   <div className="question-details-page">
    {Questionlist.data === null ?(
      <h1>Loading...</h1> 
    ):(
      <>
      {Questionlist.data.filter((question) =>question._id === id).map((question)=>(
        <div key={question._id}>
          <section className="question-details-container">
            <h1>{question.questiontitle}</h1>
            <div className="question-details-container-2">
              <div className="question-votes">
                <img src={upvote} alt="" width={18} className='votes-icon' onClick={handleupvote} />
                <p>{question.upvote.length - question.downvote.length}</p>
                <img src={downvote} alt="" width={18} className='votes-icon' onClick={handledownvote} />
              </div>
              <div style={{width:"100%"}}>
                <p className='question-body'>{question.questionbody}</p>
                <div className="question-details-tags">
                  {question.questiontags.map((tag)=>(
                    <p key={tag}>{tag}</p>
                  ))}
                </div>
                <div className="question-actions-user">
                    <div>
                      <button type='button' onClick={handleshare}>
                        Share
                      </button>
                      {user?.result?._id ===question?.userid &&(
                        <button type='button' onClick={handledelete}>Delete</button>
                      )}
                    </div>
                    <div>
                      <p>Asked {moment(question.askedOn).fromNow()}</p>
                      <Link to={`Users/${question.userid}`} className='user-link' style={{color:"#0086d8"}}>
                      <Avatar backgroundColor="orange"px="8px" py="5px" borderRadius="4px">
                        {question.userposted.charAt(0).toUpperCase()}
                       </Avatar>
                       <div>{question.userposted}</div>
                      </Link>
                    </div>
                </div>
              </div>
            </div>
          </section>
          {question.noofanswers !== 0 && (
            <section>
              <h3>{question.noofanswers} Answers</h3>
              <Diaplayanswer key={question._id} question={question} handleshare={handleshare}/>
            </section>
          )}
          <section className="post-ans-container">
            <h3>Your Answer</h3>
            <form onSubmit={(e)=>(
              handlepostans(e,question.answer.length)
            )}>
              <textarea name="" id="" cols="30" rows="10" value={answer} onChange={(e) =>setanswer(e.target.value)}></textarea>
              <br/>
              <input type="submit" className='post-ans-btn' value="Post your answer" />
            </form>
            <p> Browse other Question tagged
            {question.questiontags.map((tag)=>(
              <Link to="/Tags" key={tag} className='ans-tag'>
                {""}
               {tag}{""}
               </Link>
              ))}{""}
              or 
                <Link to="/Askquestion" style={{textDecoration: "none", color:"#009dff"}}>
                {""}
                Ask your own question
              </Link>
            </p>
          </section>
        </div>
      ))}
      </>
    )
  }
   </div>

  )
}

export default Questiondetails