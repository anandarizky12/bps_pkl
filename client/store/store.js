import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    user
} from './reducers/userReducers';
import Alert from './reducers/alertReducers';

const reducers = combineReducers({

    // Add your reducers here
    user,
    alert: Alert,
    
});


const  middleware = applyMiddleware(thunk);

export default createStore(reducers, composeWithDevTools(middleware));

