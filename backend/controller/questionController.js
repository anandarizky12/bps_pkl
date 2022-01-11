// const userModel = require('../models/userModel');
const questionModel = require('../models/questions');
const userModel = require('../models/user');
const mongoose = require('mongoose');


const getAllQuestions = async (req, res) => {
    try{

     const data = await questionModel.find();

     return res.status(200).send({ message : "Get all Order Success", data })



    }catch(err){
        console.log(err)
        res.status(500).send({message : 'failed to get order'})
    }
}

const getPublicQuestion = async (req, res) =>{
    try{
        const data = await questionModel.find({ private : false }).
        populate({ path: '_creator', select: 'name email' })

        return res.status(200).send({message : 'Success get Data' , data})
    }catch(err){
        return res.status(400).send({message : err.message})
    }
}

const createQuestion = async (req, res) => {
    
    const { title, question, options , answer, private, userid} = req.body;
  
  
    const newQuestion = new questionModel({
        title,
        question,
        private,
        answer : options.map(n =>{
            return {option:n}
        }),
        userid,
        _creator : userid
    });
    try {
  
        const question = await newQuestion.save();
        return res.status(200).send({ question, message : "Successfully create Question" });
      
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }

};

const vote = async (req, res) => {
  try{
    const { userId, idoption , id} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({message : `Id Invalid`});

    const question = await questionModel.findById(id);
   
    const vote = question.answer.map((n)=>{
        return n._id == idoption ? {    
            votes: n.votes + 1 ,
            option : n.option,
            _id : n._id
        } 
        : n
    });


    if (question.voted.filter(user => user.toString() === userId).length <= 0){
        question.voted.push(userId);
        question.answer = vote;
        question.response = question.response + 1;
        await question.save();

        return res.status(202).send({question , message : "succesfully vote" } );
      } else {
        
        return res.status(500).json('You Already voted');
      }
    }catch(err){
        console.log(err)
        res.status(500).send({message : err.message})
    }

    // question.options = vote;
    // question.response = question.response + 1;
    // await question.save();
    // return res.status(200).json(question)
};

const updateQuestion = async (req, res) => {

    try{
        const { id } = req.params;
        const { title , question ,options , answer, private} = req.body;
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({message : `Id Invalid`});


        const questionDb = await questionModel.findById(id);
        
        if(questionDb.userid != req.user.id) return res.status(404).send({message : `You Can't Update This Question`});
        questionDb.title = title;
        questionDb.question = question;
        questionDb.private = private;
        questionDb.answer = options.map(n =>{
            return {option:n}
        });
        await questionDb.save();
        return res.status(200).json(questionDb);
    }catch(err){
        console.log(err)
        res.status(500).json(err.message)
    }
};

const deleteQuestion = async (req, res) => {
    try{
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({message : `No Question With id(${id})`})
    
        const question = await questionModel.findByIdAndRemove(id);
        res.json("Successfully Delete Question");
    }catch(err){
        res.status(500).send({message : err.message})
    }
   
};

const getMyQuestions = async (req, res) => {
    const { id } = req.params;
    try{

        const user = await userModel.findById(id);

        if(!user) return res.status(404).send({message : `User Not Found With id(${id})`});

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({message : `No Question With id(${id})`});
    
        const question = await questionModel.find({userid : id});

        if(!question) return res.status(200).send({ message : `You Have No Survey Yet`});

        res.status(200).send({question , message : "Successfully get  Questions"});

    }catch(err){
        res.status(500).send({message : err.message});
    }
};

const getQuestion = async (req, res) => {
    const { id } = req.params;
    try{

        const question = await questionModel.findById(id);

        if(!question) return res.status(200).send({ message : `invalid id`});

        res.status(200).send({question , message : "Successfully get  Question"});

    }catch(err){
        res.status(500).json({message : err.message});
    }
};


module.exports = { createQuestion, vote, updateQuestion, deleteQuestion, getMyQuestions, getQuestion, getAllQuestions, getPublicQuestion };