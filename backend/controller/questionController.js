// const userModel = require('../models/userModel');
const questionModel = require('../models/questions');
const userModel = require('../models/user');
const mongoose = require('mongoose');

const createQuestion = async (req, res) => {
    
    const { title, question, options , answer, private, userid} = req.body;
    

    const newQuestion = new questionModel({
        title,
        question,
        private,
        answer : options.map(n =>{
            return {option:n}
        }),
        userid
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
  
    const { questionId, idoption } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({message : `Id Invalid`});

    const question = await questionModel.findById(id);
    const vote = question.options.map((n)=>{
        n._id == idoption ? {
            votes: n.votes + 1 ,
            option : n.option,
            _id : idoption
        } 
        : n
    });

    question.options = vote;
    question.response = question.response + 1;
    await question.save();
    return res.status(200).json(question)
};

const updateQuestion = async (req, res) => {
    const { id } = req.params;
    const { title , options , answer} = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({message : `Id Invalid`});

    const question = await questionModel.findById(id);
    question.title = title;
    question.question = question;
    question.options = answer.map(n =>{
        return {option:n}
    });
    await question.save();
    return res.status(200).json(question)
};

const deleteQuestion = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({message : `No Question With id(${id})`})

    const question = await questionModel.findByIdAndRemove(id);
    res.json(question);
};

const getMyQuestions = async (req, res) => {
    const { id } = req.params;
    try{

        const user = await userModel.findById(id);

        if(!user) return res.status(404).send({message : `User Not Found With id(${id})`});

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({message : `No Question With id(${id})`});
    
        const question = await questionModel.find({userid : id});

        if(question.length < 1) return res.status(404).send({question , message : `You Have No Survey Yet`});

        res.status(200).send({question , message : "Successfully get  Questions"});

    }catch(err){
        res.status(500).send({message : err.message});
    }
};


module.exports = { createQuestion, vote, updateQuestion, deleteQuestion, getMyQuestions };