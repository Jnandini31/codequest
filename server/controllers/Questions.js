import Question from "../models/Questions.js";
import mongoose from "mongoose";

export const AskQuestion=async(req,res)=>{
  const postquestiondata=req.body;
  const userid=req.userid;
  const postquestion=new Question({...postquestiondata,userid})
  try {
    await postquestion.save();
    res.status(200).json("Posted a question successfully");
  } catch (error) {
    console.log(error)
    res.status(404).json("couldn't post a new question");
    return
  }
};

export const getAllQuestions=async(req,res)=>{
  try {
    const Questionlist=await Question.find().sort({askedon:-1});
    res.status(200).json(Questionlist)
  } catch (error) {
    console.log(error)
    res.status(404).json({message:error.message});
    return
  }
};


export const deleteQuestion = async (req, res)=>{
  const{id:_id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send("question unavailable...");
}
try {
  await Question.findByIdAndDelete(_id);
  res.status(200).json({message:"successfully deleted..."})
} catch (error) {
  res.status(404).json({message:error.message});
  return  
  }
};


export const voteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  const { value } = req.body;
  const userId = req.userId;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }

  try {
    const question = await Question.findById(_id);
    const upIndex = question.upVote.findIndex((id) => id === String(userId));
    const downIndex = question.downVote.findIndex(
      (id) => id === String(userId)
    );

    if (value === "upVote") {
      if (downIndex !== -1) {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
      if (upIndex === -1) {
        question.upVote.push(userId);
      } else {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
    } else if (value === "downVote") {
      if (upIndex !== -1) {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
      if (downIndex === -1) {
        question.downVote.push(userId);
      } else {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
    }
    await Question.findByIdAndUpdate(_id, question);
    res.status(200).json({ message: "voted successfully..." });
  } catch (error) {
    res.status(404).json({ message: "id not found" });
  }
};