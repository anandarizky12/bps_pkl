import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
   userRegisterReducer, userLoginReducer
} from './reducers/userReducers';
import {
    createQuestionReducer, 
    editQuestionReducer, 
    deleteQuestionReducer, 
    getAllQuestionsReducer, 
    getMyQuestionsReducer ,
    getQuestionReducer ,
    voteReducer
} from './reducers/questionReducers';
import Alert from './reducers/alertReducers';

const reducers = combineReducers({

    // Add your reducers here
  
    userLogin: userLoginReducer,
    userRegister : userRegisterReducer,
    alert: Alert,
    create: createQuestionReducer,
    delete: deleteQuestionReducer, 
    edit: editQuestionReducer,
    myQuestion : getMyQuestionsReducer,
    allQuestion : getAllQuestionsReducer,
    question : getQuestionReducer,
    voteReducer
    
});

let userInfoFromStorage;
if (typeof window !== 'undefined'){

      userInfoFromStorage = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo')) 
      : null; 
 
}

const intialState = {
    userLogin: { userInfo: userInfoFromStorage }
};



const  middleware = applyMiddleware(thunk);

export default createStore(reducers, intialState ,composeWithDevTools(middleware));

