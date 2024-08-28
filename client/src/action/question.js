import * as api from "../api/index";

export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionData);
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchAllQuestions());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllQuestions = () => async (disptach) => {
  try {
    const { data } = await api.getAllQuestions();
    disptach({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
    await api.deleteQuestion(id);
    dispatch(fetchAllQuestions());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const voteQuestion = (id, value) => async (dispatch) => {
  try {
    await api.voteQuestion(id, value);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};

export const postanswer=(answerdata)=>async(dispatch)=>{
  try {
    const{id, noofanswers, answerBody, userAnswered}=answerdata;
    const{data}=await api.postanswer(id, noofanswers, answerBody, userAnswered);
    dispatch({type:"POST_ANSWER",payload:data});
    dispatch(fetchAllQuestions())
  } catch (error) {
   console.log(error) 
  }
}

export const deleteAnswer=(id,userId, noOfAnswers)=>async(dispatch)=>{
  try {
    await api.postanswer(id,userId, noOfAnswers);
    dispatch(fetchAllQuestions())
  } catch (error) {
    console.log(error) 
  }
};