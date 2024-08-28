import React from "react";
import "./Homemainbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Questionlist from "./Questionlist";
function Homemainbar() {
  const user = 1;
  const location = useLocation();
  const navigate = useNavigate();
  const questionlist = useSelector((state) => state.questionsReducer);
  // console.log(questionlist)
  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div> 
        { questionlist.data === null ? (
          <h1> Loading...</h1>
        ):(
          <>
              <p>{questionlist.data.length} questions</p>
              <Questionlist questionlist={questionlist.data} />
          </>
        )
        }
      </div>
    </div>
  );
}

export default Homemainbar;
