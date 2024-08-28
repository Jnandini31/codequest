import axios from "axios";

const API=axios.create({
  baseURL:"http://localhost:5000"
});

API.interceptors.request.use((req=>{
  if(localStorage.getItem("Profile")){
    req.headers.Authorization = `Bearer $ {
      JOSN.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
}))

export const login=(authdata)=>API.post("user/login",authdata);
export const signup=(authdata)=>API.post("user/signup",authdata);
export const getAllUsers=()=>API.get("/user/getallusers");
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData);


export const postQuestion = (questionData) => API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get("/questions/get");

export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value) => API.patch(`/questions/vote/${id}`, { value });

export const postanswer = (id, noofanswers, answerBody, userAnswered)=> API.patch(`/answer/post/${id}`,{noofanswers, answerBody, userAnswered});
export const deleteAnswer=(id,userId, noofanswers)=>API.patch(`/answer/delete/${id}`,{id,userId, noofanswers})