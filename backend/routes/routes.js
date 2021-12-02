const express = require('express');
const router = express.Router();

const {
    register,
    login,
    getUser,
} = require('../controller/userController');

const {
    isAdmin,
    isAuth,
} = require('../middleware/auth');

const {
    createQuestion,
    updateQuestion,
    deleteQuestion
} = require('../controller/questionController');

//user routes
router.post('/register', register);
router.post('/login', login);
router.get('/user/:id', isAuth, getUser);

//question routes
// router.get('/question', isAuth, isAdmin, getQuestion);
router.post('/question', isAuth, createQuestion);
router.put('/question/:id', isAuth, isAdmin, updateQuestion);
router.delete('/question/:id', isAuth, isAdmin, deleteQuestion);

module.exports = router;