// const userModel = require('../models/userModel');
const questionModel = require('../models/questions');

const createQuestion = async (req, res) => {
    
    const { title, question, options , answer} = req.body;
    const { _id } = req.user;

    const newQuestion = new questionModel({
        title,
        question,
        options : answer.map(n =>{
            return {option:n}
        }),
        _creator: _id
    });
    try {
        const question = await newQuestion.save();
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
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

module.exports = { createQuestion, vote, updateQuestion, deleteQuestion };