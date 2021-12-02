import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    user, userRegisterReducer, userLoginReducer
} from './reducers/userReducers';
import {
    createQuestionReducer, editQuestionReducer, deleteQuestionReducer,
} from './reducers/questionReducers';
import Alert from './reducers/alertReducers';

const reducers = combineReducers({

    // Add your reducers here
    user,
    userLogin: userLoginReducer,
    userRegister : userRegisterReducer,
    alert: Alert,
    create: createQuestionReducer,
    delete: deleteQuestionReducer, 
    edit: editQuestionReducer,
    
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

